import { Menu, X } from "lucide-react";
import { useState } from "react";
import { templateConfig as site } from "../../config/template.config";

export function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <header className="site-header"><div className="container header-inner"><a className="brand" href="#inicio" aria-label={`${site.displayName} — início`} onClick={close}><img src="/assets/logo-claro.webp" alt={site.displayName} width="1600" height="690" /></a><button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} aria-controls="menu-principal">{open ? <X size={25} /> : <Menu size={25} />}</button><nav className={open ? "nav open" : "nav"} id="menu-principal" aria-label="Navegação principal"><a href="#inicio" onClick={close}>Início</a><a href="#como-funciona" onClick={close}>Como funciona</a><a href="#imagens" onClick={close}>Imagens</a><a href="#sobre" onClick={close}>Sobre</a><a href="#duvidas" onClick={close}>Dúvidas</a><a href="#localizacao" onClick={close}>Localização</a><a className="nav-cta" href="#contato" onClick={close}>Contato <span aria-hidden="true">↗</span></a></nav></div></header>;
}
