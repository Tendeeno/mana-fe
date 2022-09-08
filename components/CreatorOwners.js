import { useState, useEffect } from 'react';

const CreatorOwners = () => {

  const creatorOwners = [
    {
      name: 'MoistCr1itikal',
      shortBio: 'Charlie is a player for this team and this is some filler copy for a bio. Whether you’re a brand looking to work with influencers or are a creator looking to grow your career, we can help.',
      subCount: '11.3M',
      imgURL: '/creatorOwners/charlie.png'
    },
    {
      name: 'GibiASMR',
      shortBio: 'Gibi is a player for this team and this is some filler copy for a bio. Whether you’re a brand looking to work with influencers or are a creator looking to grow your career, we can help.',
      subCount: '3.2M',
      imgURL: '/creatorOwners/gibi.png'
    },
    {
      name: 'JimmyHere',
      shortBio: 'JimmyHere is a player for this team and this is some filler copy for a bio. Whether you’re a brand looking to work with influencers or are a creator looking to grow your career, we can help.',
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
    <div className="flex px-20 pb-24 relative z-40">
      { creatorOwners.map(({imgURL}, idx) => {
        return (
          <div className="w-1/4 pr-[1px] cursor-pointer" onClick={() => {handleClick(idx)}}>
            <img src={imgURL} className={`w-full h-auto ${ idx === selectedIndex ? '' : 'grayscale'}`} />
          </div>
        )
      })}
      <div className="w-1/4 pr-[1px] relative">
        { creatorOwners.map(({name, shortBio, subCount, imgURL}, idx) => {
          return (
            <div className={`absolute top-0 left-0 right-0 pl-6 transition-opacity duration-300 ${ idx === selectedIndex ? 'opacity-100' : 'opacity-0'}`}>
              <span className="text-mana-yellow uppercase text-base font-regular condensed leading-normal block">Creator Owner | {subCount} Subscribers</span>
              <h3 className="font-semibold condensed text-white text-3xl leading-tight mb-4">{name}</h3>
              <p className="text-gray-text text-lg font-light leading-normal">{shortBio}</p>
            </div>
          )
        })}
        <div className="absolute bottom-0 left-0 right-0 pl-6">
          { creatorOwners.map(({name, shortBio, subCount, imgURL}, idx) => {
            return (
              <span
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