import CreatorOwners from './CreatorOwners';
import Columns from './Columns'
const aboutLines = [
  ''
]

const About = () => {
  return (
    <div className="relative bg-dark" id="About">
      <div className="gradient-bg absolute inset-0 z-10"></div>
      <div className="secondary-gradient-bg absolute inset-0 z-10"></div>
      <div className="max-w-[1440px] mx-auto relative">
        <Columns />
        <div className="px-4 relative z-40 sm:flex lg:px-16 xl:px-20 sm:pb-24 py-12 lg:py-32">
          <div className="w-full sm:w-3/4 lg:w-1/2">
            <h2 className="text-white uppercase font-bold text-4xl md:text-6xl text-left mb-6">Let&apos;s Be Honest</h2>
            <p className="text-lg md:text-2xl font-regular text-white leading-normal mb-9">Many agencies say &quot;we put creators first&quot; but so few know what that actually means.</p>
            <p className="text-lg md:text-2xl font-regular text-gray-text leading-normal mb-9">We understand the pressures to never take a break.</p>
            <p className="text-lg md:text-2xl font-regular text-gray-text leading-normal mb-9">The time consuming negotiations and work on content production.</p>
            <p className="text-lg md:text-2xl font-regular text-gray-text leading-normal mb-9">The amount of time it takes to make a &quot;small change&quot; in your videos.</p>
            <p className="text-lg md:text-2xl font-regular text-gray-text leading-normal mb-9">The balance between creating  authentic partnerships while staying true to your audience.</p>
            <p className="text-lg md:text-2xl font-regular text-white leading-normal mb-9">We know creators because we&apos;re built by creators.</p>
            <p className="text-lg md:text-2xl font-regular text-gray-text leading-normal mb-9">This isn&apos;t a talking point. This isn&apos;t a marketing tactic.</p>
            <p className="text-lg md:text-2xl font-regular text-gray-text leading-normal mb-9">Our goal is simple. MANA wants to be your resource so you can use all of your abilities.</p>
            <p className="text-lg md:text-2xl font-regular text-white leading-normal mb-9">This is MANA Talent.</p>
          </div>
        </div>
        <CreatorOwners />
      </div>
    </div>
  )
}

export default About;