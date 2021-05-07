import "./App.css";
import React from "react";

//Import NavBar
import Logo from "./assets/logoPrincipal.png";

//Import Banner
// import s1 from "./assets/s1.jpg";
// import s2 from "./assets/s2.jpg";
// import s3 from "./assets/s3.jpg";
// import s4 from "./assets/s4.jpg";
// import s5 from "./assets/s5.jpg";
// import script from "./script.js";

//Import Sobre nós
import iconSN from "./assets/iconSN.png";

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
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
      <body>
        <header id="header">
          <nav>
            <img src={Logo} alt="logo" />
            <ul>
              <li>
                <a href="#intro">Início</a>
              </li>
              <li>
                <a href="#about">Sobre Nós</a>
              </li>
              <li>
                <a href="#work">Produtos</a>
              </li>
              <li>
                <a href="#contact">Contato</a>
              </li>
            </ul>
          </nav>
        </header>

        {/* Banner 
        <div className="container-banner">
          <div id="sliderBanner">
            <img class="selected" src={s1} alt="Image1" />
            <img  src={s2} alt="Image2" />
            <img  src={s3} alt="Image3" />
            <img  src={s4} alt="Image4" />
            <img  src={s5} alt="Image5" />
          </div>
        </div>

        <script src={script}></script>*/}

        {/* Sobre a empresa */}

        <div class="basic">
          <center>
            <img
              src={iconSN}
              alt="icon-sobre-nos"
              id="icon-sobre-nos"
              class="imagem"
            />
          </center>
          <h1 class="title">SOBRE NÓS</h1>
          <hr size="10" width="450" color="#b89b34" align="center"></hr>
        </div>

        <div class="basic-2">
          <div class="card">
            <div class="card-body">
              <div class="card-title">Missão</div>
              <hr class="divisor"></hr>
              <h5>Comprometer-se ao </h5>
              <h5>negócio para que as</h5>
              <h5>pessoas optem por</h5>
              <h5>nossos serviços e</h5>
              <h5>tenham orgulho de</h5>
              <h5>consumir, garantindo a</h5>
              <h5>sustentabilidade.</h5>
            </div>
          </div>

          <div class="card">
            <div class="card-body">
              <div class="card-title">Visão</div>
              <hr class="divisor"></hr>
              <ul>
                <li>
                  <h6>Transparência</h6>
                </li>
                <li>
                  <h6>Sustentabilidade</h6>
                </li>
                <li>
                  <h6>Empatia</h6>
                </li>
                <li>
                  <h6>Integridade</h6>
                </li>
                <li>
                  <h6>Respeito</h6>
                </li>
                <li>
                  <h6>Inclusão</h6>
                </li>
                <li>
                  <h6>Compromisso</h6>
                </li>
              </ul>
            </div>
          </div>

          <div class="card">
            <div class="card-body">
              <div class="card-title">Valores</div>
              <hr class="divisor"></hr>
              <h5>Ser referência no</h5>
              <h5>mercado cafeeiro</h5>
              <h5>com qualidade</h5>
              <h5>garantida do</h5>
              <h5>produto e </h5>
              <h5>cumprindo com os </h5>
              <h5>valores da empresa.</h5>
            </div>
          </div>
        </div>

        {/* PRODUCTS */}
        <div className="container-products">
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
      </body>
    </div>
  );
}

export default App;
