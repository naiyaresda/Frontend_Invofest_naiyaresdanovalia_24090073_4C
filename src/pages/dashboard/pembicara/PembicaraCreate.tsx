import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PembicaraCreate() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [img, setImg] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const newData = { name, job, img };

    const oldData = JSON.parse(localStorage.getItem("pembicara") || "[]");
    localStorage.setItem("pembicara", JSON.stringify([...oldData, newData]));

    navigate("/dashboard/pembicara");
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-red-900 mb-6">
        Tambah Pembicara
      </h1>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">

        <input
          type="text"
          placeholder="Nama"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border rounded-lg mb-4"
          required
        />

        <input
          type="text"
          placeholder="Role / Pekerjaan"
          value={job}
          onChange={(e) => setJob(e.target.value)}
          className="w-full p-3 border rounded-lg mb-4"
          required
        />

        <input
          type="text"
          placeholder="URL Foto"
          value={img}
          onChange={(e) => setImg(e.target.value)}
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