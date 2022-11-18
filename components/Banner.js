import Image from "next/image";
import React from "react";

const Banner = () => {
    return <div className="flex items-center justify-center text-sm h-14 w-100 bg-gradient-to-r from-yellow-300 to-green-300">
        <Image src="/logo/logoPlus.svg" height={15} width={100} alt="mainLogo" priority />
        <div className="text-black mx-3 w-0.5 bg-black h-4" />
        <p className="text-black">Claim your free transactions {'->'}</p>
    </div>
}

export default React.memo(Banner);