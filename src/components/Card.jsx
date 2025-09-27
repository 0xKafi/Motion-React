"use client"
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { X } from 'lucide-react';

const Card = () => {
    const [open, setOpen] = useState(true)
    return (
        <div className='bg-white/90 h-screen flex items-center justify-center'>
            <AnimatePresence>
            {
                open && <motion.div
                initial={{
                    opacity:0,
                    scale:0.98,
                    filter: "blur(10px)"
                }}
                animate={{
                    opacity:1,
                    scale:1,
                    filter: 'none'
                }}
                transition={{
                    duration: 0.6,
                    ease: "easeInOut"
                }}
                exit={{
                    opacity: 0,
                    scale: 0.98,
                    filter: "blur(10px)"
                }}
                className='bg-white h-[500px] w-[350px] text-black/80 rounded-xl shadow-xs p-6 flex flex-col'>
                    <div>
                        <h1 className='font-bold text-md text-center'>AceUi Components</h1>
                        <p className='font-medium text-sm text-center mt-2 text-gray-500'>AceUi components use our ready-made components</p>
                    </div>
                    <div className='flex items-center justify-center mt-4'>
                        <button onClick={()=> setOpen(false)} className='flex items-center justify-center font-semibold shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-1 rounded-md'>
                        <span className='font-bold bg-gray-900 text-white px-[6px] rounded-sm mr-1'>A</span>
                        AceUI <X className='ml-1'size={16}></X></button>
                    </div>
                    <div className='flex-1 bg-gray-100 mt-6 rounded-lg border border-dashed border-gray-200 relative'>
                        <motion.div
                        initial={{
                            opacity:0,
                            scale:0.98,
                            filter: "blur(10px)"
                        }}
                        whileHover={{
                            opacity:1,
                            scale:1.02,
                            filter: "none",
                        }}
                        transition={{
                            duration: 0.4,
                            ease: "easeInOut"
                        }}
                        className="absolute border border-gray-200 insert-0 h-full w-full rounded-lg bg-white divide-y divide-gray-200"> 
                            <div className='h-15 text-sm p-2 text-center'>AceUi</div>
                            <div className='h-15 text-sm p-2 text-center'>AceUi</div>
                            <div className='h-15 text-sm p-2 text-center'>AceUi</div>
                            <div className='h-15 text-sm p-2 text-center'>AceUi</div>
                            <div className='h-15 text-sm p-2 text-center'>AceUi</div>
                        </motion.div>
                    </div>
                </motion.div>
            }
            </AnimatePresence>
        </div>
    );
};

export default Card;