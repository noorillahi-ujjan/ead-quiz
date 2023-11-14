import Image from "next/image";
import Navbar from "./componets/navbar/Navbar";
import Welcome from "./componets/welcome/Welcome";
import Aucation from "./componets/acuation/Aucation";
import { Footer } from "./componets/footer/Footer";
import { Discover } from "./componets/discover/Discover";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Welcome />
      <Aucation />
      <Discover />
      <Footer />
    </div>
  );
}
