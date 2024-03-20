import { useEffect, useState } from 'react'
import hero from '../assets/videos/hero.mp4'
import heroSmall from '../assets/videos/smallHero.mp4'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export const Highlight = () => {
    const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? heroSmall : hero)

    useEffect(() => {
        window.addEventListener('resize', handleVideoSrcSet);

        return () => {
            window.addEventListener('resize', handleVideoSrcSet);
        }
    }, [])

    const handleVideoSrcSet = () => {
        if (window.innerWidth < 760) {
            setVideoSrc(heroSmall)
        } else {
            setVideoSrc(hero)

        }
    }

    useGSAP(() => {
        gsap.to('#get_start', {
            delay: 1,
            y: -50,
            opacity: 1
        })
        gsap.to('#h_title', {
            delay: 1,
            y: 20,
            opacity: 1
        })


    }, [])
    return (
        <section className='min-h-[100vh] mt-4 md:mt-16 bg-black'>
            <div>
                <h2 className='text-default text-5xl font-semibold mb-4 text-center opacity-0' id='h_title'>iPhone 15 Pro</h2>
                <video autoPlay muted playsInline={true} key={videoSrc}>
                    <source src={videoSrc} type='video/mp4' />
                </video>
            </div>

            <div id='get_start' className='flex flex-col items-center opacity-0 mt-5 md:mt-0'>
                <a href="#" className='bg-stone-800 text-yellow-50 py-4 rounded-xl px-4 w-fit shadow-lg hover:shadow-gray-600'>Get Offer</a>
                <span className='text-default my-5 font-bold'>Get Offer For 99$</span>
            </div>
        </section>
    )
}
