import Carousel from "@/components/carousel/Carousel";
import Hero from "@/components/Hero";
import SkyDive from "@/components/skydive/SkyDive";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-montserrat)]">
      <Hero />
      <SkyDive />
      <Carousel />
    </div>
  );
}
