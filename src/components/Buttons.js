import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

export default function Buttons() {
  return (
    <div className="buttons">
      <div className="btn btn-email">
        <a href="" className="btn-social">
          <AiOutlineMail />
          <span>Email</span>
        </a>
      </div>
      <div className="btn btn-linkedin">
        <a href="" className="btn-social">
          <FaLinkedin />
          <span>Linkedin</span>
        </a>
      </div>
    </div>
  );
}
