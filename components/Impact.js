import Columns from "./Columns";
import { useEffect, useState } from "react";

const Impact = () => {
  const [activeLogos, setActiveLogos] = useState([
    { brand: "Helix", imgURL: "" },
    { brand: "Keeps", imgURL: "" },
    { brand: "Manscaped", imgURL: "" },
    { brand: "Raycon", imgURL: "" },
  ]);

  const [currentIteration, setCurrentIteration] = useState(0);

  const statistics = [
    { label: "campaigns", value: "1,000+" },
    { label: "creators", value: "400+" },
    { label: "brands", value: "150+" },
    { label: "ytd deals signed", value: "2,000+" },
  ];

  return (
    <div className="relative bg-dark">
      <div className="max-w-[1440px] mx-auto relative">
        <Columns />
        <div className="relative z-40 px-4 py-12 lg:px-16 xl:px-20 sm:pb-24 lg:py-32">
          <div className="mb-6 md:mb-12">
            <img
              src="/impact-logo.png"
              className="w-full mt-6 mb-4 md:w-6/12 md:mt-0"
            />
            {/* <h2 className="text-4xl font-bold text-left text-white uppercase md:text-6xl">
              MANA Impact
            </h2> */}
            <p className="text-xl font-light leading-normal text-gray-text">
              In 2022 MANA launched its Impact division, a department
              exclusively focused on combining creators with giving back to
              communities in need. In less than one short year since its
              inception IMPACT has already successfully ran two fundraising
              campaigns raising a combined total of over $293,000 for
              organizations in need.
            </p>
          </div>
          <div className="p-6 mb-12 border border-white/20">
            <h3 className="mb-4 text-3xl font-bold text-left text-white uppercase md:text-4xl">
              MANAthon - DEC 2022
            </h3>
            <div className="flex flex-col justify-between md:flex-row">
              <div className="w-full md:w-5/12">
                <p className="text-lg text-white">
                  In Dec 2022, kicking off the launch of IMPACT, Charlie, Gina
                  and Tyler, MANA’s founders spearheaded the first campaign.
                  Working together on a two day Holiday streaming relay the team
                  had a goal to raise $100,000 for the Brain & Behavior Research
                  Foundation. Altogether, the livestream had a combined 63,848
                  hours of watch time while raising over $110,000 for their
                  goal.
                </p>
                <div className="flex justify-between w-full mt-6">
                  <div className="text-left">
                    <span className="block mb-0.5 text-base text-gray-400">
                      Raised
                    </span>
                    <span className="block mb-0.5 text-base text-white">
                      $110,100.65
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="block mb-0.5 text-base text-gray-400">
                      Goal
                    </span>
                    <span className="block mb-0.5 text-base text-white">
                      $100,100.00
                    </span>
                  </div>
                </div>
                <div className="w-full h-1 border rounded-lg bg-mana-green border-white/10"></div>
              </div>
              <img
                src="/manathon.jpg"
                className="w-full mt-6 md:w-6/12 md:mt-0"
              />
            </div>
          </div>
          <div className="p-6 mb-12 border border-white/20">
            <h3 className="mb-4 text-3xl font-bold text-left text-white uppercase md:text-4xl">
              MANAthon - AUG 2023
            </h3>
            <div className="flex flex-col justify-between md:flex-row">
              <div className="w-full md:w-5/12">
                <p className="text-lg text-white">
                  In Aug, 2023 Make-A-Wish and MANA IMPACT teamed up to support
                  their Summer of Wishes initiative with the aim to help
                  Make-A-Wish hit their $50,000 goal. 13 ASMR Content Creators
                  on Mana Talent’s roster participated as a team in “Summer of
                  Wishes” collectively raising over $36,000, a staggering 58% of
                  the “Summer of Wishes” total goal. On average each creator who
                  participated raised 71% more than their goal proving what
                  power creators have to make a difference.
                </p>

                <div className="flex justify-between w-full mt-6">
                  <div className="text-left">
                    <span className="block mb-0.5 text-base text-gray-400">
                      Raised
                    </span>
                    <span className="block mb-0.5 text-base text-white">
                      $36,308.62
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="block mb-0.5 text-base text-gray-400">
                      Goal
                    </span>
                    <span className="block mb-0.5 text-base text-white">
                      $25,000.00
                    </span>
                  </div>
                </div>
                <div className="w-full h-1 border rounded-lg bg-mana-green border-white/10"></div>
                <p className="mt-6 text-sm text-white">
                  Creators Involved: TipToe Tingles ASMR, Catplant ASMR, Busy B
                  ASMR, Goodnight Moon (integration and Twitch stream), ASMR
                  Shanny (YT stream), Sarah Lavender ASMR, ASMR Glow,
                  RaffyTaphyASMR, Rapunzel ASMR, ASMR Jas, The ASMR Ryan, Amy
                  Kay ASMR, Marno ASMR,
                </p>
              </div>
              <img
                src="/summer-wishes.png"
                className="w-full mt-6 md:w-6/12 md:mt-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
