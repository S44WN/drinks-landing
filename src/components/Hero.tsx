import Image from "next/image";
import React from "react";

import bunchedCans from "../../public/images/all-cans-bunched.png";
import { Bounded } from "@/components/Bounded";
import Link from "next/link";
import { TextSplitter } from "./TextSplitter";

type Props = {
  className?: string;
};

export default function Hero({}: Props) {
  return (
    <Bounded className="hero">
      <div className="grid">
        <div className="grid h-screen place-items-center ">
          <div className="grid auto-rows-min place-items-center text-center">
            <h1 className="font-[family-name:var(--font-montserrat)] hero-header lg:text-[8rem]  md:text-[6rem] text-6xl font-black uppercase leading-[.8] text-orange-400">
              <TextSplitter
                text="Taste The Thunder"
                wordDisplayStyle="block"
                className="hero-header-word"
              />
            </h1>
            <h2 className="hero-subheading mt-4 text-2xl font-semibold text-sky-950 lg:text-4xl">
              Soda Perfected
            </h2>
            <p className="hero-body text-xl font-normal text-sky-950 leading-[.9]">
              sugar free, naturally sweetened, and low in calories.
            </p>
            <Link
              href={"/"}
              className="hero-button mt-12 text-xl font-semibold text-sky-950 leading-[.9] bg-orange-400 hover:bg-orange-500 rounded-md px-8 py-4 transition-all duration-200 ease-in-out tracking-wide "
            >
              Shop Now
            </Link>
          </div>
        </div>
        <div className="grid text-side relative z-[80] h-screen place-items-center gap-4 md:grid-cols-2">
          <Image
            src={bunchedCans}
            alt="All cans bunched"
            width={500}
            height={500}
            className="w-full md:hidden"
          />
          <div className="">
            <h2 className="text-side-heading text-balance uppercase text-5xl font-black text-sky-950 lg:text-7xl ">
              <TextSplitter text="Try all 5 Flavours" />
            </h2>
            <p className="text-side-body mt-4 max-w-xl text-balance text-xl font-[500] text-sky-950 leading-[.99]">
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
