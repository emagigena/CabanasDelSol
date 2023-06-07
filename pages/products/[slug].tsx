import cabanas from "../../data/cabins.json";
import CabinInfo from "../../components/CabinInfo";
import CustomCarousel from "../../components/Carousel";
import { Grid, Container, Divider } from "semantic-ui-react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Button } from "@mui/material";
import NavBar from "../../components/NavBar";
import ContactForm from "../../components/ContactForm";

export default function Product({ cabanas }) {
  const message = encodeURIComponent(
    "¡Hola! Me interesa obtener más información sobre esta cabaña."
  );
  return (
    <>
      <NavBar cabinRef={""} CarouselRef={""} MapRef={""} ContactRef={""} />
      <div className="block md:hidden">
        <Container>
          <div className="mx-auto max-w-2xl px-4 sm:px-6 mt-10 lg:max-w-7xl lg:px-8">
            <CabinInfo cabanas={cabanas} />
            <Divider />
            <div className="mt-1 mb-5 border-t border-gray-200 pt-10 font-bold">
              <p className="mb-3">
                Consultanos a nuestro WhatsApp!{" "}
                <WhatsAppIcon className="whatsapp-icon" />
              </p>
              <ContactForm />
            </div>
            <CustomCarousel cabins={cabanas.image} />
            <Divider />
          </div>
        </Container>
      </div>
      <div className="hidden md:block">
        <Container style={{ marginTop: "2rem" }}>
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <Grid columns={2}>
              <Grid.Column width={8}>
                <CustomCarousel cabins={cabanas.image} />
              </Grid.Column>
              <Grid.Column width={8}>
                <CabinInfo cabanas={cabanas} />
                <Divider />
                Consultanos a nuestro WhatsApp!{" "}
                <WhatsAppIcon className="whatsapp-icon" />
                <ContactForm />
              </Grid.Column>
            </Grid>
          </div>
        </Container>
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
