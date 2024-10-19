"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import * as THREE from "three";
import FloatingCan from "@/components/FloatingCans";
import {
  Cloud,
  Clouds,
  Environment,
  // OrbitControls,
  Text,
} from "@react-three/drei";
import { SodaCanProps } from "@/components/SodaCan";
import { useMediaQuery } from "@/hooks/useMediaQuery";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type SkyDiveProps = {
  sentence: string | null;
  flavour: SodaCanProps["flavor"];
};

function SkyScene({ sentence, flavour }: SkyDiveProps) {
  const groupRef = useRef<THREE.Group>(null);
  const canRef = useRef<THREE.Group>(null);
  const cloud1Ref = useRef<THREE.Group>(null);
  const cloud2Ref = useRef<THREE.Group>(null);
  const cloudsRef = useRef<THREE.Group>(null);
  const wordsRef = useRef<THREE.Group>(null);

  const ANGLE = 75 * (Math.PI / 180);

  const getXPosition = (distance: number) => distance * Math.cos(ANGLE);

  const getYPosition = (distance: number) => distance * Math.sin(ANGLE);

  const getXYPosition = (distance: number) => ({
    x: getXPosition(distance),
    y: getYPosition(-1 * distance),
  });

  useGSAP(() => {
    if (
      !cloudsRef.current ||
      !canRef.current ||
      !wordsRef.current ||
      !cloud1Ref.current ||
      !cloud2Ref.current
    )
      return;

    // set initial positions
    gsap.set(cloudsRef.current.position, { z: 10 });
    gsap.set(canRef.current.position, { ...getXYPosition(-4) });

    gsap.set(
      wordsRef.current.children.map((word) => word.position),
      { ...getXYPosition(7), z: 2 }
    );

    // spinning can
    gsap.to(canRef.current.rotation, {
      y: Math.PI * 2,
      duration: 1.7,
      repeat: -1,
      ease: "none",
    });

    // Initial cloud positions
    const DISTANCE = 15;
    const DURATION = 6;

    gsap.set([cloud1Ref.current.position, cloud2Ref.current.position], {
      ...getXYPosition(DISTANCE),
    });

    // Clouds animations
    gsap.to(cloud1Ref.current.position, {
      y: `+=${getYPosition(DISTANCE * 2)}`,
      x: `+=${getXPosition(DISTANCE * -2)}`,
      duration: DURATION,
      repeat: -1,
      ease: "power1.inOut",
    });

    gsap.to(cloud2Ref.current.position, {
      y: `+=${getYPosition(DISTANCE * 2)}`,
      x: `+=${getXPosition(DISTANCE * -2)}`,
      duration: DURATION,
      repeat: -1,
      ease: "power1.inOut",
      delay: DURATION / 2,
    });

    // scrolltrigger
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".skydive",
        pin: true,
        start: "top top",
        end: "+=2000",
        scrub: 1.5,
      },
    });

    scrollTl
      .to(
        cloudsRef.current.position,
        {
          z: -5,
          duration: 0.3,
        },
        0
      )
      .to(canRef.current.position, {
        x: 0,
        y: 0,
        duration: 0.3,
        ease: "back.out(1.7)",
      })
      .to(
        wordsRef.current.children.map((word) => word.position),
        {
          keyframes: [
            { x: 0, y: 0, z: -1 },
            {
              ...getXYPosition(-7),
              z: -7,
            },
          ],
          stagger: 0.3,
        },
        0
      )
      .to(canRef.current.position, {
        ...getXYPosition(4),
        duration: 0.5,
        ease: "back.in(1.7)",
      })
      .to(cloudsRef.current.position, {
        z: 10,
        duration: 0.5,
      });
  });

  return (
    <group ref={groupRef}>
      {/* can */}
      <group rotation={[0, 0, 0.5]}>
        <FloatingCan
          ref={canRef}
          flavor={flavour}
          floatIntensity={3}
          rotationIntensity={0}
          floatSpeed={3}
        >
          <pointLight intensity={30} color={"red"} decay={0.6} />
        </FloatingCan>
      </group>

      {/* clouds */}

      <Clouds ref={cloudsRef}>
        <Cloud ref={cloud1Ref} bounds={[10, 10, 2]} />
        <Cloud ref={cloud2Ref} bounds={[10, 10, 2]} />
      </Clouds>

      {/* <OrbitControls /> */}

      {/* texts */}
      <group ref={wordsRef}>
        {sentence && (
          <ThreeText sentence={sentence} color="#ffedd5"></ThreeText>
        )}
      </group>

      {/* lights */}
      <ambientLight intensity={2} color={"#ffedd5"} />
      <Environment files={"/hdrs/field.hdr"} environmentIntensity={1.5} />
    </group>
  );
}

export default SkyScene;

function ThreeText({
  sentence,
  color = "white",
}: {
  sentence: string;
  color?: string;
}) {
  const words = sentence.toUpperCase().split(" ");

  const material = new THREE.MeshLambertMaterial();
  //   material.color = new THREE.Color(color);

  const isDesktop = useMediaQuery("(min-width: 950px)", true);

  return words.map((word: string, wordIndex: number) => (
    <Text
      key={`${wordIndex}-${word}`}
      color={color}
      scale={isDesktop ? 1 : 0.5}
      material={material}
      font="/fonts/canopee-webfont.woff"
      fontWeight={900}
      anchorX={"center"}
      anchorY={"middle"}
      characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ!,.?'"
    >
      {word}
    </Text>
  ));
}
