import React, { useRef } from 'react'
import Card from './Cards/Card'


function Foreground() {

    const ref = useRef(null)


    const data = [

        {
            desc: "loren hgdhgsD HGDWGH",
            filesize: ".9mb",
            close: true,
            tag: { isOpen: true, tagTitle: "download Now" ,  tagColor: "green"}
        },
        {
            desc: "loren hgdhgsD HGDWGH",
            filesize: ".9mb",
            close: true,
            tag: { isOpen: true, tagTitle: "download Now" ,  tagColor: "green"}
        },
        {
            desc: "loren hgdhgsD HGDWGH",
            filesize: ".9mb",
            close: true,
            tag: { isOpen: true, tagTitle: "uploaded" ,  tagColor: "blue"}
        },
        {
            desc: "loren hgdhgsD HGDWGH",
            filesize: ".9mb",
            close: false,
            tag: { isOpen: false, tagTitle: "download Now" ,  tagColor: "red"}
        },


    ]

    return (
        <>

            <div ref={ref} className='foreground z-[3] fixed w-full h-full flex gap-10 flex-wrap p-8' >

                { data.map((item, index) => (
                    <Card data= {item}  reference= {ref}/>
                ) ) }

            </div>

        </>
    )
}

export default Foreground