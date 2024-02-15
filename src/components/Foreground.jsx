import React, { useRef } from 'react'
import Card from './Cards/Card'


function Foreground() {

    const ref = useRef(null)


    const data = [

        {
            desc: "lorem react awesomenis",
            filesize: ".9mb",
            close: true,
            tag: { isOpen: true, tagTitle: "download Now", tagColor: "green" }
        },
        {
            desc: "lorem django",
            filesize: ".9mb",
            close: true,
            tag: { isOpen: true, tagTitle: "download Now", tagColor: "green" }
        },
        {
            desc: "loren Next js",
            filesize: ".9mb",
            close: true,
            tag: { isOpen: true, tagTitle: "uploaded", tagColor: "blue" }
        },
        {
            desc: "Todo app",
            filesize: ".9mb",
            close: true,
            tag: { isOpen: true, tagTitle: "uploaded", tagColor: "blue" }
        },
        {
            desc: "loren web development",
            filesize: ".9mb",
            close: true,
            tag: { isOpen: true, tagTitle: "uploaded", tagColor: "blue" }
        },
        {
            desc: "loren demo card",
            filesize: ".9mb",
            close: false,
            tag: { isOpen: false, tagTitle: "download Now", tagColor: "red" }
        },


    ]

    return (
        <>

            <div ref={ref} className='foreground z-[3] fixed w-full h-full flex gap-10 flex-wrap p-8' >

                {data.map((item, index) => (
                    <Card key={index} data={item} reference={ref} />
                ))}

            </div>

        </>
    )
}

export default Foreground