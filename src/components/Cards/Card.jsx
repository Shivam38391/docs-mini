import React from 'react'
import { FaRegFileAlt } from "react-icons/fa"
import { LuDownload } from "react-icons/lu"
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"


function Card({ data , reference }) {
    return (
        <>
            <motion.div drag dragConstraints={reference} whileDrag={{scale:1.1}} dragElastic={.2}  dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }} className=" relative flex-shrink-0 cards w-60 h-72  bg-zinc-800 rounded-[48px] px-5 py-10 text-white overflow-hidden">

                <FaRegFileAlt />
                <p className='text  leading-tight mt-5'>{data.desc}</p>

                <div className="card-footer absolute bg-gray-900 bottom-0 left-0  w-full   " >
                    <div className='flex items-center justify-between py-[7px] px-5 ' >
                        <h5 className='   text-white '>{data.filesize}</h5>
                        <span className='w-7 h-6 bg-sky-400 rounded-full flex items-center justify-center'>
                            {data.close ? <IoClose /> : <LuDownload size=".9em" color='#ffffff' />}
                        </span>
                    </div>


                    {/* {data.tag.isOpen ? (
                        <div className="progress-tag w-full text-sm text-center font-semibold py-3 bg-green-600 text-white ">
                            Download now
                        </div>
                    ) : null} */}


                    {data.tag.isOpen && (
                        <div style={{background: `${data.tag.tagColor}`}} className= {`  progress-tag w-full text-sm text-center font-semibold py-3 text-white`} >
                            
                            { data.tag.tagTitle }

                        </div>
                    )}


                </div>


            </motion.div>

        </>
    )
}

export default Card