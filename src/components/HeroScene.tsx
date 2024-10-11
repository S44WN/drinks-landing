"use client";

import FloatingCan from "@/components/FloatingCans";
import { Environment } from "@react-three/drei";

type Props = object;

export default function HeroScene({}: Props) {
  return (
    <group>
      <Environment files={"/hdrs/lobby.hdr"} environmentIntensity={1.5} />
      <FloatingCan />
    </group>
  );
}
