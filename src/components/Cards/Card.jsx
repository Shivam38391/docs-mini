import React from 'react'
import { FaRegFileAlt } from "react-icons/fa"
import { LuDownload } from "react-icons/lu"


function Card() {
    return (
        <>
            <div className=" relative cards w-60 h-72  bg-fuchsia-400 rounded-[48px] px-5 py-10 text-black overflow-hidden">

                <FaRegFileAlt />
                <p className='text  leading-tight mt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, inventore sunt assumenda sint reiciendis unde, error quisquam ipsa nisi earum ullam quis natus ad quidem, libero blanditiis sed nostrum repellat?</p>

                <div className="card-footer absolute bg-slate-200 bottom-0 left-0  w-full   " >
                    <div className='flex items-center justify-between py-[7px] px-5 ' >
                        <h5>.4mb</h5>
                        <span className='w-7 h-6 bg-sky-400 rounded-full flex items-center justify-center'>
                            <LuDownload size=".9em" color='#ffffff' />
                        </span>

                    </div>
                    
                    <div className="progress-tag w-full text-sm text-center font-semibold py-3 bg-green-600 text-white ">
                                Download Now
                    </div>

                </div>


            </div>

        </>
    )
}

export default Card