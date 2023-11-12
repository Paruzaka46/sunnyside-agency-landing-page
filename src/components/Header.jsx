import { useState } from 'react'
import {useMediaQuery} from 'react-responsive'

const Header = () => {
    const [handleClick, setHandleClick] = useState(false)
    const desktop = useMediaQuery({query: '(min-width: 768px'})
    
    const desktopNav = <div>
        <ul className='flex items-center gap-9 text-sm font-barlow text-white'>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Services</a></li>
            <li><a href='#'>Projects</a></li>
            <li><button className="text-black bg-white py-[10px] px-5 rounded-full uppercase text-xs hover:text-white hover:bg-opacity-50 transition">Contact</button></li>
        </ul>
    </div>

    const mobileNav = <div className={`absolute w-[90%] mx-[5%] right-0 top-20 font-barlow overflow-hidden transition-all text-dg-blue ${handleClick?'h-[337.68px]':'h-0'}`}>
        <img className="w-5 absolute rotate-45 right-[-3.3px] top-[3px]" src='/images/triangle-right-arrow-icon.svg'/>

        <ul className="flex p-10 flex-col items-center gap-7 text-xl mt-7 bg-white">
            <li><a href='#'>About</a></li>
            <li><a href='#'>Services</a></li>
            <li><a href='#'>Projects</a></li>
            <li><button className="bg-yellow-400 text-vddes-blue uppercase px-7 py-[12px] text-[15px] font-fraunces rounded-full">Contact</button></li>
        </ul>
    </div>

    return (
        <div className="md:bg-desktop bg-contain bg-no-repeat w-[100%] h-0 md:pb-[55.56%] mobile:bg-mobile mobile:pb-[143.47%]">
            <nav className="mb-12 flex justify-between items-center p-5 py-5">
                <img className="md:h-5 mobile:h-6" src="/images/logo.svg"/>
                <div>
                    {desktop?desktopNav:<input className="py-3" type='image' onClick={() => {setHandleClick(!handleClick)}} src='/images/icon-hamburger.svg'/>}
                </div>
            </nav>
            <div className="flex flex-col justify-center items-center uppercase">
                <h1 className="md:text-[2rem] mb-[3rem] font-black text-white tracking-[0.4rem] font-fraunces text-center leading-tight mobile:text-[40px]">We Are Creatives</h1>
                <img className="mobile:w-10 md:w-6" src="/images/icon-arrow-down.svg"/>
            </div>
            {mobileNav}
        </div>
    )
}

export default Header