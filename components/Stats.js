const Stats = () => {

  const statistics = [
    {label: 'campaigns', value: '1,000+'},
    {label: 'creators', value: '400+'},
    {label: 'impressions', value: '1B+'},
    {label: 'ytd deals signed', value: '2,000+'},
  ]

  return (
    <div className="relative bg-dark">
      <div className="absolute inset-0 z-20 flex px-20">
        <div className="bg-grid-item w-1/4"></div>
        <div className="bg-grid-item w-1/4"></div>
        <div className="bg-grid-item w-1/4"></div>
        <div className="bg-grid-item w-1/4"></div>
      </div>
      <div className="px-20 py-24 flex relative z-30">
        <div className="w-1/2">
        <span className="text-3xl font-bold block uppercase text-gray-text">Creator</span>
        <span className="text-8xl font-bold block uppercase text-white">Owned</span>
        </div>
        <div className="flex flex-wrap w-1/2">
          { 
            statistics.map(({label, value}, idx) => {
              return (
                <div className="text-left w-1/2 mb-12">
                  <span className="text-3xl font-bold block uppercase text-gray-text">{label}</span>
                  <span className="text-8xl font-bold block text-mana-green">{value}</span>
                </div>
              )

            })
          }
        </div>
      </div>
    </div>
  )
}

export default Stats;