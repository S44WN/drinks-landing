"use client";

import { useRef } from "react";
import * as THREE from "three";
import FloatingCan from "@/components/FloatingCans";
import {
  Cloud,
  Clouds,
  Environment,
  OrbitControls,
  Text,
} from "@react-three/drei";
import { SodaCanProps } from "@/components/SodaCan";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { distance } from "three/webgpu";

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
    y: getYPosition(distance),
  });

  return (
    <group ref={groupRef}>
      {/* can */}
      <group rotation={[0, 0, 0.5]}>
        <FloatingCan ref={canRef} flavor={flavour}></FloatingCan>
      </group>

      {/* clouds */}

      <Clouds ref={cloudsRef}>
        <Cloud ref={cloud1Ref} bounds={[10, 10, 2]} />
        <Cloud ref={cloud2Ref} bounds={[10, 10, 2]} />
      </Clouds>

      <OrbitControls />

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
