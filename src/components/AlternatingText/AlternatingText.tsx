"use client";

import { Bounded } from "@/components/Bounded";
import clsx from "clsx";

type Props = object;

const textGroup: {
  heading: string;
  subheading: string;
}[] = [
  {
    heading: "Gut-Friendly Goodness",
    subheading:
      "Our soda is packed with prebiotics and one billion probiotics, giving your gut the love it deserves. Say goodbye to bloating and hello to a happy, healthy digestive system with every sip.",
  },
  {
    heading: "Light Calories, Big Flavor",
    subheading:
      "Indulge in bold, refreshing taste without the guilt. At just twenty calories per can, you can enjoy all the flavor you crave with none of the compromise.",
  },
  {
    heading: "Naturally Refreshing",
    subheading:
      "Made with only the best natural ingredients, our soda is free from artificial sweeteners and flavors. It's a crisp, clean taste that feels as good as it tastes, giving you a boost of real, natural refreshment.",
  },
];

function AlternatingText({}: Props) {
  return (
    <Bounded className="alternating-text-container relative bg-orange-100 text-neutral-700">
      <div>
        <div className="grid relative">
          {/* view */}

          {textGroup.map((text, index) => (
            <div
              key={index}
              className="alternating-section grid h-screen place-items-center gap-x-12 md:grid-cols-2"
            >
              <div
                className={clsx(
                  index % 2 === 0 ? "col-start-1" : "md:col-start-2",

                  "rounded-lg p-4 backdrop-blur-lg max-md:bg-white/30"
                )}
              >
                <h2 className="font-[family-name:var(--font-canopee)] text-balance text-6xl font-bold">
                  {text.heading}
                </h2>
                <div className="font-[family-name:var(--font-bright-melody)] text-neutral-500 mt-4 text-xl">
                  {text.subheading}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Bounded>
  );
}

export default AlternatingText;
