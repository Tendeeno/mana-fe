import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import About from '../components/About'
import Stats from '../components/Stats'
import TalentGrid from '../components/TalentGrid'
import ExecTeam from '../components/ExecTeam'
import Services from '../components/Services'
import styles from '../styles/Home.module.css'
import { useEffect, useState} from 'react'

export default function Home() {
  let scrolled = false;
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  const animateLogo = (direction) => {
    const largeLogo = document.querySelector('#mana-large')
    const navBg = document.querySelector('.nav-gradient')
    const navItems = document.querySelectorAll('#nav-item')

    if (direction === 'up') {
      largeLogo.style.transform = 'translateY(-80vh) scale(20%)'
      navBg.style.opacity = '100'
      navItems.forEach(item => {
        item.style.opacity = '100'
      })
    } else {
      largeLogo.style.transform = 'translateY(0) scale(100%)'
      navBg.style.opacity = '0'
      navItems.forEach(item => {
        item.style.opacity = '0'
      })
    }
  }
  
  const handleScroll = (event) => {

    if (scrolled && window.scrollY > 100) { return; }
    if (window.scrollY > 100) {
      scrolled = true;
      animateLogo('up')
    } else {
      scrolled = false;
      animateLogo('down')
    }
  }



  return (
    <>
      <Hero />
      <About />
      <Stats />
      <TalentGrid />
      <ExecTeam />
      <Services />
    </>
  )
}
