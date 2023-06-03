import Image from "next/image";
import img from "../../public/hero.jpeg";
import cabanas from "../../data/cabins.json";
import FormRegister from "../../components/FormRegister";
import CabinInfo from "../../components/CabinInfo";

export default function Product({ cabanas }) {
  return (
    <div className="flex h-screen flex-col justify-between">
      <div className="mx-auto mt-16 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mx-auto flex flex-col sm:flex-row">
          <Image
            alt="cabin"
            className="rounded-lg"
            src={img}
            width={500}
            height={500}
          />
          <div className="mt-10 flex flex-col sm:mt-0 sm:ml-10">
            <CabinInfo cabanas={cabanas} />
            <FormRegister cabanas={cabanas} />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const searchResults = cabanas;
  const coffeeProduct = searchResults.find(
    (product) => product.id.toString() === params.slug
  );

  return {
    props: {
      cabanas: coffeeProduct, // Pasar el objeto específico en lugar de solo el nombre
    },
  };
}

export async function getStaticPaths() {
  const cabins = cabanas;
  let fullPaths = [];

  for (let product of cabins) {
    fullPaths.push({ params: { slug: product.id.toString() } });
  }

  return {
    paths: fullPaths,
    fallback: "blocking",
  };
}
