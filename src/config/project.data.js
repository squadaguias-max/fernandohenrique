import landingData from "../../landing.data.json";

export const projectData = landingData;
export const displayName = landingData.project.displayName;
export const phoneDigits = String(landingData.contact.phone || "").replace(/\D/g, "");
export const whatsappDigits = String(landingData.contact.whatsapp || "").replace(/\D/g, "");
const nationalPhone = phoneDigits.startsWith("55") ? phoneDigits.slice(2) : phoneDigits;
export const phoneLabel = nationalPhone.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");

export function projectWhatsappUrl(message = landingData.contact.whatsappMessage) {
  if (!/^55\d{10,11}$/.test(whatsappDigits)) return null;
  return `https://wa.me/${whatsappDigits}?text=${encodeURIComponent(message)}`;
}
