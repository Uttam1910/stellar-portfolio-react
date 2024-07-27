declare module '@emailjs/browser' {
    const send: (serviceId: string, templateId: string, templateParams: object) => Promise<{ status: number; text: string }>;
    export { send };
  }
  