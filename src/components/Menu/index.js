import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Button} from "./styles.js";

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
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
          
        <MenuItem  onClick={handleClose}>Início</MenuItem>
        <MenuItem href="about" onClick={handleClose}>Sobre Nós</MenuItem>
        <MenuItem  onClick={handleClose}>Produtos</MenuItem>
        <MenuItem  onClick={handleClose}>Contato</MenuItem>
      </Menu>
    </div>
  );
}