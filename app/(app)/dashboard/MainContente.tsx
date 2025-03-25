"use client";

import { useState, useEffect } from "react";
import { BtnShowData } from "@/components/BtnShowData";
import { CircleDollarSign } from "lucide-react";
import { Session } from "next-auth";
import DateController from "./DateController";

export default function DeshboardMain({ session }: { session: Session }) {
  const [entradas, setEntradas] = useState([]);
  const [saidas, setSaidas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const entradasResponse = await fetch('http://localhost:3001/charges?type=income');
        const entradasData = await entradasResponse.json();
        setEntradas(entradasData);

        const saidasResponse = await fetch('http://localhost:3001/charges?type=expense');
        const saidasData = await saidasResponse.json();
        setSaidas(saidasData);
      } catch (error) {
        setError('Erro ao carregar transações.');
        console.error('Erro:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="bg-slate-100 w-full h-full p-12 flex flex-col gap-4">
      <div className="flex justify-center items-center">
        <h1 className="text-4xl font-bold">
          Bem vindo{" "}
          <span className="text-indigo-700">{session?.user?.name}</span>!
        </h1>
      </div>
      <main>
        <div className="flex flex-row justify-center items-center">
          <div className="flex flex-col m-0 gap-0">
            <div className="flex flex-row justify-start items-center w-32">
              <DateController />
            </div>
            <div className="flex flex-row justify-between items-center gap-3 my-3 p-0">
              <BtnShowData
                title="Balanço Total"
                icon={CircleDollarSign}
                data="$300"
                type="increase"
                percent="12.3%"
                totalTransações={63}
              />
              <BtnShowData
                title="Entrada"
                icon={CircleDollarSign}
                data={`$${entradas.reduce((acc, trans) => acc + trans.amount, 0)}`}
                type="increase"
                percent="1.5%"
                totalTransações={entradas.length}
              />
              <BtnShowData
                title="Saida"
                icon={CircleDollarSign}
                data={`$${saidas.reduce((acc, trans) => acc + trans.amount, 0)}`}
                type="decrease"
                percent="4.7%"
                totalTransações={saidas.length}
              />
            </div>
            {/* <ChartBox periodoTitle={""} periodo={""} ganho={['200', '300', '400', '100', '30']} gasto={[]} /> */}
          </div>
        </div>
      </main>
    </div>
  );
}