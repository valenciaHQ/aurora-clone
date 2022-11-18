import React from "react"
import Card from "./Card"

const Cards = ({ data }) => {
    return <div className="container mx-auto grid-cols-2 px-4 mt-10 lg:px-40 lg:mt-40 grid lg:grid-cols-4 gap-4">{data.map(item => <Card key={item.sys.id} data={item} />)}</div>

}

export default React.memo(Cards)