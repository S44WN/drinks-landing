"use client";

import React from "react";
import { Bounded } from "@/components/Bounded";
import { View } from "@react-three/drei";
import SkyScene from "./SkyScene";

type Props = object;

const SkyDive = ({}: Props) => {
  return (
    <Bounded className="skydive h-screen">
      <View className="h-screen w-screen">
        <SkyScene
          flavour={"lemonLime"}
          sentence={"Dive into the depth of flavour"}
        />
      </View>
    </Bounded>
  );
};

export default SkyDive;
