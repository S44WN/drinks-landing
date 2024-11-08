"use client";

import { Environment } from "@react-three/drei";
import FloatingCan from "../FloatingCans";

import { useRef } from "react";
import { Group } from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Props = object;

function AlternatinTextScene({}: Props) {
  const canRef = useRef<Group>(null);

  const bgColors = ["#710523", "#572981", "#164405", "#690B3D", "#4B7002"];

  useGSAP(() => {
    if (!canRef.current) return;
  });

  return (
    <group ref={canRef}>
      <FloatingCan flavor="strawberryLemonade" />
      <Environment files={"/hdrs/lobby.hdr"} environmentIntensity={1.5} />
    </group>
  );
}

export default AlternatinTextScene;
