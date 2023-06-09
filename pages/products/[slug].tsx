import cabanas from "../../data/cabins.json";
import CabinInfo from "../../components/cabinInfo/CabinInfo";
import CustomCarousel from "../../components/carousel/Carousel";
import { Container, Divider } from "semantic-ui-react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Grid } from "@mui/material";
import NavBar from "../../components/navBar/NavBar";
import ContactForm from "../../components/contactForm/ContactForm";
import Map from "../../components/map/Map";

export default function Product({ cabanas }) {
  return (
    <>
      <NavBar
        cabinRef={""}
        CarouselRef={""}
        MapRef={""}
        ContactRef={""}
        ReviewsRef={""}
      />

      <div className="block md:hidden pt-20">
        <Container>
          <div className="mx-auto max-w-2xl px-4 sm:px-6 mt-10 lg:max-w-7xl lg:px-8">
            <CabinInfo cabanas={cabanas} />
            <div className="mt-1 mb-5 border-t border-gray-200 pt-10 font-bold">
              <p className="mb-3">
                Consultanos a nuestro WhatsApp!{" "}
                <WhatsAppIcon className="whatsapp-icon" />
              </p>
              <Divider />
              <ContactForm />
            </div>
            <CustomCarousel cabins={cabanas.image} />
            <Divider />
          </div>
        </Container>
      </div>
      <div className="hidden md:block pt-20">
        <Grid container>
          <Grid
            item
            className="mx-auto max-w-2xl px-4 sm:px-6 mt-10 lg:max-w-7xl lg:px-8"
            style={{ marginTop: "2rem", width: "50%" }}
          >
            <div>
              <CustomCarousel cabins={cabanas.image} />
              <Map/>
            </div>
          </Grid>
          <Grid
            item
            className="mx-auto max-w-2xl px-4 sm:px-6 mt-10 lg:max-w-7xl lg:px-8"
            style={{ marginTop: "2rem", width: "50%" }}
          >
            <div>
              <CabinInfo cabanas={cabanas} />
              <p className="mb-3">
                Consultanos a nuestro WhatsApp!{" "}
                <WhatsAppIcon className="whatsapp-icon" />
              </p>
              <Divider />
              <ContactForm />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const searchResults = cabanas;
  const cabin = searchResults.find(
    (cabin) => cabin.id.toString() === params.slug
  );

  return {
    props: {
      cabanas: cabin, // Pasar el objeto específico en lugar de solo el nombre
    },
  };
}

export async function getStaticPaths() {
  const cabins = cabanas;
  let fullPaths = [];

  for (let cabin of cabins) {
    fullPaths.push({ params: { slug: cabin.id.toString() } });
  }

  return {
    paths: fullPaths,
    fallback: "blocking",
  };
}
