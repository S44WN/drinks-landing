"use client";

import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { Suspense } from "react";
import dynamic from "next/dynamic";
// import { Perf } from "r3f-perf";

const Loader = dynamic(
  () => import("@react-three/drei").then((mod) => mod.Loader),
  { ssr: false }
);

type Props = object;

export default function ViewCanvas({}: Props) {
  return (
    <>
      <Canvas
        style={{
          position: "fixed",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 30,
        }}
        shadows
        dpr={[1, 1.5]}
        gl={{ antialias: true }}
        camera={{ position: [0, 0, 5], fov: 30 }}
      >
        <Suspense fallback={null}>
          <View.Port />
        </Suspense>
        {/* <Perf /> */}
      </Canvas>
      <Loader
        containerStyles={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 100,
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          color: "white",
          padding: "20px",
          borderRadius: "10px",
          textAlign: "center",
        }}
        innerStyles={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
        barStyles={{
          width: "100%",
          height: "4px",
          backgroundColor: "#fff",
        }}
        dataStyles={{
          marginTop: "10px",
          fontSize: "14px",
        }}
        dataInterpolation={(p) => `${Math.round(p * 100)}%`}
        // initialState={(active) => true}
      />
    </>
  );
}
