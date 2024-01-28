import Image from "next/image";
import Hero from "@/components/Hero";
import homeImg from "public/home.jpg";

export default function HomePage() {
  return (
    <Hero
      imgData={homeImg}
      imgAlt="Car Factory"
      title="Professional Cloud Hosting"
    />
  );
}
