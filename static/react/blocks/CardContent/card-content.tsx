import React, { FC } from "react"

interface ICardContentProps {
    name: string
    description: string
}

const CardContent: FC<ICardContentProps> = (props: ICardContentProps) => {

    const { name, description} = props

    return (

        <div className="card-content">
            <div className="name">{name}</div>
            <div className="description">{description}</div>
        </div>
    )
}

export default CardContent