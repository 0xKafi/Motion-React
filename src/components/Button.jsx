"use client"
import React from 'react';
import { motion } from "motion/react"

const Button = () => {
    return (
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
    );
};

export default Button;