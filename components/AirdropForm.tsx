"use client"

import { InputField } from "@/components/ui/InputField"
import { useState } from "react"
import { RiInputField } from "react-icons/ri"
import { chainsToTSender, tsenderAbi, erc20Abi } from "@/constants"
import { useChainId, useConfig, useAccount } from "wagmi"
import { readContract } from "@wagmi/core"

export default function AirdropForm() {
    const [tokenAddress, setTokenAddress] = useState("")
    const [recepients, setRecepients] = useState("")
    const [amounts, setAmounts] = useState("")
    const chainId = useChainId()
    const config = useConfig()
    const account = useAccount()

    async function getApprovedAmount(tSenderAddress: string | null): Promise<number> {
        if (!tSenderAddress) {
            alert("Contract address not found, please use a supported chain")
            return 0
        }
        // read from the chain to see if we have approved enough token
        const response = await readContract(config, {
            abi: erc20Abi,
            address: tokenAddress as `0x${string}`,
            functionName: "allowance",
            args: [account.address, tSenderAddress as `0x${string}`],
        })
        return response as number
    }

    async function handleSubmit() {
        // TO-DO
        // 1a. if tsender contract approved move to step2
        // 1b. approve tsender contract to send out tokens
        // 2. call the airdrop function on the tsender contract
        // 3.wait for the txn to be mined
        const tSenderAddress = chainsToTSender[chainId]["tsender"]
        console.log(chainId)
        console.log(tSenderAddress)
        const approvedAmount = await getApprovedAmount(tSenderAddress)
        console.log(approvedAmount)
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