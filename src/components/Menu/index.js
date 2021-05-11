import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Button } from "./styles.js";

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  function findPosition(obj) {
    var currenttop = 0;
    if (obj.offsetParent) {
        do {
            currenttop += obj.offsetTop;
        } while ((obj = obj.offsetParent));
        return [currenttop];
    }
}

  const handleMenuItemClick = (event, index, href) => {
    setSelectedIndex(index);
    setAnchorEl(null);
    window.scrollTo(0, findPosition(document.getElementById(href)));
        }      

  const handleClose = () => {
    setAnchorEl(null);
  };

  const options = [
    { href: "home", name: "Início" },
    { href: "about", name: "Sobre Nós" },
    { href: "product", name: "Produtos" },
    { href: "contact", name: "Contato" },
  ];

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClickListItem}
      >
        Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option.name}
            disabled={index === 0}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index, option.href)}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
