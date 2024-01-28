import Image from "next/image";
import Hero from "@/components/Hero";
import performanceImg from "public/performance.jpg";


export default function PerformancePage() {
  return <Hero
  imgData={performanceImg}
  imgAlt="Welding"
  title="We serve high performance applications"
/>
}
