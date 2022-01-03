import React from "react";

import Logo from "assets/logo.svg";
import { Button } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <div className="container d-flex justify-content-between align-items-end">
        <div>
          <img src={Logo} alt="Cache Humane Society Logo" />
        </div>
        <div>Rescue. Care. Inspire.</div>
        <div>
          <Button variant="success">DONATE NOW</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
