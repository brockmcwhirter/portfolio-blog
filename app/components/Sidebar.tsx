// src/app/components/Sidebar.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { FaGithub, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';

const Sidebar: React.FC = () => {
  return (
    <aside className="fixed top-0 left-0 h-full w-64 bg-gray-800 p-4 z-10">
      <div className="flex flex-col items-center mt-16">
        <Image
          src="/linkedinprofile.jpg" // Ensure this path is correct
          alt="Profile Picture"
          width={150}
          height={150}
          className="rounded-full"
        />
        <h2 className="text-white text-2xl mt-4">Brock McWhirter</h2>
        <div className="flex items-center text-white mt-2">
          <FaMapMarkerAlt className="mr-2" size={24} />
          <span>Lubbock, Texas</span>
        </div>
        <div className="mt-4 flex flex-col items-center space-y-4">

          <a
            href="mailto:brock@brockmcwhirter.dev"
            className="text-blue-400 hover:underline"
            title="Email"
            aria-label="Email"
          >
            <FaEnvelope size={50} />
          </a>
          <a
            href="https://github.com/brockmcwhirter"
            className="text-blue-400 hover:underline"
            title="GitHub"
            aria-label="GitHub"
          >
            <FaGithub size={50} />
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
