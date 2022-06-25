import React from "react";
import { FaGithub } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer-icons">
      <div className="icon">
        <a href="" className="btn-icons">
          <AiFillTwitterCircle />
        </a>
      </div>
      <div className="icon">
        <a href="" className="btn-icons">
          <FaFacebook />
        </a>
      </div>
      <div className="icon">
        <a href="" className="btn-icons">
          <FaInstagram />
        </a>
      </div>
      <div className="icon">
        <a href="" className="btn-icons">
          <FaGithub />
        </a>
      </div>
    </footer>
  );
}
