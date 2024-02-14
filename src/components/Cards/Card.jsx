import React from 'react'
import { FaRegFileAlt } from "react-icons/fa"
import { LuDownload } from "react-icons/lu"
import { IoClose } from "react-icons/io5";


function Card({ data }) {
    return (
        <>
            <div className=" relative cards w-60 h-72  bg-fuchsia-400 rounded-[48px] px-5 py-10 text-black overflow-hidden">

                <FaRegFileAlt />
                <p className='text  leading-tight mt-5'>{data.desc}</p>

                <div className="card-footer absolute bg-slate-200 bottom-0 left-0  w-full   " >
                    <div className='flex items-center justify-between py-[7px] px-5 ' >
                        <h5>{data.filesize}</h5>
                        <span className='w-7 h-6 bg-sky-400 rounded-full flex items-center justify-center'>

                            {data.close ? <IoClose /> : <LuDownload size=".9em" color='#ffffff' />}

                        </span>

                    </div>

                    <div className="progress-tag w-full text-sm text-center font-semibold py-3 bg-green-600 text-white ">
                        { }
                    </div>

                </div>


            </div>

        </>
    )
}

export default Card