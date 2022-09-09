import Columns from "./Columns";

const Services = () => {
  return (
    <div className="bg-dark relative">
      <div className="max-w-[1440px] mx-auto relative">
        <Columns />
        <div className="px-4 relative z-40 lg:px-16 xl:px-20 pb-12 lg:pb-32">
          <p className="text-xl md:text-2xl leading-normal text-gray-text md:w-3/4 mb-16">
            Our goal is simple. Be honest. Care about who you work with.
            <span className="text-white"> Work tirelessly to develop preposerious, long term relationships between brands and creators. </span>
            No BS, no preaching, just good old-fashioned integrity.</p>
          <div className="md:flex">
            <div className="w-full md:w-1/2 md:pb-0 pb-12 md:pr-8">
              <h3 className="text-3xl text-white uppercase leading-tight condensed font-semibold mb-4">Creator Services</h3>
              <p className="text-lg md:text-xl leading-normal font-light text-gray-text">
              From sponsorships and merch to legal advice and brand building — we manage the business side of your career.
              </p>
            </div>
            <div className="w-full md:w-1/2 md:pr-8">
              <h3 className="text-3xl text-white uppercase leading-tight condensed font-semibold mb-4">Brand Services</h3>
              <p className="text-lg md:text-xl leading-normal font-light text-gray-text">
              We may be creator-first, but you have to be successful too. Long-term relationships with great brands is what every creator wants. In turn, you want to run successful campaigns. That means for everyone to be happy, we match you with creators that have relevant and engaged audiences that will drive results.
              </p>

            </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Services;