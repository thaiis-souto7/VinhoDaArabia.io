import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import "./styles.js";

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button color="white" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
          
        <MenuItem onClick={handleClose}><a href="home">Início</a></MenuItem>
        <a href="about"><MenuItem  onClick={handleClose}><a href="about">Sobre Nós</a></MenuItem></a>
        <a href="product"><MenuItem  onClick={handleClose}>Produtos</MenuItem></a>
        <a href="contact"><MenuItem  onClick={handleClose}>Contato</MenuItem></a>
      </Menu>
    </div>
  );
}