import { useEffect, useState } from "react";

interface EventType {
  id: number;
  name: string;
  description: string;
  location: string;
  dateEvent: string;

  category?: {
    id: number;
    name: string;
  };

  pembicara?: {
    id: number;
    name: string;
  };
}

interface CategoryType {
  id: number;
  name: string;
}

interface PembicaraType {
  id: number;
  name: string;
}

// API URL
const API_URL =
  import.meta.env.VITE_API_URL;

export default function EventIndex() {

  // DATA
  const [events, setEvents] =
    useState<EventType[]>([]);

  const [categories, setCategories] =
    useState<CategoryType[]>([]);

  const [pembicaras, setPembicaras] =
    useState<PembicaraType[]>([]);

  // MODAL
  const [showModal, setShowModal] =
    useState(false);

  // DETAIL
  const [selectedEvent, setSelectedEvent] =
    useState<EventType | null>(null);

  // EDIT
  const [editId, setEditId] =
    useState<number | null>(null);

  // FORM
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [location, setLocation] = useState("");
  const [dateEvent, setDateEvent] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [pembicaraId, setPembicaraId] = useState("");

  // FETCH EVENTS
  const fetchEvents = async () => {

    try {

      const res = await fetch(
        `${API_URL}/events`
      );

      const data = await res.json();

      setEvents(data);

    } catch (err) {

      console.log(err);
    }
  };

  // FETCH CATEGORY
  const fetchCategories = async () => {

    try {

      const res = await fetch(
        `${API_URL}/categories`
      );

      const data = await res.json();

      setCategories(data);

    } catch (err) {

      console.log(err);
    }
  };

  // FETCH PEMBICARA
  const fetchPembicaras = async () => {

    try {

      const res = await fetch(
        `${API_URL}/pembicara`
      );

      const data = await res.json();

      setPembicaras(data);

    } catch (err) {

      console.log(err);
    }
  };

  // LOAD DATA
  useEffect(() => {

    const loadData = async () => {

      await fetchEvents();

      await fetchCategories();

      await fetchPembicaras();

    };

    loadData();

  }, []);

  // CREATE & UPDATE EVENT
  const handleSubmit = async () => {

    if (
      !title ||
      !desc ||
      !location ||
      !dateEvent ||
      !categoryId ||
      !pembicaraId
    ) {

      alert("Semua field wajib diisi");

      return;
    }

    try {

      const url = editId
        ? `${API_URL}/events/${editId}`
        : `${API_URL}/events`;

      const method =
        editId ? "PUT" : "POST";

      const response = await fetch(
        url,
        {
          method,

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            name: title,
            description: desc,
            location,
            dateEvent,
            categoryId: Number(categoryId),
            pembicaraId: Number(pembicaraId),
          }),
        }
      );

      const data = await response.json();

      console.log(data);

      setShowModal(false);

      // RESET FORM
      setTitle("");
      setDesc("");
      setLocation("");
      setDateEvent("");
      setCategoryId("");
      setPembicaraId("");
      setEditId(null);

      await fetchEvents();

    } catch (err) {

      console.log(err);
    }
  };

  // DETAIL EVENT
  const handleDetail = (
    event: EventType
  ) => {

    setSelectedEvent(event);
  };

  // EDIT EVENT
  const handleEdit = (
    event: EventType
  ) => {

    setEditId(event.id);

    setTitle(event.name);

    setDesc(event.description);

    setLocation(event.location);

    setDateEvent(
      event.dateEvent.split("T")[0]
    );

    setCategoryId(
      String(event.category?.id || "")
    );

    setPembicaraId(
      String(event.pembicara?.id || "")
    );

    setShowModal(true);
  };

  // DELETE EVENT
  const handleDelete = async (
    id: number
  ) => {

    const confirmDelete = confirm(
      "Yakin ingin menghapus event?"
    );

    if (!confirmDelete) return;

    try {

      await fetch(
        `${API_URL}/events/${id}`,
        {
          method: "DELETE",
        }
      );

      await fetchEvents();

    } catch (err) {

      console.log(err);
    }
  };

  return (

    <div className="p-6">

      {/* HEADER */}
      <div className="text-center">

        <h1 className="text-3xl font-bold text-red-900">
          Daftar Event
        </h1>

        <p className="text-gray-500 mt-3">
          Temui event menarik yang tersedia
        </p>

      </div>

      {/* BUTTON */}
      <div className="flex justify-end mb-4">

        <button
          onClick={() => {

            setShowModal(true);

            setEditId(null);

            setTitle("");
            setDesc("");
            setLocation("");
            setDateEvent("");
            setCategoryId("");
            setPembicaraId("");
          }}
          className="bg-red-800 text-white px-4 py-2 rounded-lg"
        >
          + Tambah Event
        </button>

      </div>

      {/* GRID EVENT */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        {events.map((event) => (

          <div
            key={event.id}
            className="bg-white shadow-md rounded-xl p-4 border"
          >

            <h3 className="text-xl font-bold text-red-800">
              {event.name}
            </h3>

            <p className="text-gray-600 text-sm mt-1">
              {event.description}
            </p>

            <p className="text-sm mt-2">
              📍 {event.location}
            </p>

            <p className="text-sm">
              📅 {event.dateEvent}
            </p>

            <p className="text-sm mt-2">
              Category: {event.category?.name}
            </p>

            <p className="text-sm">
              Pembicara: {event.pembicara?.name}
            </p>

            <div className="flex gap-2 mt-4">

              {/* DETAIL */}
              <button
                onClick={() =>
                  handleDetail(event)
                }
                className="bg-blue-500 text-white px-3 py-1 rounded"
              >
                Detail
              </button>

              {/* EDIT */}
              <button
                onClick={() =>
                  handleEdit(event)
                }
                className="bg-yellow-500 text-white px-3 py-1 rounded"
              >
                Edit
              </button>

              {/* DELETE */}
              <button
                onClick={() =>
                  handleDelete(event.id)
                }
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>

            </div>

          </div>
        ))}

      </div>

      {/* MODAL CREATE & EDIT */}
      {showModal && (

        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

          <div className="bg-white p-5 rounded w-[400px] space-y-3">

            <h2 className="text-xl font-bold">

              {editId
                ? "Edit Event"
                : "Tambah Event"}

            </h2>

            <input
              className="border w-full p-2"
              placeholder="Judul"
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
            />

            <input
              className="border w-full p-2"
              placeholder="Deskripsi"
              value={desc}
              onChange={(e) =>
                setDesc(e.target.value)
              }
            />

            <input
              className="border w-full p-2"
              placeholder="Lokasi"
              value={location}
              onChange={(e) =>
                setLocation(e.target.value)
              }
            />

            <input
              type="date"
              className="border w-full p-2"
              value={dateEvent}
              onChange={(e) =>
                setDateEvent(e.target.value)
              }
            />

            {/* CATEGORY */}
            <select
              className="border w-full p-2"
              value={categoryId}
              onChange={(e) =>
                setCategoryId(e.target.value)
              }
            >

              <option value="">
                Pilih Category
              </option>

              {categories.map((c) => (

                <option
                  key={c.id}
                  value={c.id}
                >
                  {c.name}
                </option>

              ))}

            </select>

            {/* PEMBICARA */}
            <select
              className="border w-full p-2"
              value={pembicaraId}
              onChange={(e) =>
                setPembicaraId(e.target.value)
              }
            >

              <option value="">
                Pilih Pembicara
              </option>

              {pembicaras.map((p) => (

                <option
                  key={p.id}
                  value={p.id}
                >
                  {p.name}
                </option>

              ))}

            </select>

            <div className="flex justify-end gap-2">

              <button
                onClick={() =>
                  setShowModal(false)
                }
                className="px-3 py-1 border"
              >
                Cancel
              </button>

              <button
                onClick={handleSubmit}
                className="bg-red-800 text-white px-3 py-1 rounded"
              >

                {editId
                  ? "Update"
                  : "Save"}

              </button>

            </div>

          </div>

        </div>
      )}

      {/* MODAL DETAIL */}
      {selectedEvent && (

        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

          <div className="bg-white p-6 rounded-xl w-[400px]">

            <h2 className="text-2xl font-bold text-red-900 mb-4">
              Detail Event
            </h2>

            <div className="space-y-2">

              <p>
                <strong>Nama:</strong>{" "}
                {selectedEvent.name}
              </p>

              <p>
                <strong>Deskripsi:</strong>{" "}
                {selectedEvent.description}
              </p>

              <p>
                <strong>Lokasi:</strong>{" "}
                {selectedEvent.location}
              </p>

              <p>
                <strong>Tanggal:</strong>{" "}
                {selectedEvent.dateEvent}
              </p>

              <p>
                <strong>Category:</strong>{" "}
                {selectedEvent.category?.name}
              </p>

              <p>
                <strong>Pembicara:</strong>{" "}
                {selectedEvent.pembicara?.name}
              </p>

            </div>

            <div className="flex justify-end mt-5">

              <button
                onClick={() =>
                  setSelectedEvent(null)
                }
                className="bg-red-900 text-white px-4 py-2 rounded"
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