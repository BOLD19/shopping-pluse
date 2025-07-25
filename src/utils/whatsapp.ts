export const WHATSAPP_PHONE = '+77478609282';
export const DEMO_MESSAGE = 'Здравствуйте! Хочу посмотреть демо-версию личного кабинета';
 
export const getWhatsAppLink = () => {
  const encodedMessage = encodeURIComponent(DEMO_MESSAGE);
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodedMessage}`;
}; 