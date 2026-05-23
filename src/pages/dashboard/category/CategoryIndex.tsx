import { useEffect, useState } from "react";

// TYPE DATA CATEGORY
interface CategoryType {
  id: number;
  name: string;
}

// COMPONENT
export default function CategoryIndex() {

  // STATE
  const [categories, setCategories] =
    useState<CategoryType[]>([]);

  const [showModal, setShowModal] =
    useState(false);

  const [selectedCategory, setSelectedCategory] =
    useState<CategoryType | null>(null);

  const [name, setName] = useState("");

  const [editId, setEditId] =
    useState<number | null>(null);

  // FETCH DATA CATEGORY
  const fetchCategories = async () => {

    try {

      const response = await fetch(
        "/api/categories"
      );

      const data = await response.json();

      setCategories(data);

    } catch (error) {

      console.log(error);
    }
  };

  // LOAD DATA
  useEffect(() => {

    const loadData = async () => {

      await fetchCategories();

    };

    loadData();

  }, []);

  // TAMBAH & UPDATE CATEGORY
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {

    e.preventDefault();

    if (!name) {

      alert("Nama category wajib diisi");

      return;
    }

    try {

      const url = editId
        ? `/api/categories/${editId}`
        : `/api/categories`;

      const method =
        editId ? "PUT" : "POST";

      const response = await fetch(url, {

        method,

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name,
        }),
      });

      const data = await response.json();

      console.log(data);

      await fetchCategories();

      setName("");

      setEditId(null);

      setShowModal(false);

    } catch (error) {

      console.log(error);
    }
  };

  // EDIT CATEGORY
  const handleEdit = (
    category: CategoryType
  ) => {

    setName(category.name);

    setEditId(category.id);

    setShowModal(true);
  };

  // DETAIL CATEGORY
  const handleDetail = (
    category: CategoryType
  ) => {

    setSelectedCategory(category);
  };

  // DELETE CATEGORY
  const handleDelete = async (
    id: number
  ) => {

    const confirmDelete = confirm(
      "Yakin ingin menghapus category?"
    );

    if (!confirmDelete) return;

    try {

      await fetch(
        `/api/categories/${id}`,
        {
          method: "DELETE",
        }
      );

      await fetchCategories();

    } catch (error) {

      console.log(error);
    }
  };

  // TAMPILAN
  return (

    <div className="w-full min-h-screen p-8 bg-gradient-to-br from-red-50 to-white flex flex-col gap-10">

      {/* HEADER */}
      <div className="text-center">

        <h1 className="text-3xl font-bold text-red-900">
          Daftar Category
        </h1>

        <p className="text-gray-500 mt-2">
          Kelola category event Invofest
        </p>

      </div>

      {/* BUTTON TAMBAH */}
      <div className="flex justify-end">

        <button

          onClick={() => {

            setName("");

            setEditId(null);

            setShowModal(true);
          }}

          className="bg-red-900 text-white px-5 py-2 rounded-xl hover:bg-red-800 transition"
        >
          + Tambah
        </button>

      </div>

      {/* MODAL FORM */}
      {showModal && (

        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

          <form
            onSubmit={handleSubmit}
            className="bg-white w-[350px] rounded-xl p-6 shadow-lg"
          >

            <h2 className="text-xl font-bold text-red-900 mb-4">

              {editId
                ? "Edit Category"
                : "Tambah Category"}

            </h2>

            <input
              type="text"
              placeholder="Nama Category"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              className="w-full border p-2 rounded mb-4"
            />

            <div className="flex justify-end gap-2">

              <button
                type="button"
                onClick={() =>
                  setShowModal(false)
                }
                className="border px-4 py-2 rounded"
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

      {/* LIST CATEGORY */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {categories.map((cat) => (

          <div
            key={cat.id}
            className="bg-white rounded-xl shadow-md p-6"
          >

            <h2 className="text-lg font-semibold text-gray-800">
              {cat.name}
            </h2>

            <div className="flex flex-col gap-2 mt-4">

              {/* BUTTON EDIT */}
              <button
                onClick={() =>
                  handleEdit(cat)
                }
                className="bg-yellow-500 text-white py-2 rounded-lg text-sm hover:bg-yellow-600 transition"
              >
                Edit
              </button>

              {/* BUTTON DETAIL */}
              <button
                onClick={() =>
                  handleDetail(cat)
                }
                className="bg-red-900 text-white py-2 rounded-lg text-sm hover:bg-red-800 transition"
              >
                Detail
              </button>

              {/* BUTTON DELETE */}
              <button
                onClick={() =>
                  handleDelete(cat.id)
                }
                className="bg-gray-200 py-2 rounded-lg text-sm hover:bg-gray-300 transition"
              >
                Hapus
              </button>

            </div>

          </div>
        ))}

      </div>

      {/* MODAL DETAIL */}
      {selectedCategory && (

        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

          <div className="bg-white w-[350px] rounded-xl p-6 shadow-lg">

            <h2 className="text-2xl font-bold text-red-900 mb-4">
              Detail Category
            </h2>

            <p className="mb-2">
              <span className="font-semibold">
                ID:
              </span>{" "}
              {selectedCategory.id}
            </p>

            <p className="mb-6">
              <span className="font-semibold">
                Nama:
              </span>{" "}
              {selectedCategory.name}
            </p>

            <div className="flex justify-end">

              <button
                onClick={() =>
                  setSelectedCategory(null)
                }
                className="bg-red-900 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition"
              >
                Tutup
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}