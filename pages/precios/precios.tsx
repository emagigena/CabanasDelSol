import React from "react";
import { Button, Container, Table } from "semantic-ui-react";
import NavBar from "../../components/navBar/NavBar";
import Image from "next/image";
import ContactForm from "../../components/contactForm/ContactForm";
import Price from "../../components/price/Price";
import Link from "next/link";
import { ButtonHome } from "../../components/buttonHome/ButtonHome";

export default function Precios() {
  return (
    <>
      <NavBar
        cabinRef={undefined}
        CarouselRef={undefined}
        MapRef={undefined}
        ContactRef={undefined}
        ReviewsRef={undefined}
      />

      <header className="relative">
        <div className="absolute inset-x-0 bottom-0 bg-gray-100" />
        <div className="mx-auto pt-9">
          <div className="relative shadow-xl sm:overflow-hidden">
            <div className="absolute inset-0">
              <Image
                priority
                className="h-full w-full object-cover"
                src={
                  "https://lh3.googleusercontent.com/pw/AIL4fc-lu9sQ8KEZquxQFa0dfPrulDmS8EtriZoNbErp1NL9wDTlDzKL_ZN7sxqo_4ReSt3pUDvzKAzbrD8-y1UyQDFqyCKyIT9AimxVubB8wiyi-bmCc5Ru2QPHIdQvvMDDuv2Z8zxcCITBRYe7fE0713gbynAioiUk1dZn29xa3Ua_mJAgZroirL7tQbP3XXHd-_p3e0IbdO-36umirCF32tm2hAPL1jCx9OsqvsPA9I-LU8yie-blVv-be2MxffYGgORAA8P0a-NEjK39_o-Hn9s200YpatatkpBu-GF0jWp4Q_VCckCgaAUy9myyqKn90CuhS0XLc6fxsrWHRSstF99OA1yLAAUZpAUSnlqgz8Qe2PFL5ITvVpKzIzJyNYW083cN6ihVrJcJH7p8jvmmcg-3Ls84o7dmQiNFUrWHbpqUMADquFiiUgt2bpBrp4iTNKw1_7eD1geUyJ8VR6XhcqiPv4x0_7T1TcQPlDaG7Hi49oH5IiJhuOPOQgKa9mgNr0GH4xwOlGxKXvs39M5AQ5XGLaxmKP_jB727A-aPGJl9J7ZJV0jg6lxlbKo4zUD--b_FJzR55K-qR18yt9W6rSyNW7tIh9j7slordiuNZ1YrCNSUUeDgKuARIM5iPCSYTpC5FX-jYHTu_tg8znz6V179d4QkBGFby2TQcRCf8HqiM-HZCQPmoFjXYKmrFEYX7MuBtKEMrnTFpDQlMKwgWMZnYYaQeZeUJziAVUnfEZir2qj6vcumRPFAnblZ4t4DGXzph3QtBQ9fjv8iAhL5Qeg3Soe66b20gzlYn84xyNexXFfvA4sE3I980z2n0CQKU1omxjlZd2YiFmQg2WcdROrY5x4jPQkyUh5j6M2HJ9cMZdaeWCIzzaTHpBeKvo2odhkdez_Kh-0x23batAakq9Qu5GwBGmgk8P3f9ZPTY1m7RK3qDsq6-rXIfYas0B0uJF_f67Q25gyRg3q4bu4167kZpZVKsUk2CCXxQjUYiX2GxSqRREIjynmNcqXJJCGtCeWCZ8UwS1Zax4n_7_4_c0XElHVwV8j9Q0bjyvqjf37Rf_tDZ0JymwgkbNeddJ1HoLvuSzmF4fU6vg=w1397-h931-s-no?authuser=2"
                }
                alt="Cabañas del Sol"
                width={1920}
                height={100}
              />
              <div className="absolute inset-0 bg-orange-100 mix-blend-multiply" />
            </div>
            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8"></div>
          </div>
        </div>
      </header>
      <ButtonHome />
      <Price />
      <div className="sm:py-1 mx-auto max-w-7xl py-1 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 mt-10">
          <p className="text-4xl font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl">
            Contactanos
          </p>
        </div>
        <ContactForm cabinID={""} />
      </div>
    </>
  );
}
