import ContentImage from "./ContentImage";
import Close from "../public/svgs/close";
import LinkedIn from '../public/svgs/linkedin'

const ExecutiveModal = ({openExecModal, currentExec, setOpenExecModal}) => {
  return (
    openExecModal ?
    <div className="fixed inset-0 bg-dark z-50">
      <div className="px-4 relative z-40 sm:flex lg:px-16 xl:px-20 sm:pb-24 py-12 lg:py-32 overflow-auto h-full">
        <div className="absolute inset-0 z-0 flex">
          <div className="bg-grid-item w-1/4"></div>
          <div className="bg-grid-item w-1/4"></div>
          <div className="bg-grid-item w-1/4"></div>
          <div className="bg-grid-item w-1/4"></div>
        </div>
        <div className="h-full relative md:flex">
          <div className="w-full md:w-1/2">
            <ContentImage src={currentExec.imgURL} alt={currentExec.name} sizes="(max-width: 767px) 100vw, 50vw" className="w-full"/>
          </div>
          <div className="md:pl-6 py-4 md:py-0 relative w-full md:w-1/2">
              <div className="absolute right-0 top-7 md:top-2 cursor-pointer" onClick={() => {setOpenExecModal(false)}}><Close /></div>
              <h2 className="text-white uppercase font-bold text-6xl text-left mb-1">{currentExec.name}</h2>
              <div className="flex">
                <p className="text-lg leading-normal font-light text-white uppercase condensed mb-4">{currentExec.position}</p>
                <a className="ml-3" href={currentExec.liLink} target="_blank" rel="noreferrer">
                  <LinkedIn />
                </a>
              </div>
              <p className="text-xl leading-normal font-light text-gray-text">{currentExec.bio}</p>
          </div>

        </div>
      </div>

    </div>
    :
    ''
  )
}

export default ExecutiveModal;