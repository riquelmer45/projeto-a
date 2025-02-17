'use client'
import { useState } from "react";
import EnviarPagamento from "./enviarPagamento";

export default function Page() {
    const [enviarPagamento, setEnviarPagamento] = useState(false);

    function realizarPagamento() {
        setEnviarPagamento(true);
    }
    function fecharRealizarPagamento() {
        setEnviarPagamento(false);
    }
    return (
        <div>
            <h1>Teste de pagamento</h1>
            <button onClick={realizarPagamento}>
                Pagar
            </button>
            {enviarPagamento === true && (
                <div>
                    <EnviarPagamento />
                    <button onClick={fecharRealizarPagamento}> X </button>
                </div>
            )}
        </div>
    );
}