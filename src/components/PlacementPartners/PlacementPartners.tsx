import Image from 'next/image';
import React from 'react';

const partners = [
  { name: 'Verifone', logo: '/logo/placement1.png' },
  { name: 'JusPay', logo: '/logo/placement2.png' },
  { name: 'Oracle', logo: '/logo/placement3.png' },
  { name: 'Winman', logo: '/logo/placement4.png' },
  { name: 'Cisco', logo: '/logo/placement5.png' },
  { name: 'K', logo: '/logo/placement6.png' },
  { name: 'Sasken', logo: '/logo/placement7.png' },
  { name: 'IBM', logo: '/logo/placement8.png' },
  { name: 'SAP', logo: '/logo/placement9.png' },
  { name: 'Accenture', logo: '/logo/placement10.png' },
  { name: 'VMware', logo: '/logo/placement11.png' },
  { name: 'Cadence', logo: '/logo/placement12.png' },
  { name: 'Capillary', logo: '/logo/placement13.png' },
  { name: 'HashedIn', logo: '/logo/image.png' },
  { name: 'Deloitte', logo: '/logo/placement14.png' },
  
];

function PlacementPartners() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="xl:text-[2.5rem] md:text-[2.5rem] text-[1.5rem] lg:text-[2rem] font-bold text-center text-gray-900 mb-12">
          Our Placement Partners
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 place-items-center">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className={`flex items-center justify-center p-4 w-full h-24 ${
                index === partners.length - 1 && partners.length % 2 !== 0
                  ? 'max-sm:col-span-2'
                  : ''
              }`}
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={200}
                height={100}
                className="max-h-16 max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PlacementPartners;