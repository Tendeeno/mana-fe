import ContentImage from "./ContentImage";
import Columns from "./Columns";
import Youtube from "../public/svgs/youtube";
import IG from "../public/svgs/ig";
import Twitch from "../public/svgs/twitch";
import TwitterSmall from "../public/svgs/twittersmall";

const TalentGrid = () => {
  const creators = [
    // { name: 'The Gronks', imgUrl: '/talent/gronks.png', ytSubs: '133k', ytLink: 'https://www.youtube.com/c/TheGronks', twitchFollowers: '', twitchURL: '', instaFollowers: '4.7M', instaURL: 'https://www.instagram.com/gronk/', twFollowers: '', twLink: ''},
    {
      name: "Wendigoon",
      imgUrl: "/talent/wendigoon.png",
      ytSubs: "1.8M",
      ytLink: "https://www.youtube.com/c/Wendigoon",
      twitchFollowers: "",
      twitchURL: "",
      instaFollowers: "",
      instaURL: "",
      twFollowers: "147.7k",
      twLink: "https://twitter.com/Wendigoon8",
    },
    {
      name: "Noodle",
      imgUrl: "/talent/noodle.png",
      ytSubs: "1.1M",
      ytLink: "https://www.youtube.com/c/LegitimateNoodle",
      twitchFollowers: "",
      twitchURL: "",
      instaFollowers: "",
      instaURL: "",
      twFollowers: "59.3k",
      twLink: "https://twitter.com/LegitimatNoodle",
    },
    // { name: 'HowToBasic', imgUrl: '/talent/howtobasic.png', ytSubs: '1.2M', ytLink: '', twitchFollowers: '', twitchURL: '', instaFollowers: '', instaURL: '', twFollowers: '80.2k', twLink: ''},
    {
      name: "FitMC",
      imgUrl: "/talent/fitmc.png",
      ytSubs: "2.34M",
      ytLink: "https://www.youtube.com/c/FitMC",
      twitchFollowers: "58.7k",
      twitchURL: "https://www.twitch.tv/realfitmc",
      instaFollowers: "",
      instaURL: "",
      twFollowers: "",
      twLink: "",
    },
    {
      name: "Gibi ASMR",
      imgUrl: "/talent/gibi.png",
      ytSubs: "4.39M",
      ytLink: "https://www.youtube.com/c/GibiASMR",
      twitchFollowers: "278k",
      twitchURL: "https://www.twitch.tv/gggibi",
      instaFollowers: "",
      instaURL: "",
      twFollowers: "",
      twLink: "",
    },
    // { name: 'Nux Taku', imgUrl: '/talent/nuxtaku.png', ytSubs: '2.2M', ytLink: 'https://www.youtube.com/c/NuxTaku', twitchFollowers: '', twitchURL: '', instaFollowers: '', instaURL: '', twFollowers: '384.5k', twLink: 'https://twitter.com/Nux_Taku'},
    {
      name: "RaffyTaphyASMR",
      imgUrl: "/talent/raffytaphy.png",
      ytSubs: "905k",
      ytLink: "https://www.youtube.com/c/RaffyTaphyASMR",
      twitchFollowers: "",
      twitchURL: "",
      instaFollowers: "",
      instaURL: "",
      twFollowers: "",
      twLink: "",
    },
    // { name: 'Cold Ones', imgUrl: '/talent/coldones.png', ytSubs: '2.5M', ytLink: 'https://www.youtube.com/c/coldones', twitchFollowers: '', twitchURL: '', instaFollowers: '', instaURL: '', twFollowers: '334.6k', twLink: 'https://twitter.com/ColdOnes'},
    // { name: 'The Ireland Boys', imgUrl: '/talent/theirelandboys.png', ytSubs: '4.3M', ytLink: 'https://www.youtube.com/c/IrelandBoysProductions', twitchFollowers: '', twitchURL: '', instaFollowers: '252k', instaURL: 'https://www.instagram.com/irelandboysproductions/', twFollowers: '', twLink: ''},
    // { name: 'Kris Yee', imgUrl: '/talent/krisyee.png', ytSubs: '646k', ytLink: 'https://www.youtube.com/c/KristoferYee', twitchFollowers: '304k', twitchURL: 'https://www.twitch.tv/kristoferyee', instaFollowers: '', instaURL: '', twFollowers: '', twLink: ''},
    {
      name: "TipToeTingles",
      imgUrl: "/talent/tiptoetingles.png",
      ytSubs: "437k",
      ytLink: "https://www.youtube.com/c/TiptoeTinglesASMR",
      twitchFollowers: "64.7k",
      twitchURL: "https://www.twitch.tv/tiptoetingles",
      instaFollowers: "",
      instaURL: "",
      twFollowers: "",
      twLink: "",
    },
    {
      name: "Frivoulous Fox",
      imgUrl: "/talent/fox.png",
      ytSubs: "1.86M",
      ytLink: "https://www.youtube.com/c/FrivolousFoxASMR",
      twitchFollowers: "177k",
      twitchURL: "https://www.twitch.tv/frivvifox",
      instaFollowers: "",
      instaURL: "",
      twFollowers: "",
      twLink: "",
    },
    {
      name: "JimmyHere",
      imgUrl: "/talent/jimmy.png",
      ytSubs: "1.4M",
      ytLink: "https://www.youtube.com/c/JimmyHereOfficial",
      twitchFollowers: "304k",
      twitchURL: "https://www.twitch.tv/JimmyHere",
      instaFollowers: "",
      instaURL: "",
      twFollowers: "",
      twLink: "",
    },
    // { name: 'RDC World', imgUrl: '/talent/rdcworld.png', ytSubs: '6.1M', ytLink: 'https://www.youtube.com/c/RDCworld1', twitchFollowers: '498k', twitchURL: 'https://www.twitch.tv/rdcgaming', instaFollowers: '', instaURL: '', twFollowers: '', twLink: ''},
    {
      name: "CreepPodcast",
      imgUrl: "/talent/creepcast.jpeg",
      ytSubs: "424k",
      ytLink: "https://www.youtube.com/c/creeppodcast",
      twitchFollowers: "",
      twitchURL: "",
      instaFollowers: "",
      instaURL: "",
      twFollowers: "",
      twLink: "",
    },
    // { name: 'Tfue', imgUrl: '/talent/tfue.png', ytSubs: '11.8M', ytLink: 'https://www.youtube.com/user/TTfue', twitchFollowers: '11.2M', twitchURL: 'https://www.twitch.tv/Tfue', instaFollowers: '', instaURL: '', twFollowers: '', twLink: ''},
    {
      name: "DadsBeingDudes",
      imgUrl: "/talent/dadsbeingdudes.jpeg",
      ytSubs: "111k",
      ytLink: "https://www.youtube.com/c/dadsbeingdudes",
      twitchFollowers: "",
      twitchURL: "",
      instaFollowers: "",
      instaURL: "",
      twFollowers: "",
      twLink: "",
    },
    {
      name: "ASMRGlow",
      imgUrl: "/talent/glow.png",
      ytSubs: "1.6M",
      ytLink: "https://www.youtube.com/c/ASMRGlow",
      twitchFollowers: "",
      twitchURL: "",
      instaFollowers: "200k",
      instaURL: "https://www.instagram.com/asmrglow/",
      twFollowers: "",
      twLink: "",
    },
    {
      name: "Phillion",
      imgUrl: "/talent/phillion.png",
      ytSubs: "808k",
      ytLink: "https://www.youtube.com/c/Philion",
      twitchFollowers: "",
      twitchURL: "",
      instaFollowers: "",
      instaURL: "",
      twFollowers: "",
      twLink: "",
    },
    // { name: 'TotallyNotMark', imgUrl: '/talent/totallynotmark.png', ytSubs: '758k', ytLink: 'https://www.youtube.com/c/TotallyNotMarkTube', twitchFollowers: '', twitchURL: '', instaFollowers: '', instaURL: '', twFollowers: '94.1k', twLink: 'https://twitter.com/TotallyNotMark'},
    {
      name: "Goodnight Moon",
      imgUrl: "/talent/goodnightmoon.png",
      ytSubs: "964k",
      ytLink: "",
      twitchFollowers: "",
      twitchURL: "",
      instaFollowers: "82.6k",
      instaURL: "https://www.instagram.com/fresh.blush",
      twFollowers: "",
      twLink: "",
    },
    {
      name: "Penguinz0",
      imgUrl: "/talent/charlie.png",
      ytSubs: "11.3M",
      ytLink: "https://www.youtube.com/user/penguinz0",
      twitchFollowers: "4.4M",
      twitchURL: "https://www.twitch.tv/moistcr1tikal",
      instaFollowers: "",
      instaURL: "",
      twFollowers: "",
      twLink: "",
    },
    {
      name: "LukeAFK",
      imgUrl: "/talent/lukeafk.png",
      ytSubs: "3.8M",
      ytLink: "",
      twitchFollowers: "169K",
      twitchURL: "",
      instaFollowers: "",
      instaURL: "",
      twFollowers: "",
      twLink: "",
    },
    {
      name: "Crispy Concords",
      imgUrl: "/talent/crispy_concords.png",
      ytSubs: "2.92M",
      ytLink: "",
      twitchFollowers: "200K",
      twitchURL: "",
      instaFollowers: "",
      instaURL: "",
      twFollowers: "",
      twLink: "",
    },
    {
      name: "Blameitonjorge",
      imgUrl: "/talent/blameitonjorge.png",
      ytSubs: "1.66M",
      ytLink: "",
      twitchFollowers: "",
      twitchURL: "",
      instaFollowers: "",
      instaURL: "",
      twFollowers: "59k",
      twLink: "",
    },
    {
      name: "Huggbees",
      imgUrl: "/talent/hugbees.png",
      ytSubs: "1.55M",
      ytLink: "",
      twitchFollowers: "36.8K",
      twitchURL: "",
      instaFollowers: "",
      instaURL: "",
      twFollowers: "",
      twLink: "",
    },
    {
      name: "BionicPIG",
      imgUrl: "/talent/bionicpig.png",
      ytSubs: "913K",
      ytLink: "",
      twitchFollowers: "",
      twitchURL: "",
      instaFollowers: "",
      instaURL: "",
      twFollowers: "",
      twLink: "",
    },
    {
      name: "Indiemaus",
      imgUrl: "/talent/indiemaus.png",
      ytSubs: "807k",
      ytLink: "",
      twitchFollowers: "",
      twitchURL: "",
      instaFollowers: "",
      instaURL: "",
      twFollowers: "57.4k",
      twLink: "",
    },
    {
      name: "Ordinary Sausage",
      imgUrl: "/talent/ordinary_sausage.png",
      ytSubs: "728k",
      ytLink: "",
      twitchFollowers: "",
      twitchURL: "",
      instaFollowers: "",
      instaURL: "",
      twFollowers: "26.4k",
      twLink: "",
    },
    {
      name: "Vintendo",
      imgUrl: "/talent/vintendo.png",
      ytSubs: "1.5M",
      ytLink: "",
      twitchFollowers: "",
      twitchURL: "",
      instaFollowers: "",
      instaURL: "",
      twFollowers: "",
      twLink: "",
    },
    {
      name: "Spoonkid 2",
      imgUrl: "/talent/spoonkid_2.png",
      ytSubs: "904k",
      ytLink: "",
      twitchFollowers: "518k",
      twitchURL: "",
      instaFollowers: "",
      instaURL: "",
      twFollowers: "",
      twLink: "",
    },
    {
      name: "MightyKeef",
      imgUrl: "/talent/mightykeef.png",
      ytSubs: "639K",
      ytLink: "",
      twitchFollowers: "",
      twitchURL: "",
      instaFollowers: "",
      instaURL: "",
      twFollowers: "109k",
      twLink: "",
    },
    {
      name: "XP to Level 3",
      imgUrl: "/talent/xptolevel3.png",
      ytSubs: "709k",
      ytLink: "",
      twitchFollowers: "",
      twitchURL: "",
      instaFollowers: "",
      instaURL: "",
      twFollowers: "40.2k",
      twLink: "",
    },
    {
      name: "City Planner Plays",
      imgUrl: "/talent/cityplannerplays.png",
      ytSubs: "572k",
      ytLink: "",
      twitchFollowers: "",
      twitchURL: "",
      instaFollowers: "",
      instaURL: "",
      twFollowers: "7.6k",
      twLink: "",
    },
    {
      name: "Linkus7",
      imgUrl: "/talent/linkus7.png",
      ytSubs: "267k",
      ytLink: "",
      twitchFollowers: "257k",
      twitchURL: "",
      instaFollowers: "",
      instaURL: "",
      twFollowers: "",
      twLink: "",
    },
    {
      name: "Billiam",
      imgUrl: "/talent/billiam.png",
      ytSubs: "631K",
      ytLink: "",
      twitchFollowers: "",
      twitchURL: "",
      instaFollowers: "",
      instaURL: "",
      twFollowers: "",
      twLink: "",
    },
    {
      name: "Cadaber",
      imgUrl: "/talent/cadabier.png",
      ytSubs: "304k",
      ytLink: "",
      twitchFollowers: "",
      twitchURL: "",
      instaFollowers: "",
      instaURL: "",
      twFollowers: "",
      twLink: "",
    },
    {
      name: "Tmal",
      imgUrl: "/talent/tmal.png",
      ytSubs: "479k",
      ytLink: "",
      twitchFollowers: "",
      twitchURL: "",
      instaFollowers: "",
      instaURL: "",
      twFollowers: "",
      twLink: "",
    },
    {
      name: "UnitedGamer",
      imgUrl: "/talent/unitedgamer.png",
      ytSubs: "490k",
      ytLink: "",
      twitchFollowers: "",
      twitchURL: "",
      instaFollowers: "",
      instaURL: "",
      twFollowers: "55.4k",
      twLink: "",
    },
    {
      name: "Saberspark",
      imgUrl: "/talent/saberspark.png",
      ytSubs: "1.8M",
      ytLink: "",
      twitchFollowers: "",
      twitchURL: "",
      instaFollowers: "",
      instaURL: "",
      twFollowers: "55.4k",
      twLink: "",
    },
    {
      name: "Omni",
      imgUrl: "/talent/omni.png",
      ytSubs: "376k",
      ytLink: "",
      twitchFollowers: "61.6k",
      twitchURL: "",
      instaFollowers: "",
      instaURL: "",
      twFollowers: "",
      twLink: "",
    },
    {
      name: "Jocie B",
      imgUrl: "/talent/jocieb.png",
      ytSubs: "2.2M",
      ytLink: "",
      twitchFollowers: "",
      twitchURL: "",
      instaFollowers: "",
      instaURL: "",
      twFollowers: "",
      twLink: "",
    },
    {
      name: "Vixella",
      imgUrl: "/talent/vixella.png",
      ytSubs: "1.7M",
      ytLink: "",
      twitchFollowers: "",
      twitchURL: "",
      instaFollowers: "",
      instaURL: "",
      twFollowers: "",
      twLink: "",
    },
  ];

  const handleMouseOver = (e) => {
    let stats = e.currentTarget.querySelector("#creator-stats");
    let title = e.currentTarget.querySelector("p");
    title.style.transform = "translateY(-24px) ";
    title.style.fontSize = "40px";
    stats.style.opacity = "1";

    e.target.classList.add("grayscale-0");
  };

  const handleMouseOut = (e) => {
    let stats = e.currentTarget.querySelector("#creator-stats");
    let title = e.currentTarget.querySelector("p");
    title.style.fontSize = "20px";
    title.style.transform = "translateY(0)";
    stats.style.opacity = "0";

    e.target.classList.remove("grayscale-0");
  };

  return (
    <div className="relative bg-dark" id="Talent">
      <div className="max-w-[1440px] mx-auto relative">
        <Columns />
        <div className="relative z-40 px-4 py-12 lg:px-16 xl:px-20 sm:pb-24 lg:py-32">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-4xl font-bold text-left text-white uppercase md:text-6xl">
              Our Talent
            </h2>
            <a
              href="#Contact"
              className="block px-4 py-3 text-sm leading-none uppercase transition-all border border-mana-green text-mana-green condensed md:text-base hover:bg-mana-green hover:text-dark ">
              Request Our Full Roster
            </a>
          </div>
          <div className="grid w-full grid-cols-2 md:grid-cols-4 md:grid-rows-9 auto-rows-fr">
            {creators.map(
              (
                {
                  name,
                  imgUrl,
                  ytSubs,
                  ytLink,
                  twFollowers,
                  twLink,
                  twitchFollowers,
                  twitchURL,
                  instaFollowers,
                  instaURL,
                },
                idx
              ) => {
                return (
                  <div
                    key={idx}
                    className={`bg-black mr-[1px] mb-[1px] p-4 pb-[100%] md:pb-0 md:min-h-talent-item relative overflow-hidden 
                      ${idx === 0 ? "md:col-span-2 md:row-span-1" : ""}
                      ${idx === 1 ? "md:col-span-2 md:row-span-2" : ""}
                      ${idx === 4 ? "md:col-span-1 md:row-span-2" : ""}
                      ${idx === 9 ? "md:col-span-2 md:row-span-1" : ""}
                      ${idx === 10 ? "md:col-span-2 md:row-span-2" : ""}
                      ${idx === 17 ? "md:col-span-2 md:row-span-2" : ""}
                      ${idx === 18 ? "md:col-span-1 md:row-span-2" : ""}
                    `}
                    onMouseEnter={handleMouseOver}
                    onMouseLeave={handleMouseOut}>
                    <ContentImage
                      src={imgUrl}
                      alt={name}
                      fill
                      sizes={idx === 0 || idx === 1 || idx === 9 || idx === 10 || idx === 17 ? "(max-width: 1439px) 50vw, 640px" : "(max-width: 767px) 50vw, (max-width: 1439px) 25vw, 320px"}
                      className="absolute inset-0 z-10 object-cover object-center w-full h-full transition-all duration-300 grayscale"
                    />
                    <p className="absolute z-20 text-xl leading-none text-white uppercase transition-all duration-300 pointer-events-none condensed bottom-3 left-3 text-light">
                      {name}
                    </p>
                    <div
                      id="creator-stats"
                      className="absolute z-30 flex transition-all duration-300 opacity-0 left-3 bottom-3">
                      {ytSubs !== "" && (
                        <a
                          href={ytLink}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center pr-2 text-base font-semibold text-white condensed">
                          <Youtube />
                          <span className="pl-1">{ytSubs} Subscribers</span>
                        </a>
                      )}
                      {twFollowers !== "" && (
                        <a
                          href={twLink}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center pr-2 text-base font-semibold text-white condensed">
                          <TwitterSmall />
                          <span className="pl-1">{twFollowers} Followers</span>
                        </a>
                      )}
                      {twitchFollowers !== "" && (
                        <a
                          href={twitchURL}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center pr-2 text-base font-semibold text-white condensed">
                          <Twitch />
                          <span className="pl-1">
                            {twitchFollowers} Followers
                          </span>
                        </a>
                      )}
                      {instaFollowers !== "" && (
                        <a
                          href={instaURL}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center pr-2 text-base font-semibold text-white condensed">
                          <IG />
                          <span className="pl-1">
                            {instaFollowers} Followers
                          </span>
                        </a>
                      )}
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentGrid;
