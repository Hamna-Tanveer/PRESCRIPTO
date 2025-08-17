import React from "react";
import { assets } from "../assets/assets";

export default function Footer() {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/*-----Left Section------*/}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="loading" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Prescripto is a smart healthcare platform designed to simplify your
            medical journey. From booking doctor appointments to managing
            prescriptions, everything is just a few clicks away. Our goal is to
            make healthcare more accessible, convenient, and reliable for
            everyone.
          </p>
        </div>
        {/*-----Center Section------*/}
        <div>
          <p className="text-xl font-medium mb-5">Company</p>
          <ul className="flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        {/*-----Right Section------*/}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex-col gap-2 text-gray-600">
            <li>+92-111-222-3333</li>
            <li>prescripto@gmail.com</li>
          </ul>
        </div>
      </div>
      {/*-----Copyright Text------*/}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright © 2025 HamnaTanveer - All Right Reserved.
        </p>
      </div>
    </div>
  );
}
