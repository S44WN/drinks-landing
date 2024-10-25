"use client";

import { SodaCanProps } from "@/components/SodaCan";
import { Center, Environment, View } from "@react-three/drei";
import FloatingCan from "../FloatingCans";
import { useState } from "react";

type Props = object;

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

  function changeFlavour(index: number) {
    const nextIndex = (index + FLAVORS.length) % FLAVORS.length;
    setCurrentFlavourIndex(nextIndex);
  }

  return (
    <section className="carousel relative grid h-screen grid-rows-[auto, 4fr, auto] justify-center overflow-hidden bg-white py-12 text-orange-100">
      <div className="background pointer-events-none absolute inset-0 bg-red-400" />

      <h2 className="font-[family-name:var(--font-canopee)] relative text-center text-5xl font-bold">
        Choose Your Flavour
      </h2>

      <div className="grid grid-cols-[auto, 1fr, auto] items-center justify-center">
        {/* left */}
        <button
          onClick={() => changeFlavour(currentFlavourIndex - 1)}
          className="z-20"
        >
          Left
        </button>

        {/* can */}
        <View className="aspect-square h-[70vmin] min-h-40 mx-auto">
          <Center position={[0, 0, 1.5]}>
            <FloatingCan
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
        <button
          onClick={() => changeFlavour(currentFlavourIndex + 1)}
          className="z-20"
        >
          Right
        </button>
      </div>
    </section>
  );
}

export default Carousel;
