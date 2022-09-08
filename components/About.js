import CreatorOwners from './CreatorOwners';
import Columns from '../public/svgs/columns'

const About = () => {
  return (
    <div className="relative bg-dark">
      <div className="gradient-bg absolute inset-0 z-10"></div>
      <div className="secondary-gradient-bg absolute inset-0 z-10"></div>
      <div className="absolute inset-0 z-20 flex px-20">
        <div className="bg-grid-item w-1/4"></div>
        <div className="bg-grid-item w-1/4"></div>
        <div className="bg-grid-item w-1/4"></div>
        <div className="bg-grid-item w-1/4"></div>
      </div>
      <div className="py-32 px-20 relative z-30">
        <div className="w-1/2">
          <h2 className="text-white uppercase font-bold text-6xl mb-6 text-left">Let's Be Honest</h2>
          <p className="text-2xl font-regular text-gray-text leading-normal mb-9">They have no clue what it's like.</p>
          <p className="text-2xl font-regular text-white leading-normal mb-9">The pressure to never take a break.</p>
          <p className="text-2xl font-regular text-white leading-normal mb-9">The struggle to not sell out but still earn a living.</p>
          <p className="text-2xl font-regular text-white leading-normal mb-9">Simply wanting to not be screwed over while having no interest in reading contracts.</p>
          <p className="text-2xl font-regular text-gray-text leading-normal mb-9">And yet...</p>
          <p className="text-2xl font-regular text-gray-text leading-normal mb-9">They all say ‘we put creators first’.</p>
          <p className="text-2xl font-regular text-gray-text leading-normal mb-9">How could they when they don't get it?</p>
          <p className="text-2xl font-regular text-gray-text leading-normal mb-9">That's how we're different:</p>
          <p className="text-2xl font-regular text-white leading-normal mb-9">MANA is owned and operated by creators.</p>
          <p className="text-2xl font-regular text-gray-text leading-normal mb-9">And so we get it — the good and the bad — which means we can genuinely operate in your best interest.</p>
        </div>
      </div>
      <CreatorOwners />
    </div>
  )
}

export default About;