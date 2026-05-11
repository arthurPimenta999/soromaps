"use client"

import { Button } from "@/components/ui/button"
import { Console } from "console"
import React from "react"

export default function Page() {
    const [teste, setTeste] = React.useState("Clique no botão")

    async function buscarDados() {
        try {
            const response = await fetch("http://localhost:5068/api/users")

            const data = await response.json()

            setTeste(JSON.stringify(data, null, 2))
        } catch (error) {
            console.error(error)
            setTeste("Erro ao buscar dados")
        }
    }

    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black gap-4">

            <Button onClick={buscarDados}>
                Buscar dados
            </Button>

            <pre className="text-sm bg-white p-4 rounded shadow max-w-xl overflow-auto">
                {teste}
            </pre>

        </div>
    )
}