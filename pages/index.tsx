import React from "react";
import { useRef } from "react";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import cabanas from "../data/cabins.json";
import "semantic-ui-css/semantic.min.css";
import "@mui/material/";
import { ImageList, ImageListItem } from "@mui/material/";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const itemData = [
  {
    img: "https://lh3.googleusercontent.com/pw/AJFCJaWMgKZ1MrBYuG_HVfftSvGdFhW4VkftorwFe21se36pwyNnXdxEkmFAylPzFLH-lrr7sSm4cH4xbDD-GS-L0alnMktp37GAuYSiVM2UZRbGbk7NhXRibAKlM7M3tKY4KGoNcI0vGXvO63JpntEk2tuH=w1551-h1034-s-no?authuser=0",
    title: "Breakfast",
  },
  {
    img: "https://lh3.googleusercontent.com/pw/AJFCJaXaleSZ5igLnSH6cTH9mmF0qOsQ134SqvdcebkjqJBkbRGloh3A7hX52sE73uEPpHUmkBn6NjFSYWAKJySSI2dcCrotUMqmw-kaVvjrshgk05txjBBppIQcYeHV_adv7-xrdLIC1Mibc7VFLY-pwSXX=w1551-h1034-s-no?authuser=0",
    title: "Burger",
  },
  {
    img: "https://lh3.googleusercontent.com/pw/AJFCJaXo6NRZlhOBQzyZh2dWCpM8QiSKGX33mRY3D-9oHuSBohTVpCAPj-yaA4gdWAhWgXVdcK1ijqpIV1a5fG75lrejWMqle9NUnpjm-5mn8AI5vrl5YR_V_hRg5RmH6xvlvgHoiGyhxpCy4yOrUfN2JlSc=w1551-h1034-s-no?authuser=0",
    title: "Camera",
  },
  {
    img: "https://lh3.googleusercontent.com/pw/AJFCJaXRtAjv2mezyjMtk-UtX4kM_vTIMgpfvXjs-9b-6oMXfJzKhRjYrufw5UBntrM286gzfSwbl1vltbRrppyDG1ZVmMTT7u1HTxK89CQF6f_UkuFZavGUJxpXznju5ROeLDnng0Jw7XHkE7ckSIEsZqq6=w1551-h1034-s-no?authuser=0",
    title: "Coffee",
  },
  {
    img: "https://lh3.googleusercontent.com/pw/AJFCJaUjU3A8ppzA5LFtdqtStcvb9qfNyyr-ikiickLY9paU5lsjSDnGzc9wjgo0mU_WhKssTQle-o5pl8kgcZhO6PVsKwGJsYjTlH7Ro3ewBbTXRp4iy3y53u-biKso5KkOX4y5vtIEoGb1EaXNuQ5UBU5H=w1551-h1034-s-no?authuser=0",
    title: "Hats",
  },
  {
    img: "https://lh3.googleusercontent.com/pw/AJFCJaUjE62Z2T0eWNcZyD0mSRU6FumyhA3eGeZ6RGep1WrFx0sg8kt0Q_vvzkfsf5qDX0IldMH6dCCVblUXqGvU-JFUCuMEdNvu_WuQxjVxV3CZrzlHBW9wa2YrqN81XVa1hU8gOJ7vMhmauYdp6ElY4D-a=w1551-h1034-s-no?authuser=0",
    title: "Honey",
  },
  {
    img: "https://lh3.googleusercontent.com/pw/AJFCJaWg8KwSy4LGI4A9OETsMRj_M7dYGgJ_sZXNjURlvcMxuZZk71t1LWC_dH1E7dQLtPgmGJkB3Kfvp_hob1J9-Eq1mu7nWPmtSJ8tglEtBHZIqgIuM4CK1HQfWdS8jtGzY9mZaEKd1pD51Iq9ZUOkAzGD=w1551-h1034-s-no?authuser=0",
    title: "Basketball",
  },
  {
    img: "https://lh3.googleusercontent.com/pw/AJFCJaVPDYwoRE-IDEldMWWIAMfMgYflu9-mBQb9Dt9-q4Opp640hxk4mN3pACO3zp_ZWD-FPLtIbCnJD5Jdf23mn9nom0-DQ0nkbLCGh22T9vkAH_QHxp_AE2ZPfLyrWhhQXQ90W9I9lXNjYi6kmcFqM2Dd=w1551-h1034-s-no?authuser=0",
    title: "Fern",
  },
  {
    img: "https://lh3.googleusercontent.com/pw/AJFCJaU_XNFWinpcF4qA3oka7MBHAuMhEByUVXEok79SlAw8Jm6y3VC8Och9GoxABcYtHEXs7oIrO6qfY_heUseAlOl4nkZlcZh95VWPkF2zlsJNPKgsDVS3r_NPVm3bOf2DOTLLK83nnFETpkcGpiu6Uip9=w1551-h1034-s-no?authuser=0",
    title: "Mushrooms",
  }
];
export default function Gallery() {
  let cabinRef = useRef<HTMLDivElement>();

  const scrollHandler = (e) => {
    e.preventDefault();
    cabinRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <>
      <Header scrollHandler={scrollHandler} />
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="sm:py-15 mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p
              className="mt-1 text-4xl font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl"
              ref={cabinRef}
            >
              Nuestras Cabañas
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {cabanas.map((cabana) => (
            <ProductCard product={cabana} key={cabana.id} />
          ))}
        </div>
        <div className="sm:py-15 mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mt-1 text-4xl font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl">
              Nuestro Complejo
            </p>
          </div>
        </div>
        <div>
          <Carousel>
            {itemData.map((item) => (
              <div key={item.img}>
                <img
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 1x`}
                  alt={item.title}
                  loading="lazy"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
}
