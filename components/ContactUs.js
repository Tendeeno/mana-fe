import { useState, useEffect } from 'react'
import Twitter from '../public/svgs/twitter'
import Linkedin from '../public/svgs/linkedin'
import Columns from './Columns'

const ContactUs = () => {
  
  const [isDisabled, setIsDisabled] = useState(true)
  const [side, setSide] = useState('creator')
  const [name, setName] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [socialAmount, setSocialAmount] = useState('')
  const [email, setEmail] = useState('')
  const [reason, setReason] = useState('request') // request, other
  const [note, setNote] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    // console.log(companyName)
    if (side === 'creator') {
      if (!name || !socialAmount || !email || !note) {
        setIsDisabled(true)
      } else {
        setIsDisabled(false)
      }
    }

    if (side === 'brand') {
      if (!name || !companyName || !email ) {
        setIsDisabled(true)
      } else {
        setIsDisabled(false)
      }
    }
  }, [companyName, name, socialAmount, email, reason, note])


  useEffect(() => {
    setName('')
    setEmail('')
    setSocialAmount('')
    setCompanyName('')
    setReason('request')
    setNote('')
  }, [side])

  const handleSubmit = async (e) => {
    e.preventDefault()
      
    const res = await fetch("/api/sendgrid", {
      body: JSON.stringify({
        side: side,
        name: name,
        email: email,
        companyName: companyName,
        socialAmount: socialAmount,
        reason: reason,
        note: note,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();
    if (error) {
      setError('Sorry! Your Contact submission failed. Please try again and if it does not work, contact info@manatalentgroup.com directly!')
      console.log(error);
      return;
    }
    setError('Your submission was received! We will be in touch with you shortly.')
  }



  return (
    <div className="relative bg-dark" id="Contact">
      <div className="gradient-bg absolute inset-0 z-10"></div>
      <div className="secondary-gradient-bg absolute inset-0 z-10"></div>
      <div className="max-w-[1440px] mx-auto relative">
        <Columns />
        <div className="px-4 relative z-40 sm:flex lg:px-16 xl:px-20 sm:pb-24 py-12 lg:py-32">
          <div className="w-full md:w-1/2 mb-12">
          <h2 className="text-white uppercase font-bold text-4xl md:text-6xl text-left mb-6">Get In Touch</h2>
            <p className="text-base md:text-xl font-light text-gray-text leading-normal mb-9">Fill out the form or send us an email if you are a creator interested in being represented by MANA or a brand looking to advertise.</p>
            <div className="flex">
              <a target="_blank" rel="noreferrer" href="https://twitter.com/manatalentgg?s=11&t=NNYvVv9dYWVMojhDXNOVfA" className="text-white flex pr-4 text-base leading-tight items-center"><Twitter/></a>
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/mana-talent-gg/" className="text-white flex pr-4 text-base leading-tight items-center"><Linkedin /></a>
            </div>
          </div>
          <div className="w-full md:w-1/2 border border-mana-green bg-dark p-6 md:p-8">
            { error &&
              <div className="bg-mana-green text-dark p-4 w-full mb-4 font-semibold text-base">{error}</div>
            }
            <form onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-text uppercase condensed text-base mb-1">You are a:</label>
                <div className="flex justify-between mb-6">
                  <label htmlFor="creator" 
                    className={`block uppercase text-white border w-[48%] text-center text-base md:text-xl p-3 condensed leading-none cursor-pointer
                      ${side === 'creator' ? 'border-mana-green text-mana-green' : 'border-gray-text text-gray-text'}`
                    }
                    onClick={() => {setSide('creator')}}
                    >
                      CREATOR
                    </label>
                  <input
                    type="radio"
                    id="creator"
                    name="creator"
                    className="hidden"
                    />
                  <label htmlFor="brand" 
                    className={`block uppercase text-white border w-[48%] text-center text-base md:text-xl p-3 condensed leading-none cursor-pointer
                      ${side === 'brand' ? 'border-mana-green text-mana-green' : 'border-gray-text text-gray-text'}`
                    }
                    onClick={() => {setSide('brand')}}
                  >
                      brand
                  </label>
                  <input
                    type="radio"
                    id="brand"
                    name="brand"
                    className="hidden"
                  />

                </div>
              </div>
              {
                side === 'creator'
                ?
                <>
                  <div className="mb-6">
                    <label className="block text-gray-text uppercase condensed text-base mb-1">Name:</label>
                    <input
                      type="text"
                      value={name}
                      className=" border border-gray-600 text-base md:text-xl text-white p-3 bg-transparent w-full outline-none placeholder:text-gray-text"
                      placeholder="Enter your name"
                      onChange={(e) => {setName(e.target.value)}}
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-text uppercase condensed text-base mb-1">Subscriber Count:</label>
                    <input
                      type="text"
                      value={socialAmount}
                      className=" border border-gray-600 text-base md:text-xl text-white p-3 bg-transparent w-full outline-none placeholder:text-gray-text"
                      placeholder="100,000"
                    onChange={(e) => {setSocialAmount(e.target.value)}}
                      />
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-text uppercase condensed text-base mb-1">Email Address:</label>
                    <input
                      type="text"
                      value={email}
                      className=" border border-gray-600 text-base md:text-xl text-white p-3 bg-transparent w-full outline-none placeholder:text-gray-text"
                      placeholder="Enter your email"
                      onChange={(e) => {setEmail(e.target.value)}}
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-text uppercase condensed text-base mb-1">NOTE:</label>
                    <textarea
                      type="text"
                      rows="6"
                      value={note}
                      className="border border-gray-600 text-base md:text-xl text-white p-3 bg-transparent w-full outline-none placeholder:text-gray-text"
                      placeholder="I am contacting you because..."
                      onChange={(e) => {setNote(e.target.value)}}
                      />
                  </div>
                </>
                :
                <>
                  <div className="mb-6">
                    <label className="block text-gray-text uppercase condensed text-base mb-1">Name:</label>
                    <input
                      type="text"
                      value={name}
                      className=" border border-gray-600 text-base md:text-xl text-white p-3 bg-transparent w-full outline-none placeholder:text-gray-text"
                      placeholder="Enter your name"
                      onChange={(e) => {setName(e.target.value)}}
                      />
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-text uppercase condensed text-base mb-1">Company Name:</label>
                    <input
                      type="text"
                      value={companyName}
                      className=" border border-gray-600 text-base md:text-xl text-white p-3 bg-transparent w-full outline-none placeholder:text-gray-text"
                      placeholder="Enter your company name"
                      onChange={(e) => {setCompanyName(e.target.value)}}
                      />
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-text uppercase condensed text-base mb-1">Email Address:</label>
                    <input
                      type="text"
                      value={email}
                      className=" border border-gray-600 text-base md:text-xl text-white p-3 bg-transparent w-full outline-none placeholder:text-gray-text"
                      placeholder="Enter your email"
                      onChange={(e) => {setEmail(e.target.value)}}
                      />
                  </div>
                  <label className="block text-gray-text uppercase condensed text-base mb-1">Reason For Contact:</label>
                  <div className="flex justify-between mb-6">
                    <label htmlFor="creator" 
                      className={`block uppercase text-white border w-[48%] text-center text-base md:text-xl p-3 condensed leading-none cursor-pointer
                      ${reason === 'request' ? 'border-mana-green text-mana-green' : 'border-gray-text text-gray-text'}`
                    }
                    onClick={() => {setReason('request')}}
                      >
                        {`CASE STUDIES & ROSTER`}
                      </label>
                    <input
                      type="radio"
                      id="creator"
                      name="creator"
                      className="hidden"
                      />
                    <label htmlFor="brand" 
                      className={`block uppercase text-white border w-[48%] text-center text-base md:text-xl p-3 condensed leading-none cursor-pointer
                        ${reason === 'other' ? 'border-mana-green text-mana-green' : 'border-gray-text text-gray-text'}`
                      }
                      onClick={() => {setReason('other')}}
                    >
                        OTHER
                    </label>
                    <input
                      type="radio"
                      id="brand"
                      name="brand"
                      className="hidden"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-text uppercase condensed text-base mb-1">NOTE:</label>
                    <textarea
                      type="text"
                      value={note}
                      rows="6"
                      className="border border-gray-600 text-base md:text-xl text-white p-3 bg-transparent w-full outline-none placeholder:text-gray-text"
                      placeholder="I am contacting you because..."
                      onChange={(e) => {setNote(e.target.value)}}
                      />
                  </div>
                </>
              }
              <button
                className="w-full text-base md:text-xl condensed p-3 bg-mana-green text-dark disabled:opacity-50"
                disabled={isDisabled}
              >SUBMIT</button>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs;