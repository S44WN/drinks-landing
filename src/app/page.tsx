import Hero from "@/components/Hero";
import SkyDive from "@/components/skydive/SkyDive";
import Carousel from "@/components/carousel/Carousel";
import AlternatingText from "@/components/AlternatingText/AlternatingText";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-montserrat)]">
      <Hero />
      <SkyDive />
      <Carousel />
      <AlternatingText />
    </div>
  );
}
