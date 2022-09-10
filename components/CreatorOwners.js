import { useState, useEffect } from 'react';

const CreatorOwners = () => {

  const creatorOwners = [
    {
      name: 'MoistCr1itikal',
      shortBio: 'Charlie aka Penguinz0 aka MoistCr1tikal started his channel on youTube when he was 11 years old. As of today he has over 16 million followers across all platforms and has cemented himself as one of the titans of both YouTube and Twitch. Charlie is often referred to as one of the most genuine and thoughtful creators and ensures that the company always maintains the same “creator first” principles.',
      subCount: '11.3M',
      imgURL: '/creatorOwners/charlie.png'
    },
    {
      name: 'GibiASMR',
      shortBio: 'Gina, most affectionately known as Gibi to her 4.3 million YouTube subscribers, began her ASMR channel during her senior year at Northwestern University. An avid and longtime consumer of ASMR, Gibi wanted to integrate her love for cosplay, creative video, and immersion into a then very niche community on YouTube. Over 6 years and almost one thousand videos later, Gibi has helped champion ASMR to where it is today.',
      subCount: '3.2M',
      imgURL: '/creatorOwners/gibi.png'
    },
    {
      name: 'JimmyHere',
      shortBio: 'Back in 2016 JimmyHere stumbled into the world of content creation by creating the viral meme “It is Wednesday my Dudes” on Vine. Since then it’s been looped over 83M times on Vine and garnered over 35M+ views on YT. Currently, Jimmy has concentrated on building his content on Youtube & Twitch, amassing over 1.3 million subscribers and 300k+ followers respectively.',
      subCount: '1.4M',
      imgURL: '/creatorOwners/jimmy.png'
    },
  ]

  const [selectedIndex, setSelectedIndex] = useState(0)

  const [timeoutId, setTimeoutId] = useState(0)
  
  const handleClick = (idx) => {
    setSelectedIndex(idx)
  }

  const rotateIndex = () => {
    if (creatorOwners.length === selectedIndex + 1) {
      setSelectedIndex(0)
    } else {
      setSelectedIndex(selectedIndex + 1)
    }
  }
  
  useEffect(() => {
    console.log('NEWWWWWWWWWWW')
    console.log(Date.now())
    console.log(creatorOwners[selectedIndex].name)
    if (timeoutId !== 0) {
      console.log('clearing timeout')
      clearTimeout(timeoutId)
    }
    let id = setTimeout(rotateIndex, 5000)
    setTimeoutId(id)
  },[selectedIndex])

  return (
    <div className="px-4 relative z-40 sm:flex lg:px-16 xl:px-20 sm:pb-24 py-12 lg:py-32">
      <div className="w-full mb-6 relative grid grid-cols-1 grid-rows-1 lg:flex lg:w-3/4">
        { creatorOwners.map(({imgURL}, idx) => {
          return (
            <div 
              key={idx}
              className={`owner left-4 right-4 pr-[1px] cursor-pointer sm:block lg:w-1/3
                ${ idx === selectedIndex ? 'z-30' : 'z-0'}
              `}
              onClick={() => {handleClick(idx)}}>
              <img src={imgURL} className={`w-full h-auto ${ idx === selectedIndex ? '' : 'grayscale'}`} />
            </div>
          )
        })}
      </div>
      <div className="w-full pr-[1px] relative h-full grid grid-cols-1 grow-rows-1 lg:w-1/4 ">
        { creatorOwners.map(({name, shortBio, subCount, imgURL}, idx) => {
          return (
            <div
              key={idx}
              className={`owner mb-6 sm:pl-2 lg:pl-4 xl:pl-6 transition-opacity duration-300 ${ idx === selectedIndex ? 'opacity-100' : 'opacity-0'}`}>
              <span className="text-mana-yellow uppercase text-base font-regular condensed leading-normal block">Creator Owner | {subCount} Subscribers</span>
              <h3 className="font-semibold condensed text-white text-3xl leading-tight mb-4">{name}</h3>
              <p className="text-gray-text text-base font-light leading-normal">{shortBio}</p>
            </div>
          )
        })}
        <div className="sm:pl-2 lg:pl-4 xl:pl-6">
          { creatorOwners.map(({name, shortBio, subCount, imgURL}, idx) => {
            return (
              <span
                key={idx}
                className={`condensed text-sm leading-normal cursor-pointer mr-4 transition-opacity duration-300 ${ idx === selectedIndex ? 'text-mana-green' : 'text-gray-text'}`}
                onClick={() => {handleClick(idx)}}  
              >
                {name}
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default CreatorOwners;