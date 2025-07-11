"use client"

import { InputField } from "@/components/ui/InputField"
import { useState } from "react"
import { RiInputField } from "react-icons/ri"

export default function AirdropForm() {
    const [tokenAddress, setTokenAddress] = useState("")
    const [recepients, setRecepients] = useState("")
    const [amounts, setAmounts] = useState("")

    async function handleSubmit() {
        // TODO
    }

    return (
        <div>
            <InputField
                label="Token Address"
                placeholder="0x"
                value={tokenAddress}
                onChange={e => setTokenAddress(e.target.value)}
            />
            <InputField
                label="Recepients (comma or new line separated"
                placeholder="0x123...,0x123...,0x123..."
                value={tokenAddress}
                onChange={e => setRecepients(e.target.value)}
                large={true}
            />
            <InputField
                label="Amounts (wei; comma or new line separated"
                placeholder="100,200,300"
                value={tokenAddress}
                onChange={e => setAmounts(e.target.value)}
                large={true}
            />
            <button onClick={handleSubmit}>
                Send tokens
            </button>
        </div>
    )
}