import React from "react";

import "./Footer.scss";

const Footer = () => (
  <div className="bg-black p-3 footer">
    Copyright &copy; {new Date().getFullYear()} DevelopersHub &#9749;
  </div>
);

export default Footer;
