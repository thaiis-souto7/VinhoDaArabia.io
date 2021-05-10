import React from "react";
import "./styles.css";

import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

     <div class = "nomeEmpresa">
        <h1 class = "name-footer">VINHO DA ARÁBIA</h1>
      </div>

      <div class="copyrigt">
        <p class ="footer__copyright">Desenvolvido por Dev Capulus</p>
      </div>
      
      <div className="footer__social">
        <a href="https://api.whatsapp.com/send?phone=5537991994465">
             <FaWhatsapp size="40"  color="E5AC23"/>
        </a>

        <a href="/https://www.facebook.com/unae.tupinambas">
             <FaFacebook size="40"  color="E5AC23"/>
        </a>

        <a href="https://www.instagram.com/unae30/">
            <FaInstagram size="40"  color="E5AC23"/>
        </a>
      </div>

    </footer>
  );
};

export default Footer;

