import React from 'react'
import Card from './Cards/Card'

function Foreground() {


    const data = [

        {
            desc: "loren hgdhgsD HGDWGH",
            filesize: ".9mb",
            close: true,
            tag: { isOpen: true, tagTitle: "download Now" ,  tagColor: "green"}
        }
    ]

    return (
        <>

            <div className='foreground z-[3] fixed w-full h-full ' >

                { data.map((item, index) => (
                    <Card data= {item}/>
                ) ) }

            </div>

        </>
    )
}

export default Foreground