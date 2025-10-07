import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About",
        sustainability: "Sustainability",
        materials: "Materials",
        pricing: "Pricing",
        contact: "Contact",
      },
      hero: {
        headline: "Cool Cities. Naturally.",
        subheadline:
          "UrbanShade creates mobile, plant-based shading systems that cool cities and improve quality of life.",
        button: "Learn More",
      },
      about: {
        headline: "Rethinking Urban Cooling",
        text: "Cities like Gießen are becoming heat islands due to sealed surfaces and lack of greenery. UrbanShade offers a mobile, sustainable shading system combining climbing plants with recycled materials — flexible, reusable, and CO₂-binding.",
        bullet1: "Rollable & mobile system",
        bullet2: "Grown in our greenhouse",
        bullet3: "Sustainable materials",
        bullet4: "CO₂-binding & aesthetic",
        bullet5: "Usable in city centers, festivals, and private areas",
      },
      sustainability: {
        headline: "Sustainability at Our Core",
        pipes:
          "100% recycled plastic (regranulate), saves energy and up to 20% cost (€3–4/m).",
        nets: "Reused ghost fishing nets turned into recycled yarn (€6–11/m²).",
        pots: "Made from recycled plastic (€11–35 each).",
        foundation: "Compacted gravel or recycled concrete (€55–80).",
        pipesTitle: "Pipes",
        netsTitle: "Nets",
        potsTitle: "Plant Pots",
        foundationTitle: "Foundation",
      },
      materials: {
        headline: "Materials & Soil",
        text: "Peat-free or biochar soil binds CO₂ through plant photosynthesis. Material cost per m²: €80–110 (with foundation), €25 (without).",
      },
      economics: {
        headline: "Economics",
        text: "Low production cost due to recycled materials. Rental system ensures reuse and recurring income. Water: €0.03–0.05/m² per month. Setup: €450–750/day.",
      },
      vision: {
        headline: "Our Vision",
        text: "Greening cities for a livable, climate-friendly future.",
      },
      contact: {
        headline: "Get in Touch",
        name: "Name",
        email: "Email",
        message: "Message",
        submit: "Send Message",
        success: "Thank you for your message! We'll get back to you soon.",
      },
      footer: {
        copyright: "© 2025 UrbanShade. All rights reserved.",
      },
    },
  },
  de: {
    translation: {
      nav: {
        home: "Startseite",
        about: "Über uns",
        sustainability: "Nachhaltigkeit",
        materials: "Materialien",
        pricing: "Preise",
        contact: "Kontakt",
      },
      hero: {
        headline: "Kühle Städte. Natürlich.",
        subheadline:
          "UrbanShade bietet mobile, pflanzenbasierte Beschattungssysteme, die Städte abkühlen und die Lebensqualität verbessern.",
        button: "Mehr erfahren",
      },
      about: {
        headline: "Urbane Kühlung neu gedacht",
        text: "Städte wie Gießen werden durch versiegelte Flächen zu Hitzeinseln. UrbanShade bietet ein mobiles, nachhaltiges Beschattungssystem aus Rankpflanzen und recycelten Materialien – flexibel, wiederverwendbar und CO₂-bindend.",
        bullet1: "Rollbar & mobiles System",
        bullet2: "In unserem Gewächshaus gewachsen",
        bullet3: "Nachhaltige Materialien",
        bullet4: "CO₂-bindend & ästhetisch",
        bullet5: "Nutzbar in Innenstädten, Festivals und privaten Bereichen",
      },
      sustainability: {
        headline: "Nachhaltigkeit im Fokus",
        pipes:
          "100 % Recyclingkunststoff (Regranulat), spart Energie und bis zu 20 % Kosten (3–4 €/m).",
        nets: "Wiederverwendete Fischernetze aus Recyclinggarn (6–11 €/m²).",
        pots: "Aus recyceltem Kunststoff (11–35 €).",
        foundation: "Verdichteter Kies oder Recyclingbeton (55–80 €).",
        pipesTitle: "Rohre",
        netsTitle: "Netze",
        potsTitle: "Blumenkübel",
        foundationTitle: "Fundament",
      },
      materials: {
        headline: "Materialien & Erde",
        text: "Torffreie oder Pflanzenkohle-Erde bindet CO₂ durch Photosynthese. Materialkosten pro m²: 80–110 € (mit Fundament), 25 € (ohne).",
      },
      economics: {
        headline: "Wirtschaftlichkeit",
        text: "Geringe Produktionskosten durch Recyclingmaterialien. Vermietungssystem ermöglicht Wiederverwendung und Einnahmen. Wasser: 0,03–0,05 €/m² pro Monat. Aufbau: 450–750 €/Tag.",
      },
      vision: {
        headline: "Unsere Vision",
        text: "Grünere Städte für eine lebenswerte, klimafreundliche Zukunft.",
      },
      contact: {
        headline: "Kontakt aufnehmen",
        name: "Name",
        email: "E-Mail",
        message: "Nachricht",
        submit: "Nachricht senden",
        success:
          "Vielen Dank für Ihre Nachricht! Wir melden uns bald bei Ihnen.",
      },
      footer: {
        copyright: "© 2025 UrbanShade. Alle Rechte vorbehalten.",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
