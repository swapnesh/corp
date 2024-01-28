import Image from "next/image";
import Hero from "@/components/Hero";
import scaleImg from "public/scale.jpg";

export default function ScalePage() {
  return <Hero
  imgData={scaleImg}
  imgAlt="Welding"
  title="Scale your app to infinity."
/>
}
