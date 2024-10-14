"use client";

import { useRef } from "react";
import { Group } from "three";
import { Environment } from "@react-three/drei";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import FloatingCan from "@/components/FloatingCans";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type Props = object;

export default function HeroScene({}: Props) {
  const can1ref = useRef<Group>(null);
  const can2ref = useRef<Group>(null);
  const can3ref = useRef<Group>(null);
  const can4ref = useRef<Group>(null);
  const can5ref = useRef<Group>(null);

  const can1GroupRef = useRef<Group>(null);
  const can2GroupRef = useRef<Group>(null);

  const groupRef = useRef<Group>(null);

  const FLOAT_SPEED = 1.5;

  //animating

  useGSAP(() => {
    if (
      !can1ref.current ||
      !can2ref.current ||
      !can3ref.current ||
      !can4ref.current ||
      !can5ref.current ||
      !can1GroupRef.current ||
      !can2GroupRef.current ||
      !groupRef.current
    )
      return;

    //   set can starting positions

    gsap.set(can1ref.current.position, { x: -1.5 });
    gsap.set(can1ref.current.rotation, { z: -0.5 });

    gsap.set(can2ref.current.position, { x: 1.5 });
    gsap.set(can2ref.current.rotation, { z: 0.5 });

    gsap.set(can3ref.current.position, { y: 5, z: 2 });
    gsap.set(can4ref.current.position, { x: 2, y: 4, z: 2 });
    gsap.set(can5ref.current.position, { y: -5 });

    const introTl = gsap.timeline({
      defaults: { duration: 3, ease: "back.Out(1.4)" },
    });

    if (window.scrollY < 20) {
      introTl
        .from(can1ref.current.position, { y: -5, x: 1 }, 0)
        .from(can1ref.current.rotation, { z: 3 }, 0)
        .from(can2ref.current.position, { y: 5, x: 1 }, 0)
        .from(can2ref.current.rotation, { z: 3 }, 0);
    }

    const scrollTl = gsap.timeline({
      defaults: { duration: 2 },
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
      },
    });

    scrollTl
      //roatate
      .to(groupRef.current.rotation, { y: Math.PI * 2 })

      //can 1
      .to(can1ref.current.position, { x: -0.2, y: -0.7, z: -2 }, 0)
      .to(can1ref.current.rotation, { z: 0.3 }, 0)

      //can 2
      .to(can2ref.current.position, { x: 1, y: -0.2, z: -1 }, 0)
      .to(can2ref.current.rotation, { z: 0 }, 0)

      //can 3
      .to(can3ref.current.position, { x: -0.3, y: 0.5, z: -1 }, 0)
      .to(can3ref.current.rotation, { z: -0.1 }, 0)

      //can 4
      .to(can4ref.current.position, { x: 0, y: -0.3, z: 0.5 }, 0)
      .to(can4ref.current.rotation, { z: 0.3 }, 0)

      //can 5
      .to(can5ref.current.position, { x: 0.3, y: 0.5, z: -0.5 }, 0)
      .to(can5ref.current.rotation, { z: -0.25 }, 0)

      //shift grp to right
      .to(
        groupRef.current.position,
        {
          x: 1,
          duration: 3,
          ease: "sine.inOut",
        },
        1.3
      );
  });

  return (
    <group ref={groupRef}>
      <Environment files={"/hdrs/lobby.hdr"} environmentIntensity={1.5} />
      <group ref={can1GroupRef}>
        <FloatingCan
          ref={can1ref}
          flavor="blackCherry"
          floatSpeed={FLOAT_SPEED}
        />
      </group>

      <group ref={can2GroupRef}>
        <FloatingCan
          ref={can2ref}
          flavor="lemonLime"
          floatSpeed={FLOAT_SPEED}
        />
      </group>
      <FloatingCan ref={can3ref} flavor="grape" floatSpeed={FLOAT_SPEED} />
      <FloatingCan
        ref={can4ref}
        flavor="strawberryLemonade"
        floatSpeed={FLOAT_SPEED}
      />
      <FloatingCan ref={can5ref} flavor="watermelon" floatSpeed={FLOAT_SPEED} />
    </group>
  );
}
