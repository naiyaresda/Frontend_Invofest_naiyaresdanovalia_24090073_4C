import { useEffect, useState } from "react";

interface PembicaraType {
  id: number;
  name: string;
  role: string;
  image: string;
}

// API URL
const API_URL =
  import.meta.env.VITE_API_URL;

export default function PembicaraIndex() {

  const [pembicara, setPembicara] =
    useState<PembicaraType[]>([]);

  const [showModal, setShowModal] =
    useState(false);

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState("");

  const [editId, setEditId] =
    useState<number | null>(null);

  const [selectedPembicara, setSelectedPembicara] =
    useState<PembicaraType | null>(null);

  // FETCH PEMBICARA
  const fetchPembicara = async () => {

    try {

      const res = await fetch(
        `${API_URL}/pembicara`
      );

      const data = await res.json();

      setPembicara(data);

    } catch (err) {

      console.log(err);
    }
  };

  // LOAD DATA
  useEffect(() => {

    const loadData = async () => {

      await fetchPembicara();

    };

    loadData();

  }, []);

  // SUBMIT (CREATE + UPDATE)
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {

    e.preventDefault();

    if (!name || !role) {

      alert("Nama dan role wajib diisi");

      return;
    }

    const url = editId
      ? `${API_URL}/pembicara/${editId}`
      : `${API_URL}/pembicara`;

    const method =
      editId ? "PUT" : "POST";

    try {

      const response = await fetch(url, {

        method,

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name,
          role,
          image:
            image ||
            "https://i.pravatar.cc/150",
        }),
      });

      const data = await response.json();

      console.log(data);

      await fetchPembicara();

      setName("");
      setRole("");
      setImage("");
      setEditId(null);
      setShowModal(false);

    } catch (err) {

      console.log(err);
    }
  };

  // EDIT
  const handleEdit = (
    speaker: PembicaraType
  ) => {

    setName(speaker.name);

    setRole(speaker.role);

    setImage(speaker.image);

    setEditId(speaker.id);

    setShowModal(true);
  };

  // DETAIL
  const handleDetail = (
    speaker: PembicaraType
  ) => {

    setSelectedPembicara(speaker);
  };

  // DELETE
  const handleDelete = async (
    id: number
  ) => {

    const confirmDelete = confirm(
      "Yakin ingin menghapus data?"
    );

    if (!confirmDelete) return;

    try {

      await fetch(
        `${API_URL}/pembicara/${id}`,
        {
          method: "DELETE",
        }
      );

      await fetchPembicara();

    } catch (err) {

      console.log(err);
    }
  };

  return (

    <div className="w-full flex flex-col gap-10 p-8 min-h-screen bg-gradient-to-br from-red-50 to-white">

      {/* HEADER */}
      <div className="text-center">

        <h1 className="text-3xl font-bold text-red-900">
          Temui Pembicara Kami
        </h1>

        <p className="text-gray-500 mt-2">
          Pembicara profesional di bidang teknologi
        </p>

      </div>

      {/* BUTTON */}
      <div className="flex justify-end">

        <button
          onClick={() => {

            setName("");
            setRole("");
            setImage("");
            setEditId(null);

            setShowModal(true);
          }}
          className="bg-red-900 text-white px-5 py-2 rounded-xl"
        >
          + Tambah
        </button>

      </div>

      {/* MODAL FORM */}
      {showModal && (

        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl p-6 w-[350px] shadow-lg"
          >

            <h2 className="text-lg font-semibold mb-4 text-red-900">

              {editId
                ? "Edit Pembicara"
                : "Tambah Pembicara"}

            </h2>

            <input
              type="text"
              placeholder="Nama"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              className="w-full border p-2 rounded mb-3"
            />

            <input
              type="text"
              placeholder="Role"
              value={role}
              onChange={(e) =>
                setRole(e.target.value)
              }
              className="w-full border p-2 rounded mb-3"
            />

            <input
              type="text"
              placeholder="URL Foto"
              value={image}
              onChange={(e) =>
                setImage(e.target.value)
              }
              className="w-full border p-2 rounded mb-4"
            />

            <div className="flex justify-end gap-2">

              <button
                type="button"
                onClick={() =>
                  setShowModal(false)
                }
                className="px-4 py-2 border rounded"
              >
                Batal
              </button>

              <button
                type="submit"
                className="bg-red-900 text-white px-4 py-2 rounded"
              >
                {editId
                  ? "Update"
                  : "Simpan"}
              </button>

            </div>

          </form>

        </div>
      )}

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 flex-1">

        {pembicara.map((sp) => (

          <div
            key={sp.id}
            className="flex flex-col items-center text-center"
          >

            <div className="w-40 h-40 rounded-full p-1 bg-red-900">

              <img
                src={sp.image}
                alt={sp.name}
                className="w-full h-full object-cover rounded-full border-4 border-white"
              />

            </div>

            <div className="bg-white rounded-xl shadow-md mt-4 px-5 py-4 w-full">

              <h2 className="font-semibold text-gray-800">
                {sp.name}
              </h2>

              <p className="text-sm text-red-900 mt-1">
                {sp.role}
              </p>

              <div className="flex flex-col gap-2 mt-4">

                <button
                  onClick={() =>
                    handleEdit(sp)
                  }
                  className="bg-yellow-500 text-white py-2 rounded-lg text-sm"
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    handleDetail(sp)
                  }
                  className="bg-red-900 text-white py-2 rounded-lg text-sm"
                >
                  Detail
                </button>

                <button
                  onClick={() =>
                    handleDelete(sp.id)
                  }
                  className="bg-gray-200 py-2 rounded-lg text-sm"
                >
                  Hapus
                </button>

              </div>

            </div>

          </div>
        ))}

      </div>

      {/* MODAL DETAIL */}
      {selectedPembicara && (

        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

          <div className="bg-white p-6 rounded-xl w-[300px] text-center">

            <img
              src={selectedPembicara.image}
              className="w-24 h-24 mx-auto rounded-full mb-3"
            />

            <h2 className="text-xl font-bold">
              {selectedPembicara.name}
            </h2>

            <p className="text-red-900">
              {selectedPembicara.role}
            </p>

            <button
              onClick={() =>
                setSelectedPembicara(null)
              }
              className="mt-4 bg-red-900 text-white px-4 py-2 rounded"
            >
              Tutup
            </button>

          </div>

        </div>
      )}

    </div>
  );
}