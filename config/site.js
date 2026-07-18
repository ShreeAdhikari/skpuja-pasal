export const siteConfig = {
  name: "ShreePuja",
  tagline: "Your Trusted Puja Samagri Store in Pokhara",

  phone: "+977-9860040106",
  whatsapp: "9779860040106",
  whatsappMessage: "Hello, I would like to order from ShreePuja. Please share the details.",

  email: "info@shreeadhikari.com.np",

  address: "Pokhara, Nepal",

  social: {
    facebook: "https://www.facebook.com/profile.php?id=61575362849372",
    instagram: "",
    tiktok: "",
  },
};

export function getWhatsAppUrl(message) {
  const text = message || siteConfig.whatsappMessage;
  return `https://wa.me/${siteConfig.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
}