import "./App.css";
import React from "react";

//Import NavBar
import Logo from "./assets/logoPrincipal.png";
import Menu from "./components/Menu/index.js";

//Import Banner

import "react-slideshow-image/dist/styles.css";
import Slideshow from "./slider";

//Import Sobre nós
import iconSN from "./assets/iconSN.png";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";

//Import Products
import Marcador from "./assets/marcador.png";
import Almofada from "./assets/almofada.png";
import Capsula from "./assets/capsula.png";
import Copo from "./assets/copo.png";
import Garrafa from "./assets/garrafa_térmica.png";
import Grao from "./assets/grao_de_cafe.png";
import Po from "./assets/po_de_cafe.png";
import Xicara from "./assets/xicara.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

//Import Contact
import Forms from "./components/Forms";

//Import Footer


function App() {
  var settings = {
    centerMode: true,
    centerPadding: "20px",
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 330,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav class="navbar navbar-expand-lg navbar-custom fixed-top top-nav-collapse">
          <a class="navbar-brand logo-image" href="index.html">
            <img src={Logo} />
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExampleDefault"
            aria-controls="navbarsExampleDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <Menu />
          </button>
          <div class="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link page-scroll" href="#home">
                  Início <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link page-scroll" href="#about">
                  Sobre Nós
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link page-scroll" href="#product">
                  Produtos
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link page-scroll" href="#contact">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div id="home" className="containerBanner">
          <Slideshow />
        </div>
      </header>

      <body>
        {/* Sobre a empresa */}

        <div id="about" class="basic">
          <center>
            <img
              src={iconSN}
              alt="icon-sobre-nos"
              id="icon-sobre-nos"
              width="120vw"
              height="100vh"
            />
          </center>
          <h1 class="basic-title">SOBRE NÓS</h1>
        </div>

        <div class="basic-2">
          <div class="card">
            <div class="card-body">
              <div class="card-title">Missão</div>
              <hr class="card-divisor"></hr>
              <center><h5>Comprometer-se ao </h5>
              <h5>negócio para que as</h5>
              <h5>pessoas optem por</h5>
              <h5>nossos serviços e</h5>
              <h5>tenham orgulho de</h5>
              <h5>consumir, garantindo a</h5>
              <h5>sustentabilidade.</h5></center>
            </div>
          </div>

          <div class="card">
            <div class="card-body">
              <div class="card-title">Visão</div>
              <hr class="card-divisor"></hr>
                  <h6>- Transparência</h6>
                  <h6>- Sustentabilidade</h6>
                  <h6>- Empatia</h6>
                  <h6>- Integridade</h6>
                  <h6>- Respeito</h6>
                  <h6>- Inclusão</h6>
                  <h6>- Compromisso</h6>      
            </div>
          </div>

          <div class="card">
            <div class="card-body">
              <div class="card-title">Valores</div>
              <hr class="card-divisor"></hr>
              <center><h5>Ser referência no</h5>
              <h5>mercado cafeeiro</h5>
              <h5>com qualidade</h5>
              <h5>garantida do</h5>
              <h5>produto e </h5>
              <h5>cumprindo com os </h5>
              <h5>valores da empresa.</h5></center>
            </div>
          </div>
        </div>

        <div class="basic-2">
          <div class="basic-2-image">
            <img src={img1} alt="icon-1" id="icon-1" />
          </div>
          <div class="box-about" id="text-1">
            <div class="box-2">
              <div class="box-text-1">
                <h4>Embora a planta tenha origem</h4>
                <h4>africana, foi no Iêmen, região oeste</h4>
                <h4>da Arábia, que ela começou a ser</h4>
                <h4>cultivada. A história do café, aliás,</h4>
                <h4>começa pela criação do nome,</h4>
                <h4>que tem origem árabe.</h4>
              </div>
            </div>
          </div>
        </div>

        <div class="basic-2" id="reverse">
          <div class="box-about">
            <div class="box-2">
              <div class="box-text-2">
                <h4>Conhecida como vinho da Arábia, </h4>
                <h4>o café ganhou escala comercial no </h4>
                <h4>séc. XIV, na região de Moka, principal</h4>
                <h4>porto do Iêmen, que foi responsável </h4>
                <h4>por um dosmaiores cultivos do </h4>
                <h4>produto no mundo árabe. E o seu </h4>
                <h4>porto, o maior exportador.</h4>
              </div>
            </div>
          </div>
          <div class="basic-2-image">
            <img src={img2} alt="icon-1" id="icon-1" />
          </div>
        </div>

        <div class="basic-2">
          <div class="basic-2-image">
            <img src={img3} alt="icon-1" id="icon-1" />
          </div>
          <div class="box-about">
            <div class="box-2">
              <div class="box-text-3">
                <h4>
                  Diante do fato histórico, temos o prazer de vincular nossa
                  marca e cultura, originando o nome da nossa empresa.
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* PRODUCTS */}
        <div id="product" className="container-products">
          <h1 class="title">PRODUTOS</h1>
          <div class="line" />
          <div class="slider">
            <Slider {...settings}>
              <div class="thumbnail">
                <img src={Marcador} class="product" alt="marcador" />
                <div class="product-details">
                  <h2>Marcador</h2>
                  <p>R$2,00</p>
                </div>
              </div>
              <div class="thumbnail">
                <img src={Almofada} class="product" alt="almofada" />
                <div class="product-details">
                  <h2>Almofada</h2>
                  <p>R$20,00</p>
                </div>
              </div>
              <div class="thumbnail">
                <img src={Capsula} class="product" alt="capsula" />
                <div class="product-details">
                  <h2>Capsulas</h2>
                  <p>R$9,99</p>
                </div>
              </div>
              <div class="thumbnail">
                <img src={Copo} class="product" alt="marcador" />
                <div class="product-details">
                  <h2>Copo</h2>
                  <p>R$15,00</p>
                </div>
              </div>
              <div class="thumbnail">
                <img src={Garrafa} class="product" alt="marcador" />
                <div class="product-details">
                  <h2>Garrafa térmica</h2>
                  <p>R$19,99</p>
                </div>
              </div>
              <div class="thumbnail">
                <img src={Grao} class="product" alt="marcador" />
                <div class="product-details">
                  <h2>Grãos de café</h2>
                  <p>R$8,00/kg</p>
                </div>
              </div>
              <div class="thumbnail">
                <img src={Po} class="product" alt="marcador" />
                <div class="product-details">
                  <h2>Pó de Café</h2>
                  <p>R$8,50</p>
                </div>
              </div>
              <div class="thumbnail">
                <img src={Xicara} class="product" alt="marcador" />
                <div class="product-details">
                  <h2>Xícara personalizada</h2>
                  <p>R$14,99</p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
        {/* PRODUCTS */}

        {/* CONTACT */}

        <div id="contact">
            <div class="contact-dados">
              <div class="uniao">
                <h1 class="title-contact">CONTATO</h1>
                <h6 class="text-contact-data">
                  <i class="fas fa-envelope"></i>vinhodaarabia@outlook.com
                </h6>
                <h6 class="text-contact-data">
                  <i class="fas fa-phone-alt"></i>(31) 3456-7890 / (31)
                  4002-8922
                </h6>
                <h6 class="text-contact-data">
                  <i class="fas fa-map-marker-alt"></i>Av. Castelo Branco, nº
                  123, Bairro República - João Monlevade
                </h6>
              </div>
              <div class="formulario">
                <Forms />
              </div>
            </div>

            <div class="maps">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.6328584850276!2d-43.18409268563655!3d-19.81315793980183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa5a9dba712abdb%3A0x6c4a86310f77da0b!2sAv.%20Castelo%20Branco%2C%20123%20-%20Republica%2C%20Jo%C3%A3o%20Monlevade%20-%20MG%2C%2035930-090!5e0!3m2!1spt-BR!2sbr!4v1620104017900!5m2!1spt-BR!2sbr"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        {/* CONTACT */}

        {/* FOOTER */}
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
          integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
          crossorigin="anonymous"
></link>

        <footer>
          <div class="container-footer">
            <h3 id="nomeEmpresa">VINHO DA ARÁBIA</h3>

            <h6 id="copyright">Desenvolvido por DevCapulus</h6>

            <div class="redesocial">
              <a
                href="https://api.whatsapp.com/send?phone=5537991994465"
                class="redes-sociais"
              >
                <i class="fab fa-whatsapp fa-lg"></i>
              </a>

              <a
                href="/https://www.facebook.com/unae.tupinambas"
                class="redes-sociais"
              >
                <i class="fab fa-facebook-square fa-lg"></i>
              </a>

              <a href="https://www.instagram.com/unae30/" class="redes-sociais">
                <i class="fab fa-instagram fa-lg"></i>
              </a>
            </div>
          </div>
        </footer>

         {/* <section class="footer">
          <div class="container-footer">
            <ul class="ul-footer">
              <li class="grid-8-1">
                <h1>VINHO DA ARÁBIA</h1>
              </li>

              <li class="grid-4-1">
                <p>Desenvolvido por DevCapulus</p>
              </li>

              <li class="grid-4-2">
                <a
                  href="https://api.whatsapp.com/send?phone=5537991994465"
                  class="redes-sociais"
                >
                  <FaWhatsapp size="40" color="E5AC23" />
                </a>

                <a
                  href="/https://www.facebook.com/unae.tupinambas"
                  class="redes-sociais"
                >
                  <FaFacebook size="40" color="E5AC23" />
                </a>

                <a
                  href="https://www.instagram.com/unae30/"
                  class="redes-sociais"
                >
                  <FaInstagram size="40" color="E5AC23" />
                </a>
              </li>
            </ul>
          </div>
        </section> */}
        {/* Footer  */}
      </body>
    </div>
  );
}
export default App;
