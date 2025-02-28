import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"


const Discreption = () => {
  return (
    <motion.div 
     initial={{opacity:0.2,y:100}} 
     transition={{duration:1}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}
    className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
        <h1 className=' text-3xl  sm:text-4xl font-semibold mb-2'>
            Create AI Images
        </h1>
        <p className=' text-gray-500 mb-8'>Turn your imagination into visuals</p>
        <div className=' flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
            <img src={assets.sample_img_1} className=' w-80 xl:w-96 rounded-lg' />
            <div>
                <h2 className=' text-3xl font-medium max-w-lg mb-4'>Introducing the AI-Powered Text to Image Genrator</h2>
                <p className='text-gray-600'>Easily bring your ideas to life with the power of AI text-to-image generators.
                 Transform simple text descriptions into stunning visuals in seconds, 
                 unlocking endless creative possibilities. Whether you're designing, 
                 brainstorming, or presenting, this innovative tool turns your imagination into reality,
                  making it easier than ever to visualize and share your ideas with the world.</p>
                  <p className='text-gray-600'>
                  Just type in text, and our cutting-edge AI brings your ideas to life.
                   Transform words into stunning visuals effortlessly with the power of advanced text-to-image generation.
                   Creativity and possibility are limitless. With our cutting-edge AI,
                    your imagination knows no bounds—turn ideas into reality and explore endless opportunities.
                  </p>
            </div>
        </div>
    </motion.div>
  )
}

export default Discreption