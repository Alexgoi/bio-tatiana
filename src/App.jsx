import React, { useState } from 'react';
// Adicionei o FaCheck de volta e removi o FaMapMarkerAlt que não estava sendo usado
import { FaWhatsapp, FaEnvelope, FaInstagram, FaLinkedinIn, FaGlobe, FaFacebook, FaYoutube, FaCheck, FaUser, FaUserFriends } from 'react-icons/fa';

function App() {
  const [copied, setCopied] = useState(false);

  const profile = {
    name: "Tatiana Lima",
    title: "Advocacia Especializada"
  };

  // Função para copiar o e-mail sem abrir o Outlook
  const handleEmailClick = (e) => {
    e.preventDefault();
    const email = "tatiana@tatianalima.adv.br"; // Seu e-mail correto

    navigator.clipboard.writeText(email).then(() => {
      setCopied(true); // Mostra o Check verde
      setTimeout(() => setCopied(false), 2500); // Esconde depois de 2.5s

      // No celular, tenta abrir o app de e-mail (opcional, mas recomendado)
      if (/Mobi|Android/i.test(navigator.userAgent)) {
         window.location.href = `mailto:${email}`;
      }
    });
  };

  return (
    <div className="layout">
      
      {/* Títulos */}
      <h1>{profile.name}</h1>
      <p className="subtitle">{profile.title}</p>
      
      {/* Lista de Links */}
      <nav className="link-list">
        
        <a href="https://wa.me/5551991160078?text=Ol%C3%A1,%20gostaria%20de%20conversa%20com%20a%20equipe%20da%20Dra.%20Tatiana%20Lima" className="minimal-link" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="icon" /> 
          <span>Agendar Consulta</span>
        </a>

        {/* Botão de E-mail Inteligente (Copia ao clicar) */}
        <button onClick={handleEmailClick} className="minimal-link" style={{fontFamily: 'inherit', background: 'transparent', border: 'none', cursor: 'pointer', width: '100%'}}>
          {copied ? <FaCheck className="icon" style={{color: '#4caf50'}} /> : <FaEnvelope className="icon" />}
          <span>{copied ? "E-mail Copiado!" : "Enviar E-mail"}</span>
        </button>

        <a href="https://tatianalima.adv.br" className="minimal-link" target="_blank" rel="noopener noreferrer">
          <FaGlobe className="icon" />
          <span>Website Oficial</span>
        </a>

        <a href="https://chat.whatsapp.com/GnPelkWzkThA1uuulN5aGv" className="minimal-link" target="_blank" rel="noopener noreferrer">
            <FaUserFriends className="icon" />
            <span>Escola Veritas</span>
        </a>

      </nav>

      {/* Footer com Redes Sociais */}
      <div className="social-footer">
        <a href="https://www.instagram.com/tatianalimaadv/" className="social-item" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://www.linkedin.com/in/tatianalimaadv/" className="social-item" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
        <a href="https://www.facebook.com/share/1BvQXzPKMZ/?mibextid=wwXIfr" className="social-item" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="https://www.youtube.com/@tatianalimaadv/featured" className="social-item" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
      </div>

      <p className="footer-text">© {new Date().getFullYear()} Tatiana Lima. OAB/RS 107.076</p>
    </div>
  );
}

export default App; 