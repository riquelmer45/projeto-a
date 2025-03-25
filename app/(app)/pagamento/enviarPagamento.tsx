"use client";
import { useState } from "react";

export default function EnviarPagamento() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const handlePayment = async () => {
        setLoading(true);
        setError(null);
        setSuccess(null);

        const url = 'http://localhost:3001/orders';

        const options = {
            method: 'POST',
            headers: {
                accept: '*/*',
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                reference_id: 'ex-00002',
                customer: {
                    name: 'Jose da Silva',
                    email: 'email@test.com',
                    tax_id: '12345678909',
                    phones: [{ country: '55', area: '11', number: '999999999', type: 'MOBILE' }]
                },
                items: [
                    {
                        reference_id: 'referencia do item',
                        name: 'nome do item',
                        quantity: 3,
                        unit_amount: 5000
                    }
                ],
                qr_codes: [{ amount: { value: 15000 } }],
            })
        };

        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error('Erro ao criar pagamento');
            }
            const data = await response.json();
            setSuccess("Pagamento gerado com sucesso!");
            console.log("Resposta da API:", data);
        } catch (error) {
            setError('Erro ao gerar pagamento.');
            console.error('Erro:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <button onClick={handlePayment} disabled={loading}>
                {loading ? 'Processando...' : 'Enviar Pagamento'}
            </button>
            {error && <p className="bg-red-400 text-red-700">{error}</p>}
            {success && <p className="bg-green-400 text-green-700">{success}</p>}
        </div>
    );
}