import ManaLogo from "../public/svgs/manalogo"
import { useEffect } from "react"

const Navigation = () => {
  useEffect(() => {
    const updateScroll = () => {
      document.documentElement.dataset.scrolled = String(window.scrollY > 100)
    }
    updateScroll()
    window.addEventListener('scroll', updateScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', updateScroll)
      delete document.documentElement.dataset.scrolled
    }
  }, [])

  const navItems = [
    { text: 'about', href: '#About', type: 'text' },
    { text: 'talent', href: '#Talent', type: 'text' },
    { text: 'mana', href: '#', type: 'logo' },
    { text: 'services', href: '#Services', type: 'text' },
    { text: 'contact', href: '#Contact', type: 'text' }
  ]

  return (
    <nav 
      id="navigation"
      className="w-full fixed top-0 z-50 transition-opacity duration-500">
        <div className="w-full h-32 nav-gradient absolute top-0 z-10 transition-opacity duration-500 pointer-events-none"></div>
        <div className="max-w-[1440px] mx-auto relative">
        
          <div className="sm:px-20 px-2 pt-6 pb-2 relative z-20 flex justify-between items-center">
            {
              navItems.map(({text, href, type},idx) => {
                if (type === 'text') {
                  return (
                    <a
                      key={idx}
                      className={`nav-item nav-link text-base sm:text-2xl sm:min-w-[100px] font-normal uppercase text-white transition-opacity duration-500
                        ${idx === 0 && idx !== 4 ? 'text-left' : 'text-center'}
                        ${idx === 4 ? 'text-right' : ''}
                      `}
                      href={href}
                    >{text}</a>
                  )
                } else {
                  return (
                    <a 
                      key={idx}
                      className="nav-link nav-logo"
                      aria-label="Back to top"
                      href={href}>
                      <ManaLogo />
                    </a>
                  )
                }
              })
            }
          </div>
        </div>

    </nav>
  )
}

export default Navigation;
