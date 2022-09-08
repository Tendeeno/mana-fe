const ExecTeam = () => {

  const execTeam = [
    {
      name: 'Matt',
      // shortBio: 'Charlie is a player for this team and this is some filler copy for a bio. Whether you’re a brand looking to work with influencers or are a creator looking to grow your career, we can help.',
      imgURL: '/creatorOwners/charlie.png'
    },
    {
      name: 'Ben',
      // shortBio: 'Gibi is a player for this team and this is some filler copy for a bio. Whether you’re a brand looking to work with influencers or are a creator looking to grow your career, we can help.',
      imgURL: '/creatorOwners/gibi.png'
    },
    {
      name: 'Alex',
      // shortBio: 'JimmyHere is a player for this team and this is some filler copy for a bio. Whether you’re a brand looking to work with influencers or are a creator looking to grow your career, we can help.',
      imgURL: '/creatorOwners/jimmy.png'
    },
    {
      name: 'Zach',
      // shortBio: 'JimmyHere is a player for this team and this is some filler copy for a bio. Whether you’re a brand looking to work with influencers or are a creator looking to grow your career, we can help.',
      imgURL: '/creatorOwners/jimmy.png'
    },
  ]

  const handleMouseOver = (e) => {
    let title = e.currentTarget.querySelector('p')
    title.style.transform = 'translateY(-24px) '
    title.style.fontSize = '40px'
    
    e.target.classList.add('grayscale-0')
  }
  
  const handleMouseOut = (e) => {
    let stats = e.currentTarget.querySelector('#creator-stats')
    let title = e.currentTarget.querySelector('p')
    title.style.fontSize = '20px'
    title.style.transform = 'translateY(0)'

    e.target.classList.remove('grayscale-0')
  }

  return (
    <div className="relative bg-dark">
      <div className="absolute inset-0 z-20 flex px-20">
        <div className="bg-grid-item w-1/4"></div>
        <div className="bg-grid-item w-1/4"></div>
        <div className="bg-grid-item w-1/4"></div>
        <div className="bg-grid-item w-1/4"></div>
      </div>
      <div className="px-20 py-24 relative z-40">
        <div className="mb-6">
          <h2 className="text-white uppercase font-bold text-6xl text-left">Our Executive Team</h2>
        </div>
        <div className="flex">
          { execTeam.map(({imgURL, name}, idx) => {
            return (
              <div className="w-1/4 pr-[1px] cursor-pointer relative"
                onMouseOut={handleMouseOut}
                onMouseOver={handleMouseOver}
              >
                <img src={imgURL} className={`w-full h-auto grayscale`} />
                <p className="text-white uppercase text-xl leading-none condensed absolute bottom-3 z-20 left-3 text-light pointer-events-none transition-all duration-300">{name}</p>
              </div>
            )
          })}

        </div>
      </div>
    </div>
  )
}

export default ExecTeam;