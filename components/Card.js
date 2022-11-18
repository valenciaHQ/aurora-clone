import Image from "next/image"
import React from "react"

const Card = ({ data }) => {
    return <div className="flex flex-col justify-around items-center bg-slate-800 rounded-lg px-4 py-8 h-64">
        <Image src={data.logo.url} height={56} width={56} alt={`${data.title}`} />
        <h2 className="text-lg">{data.title}</h2>
        <p className="text-sm text-center text-grey w-full line-clamp-3">{data.body}</p>
    </div>
}

export default React.memo(Card)