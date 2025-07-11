"use client"

import { InputField } from "@/components/ui/InputField"
import { useState } from "react"
import { RiInputField } from "react-icons/ri"

export default function AirdropForm() {
    const [tokenAddress, setTokenAddress] = useState("")
    return (
        <div>
            <InputField
                label="Token Address"
                placeholder="0x"
                value={tokenAddress}
                onChange={e => setTokenAddress(e.target.value)}
            />
        </div>
    )
}