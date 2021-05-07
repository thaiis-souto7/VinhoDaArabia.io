import React from "react";
import Grid from "@material-ui/core/Grid";
import { HeaderCustom } from "./styles";
import Logo from "../../assets/logoPrincipal.png";

export default function CenteredGrid() {

  return (
    <HeaderCustom container spacing={3}>
      <Grid item xs={2}>
        <img src={Logo} alt="logo" />
        <nav>
          <ul>
            <li>
              <a href="#intro">Início</a>
            </li>
            <li>
              <a href="#about">Sobre Nós</a>
            </li>
            <li>
              <a href="#products">Produtos</a>
            </li>
            <li>
              <a href="#contact">Contato</a>
            </li>
          </ul>
        </nav>
      </Grid>
    </HeaderCustom>
  );
}
