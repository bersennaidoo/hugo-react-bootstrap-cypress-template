import React, { FC } from "react"

interface IInputDetailProps {
    name: string
    value: string
    placeholder?: string
    readOnly?: boolean
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputDetail: FC<IInputDetailProps> = (props: IInputDetailProps) => {

    const { name, value, placeholder, readOnly, onChange } = props

    return (
        <div className="field">
            <label className="form-label" htmlFor={name}>{name}</label>
            <input name={name} defaultValue={value} placeholder={placeholder} onChange={onChange} className="form-control" type="text" readOnly={readOnly}></input>
        </div>
    )
}

export default InputDetail