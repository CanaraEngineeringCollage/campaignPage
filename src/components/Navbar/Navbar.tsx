import React from "react";
import logo from "../../../public/logo/logoautonomous.svg";
import Image from "next/image";

function Navbar() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 ">
        {/* Header */}
        <div className="flex md:hidden items-center justify-center gap-2 py-4">
          <Image src={logo} alt="Logo" className="object-cover w-64" />
        </div>
        <div className="hidden md:flex items-center justify-center gap-2 py-4">
          <Image src={logo} width={300} height={80} priority alt="logo" className="object-contain cursor-pointer h-16 w-auto" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
