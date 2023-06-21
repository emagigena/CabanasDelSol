import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import logo2 from "../../public/logo2.png";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const message = encodeURIComponent(
    "¡Hola! Me interesa obtener más información para poder hospedarme en una cabaña."
  );
  return (
    <footer
      style={{ backgroundColor: "#F1B140" }}
      className="bg-gray-900 text-white py-8"
    >
      <div className="max-w-6xl mx-auto px-4">
        <Link href="/">
          <div className="flex items-center justify-center mb-8">
            <div
              className="flex mr-8"
              style={{ borderRadius: "50%", overflow: "hidden" }}
            >
              <Image width={30} height={30} src={logo2} alt={""} />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white">
                Complejo Cabañas Del Sol
              </h3>
            </div>
          </div>
        </Link>

        <div className="flex justify-center mb-8 space-x-6">
          <a
            href="https://www.facebook.com/complejodelsol"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon className="text-3xl text-white hover:text-gray-500 transition duration-300" />
          </a>
          <a
            href="https://www.instagram.com/complejodelsol_santafe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon className="text-3xl text-white hover:text-gray-500 transition duration-300" />
          </a>
          <a
            href={`https://wa.me/3424770011?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon className="text-3xl text-white hover:text-gray-500 transition duration-300" />
          </a>
        </div>
        <div className="text-center text-gray-500 mb-8">
          <p>
            Esta es la página web del Complejo Cabañas Del Sol, Bienvenidos!
          </p>
        </div>
        <div className="text-center">
          <p className="mb-2">
            Ubicación:{" "}
            <a
              target="_blank"
              href="https://www.google.com/maps/place/Cabañas+Del+Sol/@-31.5088775,-60.4546853,15z/data=!4m2!3m1!1s0x0:0x766feb8921fe8f47?sa=X&ved=2ahUKEwiY8PXMmq3_AhWuvJUCHfnxAP4Q_BJ6BAhuEAk"
            >
              RP1, S3001 Santa Fe
            </a>
          </p>
          <p className="text-sm text-white-500">
            © {new Date().getFullYear()}. Developed by Emanuel Gigena. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
