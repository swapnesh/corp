import Image from "next/image";
import Hero from "@/components/Hero";
import reliabilityImg from "public/reliability.jpg";

export default function ReliabilityPage() {
  return <Hero
  imgData={reliabilityImg}
  imgAlt="Welding"
  title="Super high reliability hosting"
/>
}
