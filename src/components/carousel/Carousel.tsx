"use client";

import { SodaCanProps } from "@/components/SodaCan";
import { Center, Environment, View } from "@react-three/drei";
import FloatingCan from "../FloatingCans";
import { useRef, useState } from "react";
import { ArrowIcon } from "@/components/carousel/ArrowIcon";
import clsx from "clsx";
import { WavyCircles } from "@/components/carousel/WavyCircles";
import { Group } from "three";
import gsap from "gsap";

type Props = object;

const SPINS_ON_CHANGE = 5;

const FLAVORS: {
  flavor: SodaCanProps["flavor"];
  color: string;
  name: string;
}[] = [
  { flavor: "blackCherry", color: "#710523", name: "Black Cherry" },
  { flavor: "grape", color: "#572981", name: "Grape Goodness" },
  { flavor: "lemonLime", color: "#164405", name: "Lemon Lime" },
  {
    flavor: "strawberryLemonade",
    color: "#690B3D",
    name: "Strawberry Lemonade",
  },
  { flavor: "watermelon", color: "#4B7002", name: "Watermelon Crush" },
];

function Carousel({}: Props) {
  const [currentFlavourIndex, setCurrentFlavourIndex] = useState(0);

  const sodaCanRef = useRef<Group | null>(null);

  function changeFlavour(index: number) {
    if (!sodaCanRef.current) return;

    const nextIndex = (index + FLAVORS.length) % FLAVORS.length;

    const tl = gsap.timeline();

    tl.to(
      sodaCanRef.current.rotation,
      {
        z:
          index > currentFlavourIndex
            ? `-=${Math.PI * 2 * SPINS_ON_CHANGE}`
            : `+=${Math.PI * 2 * SPINS_ON_CHANGE}`,
        ease: "power2.inOut",
        duration: 1,
      },
      0
    )
      .to(
        ".background, .wavy-circles-outer, .wavy-circles-inner",
        {
          backgroundColor: FLAVORS[nextIndex].color,
          fill: FLAVORS[nextIndex].color,
          ease: "power2.inOut",
          duration: 1,
        },
        0
      )

      .to(".text-wrapper", { duration: 0.2, y: -10, opacity: 0 }, 0)
      .to({}, { onStart: () => setCurrentFlavourIndex(nextIndex) }, 0.5)
      .to(".text-wrapper", { duration: 0.2, y: 0, opacity: 1 }, 0.7);
  }

  return (
    <section className="carousel relative grid h-screen grid-rows-[auto,4fr,auto] justify-center overflow-hidden bg-white py-12 text-orange-100">
      <div className="background pointer-events-none absolute inset-0 opacity-50 bg-red-500" />

      <WavyCircles className="absolute left-1/2 top-1/2 h-[120vmin] -translate-x-1/2 -translate-y-1/2 text-[#fe3c3c]" />

      <h2 className="font-[family-name:var(--font-canopee)] relative text-center text-5xl font-bold">
        Choose Your Flavour
      </h2>

      <div className="grid grid-cols-[auto,auto,auto] items-center ">
        {/* left */}
        <ArrowButton
          onClick={() => changeFlavour(currentFlavourIndex - 1)}
          label="Previous Flavour"
          direction="left"
        />

        {/* can */}
        <View className="aspect-square h-[70vmin] min-h-40">
          <Center position={[0, 0, 1.5]}>
            <FloatingCan
              ref={sodaCanRef}
              floatIntensity={0.5}
              rotationIntensity={1}
              flavor={FLAVORS[currentFlavourIndex].flavor}
            />
          </Center>
          <Environment
            files={"/hdrs/lobby.hdr"}
            environmentIntensity={0.7}
            environmentRotation={[0, 5, 0.5]}
          />

          <directionalLight intensity={6} position={[0, 1, 1]} />
        </View>

        {/* right */}
        <ArrowButton
          onClick={() => changeFlavour(currentFlavourIndex + 1)}
          label="Next Flavour"
          direction="right"
        />
      </div>

      <div className="text-area relative mx-auto text-center">
        <div className="font-[family-name:var(--font-bright-melody)] text-wrapper text-4xl font-medium">
          <p>{FLAVORS[currentFlavourIndex].name}</p>
        </div>
        <div className="mt-2 text-2xl font-normal opacity-90">
          <p>$12.99</p>
        </div>
      </div>
    </section>
  );
}

export default Carousel;

type ArrowButtonsProps = {
  direction?: "left" | "right";
  label: string;
  onClick: () => void;
};

function ArrowButton({ direction, label, onClick }: ArrowButtonsProps) {
  return (
    <button
      onClick={onClick}
      className="size-12 rounded-full border-2 border-white bg-white/10 p-3 opacity-85 ring-white focus:outline-none focus-visible:opacity-100 focus-visible:ring-4 md:size-16 lg:size-20"
    >
      <ArrowIcon className={clsx(direction === "right" && "-scale-x-100")} />
      <span className="sr-only">{label}</span>
    </button>
  );
}
