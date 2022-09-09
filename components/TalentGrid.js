import Columns from "./Columns"

const TalentGrid = () => {
  const creators = [
    { name: 'The Gronks', imgUrl: '/talent/gronks.png', ytSubs: '133k', twitchFollowers: '', twitchURL: '', instagramFollowers: '', twFollowers: '3.2M'},
    { name: 'Wendigoon', imgUrl: '/talent/wendigoon.png', ytSubs: '1.8M', twFollowers: '147.7k'}, 
    { name: 'Noodle', imgUrl: '/talent/noodle.png', ytSubs: '1.1M', twFollowers: '59.3k'},
    { name: 'HowToBasic', imgUrl: '/talent/howtobasic.png', ytSubs: '1.2M', twFollowers: '80.2k'},
    { name: 'FitMC', imgUrl: '/talent/fitmc.png', ytSubs: '2.34M', twFollowers: '114.9k'},
    { name: 'Gibi ASMR', imgUrl: '/talent/gibi.png', ytSubs: '4.39M', twFollowers: '172.4k'}, 
    { name: 'Nux Taku', imgUrl: '/talent/nuxtaku.png', ytSubs: '2.2M', twFollowers: '384.5k'},
    { name: 'RaffyTaphyASMR', imgUrl: '/talent/raffytaphy.png', ytSubs: '905k', twFollowers: ''},
    { name: 'Cold Ones', imgUrl: '/talent/coldones.png', ytSubs: '2.5M', twFollowers: '334.6k'},
    { name: 'The Ireland Boys', imgUrl: '/talent/theirelandboys.png', ytSubs: '4.3M', twFollowers: ''},
    { name: 'Kris Yee', imgUrl: '/talent/krisyee.png', ytSubs: '646k', twFollowers: '155.9k'},
    { name: 'TipToeTingles', imgUrl: '/talent/tiptoetingles.png', ytSubs: '437k', twFollowers: '80.2k'},
    { name: 'Frivoulous Fox', imgUrl: '/talent/fox.png', ytSubs: '1.86M', twFollowers: '66.3k'},
    { name: 'JimmyHere', imgUrl: '/talent/jimmy.png', ytSubs: '1.4M', twFollowers: '90.5k'}, 
    { name: 'RDC World', imgUrl: '/talent/rdcworld.png', ytSubs: '6.1M', twFollowers: '1.2M'},
    { name: 'Saberspark', imgUrl: '/talent/saberspark.png', ytSubs: '1.6M', twFollowers: '243.7k'},
    { name: 'Tfue', imgUrl: '/talent/tfue.png', ytSubs: '11.8M', twFollowers: '4.2M'},
    { name: 'Trash Taste Podcast', imgUrl: '/talent/trashtaste.png', ytSubs: '1.4M', twFollowers: '479k'},
    { name: 'ASMRGlow', imgUrl: '/talent/glow.png', ytSubs: '1.6M', twFollowers: '65.6k'},
    { name: 'Phillion', imgUrl: '/talent/phillion.png', ytSubs: '808k', twFollowers: '25.5k'}, 
    { name: 'TotallyNotMark', imgUrl: '/talent/totallynotmark.png', ytSubs: '758k', twFollowers: '94.1k'},
    { name: 'Goodnight Moon', imgUrl: '/talent/goodnightmoon.png', ytSubs: '964k', twFollowers: ''},
    { name: 'Penguinz0', imgUrl: '/talent/charlie.png', ytSubs: '11.3M', twFollowers: '2.1M'}, 
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
            <a href=""
              className="border border-mana-green text-mana-green block py-3 px-4 condensed uppercase leading-none
                md:text-base text-sm
                hover:bg-mana-green hover:text-dark transition-all
            ">
              Request Our Full Roster
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-9 w-full auto-rows-fr">
            {
              creators.map(({name, imgUrl, ytSubs, twFollowers}, idx) => {
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
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                  >
                    <img 
                      src={imgUrl}
                      
                      className="absolute inset-0 z-10 object-center object-cover grayscale h-full w-full transition-all duration-300"
                    />
                    <p className="text-white uppercase text-xl leading-none condensed absolute bottom-3 z-20 left-3 text-light pointer-events-none transition-all duration-300">{name}</p>
                    <div id="creator-stats" className="flex opacity-0 transition-all duration-300 absolute z-30 left-3 bottom-3">
                      {
                        ytSubs !== '' &&
                        <span className="flex pr-2 text-white text-base condensed font-semibold">{ytSubs} Subscribers</span>
                      }
                      {
                        twFollowers !== '' &&
                        <span className="flex pr-2 text-white text-base condensed font-semibold">{twFollowers} Followers</span>
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