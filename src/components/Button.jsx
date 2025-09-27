"use client"
import React from 'react';
import { motion } from "motion/react"

const Button = () => {
    return (
        <div  className="flex items-center justify-center min-h-screen bg-gray-900"
      style={{
        backgroundImage: `radial-gradient(circle, rgba(6,182,212,0.2) 0.5px, transparent 1px)`,
        backgroundSize: "8px 8px",
        backgroundRepeat: "repeat"
      }}>
        <motion.button
        // initial={{
        //     rotate: 0, //initial value: start of something;
        // }}
        // animate={{
        //     // rotate:180 //animate value: what it will do;
        //     rotate: [0, 180, 0]
        // }}
        transition={{
            duration: 2,
            ease: "easeInOut"
        }}

        whileHover={{
            rotate: [0, 180, 0, -180, 0]
        }}

        className='bg-white text-gray-900 px-8 py-3 rounded-sm'>
            hello world!
        </motion.button>
    </div>
    );
};

export default Button;