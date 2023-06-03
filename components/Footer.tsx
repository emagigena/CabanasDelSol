import React from "react";

export default function Footer() {
  return (
    <footer className="center mt-5 flex justify-center space-x-4 bg-[#E7E8EF] p-4 text-xs">
      <p>Desarrollado por Emanuel Gigena</p>
      <span>|</span>
      <a
        href="https://github.com/emagigena"
        className="font-medium text-orange-600"
      >
        Source code
      </a>
    </footer>
  );
}
