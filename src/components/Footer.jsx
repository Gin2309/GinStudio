import React from "react";
import { ginlogo2 } from "../assets";

const Footer = () => (
  <>
    <div className="bg-[#ece9e7] flex h-[250px] text-[17px]">
      <div className="flex mt-[30px] ml-[30px]">
        <img src={ginlogo2} alt="" className="h-[125px] pr-[30px]" />
        <ul>
          <h2 className="font-semibold mb-[5px] text-[19px]">GIN STUDIO</h2>
          <li>Địa chỉ: Phú Diễn, Bắc Từ Liêm, Hà Nội</li>
          <li>Email: ginstudio@gmail.com</li>
        </ul>
      </div>
      <div className="flex mt-[30px]">
        <ul className="px-[70px]">
          <h2 className="font-semibold mb-[5px] text-[19px]">INFORMATION</h2>
          <li>About Us</li>
          <li>Term of Use</li>
        </ul>
        <ul>
          <h2 className="font-semibold mb-[5px] text-[19px]">SUPPORT</h2>
          <li>Contact Us</li>
          <li>Help</li>
        </ul>
      </div>
    </div>
  </>
);

export default Footer;
