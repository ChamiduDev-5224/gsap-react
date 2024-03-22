import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import appleImg from "../assets/images/apple.svg";
import search from "../assets/images/search.svg";
import bag from "../assets/images/bag.svg";
import type { RootState } from '../components/redux/Store'
import { useSelector, useDispatch } from 'react-redux'
import { onSearch } from './redux/slices/SearchSlice';
import { AiOutlineMenu } from "react-icons/ai";

const NavBar: React.FC = () => {
    const selector = useSelector((state: RootState) => state)
    const dispatch = useDispatch();

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
        gsap.to('.notice', {
            ease: 'power1.in',
            opacity: 1,
            delay: 1,
            // y: 4,
        })



    }, [])

    const onVisibleSearch = () => {
        dispatch(onSearch({ isHide: !selector.searches.isHide, word: "" }))
    }

    return (
        <header className='w-full text-primary'>
            {/* large screen nav */}
            <nav className='hidden xl:flex flex-row gap-8 justify-center py-5 items-center'>
                <img src={appleImg} className='h-5/6 w-[16px] cursor-pointer' />
                {navlist.map((nav, index) => {
                    return (
                        <span key={index} className='hover:text-white cursor-pointer'>{nav.name}</span>
                    )
                })}
                <img src={search} className='h-5/6 w-[16px] cursor-pointer' onClick={() => {
                    onVisibleSearch()
                }} />
                <div>
                    <p className='absolute ml-4 top-2'>12</p>
                    <img src={bag} className='h-5/6 w-[16px] cursor-pointer' />
                </div>

            </nav>

            {/* Mobile screen nav */}
            <nav className='flex flex-row items-baseline py-4 xl:hidden justify-between'>

                <div className='ml-10'>
                    <AiOutlineMenu className='cursor-pointer w-[16px] h-5/6 relative' />
                </div>
                <div className=' flex flex-row pr-12 gap-5 justify-end justify-items-end'>

                    <img src={appleImg} className='h-5/6 w-[16px] cursor-pointer' />
                    <img src={search} className='h-5/6 w-[16px] cursor-pointer' onClick={() => {
                        onVisibleSearch()
                    }} />
                    <div>
                        <p className='absolute ml-4 top-2 text-[12px]'>1002</p>
                        <img src={bag} className='h-5/6 w-[16px] cursor-pointer' />
                    </div>
                </div>
            </nav>

            <input type="text" className='bg-transparent border pl-2 rounded-md' hidden={selector.searches.isHide} placeholder='Search' />
            <p className='notice opacity-0 py-4 px-8'>
                Get $180–$630 in credit toward iPhone 15 or iPhone 15 Pro when you trade in iPhone 11 or higher.3 <a href="#">Shop iPhone</a></p>
        </header>
    )
}

export default NavBar