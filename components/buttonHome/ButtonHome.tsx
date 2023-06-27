import React from "react";
import Link from "next/link";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export const ButtonHome = () => {
  return (
    <>
      <div
        style={{ marginTop: "10px" }}
        className="sm:py-1 mx-auto max-w-7xl py-1 px-4 sm:px-6 lg:px-8"
      >
        <Link href="/">
          <ArrowBackIosIcon color="action" />
          <span className="text-semi-bold" style={{ color: "black" }}>
            Volver al Inicio
          </span>
        </Link>
      </div>
    </>
  );
};
