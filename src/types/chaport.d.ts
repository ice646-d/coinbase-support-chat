declare global {
  interface Window {
    Chaport?: (action: string) => void;
    chaportConfig?: {
      appId: string;
    };
  }
}

export {};