import Columns from "./Columns";

const Services = () => {
  return (
    <div className="relative bg-dark">
      <div className="max-w-[1440px] mx-auto relative">
        <Columns />
        <div className="relative z-40 px-4 pb-12 lg:px-16 xl:px-20 lg:pb-32">
          <p className="mb-16 text-xl leading-normal md:text-2xl text-gray-text md:w-3/4">
            Our goal is simple. Be honest. Care about who you work with.
            <span className="text-white">
              {" "}
              Work tirelessly to develop prosperous, long term relationships
              between brands and creators.{" "}
            </span>
            No BS, no preaching, just good old-fashioned integrity.
          </p>
          <div className="md:flex">
            <div className="w-full pb-12 md:w-1/2 md:pb-0 md:pr-8">
              <h3 className="mb-4 text-3xl font-semibold leading-tight text-white uppercase condensed">
                Creator Services
              </h3>
              <p className="text-lg font-light leading-normal md:text-xl text-gray-text">
                From sponsorships and merch to legal advice and brand building —
                we manage the business side of your career.
              </p>
            </div>
            <div className="w-full md:w-1/2 md:pr-8">
              <h3 className="mb-4 text-3xl font-semibold leading-tight text-white uppercase condensed">
                Brand Services
              </h3>
              <p className="text-lg font-light leading-normal md:text-xl text-gray-text">
                We may be creator-first, but you have to be successful too.
                Long-term relationships with great brands is what every creator
                wants. In turn, you want to run successful campaigns. That means
                for everyone to be happy, we match you with creators that have
                relevant and engaged audiences that will drive results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
