import type { Lang } from './config'

export interface ContactTexts {
  title: string
  intro: string
  name: string
  email: string
  topic: string
  topics: { value: string; label: string }[]
  message: string
  messagePlaceholder: string
  consent: string
  submit: string
  sending: string
  success: string
  successMailto: string
  error: string
  invalidEmail: string
  tooShort: string
  needConsent: string
  or: string
}

/* **bold** and [links](url) work in consent / error texts (rendered by <Rich>) */
export const contact: Record<Lang, ContactTexts> = {
  uk: {
    title: 'Написати мені',
    intro: 'Маєте питання, ідею чи хочете співпрацювати? Залиште повідомлення, і я відповім на вашу пошту.',
    name: 'Ваше імʼя',
    email: 'Email для відповіді',
    topic: 'Тема',
    topics: [
      { value: 'Питання про застосунок', label: 'Питання про застосунок' },
      { value: 'Повідомлення про помилку', label: 'Повідомлення про помилку' },
      { value: 'Ідея або пропозиція', label: 'Ідея або пропозиція' },
      { value: 'Співпраця', label: 'Співпраця' },
      { value: 'Інше', label: 'Інше' },
    ],
    message: 'Повідомлення',
    messagePlaceholder: 'Розкажіть, у чому питання. Якщо це помилка, вкажіть застосунок, пристрій і що сталося.',
    consent:
      'Я погоджуюсь, що моє імʼя, email і повідомлення буде оброблено, щоб відповісти мені. Докладніше в [Політиці конфіденційності](/privacy).',
    submit: 'Надіслати',
    sending: 'Надсилаю…',
    success: 'Дякую! Повідомлення надіслано. Я відповім на вказану пошту, зазвичай протягом 2–3 робочих днів.',
    successMailto: 'Відкрито ваш поштовий застосунок з готовим листом. Натисніть «Надіслати» там.',
    error: 'Не вдалося надіслати повідомлення. Спробуйте ще раз або напишіть напряму на',
    invalidEmail: 'Вкажіть коректну адресу email.',
    tooShort: 'Повідомлення занадто коротке.',
    needConsent: 'Потрібна ваша згода на обробку даних.',
    or: 'Або напишіть напряму на',
  },
  en: {
    title: 'Contact me',
    intro: 'Have a question, an idea or want to collaborate? Leave a message and I will reply to your email.',
    name: 'Your name',
    email: 'Email for the reply',
    topic: 'Topic',
    topics: [
      { value: 'App question', label: 'App question' },
      { value: 'Bug report', label: 'Bug report' },
      { value: 'Idea or suggestion', label: 'Idea or suggestion' },
      { value: 'Collaboration', label: 'Collaboration' },
      { value: 'Other', label: 'Other' },
    ],
    message: 'Message',
    messagePlaceholder: 'Tell me what this is about. For a bug, please include the app, your device and what happened.',
    consent:
      'I agree that my name, email and message will be processed in order to reply to me. More in the [Privacy Policy](/privacy).',
    submit: 'Send',
    sending: 'Sending…',
    success: 'Thank you! Your message has been sent. I will reply to the address you provided, usually within 2–3 business days.',
    successMailto: 'Your email app has been opened with a ready message. Press “Send” there.',
    error: 'Could not send the message. Please try again or write directly to',
    invalidEmail: 'Please enter a valid email address.',
    tooShort: 'The message is too short.',
    needConsent: 'Your consent to data processing is required.',
    or: 'Or write directly to',
  },
}
