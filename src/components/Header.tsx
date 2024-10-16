import React from "react";
import Bubbly from "./SvgLogo";

type Props = object;

export default function Header({}: Props) {
  return (
    <header className="flex justify-center py-4 -mb-28">
      <div className="">
        <Bubbly />
      </div>
    </header>
  );
}
