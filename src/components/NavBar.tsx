import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import appleImg from "../assets/images/apple.svg";
import search from "../assets/images/search.svg";
import bag from "../assets/images/bag.svg";

const NavBar: React.FC = () => {


    interface Navlist {
        name: string
    }

    const navlist: Navlist[] = [
        { name: "Store" },
        { name: "Mac" },
        { name: "iPad" },
        { name: "iPhone" },
        { name: "Watch" },
        { name: "Vision" },
        { name: "AirPods" },
        { name: "TV & Homes" },
        { name: "Entertainment" },
        { name: "Accessories" },
        { name: "Support" },
    ];

    useGSAP(() => {
        gsap.to('.header', {
            ease: 'power1.in',
            opacity: 1,
            delay: 1,
            // duration: 1,
            // y: 4,
        })


    }, [])
    return (
        <header className='w-full text-primary'>
            <nav className='hidden md:flex flex-row gap-8 justify-center py-5 items-center  border-b-gray-800 border-b-2'>
                <img src={appleImg} className='h-5/6 w-[16px] cursor-pointer' />
                {navlist.map((nav, index) => {
                    return (
                        <span key={index} className='hover:text-white cursor-pointer'>{nav.name}</span>
                    )
                })}
                <img src={search} className='h-5/6 w-[16px] cursor-pointer' />
                <img src={bag} className='h-5/6 w-[16px] cursor-pointer' />
            </nav>

            <nav className='flex flex-row justify-items-end items-baseline py-4 pr-12 gap-5 justify-end md:hidden'>
                <img src={appleImg} className='h-5/6 w-[16px] cursor-pointer' />
                <img src={search} className='h-5/6 w-[16px] cursor-pointer' />
                <img src={bag} className='h-5/6 w-[16px] cursor-pointer' />
            </nav>
            <p className='header opacity-0 py-4 px-8'>
                Get $180–$630 in credit toward iPhone 15 or iPhone 15 Pro when you trade in iPhone 11 or higher.3 <a href="#">Shop iPhone</a></p>
        </header>
    )
}

export default NavBar