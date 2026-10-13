import { ArrowRight, ArrowUpRight, FileSearch, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { createElement } from "react";
import { templateConfig as site, whatsappUrl } from "../../../config/template.config";
import { faqs } from "../data/faq";

const steps = [
  { number: "01", icon: MessageCircle, title: "Conte sua situação", text: "Entre em contato e descreva brevemente o que precisa, sem enviar documentos ou dados sensíveis no primeiro contato." },
  { number: "02", icon: FileSearch, title: "Análise individual", text: "As informações e os documentos necessários dependem da natureza da demanda e serão indicados conforme o caso." },
  { number: "03", icon: ArrowRight, title: "Próximos passos", text: "Com a situação compreendida, é possível conversar sobre caminhos jurídicos e condições para eventual atuação." },
];

export function HomePage() {
  const mapQuery = encodeURIComponent(site.location.mapsQuery);
  const whatsapp = whatsappUrl();

  return <>
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> Advocacia em Franca/SP</p>
          <h1 id="hero-title">Orientação jurídica com <em>atenção ao seu caso.</em></h1>
          <p className="hero-lead">{site.hero.description}</p>
          <div className="hero-actions">
            <a className="button button-light" href="#contato">{site.hero.cta} <ArrowUpRight size={18} /></a>
            <a className="text-link" href="#como-funciona">Como funciona <ArrowRight size={17} /></a>
          </div>
          <div className="hero-location"><MapPin size={16} /> {site.location.city} <span /> Atendimento mediante contato</div>
        </div>
        <div className="hero-portrait-wrap">
          <div className="portrait-outline" aria-hidden="true" />
          <img className="hero-portrait" src="/assets/fernando-henrique.webp" alt="Fernando Henrique Marques" width="467" height="686" loading="eager" />
          <div className="portrait-caption"><span>Fernando Henrique Marques</span><small>Advocacia</small></div>
        </div>
      </div>
      <div className="hero-bottom"><div className="container"><span>Clareza no primeiro contato</span><span>Franca · São Paulo</span><a href="#como-funciona" aria-label="Ir para como funciona">↓</a></div></div>
    </section>

    <section className="section process-section" id="como-funciona" aria-labelledby="process-title">
      <div className="container">
        <div className="section-intro"><div><p className="eyebrow dark">O primeiro passo</p><h2 id="process-title">Uma conversa clara para <em>começar bem.</em></h2></div><p>Questões jurídicas pedem atenção ao contexto. O contato inicial ajuda a compreender a demanda antes de definir qualquer encaminhamento.</p></div>
        <div className="steps-grid">{steps.map(({ number, icon, title, text }) => <article className="step-card" key={number}><div className="step-top"><span>{number}</span>{createElement(icon, { size: 24, strokeWidth: 1.5, "aria-hidden": true })}</div><h3>{title}</h3><p>{text}</p></article>)}</div>
      </div>
    </section>

    <section className="visual-section" id="imagens" aria-labelledby="visual-title">
      <div className="container">
        <div className="visual-intro"><div><p className="eyebrow dark">Atenção ao contexto</p><h2 id="visual-title">Cada situação tem <em>seus próprios detalhes.</em></h2><p>Compreender fatos, documentos e impactos é parte do caminho para uma orientação individual.</p></div><img className="visual-logo" src="/assets/logo-escuro.webp" alt="Fernando Henrique Marques Advogados" width="1600" height="690" loading="lazy" /></div>
        <div className="visual-gallery" aria-label="Imagens ilustrativas"><figure className="visual-main"><img src="/assets/reuniao.webp" alt="" width="1200" height="800" loading="lazy" decoding="async" /></figure><figure><img src="/assets/documentos-financeiros.webp" alt="" width="800" height="534" loading="lazy" decoding="async" /></figure><figure><img src="/assets/carteira.webp" alt="" width="800" height="533" loading="lazy" decoding="async" /></figure></div>
        <p className="visual-note">Imagens ilustrativas.</p>
      </div>
    </section>

    <section className="section about-section" id="sobre" aria-labelledby="about-title">
      <div className="container about-grid">
        <div className="about-mark" aria-hidden="true"><span>FHM</span><div className="mark-rule" /><small>FERNANDO HENRIQUE<br />MARQUES ADVOGADOS</small></div>
        <div className="about-copy"><p className="eyebrow">Sobre o profissional</p><h2 id="about-title">Fernando Henrique <em>Marques</em></h2><p>{site.professional.biography}</p><p>A página apresenta canais de contato e localização para que você possa buscar informações sobre o atendimento. A definição de qualquer orientação exige conhecer os detalhes da situação.</p><a className="button button-outline" href="#contato">Fale com Fernando Henrique <ArrowUpRight size={18} /></a></div>
      </div>
    </section>

    <section className="section faq-section" id="duvidas" aria-labelledby="faq-title"><div className="container faq-grid"><div className="faq-heading"><p className="eyebrow dark">Dúvidas frequentes</p><h2 id="faq-title">Antes de entrar <em>em contato.</em></h2><p>Algumas informações úteis para o seu primeiro atendimento.</p></div><div className="faq-list">{faqs.map(([question, answer], index) => <details key={question}><summary><span>{String(index + 1).padStart(2, "0")}</span>{question}<span className="faq-plus" aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></div></section>

    <section className="contact-section" id="contato" aria-labelledby="contact-title"><div className="container contact-grid"><div><p className="eyebrow dark">Entre em contato</p><h2 id="contact-title">Vamos conversar sobre <em>sua situação?</em></h2><p>Faça um relato breve pelo telefone ou e-mail. Cada caso depende de análise individual.</p></div><div className="contact-card">{whatsapp && <a className="button button-dark" href={whatsapp} target="_blank" rel="noopener noreferrer">Conversar pelo WhatsApp <ArrowUpRight size={18} /></a>}<a className="button button-dark" href={`tel:+${site.phoneDigits}`}><Phone size={18} /> Ligar para {site.phoneLabel}</a><a className="contact-email" href={`mailto:${site.contact.email}`}><Mail size={18} /> {site.contact.email}</a><p>Atendimento e disponibilidade mediante contato prévio.</p></div></div></section>

    <section className="section location-section" id="localizacao" aria-labelledby="location-title"><div className="container location-grid"><div><p className="eyebrow">Localização</p><h2 id="location-title">Em <em>Franca/SP.</em></h2><address>{site.location.streetAddress}<br />Franca/SP · CEP {site.location.postalCode}</address><p>Confirme a modalidade e a disponibilidade de atendimento antes de se deslocar.</p><a className="button button-outline" href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`} target="_blank" rel="noopener noreferrer">Ver endereço no mapa <ArrowUpRight size={18} /></a></div><div className="location-map"><iframe title={`Mapa de ${site.location.address}`} src={`https://www.google.com/maps?q=${mapQuery}&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /></div></div></section>
  </>;
}
