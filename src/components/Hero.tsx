"use client";

// import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// import bunchedCans from "../../public/images/all-cans-bunched.png";
import { Bounded } from "@/components/Bounded";
import Link from "next/link";
import { TextSplitter } from "./TextSplitter";
import { View } from "@react-three/drei";
import HeroScene from "@/components/HeroScene";
import { Bubbles } from "@/components/Bubbles";
import { useStore } from "@/hooks/useStore";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type Props = {
  className?: string;
};

export default function Hero({}: Props) {
  const ready = useStore((state) => state.ready);

  useGSAP(
    () => {
      if (!ready) return;

      const introTl = gsap.timeline();

      introTl
        .set(".hero", { opacity: 1 })
        .from(".hero-header-word", {
          scale: 3,
          opacity: 0,
          ease: "power4.in",
          stagger: 1,
        })
        .from(
          ".hero-subheading",
          {
            opacity: 0,
            y: 30,
          },
          "+=0.3"
        )
        .from(".hero-body", {
          opacity: 0,
          y: 10,
        })
        .from(".hero-button", {
          opacity: 0,
          y: 10,
          duration: 0.6,
        });

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
          // markers: true,
        },
      });

      scrollTl
        .fromTo(
          "body",
          {
            backgroundColor: "#f87171",
          },
          {
            backgroundColor: "#ffedd5",
            overwrite: "auto",
          },
          1
        )
        .from(".text-side-heading .split-char", {
          scale: 1.3,
          opacity: 0,
          y: 20,
          rotate: -20,
          stagger: 0.1,
          ease: "back.out(3)",
          duration: 0.5,
        })
        .from(".text-side-body", {
          opacity: 0,
          y: 20,
        });
    },
    { dependencies: [ready] }
  );
  return (
    <Bounded className="hero opacity-0">
      <View className="hero-scene pointer-events-none sticky top-0 z-50 -mt-[100vh]  h-screen w-screen md:block">
        <HeroScene />
        <Bubbles />
      </View>
      <div className="grid">
        <div className="grid h-screen place-items-center ">
          <div className="grid auto-rows-min place-items-center text-center">
            <h1 className="font-[family-name:var(--font-canopee)] hero-header lg:text-[7rem]  md:text-[5rem] text-5xl font-black uppercase leading-[.8] text-orange-100">
              <TextSplitter
                text="Bubbles-That Spark Joy!"
                wordDisplayStyle="block"
                className="hero-header-word"
              />
            </h1>
            <h2 className=" font-[family-name:var(--font-bright-melody)] hero-subheading mt-4 text-2xl font-semibold text-orange-100 lg:text-4xl">
              Soda Perfected
            </h2>
            <p className="font-[family-name:var(--font-bright-melody)] hero-body text-xl font-normal text-orange-100 leading-[.9]">
              sugar free, naturally sweetened, and low in calories.
            </p>
            <Link
              href={"/"}
              className=" font-[family-name:var(--font-canopee)] hero-button mt-12 text-xl font-semibold text-orange-100 border-2 border-orange-100 hover:bg-red-300 rounded-[1rem] px-5 py-3 transition-colors duration-150 ease-in-out tracking-wide "
            >
              Shop Now
            </Link>
          </div>
        </div>
        <div className="grid text-side relative z-[80] h-screen place-items-center gap-4 md:grid-cols-2">
          {/* <Image
            src={bunchedCans}
            alt="All cans bunched"
            width={500}
            height={500}
            className="w-full md:hidden"
          /> */}
          <div className="">
            <h2 className="text-side-heading text-balance uppercase text-5xl font-black text-neutral-700 lg:text-7xl font-[family-name:var(--font-canopee)] ">
              <TextSplitter text="Every Flavor, a New Adventure!" />
            </h2>
            <p className="font-[family-name:var(--font-bright-melody)] text-side-body mt-4 max-w-xl text-balance text-xl font-[500] text-neutral-500 leading-[.99]">
              Our tasteful drinks are made with the finest ingredients. Choose
              your favourite flavour and enjoy a delicious and refreshing drink.
              Our drinks are made with the finest ingredients, and we pride
              ourselves on using only the highest quality ingredients.
            </p>
          </div>
        </div>
      </div>
    </Bounded>
  );
}
