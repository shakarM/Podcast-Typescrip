import React, { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import Logo from "@/assets/logo.svg"
import Logo2 from "@/assets/logo2.svg"
import Link from './Link'
import { SelectedPage } from '@/shares/type'
import { useMediaQuery } from '@react-hook/media-query'
import { ActionButton } from '@/shares/ActionButton'
type Props = {
  isTopPage:boolean,
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void
}

export const Navbar = ({isTopPage,selectedPage, setSelectedPage}: Props) => {
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")

      // State to store the selected page component
  const [selectedComponent, setSelectedComponent] = useState<React.ReactNode | null>(null);

  // Function to set the selected page and corresponding component
  const handlePageClick = (page: SelectedPage, component: React.ReactNode) => {
    setSelectedPage(page);
    setSelectedComponent(component);
    setIsMenuToggled(false); // Close the menu on mobile
  };

  const [logo, setLogo] = useState(false)
  return (
  <nav >
    <div  className={`${isTopPage ? '': "bg-bb transition duration-300 "} flex justify-between items-center fixed top-0 w-full py-2 z-30 text-md font-medium`}>
<div className={'flex items-center justify-between mx-auto w-5/6'}>
  <div className='flex items-center justify-between w-full gap-16'>
    {/* Left side */}
    <img
  className={`w-[10rem] transition duration-500 ${logo ? 'transform scale-110' : ''}`}
  onMouseEnter={() => setLogo(true)}
  onMouseLeave={() => setLogo(false)}
  alt='logo'
  src={logo ? Logo2 : Logo}
/>
 {/* Right side  */}
 {isAboveMediumScreens ? (<div className='flex items-center justify-between w-full'>
    <div className='flex items-center justify-between gap-8 '>
      <Link page="Home"
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
      />
         <Link page="Benefits"
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
      />
        <Link page="Episodes"
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
      />
        <Link page="Contact"
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
      />
    
    </div>
    <div className='flex items-center justify-between gap-4'>
     <a  className='underline hover:text-gold-40 transition duration-300 cursor-pointer'> Our location </a>
        <ActionButton   selectedPage={selectedPage} setSelectedPage={setSelectedPage}> Subscribe us </ActionButton>
    </div>
 </div>):

// For mobile size 
 <div>
     
     <button className='rounded-full bg-gold-40 p-2'
     onClick={()=> setIsMenuToggled(!isMenuToggled)}
     >
        <Bars3Icon className='text-white h-6 w-6' />
     </button>


    </div>}
 
  </div>
</div>

    </div>

    {/* Mobile navbar */}
    {!isAboveMediumScreens && isMenuToggled && (
    <div className=' fixed right-0 z-40 bottom-0 h-full w-[300px]  bg-black-20 text-white drop-shadow-xl duration-500 transition'>

            <div className='flex justify-end p-12 '>
        <button onClick={()=>setIsMenuToggled(!setIsMenuToggled)}>
        <XMarkIcon className='text-gold-40 h-6 w-6'/>
        </button>
        </div>
        <div className=' ml-[33%] flex flex-col  text-2xl gap-10 '>
      <Link page="Home"
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
      />
         <Link page="Benefits"
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
      />
        <Link page="Episodes"
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
      />
        <Link page="About"
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
      />
    </div>
         
    </div>)}
  </nav>
  )
}