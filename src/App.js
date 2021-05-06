import "./App.css";
import React from "react";

//Import NavBar 
import Logo from "./assets/logoPrincipal.png";

//Import Banner


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

var imgs = [];
var sliderBanner;
var imgCurrent;
var maxImg;
var time;
var timeChange;

function preLoading() {
  var s = 1;
  for (var i = 0; i < 5; i++) {
    imgs[i] = new Image();
    imgs[i].src = "assets/s" + s + ".jpg";
    s++;
  }
}

function loadImg(img) {
  sliderBanner.style.backgroundImage = "url('" + imgs[img].src + "')";
}

function start() {
  preLoading();
  imgCurrent = 0;
  maxImg = imgs.length - 1;
  sliderBanner = document.getElementById("dvslider");
  loadImg(imgCurrent);
  timeChange = 3000;
  time = setInterval(change, timeChange);
}

function change() {
  imgCurrent++;
  if (imgCurrent > maxImg) {
    imgCurrent = 0;
  }
  loadImg(imgCurrent);
}

window.addEventListener("load", start);

  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
      <body>

      <header id="header">
				<nav>
          <img src={Logo} alt="logo" />
					<ul>
						<li><a href="#intro">Início</a></li>
						<li><a href="#about">Sobre Nós</a></li>
						<li><a href="#work">Produtos</a></li>
						<li><a href="#contact">Contato</a></li>
					</ul>
				</nav>
			</header>

        {/* Banner */}
       
        <div id="dvslider"></div>

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
