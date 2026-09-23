import ContentImage from "./ContentImage";
import Columns from './Columns'

const ExecTeam = ({ setOpenExecModal, setCurrentExec }) => {

  const execTeam = [
    {
      name: 'Matt',
      bio: 'Matt came into the space after exiting his previous company and wanting to explore more creative opportunities. Enter Charlie, Matt’s best friend for over 15 years, who gave Matt a shot at helping him with contracts and deals until officially bringing him on as his manager. Both Matt and Charlie saw the need for a company who put the creator first and thus the talent group was formed. Matt continues to advocate for creators and enjoys helping them tackle seemingly impossible ideas, content, and problems.',
      liLink: 'https://www.linkedin.com/in/mattphillips4',
      imgURL: '/team/Matt.png',
      position: 'Chief Executive Officer'
    },
    {
      name: 'Ben',
      bio: "Ben started his career in the influencer marketing space in 2018 to try and help his fiance who was growing her Gibi ASMR Youtube channel. Ben at the time was working a corporate job and going to business school during the evenings, when he was asked if he could help figure out how to respond to some of the sponsorship inquiries Gibi was getting. Seeing this as a way to get involved in her channel, and apply what he was learning in school he dove in and started to learn all he could about influencer marketing and the growing ASMR sector his now wife was working in. Quickly this became a full time endeavor and in 2019, he left his previous job to focus on growing his own agency, Zees Media. The company was serving Gibi and a roster of other ASMR creators, and focused on educating brands on what ASMR was, and how it could be used in their marketing strategy, while also helping content creators better distribute their content through channels like Spotify and Apple Music. In 2020, Ben began working with Matt after Gibi and Charlie met online during a podcast interview. Because Ben and Matt both had similar backgrounds, and a creator centered approach to building an agency, the two were able to hit it off immediately and decided to merge their companies to continue to scale to help creators together.",
      liLink: 'https://www.linkedin.com/in/ben-deaney-4670621a6',
      imgURL: '/team/Ben.png',
      position: 'Chief Operating Officer'
    },
    {
      name: 'Alex',
      bio: 'Alexandra started her career in 2011 as a media planner in New York City where she quickly rose through the ranks, gaining experience in not only media analytics and buying but in creative production as well. Early on Alex realized her passion lay with creative production, especially working with content creators to create original branded content. Over the next ten years Alex went on to work for Defy Media, Maker Studios (Disney) and Awesomeness TV (Comcast Verizon/Universal) where she forged branded partnerships with clients such as Pepsi, ABC, Ford, and American Express. It was during her time in NYC Alex realized there was a huge disconnect between the marketing and sales teams and the talent teams that managed the talent. This disconnect created  what Alex saw to be a disservice to the creators and presented an opportunity to find a better and more honest way to work with creators. In 2019 Alex and her co-founder started Streamworks.gg, a company whose mission is to put creators first.',
      liLink: 'https://www.linkedin.com/in/alexandraspress',
      imgURL: '/team/Alex.png',
      position: 'Chief Marketing Officer'
    },
    {
      name: 'Zach',
      bio: 'Zach became infatuated with the early Twitch scene back in 2010, when it was still Justin.tv. Starting as an avid esports fan and viewer, his passion grew into something more. Through developing organic friendships with several content creators they began to ask for help in building content for them to grow. It was at this time that he realized this was what he loved to do, and he took a leap of faith and decided to work pro-bono for several creators while working gig jobs like Uber Eats to supplement his income. Throughout the years Zach built up a strong roster of creators he personally managed until 2017 when he decided it was time to start an agency. Zach started Streamworks with his co-founder Alex Press which they immediately started to scale and in late 2020 met Ben & Matt. Instantly Zach knew the relationship they were building was something special as they all shared a common goal to put creators first. On top of his roles at the agency, Zach aka ZachGG is also the personal manager to Jimmy Here and several other creators across YouTube, Twitch, & Facebook, while also appearing as a member in the group channel ‘Couch Cast’. ',
      liLink: 'https://www.linkedin.com/in/zach-russell-72227415a',
      imgURL: '/team/Zach.png',
      position: 'Chief Creative Officer'
    },
  ]

  const handleMouseOver = (e) => {
    let stats = e.currentTarget.querySelector('#creator-stats')
    let title = e.currentTarget.querySelector('p')
    title.style.transform = 'translateY(-24px) '
    title.style.fontSize = '40px'
    stats.style.opacity = '100'
    
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

  const handleclick = (idx) => {
    setOpenExecModal(true)
    setCurrentExec(execTeam[idx])
  }

  return (
    <div className="relative bg-dark" id="Services">
      <div className="max-w-[1440px] mx-auto relative">
        <Columns />
        <div className="px-4 relative z-40 lg:px-16 xl:px-20 sm:pb-24 py-12 lg:py-32">
          <div className="mb-6">
          <h2 className="text-white uppercase font-bold text-4xl md:text-6xl text-left mb-6">Our Founders</h2>
          </div>
          <div className="flex flex-wrap md:flex-nowrap">
            { execTeam.map(({imgURL, name, position}, idx) => {
              return (
                <div 
                  key={idx}
                  className="w-full md:w-1/4 pr-[1px] cursor-pointer relative"
                  onMouseOut={handleMouseOut}
                  onMouseOver={handleMouseOver}
                  onClick={() => {handleclick(idx)}}
                >
                  <ContentImage src={imgURL} alt={name} sizes="(max-width: 767px) 100vw, (max-width: 1439px) 25vw, 320px" className={`w-full h-auto grayscale`} />
                  <p className="text-white uppercase text-xl leading-none condensed absolute bottom-3 z-20 left-3 text-light pointer-events-none transition-all duration-300">{name}</p>
                  <div id="creator-stats" className="flex opacity-0 transition-all duration-300 absolute z-30 left-3 right-3 bottom-3 justify-between">
                    <span className="flex pr-2 text-white text-base condensed font-semibold">{position}</span>
                    <span className="flex pr-2 text-mana-green text-base condensed font-semibold">READ FULL BIO</span>
                  </div>
                </div>
              )
            })}

          </div>
        </div>
      </div>
    </div>
  )
}

export default ExecTeam;