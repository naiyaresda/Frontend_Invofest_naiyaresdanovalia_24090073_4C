import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EventCreate() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const newEvent = { title, desc };

    const oldData = JSON.parse(localStorage.getItem("events") || "[]");
    localStorage.setItem("events", JSON.stringify([...oldData, newEvent]));

    navigate("/dashboard/event");
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-red-900 mb-6">
        Tambah Event
      </h1>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">

        <input
          type="text"
          placeholder="Nama Event"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 border rounded-lg mb-4"
          required
        />

        <textarea
          placeholder="Deskripsi"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
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