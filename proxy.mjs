import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.post("/orders", async (req, res) => {
  try {
    const response = await axios.post(
      "https://sandbox.api.pagseguro.com/orders",
      req.body,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.PAGBANK_TOKEN}`,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(error.response.status).json(error.response.data);
  }
});

app.get("/charges", async (req, res) => {
  try {
    const response = await axios.get(
      "https://sandbox.api.pagseguro.com/charges",
      {
        headers: {
          Authorization: `Bearer ${process.env.PAGBANK_TOKEN}`,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(error.response.status).json(error.response.data);
  }
});

app.listen(port, () => {
  console.log(`Proxy server listening at http://localhost:${port}`);
});
