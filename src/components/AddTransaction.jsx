import { useState } from "react";

export default function AddTransaction({ onAddTransaction }) {
  const [formData, setFormData] = useState({
    type: "Despesa",
    description: "",
    amount: "",
    month: new Date().getMonth(),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!["Despesa", "Receita"].includes(formData.type)) {
      return alert("Tipo invalido!");
    }

    if (!formData.description.trim() || !formData.amount.trim()) {
      return alert("Preencha os campos de descricao e valor.");
    }

    const amountNumber = Number(formData.amount);

    if (amountNumber <= 0 || Number.isNaN(amountNumber)) {
      return alert("Informe um valor de custo valido");
    }

    onAddTransaction({ ...formData, amount: amountNumber });

    setFormData({
      type: "Despesa",
      description: "",
      amount: "",
      month: new Date().getMonth(),
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" p-4 flex flex-col space-y-4 w-125 mx-auto rounded-md shadow-md"
    >
      <input
        type="text"
        name="description"
        value={formData.description}
        className="bg-white p-0.5 border rounded-md w-50 mx-auto placeholder:text-center text-center"
        onChange={handleChange}
        placeholder="Descricao"
      />
      <input
        type="number"
        name="amount"
        value={formData.amount}
        className="bg-white p-0.5 border rounded-md w-50 mx-auto placeholder:text-center text-center"
        onChange={handleChange}
        placeholder="Valor"
      />
      <div className="space-x-4 mx-auto">
        <button
          type="button"
          className={`cursor-pointer px-2 py-1 rounded-md border text-sm
            ${
              formData.type === "Despesa"
                ? "bg-red-300 text-red-950 border-red-400 font-bold"
                : "bg-transparent text-gray-700 border-gray-300"
            }`}
          onClick={() => setFormData((prev) => ({ ...prev, type: "Despesa" }))}
        >
          Despesa
        </button>
        <button
          type="button"
          className={`cursor-pointer px-2 py-1 rounded-md border text-sm
            ${
              formData.type === "Receita"
                ? "bg-green-300 text-green-900 border-green-400 font-bold"
                : "bg-transparent text-gray-700 border-gray-300"
            }`}
          onClick={() => setFormData((prev) => ({ ...prev, type: "Receita" }))}
        >
          Receita
        </button>
      </div>
      <button
        type="submit"
        className="cursor-pointer border p-1 rounded-md w-30 mx-auto hover:border-green-300"
      >
        Adicionar
      </button>
    </form>
  );
}
