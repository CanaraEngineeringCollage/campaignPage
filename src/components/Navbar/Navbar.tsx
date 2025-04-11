import React from 'react';
import logo from "../../../public/logo/Logo.png"
import Image from 'next/image';

function Navbar() {

  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 ">
        {/* Header */}
        <div className="flex items-center justify-center gap-2 py-4">
          <Image src={logo} alt='Logo' className='object-cover md:w-[50%] w-[70%]'/>
        </div>

      </div>
    </div>
  );
}

export default Navbar;