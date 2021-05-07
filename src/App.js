import "./App.css";
import React from "react";

//Import NavBar
import Header from "./components/Header";

//Import Banner

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

  // var imgs = [];
  // var sliderBanner;
  // var imgCurrent;
  // var maxImg;
  // var time;
  // var timeChange;

  // function preLoading() {
  //   var s = 1;
  //   for (var i = 0; i < 5; i++) {
  //     imgs[i] = new Image();
  //     imgs[i].src = "assets/s" + s + ".jpg";
  //     s++;
  //   }
  // }

  // function loadImg(img) {
  //   sliderBanner.style.backgroundImage = "url('" + imgs[img].src + "')";
  // }

  // function start() {
  //   preLoading();
  //   imgCurrent = 0;
  //   maxImg = imgs.length - 1;
  //   sliderBanner = document.getElementById("dvslider");
  //   loadImg(imgCurrent);
  //   timeChange = 3000;
  //   time = setInterval(change, timeChange);
  // }

  // function change() {
  //   imgCurrent++;
  //   if (imgCurrent > maxImg) {
  //     imgCurrent = 0;
  //   }
  //   loadImg(imgCurrent);
  // }

  // window.addEventListener("load", start);

  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
      <body>  
        <Header />         

        {/* Banner */}

        <div id="dvslider"></div>

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
              <hr class="card-divisor"></hr>
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
              <hr class="card-divisor"></hr>
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

        <div class="basic-2">
          <div class="basic-2-image">
            <img src={img1} alt="icon-1" id="icon-1" />
          </div>
          <div class="container" id="text-1">
            <div class="container-2">
              <div class="container-text-1">
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
          <div class="container">
            <div class="container-2">
              <div class="container-text-2">
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
          <div class="container">
            <div class="container-2">
              <div class="container-text-3">
                <h4>
                  Diante do fato histórico, temos o prazer de vincular nossa
                  marca e cultura, originando o nome da nossa empresa.
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* PRODUCTS */}
        <div id="products" className="container-products">
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

        {/* BEGIN CONTACT */}

        <div id="contact">
          <div class="basic">
            <h1 class="basic-title">CONTATO</h1>
            <h6 class="text-contact">
              Av. Castelo Branco, 123 - Bairro República
            </h6>
            <h6 class="text-contact">vinhodaarabia@outlook.com</h6>
            <h6 class="text-contact">(31) 3456-7890 / (31) 4002-8922</h6>
            <h4 class="text-contact-2">
              Envie-nos uma mensagem através do formulário abaixo
            </h4>
          </div>

          <div class="mapsForms">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.6328584850276!2d-43.18409268563655!3d-19.81315793980183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa5a9dba712abdb%3A0x6c4a86310f77da0b!2sAv.%20Castelo%20Branco%2C%20123%20-%20Republica%2C%20Jo%C3%A3o%20Monlevade%20-%20MG%2C%2035930-090!5e0!3m2!1spt-BR!2sbr!4v1620104017900!5m2!1spt-BR!2sbr"
              allowfullscreen
            ></iframe>
            {/* FORMS */}
          </div>
        </div>

        {/* END CONTACT */}
      </body>
    </div>
  );
}
export default App;
