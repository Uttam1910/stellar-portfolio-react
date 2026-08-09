declare module '@emailjs/browser' {
  export const init: (publicKey: string) => void;
  export const send: (
    serviceId: string,
    templateId: string,
    templateParams: Record<string, unknown>,
    options?: string | { publicKey?: string }
  ) => Promise<{ status: number; text: string }>;
}
  