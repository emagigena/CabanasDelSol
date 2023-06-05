import cabanas from "../../data/cabins.json";
import FormRegister from "../../components/FormRegister";
import CabinInfo from "../../components/CabinInfo";
import CustomCarousel from "../../components/Carousel";
import { Grid, Container, Divider } from "semantic-ui-react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Link from "next/link";
import { Button } from "@mui/material";

export default function Product({ cabanas }) {
  const message = encodeURIComponent(
    "¡Hola! Me interesa obtener más información sobre esta cabaña."
  );
  return (
    <Container style={{ marginTop: "2rem" }}>
      <Grid columns={2}>
        <Grid.Column width={8}>
          <CustomCarousel cabins={cabanas.image} />
        </Grid.Column>
        <Grid.Column width={8}>
          <CabinInfo cabanas={cabanas} />
          <Divider />
          Consultanos a nuestro WhatsApp!{" "}
          <a
            href={`https://wa.me/3424770011?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-link"
          >
            <Button color={"secondary"}>
              <WhatsAppIcon className="whatsapp-icon" />
            </Button>
          </a>
        </Grid.Column>
      </Grid>
    </Container>
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
