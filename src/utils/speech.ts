// Fast, zero-lag Web Speech API wrapper prioritizing British English (en-GB) voices

class SpeechService {
  private synth: SpeechSynthesis | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private britishVoice: SpeechSynthesisVoice | null = null;
  private isInitialized = false;
  private onSpeakingStateChangeListeners: Array<(isSpeaking: boolean, textId?: string) => void> = [];
  private currentTextId: string | null = null;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
      this.initVoices();
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = () => this.initVoices();
      }
    }
  }

  private initVoices() {
    if (!this.synth) return;
    const voices = this.synth.getVoices();
    if (!voices || voices.length === 0) return;

    // Prioritise British English voices
    const gbVoice = 
      voices.find(v => v.lang === 'en-GB' && (v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Premium'))) ||
      voices.find(v => v.lang === 'en-GB' || v.lang === 'en_GB') ||
      voices.find(v => v.lang.startsWith('en-GB')) ||
      voices.find(v => v.name.toLowerCase().includes('british') || v.name.toLowerCase().includes('united kingdom')) ||
      voices.find(v => v.lang.startsWith('en'));

    if (gbVoice) {
      this.britishVoice = gbVoice;
      this.isInitialized = true;
    }
  }

  public addSpeakingListener(listener: (isSpeaking: boolean, textId?: string) => void) {
    this.onSpeakingStateChangeListeners.push(listener);
    return () => {
      this.onSpeakingStateChangeListeners = this.onSpeakingStateChangeListeners.filter(l => l !== listener);
    };
  }

  private notifySpeakingState(isSpeaking: boolean, textId?: string) {
    this.onSpeakingStateChangeListeners.forEach(l => l(isSpeaking, textId));
  }

  public speak(text: string, textId?: string, rate = 1.0) {
    if (!this.synth) {
      console.warn('Speech synthesis not supported in this browser.');
      return;
    }

    // Stop ongoing speech
    this.synth.cancel();

    if (!this.isInitialized) {
      this.initVoices();
    }

    // Clean text of markdown formatting symbols and expand abbreviations for smooth natural reading
    let cleanText = text
      .replace(/\*\*(.*?)\*\*/g, '$1')
      .replace(/\*(.*?)\*/g, '$1')
      .replace(/`([^`]+)`/g, '$1')
      .replace(/\[(.*?)\]\(.*?\)/g, '$1')
      .replace(/#{1,6}\s?/g, '')
      .replace(/•/g, '')
      // Expand common Latin and British abbreviations into natural spoken English
      .replace(/\be\.g\.,?\s*/gi, 'for example, ')
      .replace(/\be\.g\b/gi, 'for example')
      .replace(/\beg\.,?\s*/gi, 'for example, ')
      .replace(/\bi\.e\.,?\s*/gi, 'that is, ')
      .replace(/\bi\.e\b/gi, 'that is')
      .replace(/\betc\./gi, 'et cetera')
      .replace(/\betc\b/gi, 'et cetera')
      .replace(/\bvs\./gi, 'versus')
      .replace(/\bSt\.\s+/g, 'Saint ')
      .replace(/\bKS([1-5])\b/gi, 'Key Stage $1')
      // Clean up slashes in choices like was/were
      .replace(/([a-zA-Z]+)\/([a-zA-Z]+)/g, '$1 or $2')
      .trim();

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'en-GB';
    if (this.britishVoice) {
      utterance.voice = this.britishVoice;
    }
    utterance.rate = Math.max(0.7, Math.min(1.5, rate));
    utterance.pitch = 1.0;

    this.currentTextId = textId || null;
    this.currentUtterance = utterance;

    utterance.onstart = () => {
      this.notifySpeakingState(true, this.currentTextId || undefined);
    };

    utterance.onend = () => {
      this.currentUtterance = null;
      this.currentTextId = null;
      this.notifySpeakingState(false);
    };

    utterance.onerror = () => {
      this.currentUtterance = null;
      this.currentTextId = null;
      this.notifySpeakingState(false);
    };

    try {
      this.synth.speak(utterance);
    } catch (e) {
      console.error('Speech synthesis error:', e);
      this.notifySpeakingState(false);
    }
  }

  public stop() {
    if (this.synth) {
      this.synth.cancel();
      this.currentUtterance = null;
      this.currentTextId = null;
      this.notifySpeakingState(false);
    }
  }

  public isSpeaking(): boolean {
    return !!(this.synth && (this.synth.speaking || this.synth.pending));
  }

  public getCurrentTextId(): string | null {
    return this.currentTextId;
  }
}

export const speechService = new SpeechService();
