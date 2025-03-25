/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const PAGBANK_API_URL = process.env.PAGBANK_URL;
const PAGBANK_TOKEN = process.env.PAGBANK_TOKEN;

console.log("PAGBANK_API_URL:", PAGBANK_API_URL);

const api = axios.create({
  baseURL: PAGBANK_API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${PAGBANK_TOKEN}`,
  },
});

// Função para criar um pagamento
export const createPayment = async (paymentData: any) => {
  try {
    console.log(PAGBANK_API_URL + "/orders");
    const response = await api.post(
      `${PAGBANK_API_URL}` + "/orders",
      paymentData
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao criar pagamento:", error);
    throw error;
  }
};

// Função para visualizar entradas
export const getEntradas = async () => {
  try {
    const response = await api.get("/transactions", {
      params: {
        type: "income", // Tipo de transação: entrada
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao obter entradas:", error);
    throw error;
  }
};

// Função para visualizar saídas
export const getSaidas = async () => {
  try {
    const response = await api.get("/transactions", {
      params: {
        type: "expense", // Tipo de transação: saída
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao obter saídas:", error);
    throw error;
  }
};
