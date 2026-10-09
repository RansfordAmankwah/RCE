export const WHATSAPP_DESTINATION = 'https://wa.me/233244485219'

export type WhatsAppEnquiryFields = {
  name: string
  contact: string
  eventType: string
  preferredDate?: string
  details?: string
}

export function buildWhatsAppEnquiryUrl(fields: WhatsAppEnquiryFields, destination = WHATSAPP_DESTINATION) {
  const message = [
    'Hello Red Carpet Events Centre,',
    '',
    'I would like to make an event enquiry.',
    '',
    `Name: ${fields.name}`,
    `Email or phone: ${fields.contact}`,
    `Event type: ${fields.eventType}`,
    `Preferred date: ${fields.preferredDate || 'Not specified'}`,
    `Details: ${fields.details || 'Not provided'}`,
  ].join('\n')

  return `${destination}?text=${encodeURIComponent(message)}`
}
