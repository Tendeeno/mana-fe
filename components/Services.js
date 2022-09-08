const Services = () => {
  return (
    <div className="bg-dark relative">
      <div className="absolute inset-0 z-20 flex px-20">
        <div className="bg-grid-item w-1/4"></div>
        <div className="bg-grid-item w-1/4"></div>
        <div className="bg-grid-item w-1/4"></div>
        <div className="bg-grid-item w-1/4"></div>
      </div>
      <div className="px-20 pb-32 relative z-30">
        <p className="text-2xl leading-normal text-gray-text w-3/4 mb-16">
          Our goal is simple. Be honest. Care about who you work with.
          <span className="text-white">Work tirelessly to develop preposerious, long term relationships between brands and creators.</span>
          No BS, no preaching, just good old-fashioned integrity.</p>
        <div className="flex">
          <div className="w-1/2 pr-8">
            <h3 className="text-3xl text-white uppercase leading-tight condensed font-semibold mb-4">Creator Services</h3>
            <p className="text-xl leading-normal font-light text-gray-text">
            From sponsorships and merch to legal advice and brand building — we manage the business side of your career.
            </p>
          </div>
          <div className="w-1/2 pr-8">
            <h3 className="text-3xl text-white uppercase leading-tight condensed font-semibold mb-4">Brand Services</h3>
            <p className="text-xl leading-normal font-light text-gray-text">
            We may be creator-first, but you have to be successful too. Long-term relationships with great brands is what every creator wants. In turn, you want to run successful campaigns. That means for everyone to be happy, we match you with creators that have relevant and engaged audiences that will drive results.
            </p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Services;