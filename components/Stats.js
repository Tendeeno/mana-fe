import ContentImage from "./ContentImage";
import Columns from "./Columns";
import { useEffect, useState } from "react";

const Stats = () => {
  const logos = [
    { brand: "Helix", imgURL: "/brands/helix.png" },
    // {brand: 'Keeps', imgURL: '/brands/keeps.png'},
    { brand: "Manscaped", imgURL: "/brands/manscaped.png" },
    { brand: "Raycon", imgURL: "/brands/raycon.png" },
    { brand: "Audible", imgURL: "/brands/audible.png" },
    { brand: "Monster", imgURL: "/brands/monster.png" },
    { brand: "GamerSupps", imgURL: "/brands/supps.png" },
    { brand: "Gameloft", imgURL: "/brands/gameloft.png" },
    { brand: "Control", imgURL: "/brands/ctrl.png" },
    { brand: "Opera GX", imgURL: "/brands/opera.png" },
    { brand: "Holzkern", imgURL: "/brands/holzkern.png" },
    { brand: "Fabletics", imgURL: "/brands/fabletics.png" },
    // {brand: 'Reeses', imgURL: '/brands/reeses.png'},
    // { brand: "Honey", imgURL: "/brands/honey.png" },
    { brand: "Harrys", imgURL: "/brands/harrys.png" },
    // { brand: "ScentBird", imgURL: "/brands/scentbird.png" },
    { brand: "AG1", imgURL: "/brands/ag1.png" },
  ];

  const [currentIteration, setCurrentIteration] = useState(0);
  const activeLogos = logos.slice(currentIteration * 4, currentIteration * 4 + 4);

  const statistics = [
    { label: "campaigns", value: "1,000+" },
    { label: "creators", value: "400+" },
    { label: "brands", value: "150+" },
    { label: "ytd deals signed", value: "2,000+" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIteration((index) => (index + 1) % 3);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative bg-dark">
      <div className="max-w-[1440px] mx-auto relative">
        <Columns />
        <div className="relative z-40 px-4 py-12 lg:px-16 xl:px-20 sm:pb-24 lg:py-32">
          <div className="flex items-center justify-between mb-6 md:mb-12">
            <h2 className="text-4xl font-bold text-left text-white uppercase md:text-6xl">
              Our Brand Partners
            </h2>
          </div>
          <div className="grid items-start grid-cols-2 mb-6 md:grid-cols-4 md:mb-12">
            {activeLogos.map(({ brand, imgURL }, idx) => {
              return (
                <div key={idx} className={`text-left w-full`}>
                  <ContentImage
                    src={imgURL}
                    alt={brand}
                    sizes="(max-width: 639px) 140px, (max-width: 767px) 180px, (max-width: 1279px) 140px, 214px"
                    className="w-full h-auto mb-6 md:mb-0 max-w-[140px] sm:max-w-[180px] md:max-w-[140px] xl:max-w-[214px]"
                  />
                  {/* <span className="block text-lg font-bold uppercase md:text-3xl text-gray-text">{brand}</span> */}
                </div>
              );
            })}
          </div>
          <div className="flex flex-wrap w-full">
            {statistics.map(({ label, value }, idx) => {
              return (
                <div
                  key={idx}
                  className="w-1/2 mb-6 text-left md:w-1/4 md:mb-12">
                  <span className="block font-bold uppercase xl::text-xl lg:text-lg md:text-base text-gray-text">
                    {label}
                  </span>
                  <span className="block text-5xl font-bold xl:text-8xl lg:text-7xl text-mana-green">
                    {value}
                  </span>
                </div>
              );
            })}
          </div>
          <a
            href="#Contact"
            className="inline-block px-4 py-3 text-sm leading-none uppercase transition-all border border-mana-green text-mana-green condensed md:text-base hover:bg-mana-green hover:text-dark ">
            Request Case Studies
          </a>
        </div>
      </div>
    </div>
  );
};

export default Stats;
