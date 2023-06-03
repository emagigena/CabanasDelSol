import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-yellow-900">
      <div className="flex items-center justify-center px-4 py-2">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Logo" width={64} height={64} />
          <span className="text-white font-bold">Cabañas del Sol</span>
        </Link>
      </div>
      <div>
        {/* Aquí puedes agregar más elementos de navegación, como enlaces a otras páginas */}
      </div>
    </nav>
  );
}
