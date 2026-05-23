import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CategoryCreate() {
  const navigate = useNavigate();

  const [name, setName] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const newCategory = { name };

    // simpan ke localStorage (sementara)
    const oldData = JSON.parse(localStorage.getItem("categories") || "[]");
    localStorage.setItem("categories", JSON.stringify([...oldData, newCategory]));

    navigate("/dashboard/category");
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-red-900 mb-6">
        Tambah Category
      </h1>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
        <input
          type="text"
          placeholder="Nama Category"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border rounded-lg mb-4"
          required
        />

        <button className="bg-red-900 text-white px-5 py-2 rounded-lg">
          Simpan
        </button>
      </form>
    </div>
  );
}