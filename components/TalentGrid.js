const TalentGrid = () => {
  const creators = [
    { name: 'ASMRGlow', imgUrl: '/talent/noodle.png', ytSubs: '1.2M', twFollowers: '80.2k'},
    { name: 'Noodle', imgUrl: '/talent/noodle.png', ytSubs: '1.2M', twFollowers: '80.2k'},
    { name: 'HowToBasic', imgUrl: '/talent/noodle.png', ytSubs: '1.2M', twFollowers: '80.2k'},
    { name: 'HowToBasic', imgUrl: '/talent/noodle.png', ytSubs: '1.2M', twFollowers: '80.2k'},
    { name: 'HowToBasic', imgUrl: '/talent/noodle.png', ytSubs: '1.2M', twFollowers: '80.2k'},
    { name: 'HowToBasic', imgUrl: '/talent/noodle.png', ytSubs: '1.2M', twFollowers: '80.2k'},
    { name: 'The Gronks', imgUrl: '/talent/noodle.png', ytSubs: '1.2M', twFollowers: '80.2k'},
    { name: 'HowToBasic', imgUrl: '/talent/noodle.png', ytSubs: '1.2M', twFollowers: '80.2k'},
    { name: 'HowToBasic', imgUrl: '/talent/noodle.png', ytSubs: '1.2M', twFollowers: '80.2k'},
    { name: 'HowToBasic', imgUrl: '/talent/noodle.png', ytSubs: '1.2M', twFollowers: '80.2k'},
    { name: 'HowToBasic', imgUrl: '/talent/noodle.png', ytSubs: '1.2M', twFollowers: '80.2k'},
    { name: 'HowToBasic', imgUrl: '/talent/noodle.png', ytSubs: '1.2M', twFollowers: '80.2k'},
    { name: 'HowToBasic', imgUrl: '/talent/noodle.png', ytSubs: '1.2M', twFollowers: '80.2k'},
    { name: 'HowToBasic', imgUrl: '/talent/noodle.png', ytSubs: '1.2M', twFollowers: '80.2k'},
    { name: 'HowToBasic', imgUrl: '/talent/noodle.png', ytSubs: '1.2M', twFollowers: '80.2k'},
    { name: 'HowToBasic', imgUrl: '/talent/noodle.png', ytSubs: '1.2M', twFollowers: '80.2k'},
    { name: 'HowToBasic', imgUrl: '/talent/noodle.png', ytSubs: '1.2M', twFollowers: '80.2k'},
    { name: 'HowToBasic', imgUrl: '/talent/noodle.png', ytSubs: '1.2M', twFollowers: '80.2k'},
    { name: 'HowToBasic', imgUrl: '/talent/noodle.png', ytSubs: '1.2M', twFollowers: '80.2k'}, 
    { name: 'HowToBasic', imgUrl: '/talent/noodle.png', ytSubs: '1.2M', twFollowers: '80.2k'}, 
    { name: 'HowToBasic', imgUrl: '/talent/noodle.png', ytSubs: '1.2M', twFollowers: '80.2k'}, 
    { name: 'HowToBasic', imgUrl: '/talent/noodle.png', ytSubs: '1.2M', twFollowers: '80.2k'}, 
    { name: 'HowToBasic', imgUrl: '/talent/noodle.png', ytSubs: '1.2M', twFollowers: '80.2k'}, 
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
    <div className="relative bg-dark">
      <div className="absolute inset-0 z-20 flex px-20">
        <div className="bg-grid-item w-1/4"></div>
        <div className="bg-grid-item w-1/4"></div>
        <div className="bg-grid-item w-1/4"></div>
        <div className="bg-grid-item w-1/4"></div>
      </div>
      <div className="px-20 py-24 relative z-30">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-white uppercase font-bold text-6xl text-left">Our Talent</h2>
          <a href=""
            className="border border-mana-green text-mana-green block py-3 px-4 condensed uppercase leading-none
              hover:bg-mana-green hover:text-dark transition-all
          ">
            Request Our Full Roster
          </a>
        </div>
        <div className="grid grid-cols-4 grid-rows-9 w-full auto-rows-fr">
          {
            creators.map(({name, imgUrl, ytSubs, twFollowers}, idx) => {
              return (
                <div
                  className={`bg-black mr-[1px] mb-[1px] p-4 min-h-talent-item relative overflow-hidden
                    ${idx === 0 ? 'col-span-2 row-span-1' : ''}
                    ${idx === 1 ? 'col-span-2 row-span-2' : ''}
                    ${idx === 4 ? 'col-span-1 row-span-2' : ''}
                    ${idx === 9 ? 'col-span-2 row-span-1' : ''}
                    ${idx === 10 ? 'col-span-2 row-span-2' : ''}
                    ${idx === 17 ? 'col-span-2 row-span-2' : ''}
                    ${idx === 18 ? 'col-span-1 row-span-2' : ''}
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
                    <span className="flex pr-2 text-white text-base condensed font-semibold">{ytSubs} Subscribers</span>
                    <span className="flex pr-2 text-white text-base condensed font-semibold">{twFollowers} Followers</span>
                  </div>
                </div>
              )
            })
          }

        </div>

      </div>
    </div>
  )
}

export default TalentGrid;