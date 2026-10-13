import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { AppShell } from "./shared/layout/AppShell";
import { HomePage } from "./modules/home/pages/HomePage";
import { faqs } from "./modules/home/data/faq";
import { projectData } from "./config/project.data";

export function render() {
  const html = renderToString(<StrictMode><AppShell><HomePage /></AppShell></StrictMode>);
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LegalService",
        name: projectData.project.displayName,
        telephone: `+${projectData.contact.phone}`,
        email: projectData.contact.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: projectData.location.streetAddress,
          addressLocality: "Franca",
          addressRegion: "SP",
          postalCode: projectData.location.postalCode,
          addressCountry: "BR",
        },
      },
      {
        "@type": "Person",
        name: projectData.professional.name,
        jobTitle: "Advogado",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map(([question, answer]) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
    ],
  };
  return { html, structuredData };
}
