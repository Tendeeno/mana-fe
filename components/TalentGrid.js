import Columns from "./Columns"
import Youtube from '../public/svgs/youtube'
import IG from '../public/svgs/ig'
import Twitch from '../public/svgs/twitch'
import TwitterSmall from '../public/svgs/twittersmall'

const TalentGrid = () => {
  const creators = [
    { name: 'The Gronks', imgUrl: '/talent/gronks.png', ytSubs: '133k', ytLink: 'https://www.youtube.com/c/TheGronks', twitchFollowers: '', twitchURL: '', instaFollowers: '4.7M', instaURL: 'https://www.instagram.com/gronk/', twFollowers: '', twLink: ''},
    { name: 'Wendigoon', imgUrl: '/talent/wendigoon.png', ytSubs: '1.8M', ytLink: 'https://www.youtube.com/c/Wendigoon', twitchFollowers: '', twitchURL: '', instaFollowers: '', instaURL: '', twFollowers: '147.7k', twLink: 'https://twitter.com/Wendigoon8'}, 
    { name: 'Noodle', imgUrl: '/talent/noodle.png', ytSubs: '1.1M', ytLink: 'https://www.youtube.com/c/LegitimateNoodle', twitchFollowers: '', twitchURL: '', instaFollowers: '', instaURL: '', twFollowers: '59.3k', twLink: 'https://twitter.com/LegitimatNoodle'},
    { name: 'HowToBasic', imgUrl: '/talent/howtobasic.png', ytSubs: '1.2M', ytLink: '', twitchFollowers: '', twitchURL: '', instaFollowers: '', instaURL: '', twFollowers: '80.2k', twLink: ''},
    { name: 'FitMC', imgUrl: '/talent/fitmc.png', ytSubs: '2.34M', ytLink: 'https://www.youtube.com/c/FitMC', twitchFollowers: '58.7k', twitchURL: 'https://www.twitch.tv/realfitmc', instaFollowers: '', instaURL: '', twFollowers: '', twLink: ''},
    { name: 'Gibi ASMR', imgUrl: '/talent/gibi.png', ytSubs: '4.39M', ytLink: 'https://www.youtube.com/c/GibiASMR', twitchFollowers: '278k', twitchURL: 'https://www.twitch.tv/gggibi', instaFollowers: '', instaURL: '', twFollowers: '', twLink: ''}, 
    { name: 'Nux Taku', imgUrl: '/talent/nuxtaku.png', ytSubs: '2.2M', ytLink: 'https://www.youtube.com/c/NuxTaku', twitchFollowers: '', twitchURL: '', instaFollowers: '', instaURL: '', twFollowers: '384.5k', twLink: 'https://twitter.com/Nux_Taku'},
    { name: 'RaffyTaphyASMR', imgUrl: '/talent/raffytaphy.png', ytSubs: '905k', ytLink: 'https://www.youtube.com/c/RaffyTaphyASMR', twitchFollowers: '', twitchURL: '', instaFollowers: '', instaURL: '', twFollowers: '', twLink: ''},
    { name: 'Cold Ones', imgUrl: '/talent/coldones.png', ytSubs: '2.5M', ytLink: 'https://www.youtube.com/c/coldones', twitchFollowers: '', twitchURL: '', instaFollowers: '', instaURL: '', twFollowers: '334.6k', twLink: 'https://twitter.com/ColdOnes'},
    { name: 'The Ireland Boys', imgUrl: '/talent/theirelandboys.png', ytSubs: '4.3M', ytLink: 'https://www.youtube.com/c/IrelandBoysProductions', twitchFollowers: '', twitchURL: '', instaFollowers: '252k', instaURL: 'https://www.instagram.com/irelandboysproductions/', twFollowers: '', twLink: ''},
    { name: 'Kris Yee', imgUrl: '/talent/krisyee.png', ytSubs: '646k', ytLink: 'https://www.youtube.com/c/KristoferYee', twitchFollowers: '304k', twitchURL: 'https://www.twitch.tv/kristoferyee', instaFollowers: '', instaURL: '', twFollowers: '', twLink: ''},
    { name: 'TipToeTingles', imgUrl: '/talent/tiptoetingles.png', ytSubs: '437k', ytLink: 'https://www.youtube.com/c/TiptoeTinglesASMR', twitchFollowers: '64.7k', twitchURL: 'https://www.twitch.tv/tiptoetingles', instaFollowers: '', instaURL: '', twFollowers: '', twLink: ''},
    { name: 'Frivoulous Fox', imgUrl: '/talent/fox.png', ytSubs: '1.86M', ytLink: 'https://www.youtube.com/c/FrivolousFoxASMR', twitchFollowers: '177k', twitchURL: 'https://www.twitch.tv/frivvifox', instaFollowers: '', instaURL: '', twFollowers: '', twLink: ''},
    { name: 'JimmyHere', imgUrl: '/talent/jimmy.png', ytSubs: '1.4M', ytLink: 'https://www.youtube.com/c/JimmyHereOfficial', twitchFollowers: '304k', twitchURL: 'https://www.twitch.tv/JimmyHere', instaFollowers: '', instaURL: '', twFollowers: '', twLink: ''}, 
    { name: 'RDC World', imgUrl: '/talent/rdcworld.png', ytSubs: '6.1M', ytLink: 'https://www.youtube.com/c/RDCworld1', twitchFollowers: '498k', twitchURL: 'https://www.twitch.tv/rdcgaming', instaFollowers: '', instaURL: '', twFollowers: '', twLink: ''},
    { name: 'Saberspark', imgUrl: '/talent/saberspark.png', ytSubs: '1.6M', ytLink: 'https://www.youtube.com/c/Saberspark', twitchFollowers: '', twitchURL: '', instaFollowers: '', instaURL: '', twFollowers: '243.7k', twLink: ''},
    { name: 'Tfue', imgUrl: '/talent/tfue.png', ytSubs: '11.8M', ytLink: 'https://www.youtube.com/user/TTfue', twitchFollowers: '11.2M', twitchURL: 'https://www.twitch.tv/Tfue', instaFollowers: '', instaURL: '', twFollowers: '', twLink: ''},
    { name: 'Trash Taste Podcast', imgUrl: '/talent/trashtaste.png', ytSubs: '1.4M', ytLink: 'https://www.youtube.com/c/TrashTaste', twitchFollowers: '', twitchURL: '', instaFollowers: '', instaURL: '', twFollowers: '479k', twLink: ''},
    { name: 'ASMRGlow', imgUrl: '/talent/glow.png', ytSubs: '1.6M', ytLink: 'https://www.youtube.com/c/ASMRGlow', twitchFollowers: '', twitchURL: '', instaFollowers: '200k', instaURL: 'https://www.instagram.com/asmrglow/', twFollowers: '', twLink: ''},
    { name: 'Phillion', imgUrl: '/talent/phillion.png', ytSubs: '808k', ytLink: 'https://www.youtube.com/c/Philion', twitchFollowers: '', twitchURL: '', instaFollowers: '', instaURL: '', twFollowers: '', twLink: ''}, 
    { name: 'TotallyNotMark', imgUrl: '/talent/totallynotmark.png', ytSubs: '758k', ytLink: 'https://www.youtube.com/c/TotallyNotMarkTube', twitchFollowers: '', twitchURL: '', instaFollowers: '', instaURL: '', twFollowers: '94.1k', twLink: 'https://twitter.com/TotallyNotMark'},
    { name: 'Goodnight Moon', imgUrl: '/talent/goodnightmoon.png', ytSubs: '964k', ytLink: '', twitchFollowers: '', twitchURL: '', instaFollowers: '82.6k', instaURL: 'https://www.instagram.com/fresh.blush', twFollowers: '', twLink: ''},
    { name: 'Penguinz0', imgUrl: '/talent/charlie.png', ytSubs: '11.3M', ytLink: 'https://www.youtube.com/user/penguinz0', twitchFollowers: '4.4M', twitchURL: 'https://www.twitch.tv/moistcr1tikal', instaFollowers: '', instaURL: '', twFollowers: '', twLink: ''}, 
  ]

  const handleMouseOver = (e) => {
    let stats = e.currentTarget.querySelector('#creator-stats')
    let title = e.currentTarget.querySelector('p')
    title.style.transform = 'translateY(-24px) '
    title.style.fontSize = '40px'
    stats.style.opacity = '1'
    
    e.target.classList.add('grayscale-0')
  }
  
  const handleMouseOut = (e) => {
    let stats = e.currentTarget.querySelector('#creator-stats')
    let title = e.currentTarget.querySelector('p')
    title.style.fontSize = '20px'
    title.style.transform = 'translateY(0)'
    stats.style.opacity = '0'

    e.target.classList.remove('grayscale-0')
  }


  return (
    <div className="relative bg-dark" id="Talent">
      <div className="max-w-[1440px] mx-auto relative">
        <Columns />
        <div className="px-4 relative z-40 lg:px-16 xl:px-20 sm:pb-24 py-12 lg:py-32">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-white uppercase font-bold text-4xl md:text-6xl text-left">Our Talent</h2>
            <a href="#ContactUs"
              className="border border-mana-green text-mana-green block py-3 px-4 condensed uppercase leading-none
                md:text-base text-sm
                hover:bg-mana-green hover:text-dark transition-all
            ">
              Request Our Full Roster
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-9 w-full auto-rows-fr">
            {
              creators.map(({name, imgUrl, ytSubs, ytLink, twFollowers, twLink, twitchFollowers, twitchURL, instaFollowers, instaURL}, idx) => {
                return (
                  <div
                    key={idx}
                    className={`bg-black mr-[1px] mb-[1px] p-4 pb-[100%] md:pb-0 md:min-h-talent-item relative overflow-hidden 
                      ${idx === 0 ? 'md:col-span-2 md:row-span-1' : ''}
                      ${idx === 1 ? 'md:col-span-2 md:row-span-2' : ''}
                      ${idx === 4 ? 'md:col-span-1 md:row-span-2' : ''}
                      ${idx === 9 ? 'md:col-span-2 md:row-span-1' : ''}
                      ${idx === 10 ? 'md:col-span-2 md:row-span-2' : ''}
                      ${idx === 17 ? 'md:col-span-2 md:row-span-2' : ''}
                      ${idx === 18 ? 'md:col-span-1 md:row-span-2' : ''}
                    `}
                    onMouseEnter={handleMouseOver}
                    onMouseLeave={handleMouseOut}
                  >
                    <img 
                      src={imgUrl}
                      
                      className="absolute inset-0 z-10 object-center object-cover grayscale h-full w-full transition-all duration-300"
                    />
                    <p className="text-white uppercase text-xl leading-none condensed absolute bottom-3 z-20 left-3 text-light pointer-events-none transition-all duration-300">{name}</p>
                    <div id="creator-stats" className="flex opacity-0 transition-all duration-300 absolute z-30 left-3 bottom-3">
                      {
                        ytSubs !== '' &&
                        <a href={ytLink} target="_blank" referrerPolicy="noreferrer" className="flex pr-2 text-white text-base condensed font-semibold items-center">
                          <Youtube/>
                          <span className="pl-1">
                            {ytSubs} Subscribers
                          </span>
                        </a>
                      }
                      {
                        twFollowers !== '' &&
                        <a href={twLink} target="_blank" referrerPolicy="noreferrer" className="flex pr-2 text-white text-base condensed font-semibold items-center">
                          <TwitterSmall />
                          <span className="pl-1">{twFollowers} Followers</span>
                        </a>
                      }
                      {
                        twitchFollowers !== '' &&
                        <a href={twitchURL} target="_blank" referrerPolicy="noreferrer" className="flex pr-2 text-white text-base condensed font-semibold items-center">
                          <Twitch />
                          <span className="pl-1">{twitchFollowers} Followers</span>
                        </a>
                      }
                      {
                        instaFollowers !== '' &&
                        <a href={instaURL} target="_blank" referrerPolicy="noreferrer" className="flex pr-2 text-white text-base condensed font-semibold items-center">
                          <IG />
                          <span className="pl-1">{instaFollowers} Followers</span>
                        </a>
                      }
                    </div>
                  </div>
                )
              })
            }

          </div>

        </div>
      </div>
    </div>
  )
}

export default TalentGrid;