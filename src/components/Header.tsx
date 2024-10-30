import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between py-4 px-6 bg-white">
      <div className="text-2xl font-bold text-red-500">INFOTEAM</div>
      <nav className="space-x-8">
        <Link href="/services" className="text-gray-700">
          Services
        </Link>
        <Link href="/blogs" className="text-gray-700">
          Blogs
        </Link>
        <Link href="/members" className="text-gray-700">
          Members
        </Link>
      </nav>
      <button className="py-2 px-4 bg-red-400 text-white rounded-lg">
        Contact us
      </button>
    </header>
  );
};

export default Header;
