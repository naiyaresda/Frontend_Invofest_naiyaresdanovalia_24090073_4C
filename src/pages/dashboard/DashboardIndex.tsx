import { useEffect, useState } from "react";

interface EventType {
  id: number;
  name: string;
  dateEvent: string;
}

interface CategoryType {
  id: number;
  name: string;
}

interface PembicaraType {
  id: number;
  name: string;
}

export default function DashboardIndex() {

  // STATE
  const [events, setEvents] =
    useState<EventType[]>([]);

  const [categories, setCategories] =
    useState<CategoryType[]>([]);

  const [speakers, setSpeakers] =
    useState<PembicaraType[]>([]);

  // FETCH DASHBOARD DATA
  const fetchDashboardData = async () => {

    try {

      // EVENT
      const eventResponse = await fetch(
        "/api/events"
      );

      const eventData =
        await eventResponse.json();

      setEvents(eventData);

      // CATEGORY
      const categoryResponse =
        await fetch("/api/categories");

      const categoryData =
        await categoryResponse.json();

      setCategories(categoryData);

      // PEMBICARA
      const speakerResponse =
        await fetch("/api/pembicara");

      const speakerData =
        await speakerResponse.json();

      setSpeakers(speakerData);

    } catch (error) {

      console.log(error);
    }
  };

  // LOAD DATA REALTIME
  useEffect(() => {

    const loadDashboard = async () => {

      await fetchDashboardData();

    };

    // LOAD PERTAMA
    loadDashboard();

    // AUTO REFRESH
    const interval = setInterval(() => {

      loadDashboard();

    }, 2000);

    // CLEANUP
    return () => clearInterval(interval);

  }, []);

  // TAMPILAN
  return (

    <div className="w-full flex flex-col gap-8 p-8 bg-gradient-to-br from-[#fef2f2] to-[#fee2e2] min-h-full">

      {/* HEADER */}
      <div>

        <h1 className="text-3xl font-bold text-[#7f1d1d]">
          Dashboard
        </h1>

        <p className="text-gray-500">
          Selamat datang di sistem manajemen event 🔥
        </p>

      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* TOTAL EVENT */}
        <div className="bg-white rounded-xl p-5 shadow-md border-l-4 border-[#7f1d1d]">

          <p className="text-sm text-gray-500">
            Total Event
          </p>

          <h2 className="text-2xl font-bold text-[#7f1d1d]">
            {events.length}
          </h2>

        </div>

        {/* TOTAL CATEGORY */}
        <div className="bg-white rounded-xl p-5 shadow-md border-l-4 border-[#7f1d1d]">

          <p className="text-sm text-gray-500">
            Total Category
          </p>

          <h2 className="text-2xl font-bold text-[#7f1d1d]">
            {categories.length}
          </h2>

        </div>

        {/* TOTAL PEMBICARA */}
        <div className="bg-white rounded-xl p-5 shadow-md border-l-4 border-[#7f1d1d]">

          <p className="text-sm text-gray-500">
            Total Pembicara
          </p>

          <h2 className="text-2xl font-bold text-[#7f1d1d]">
            {speakers.length}
          </h2>

        </div>

      </div>

      {/* CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* EVENT TERBARU */}
        <div className="bg-white rounded-xl p-6 shadow-md">

          <h2 className="text-lg font-semibold mb-4 text-[#7f1d1d]">
            Event Terbaru
          </h2>

          <div className="flex flex-col gap-4">

            {events.length > 0 ? (

              events.map((ev) => (

                <div
                  key={ev.id}
                  className="flex justify-between items-center border-b pb-2"
                >

                  <span className="font-medium">
                    {ev.name}
                  </span>

                  <span className="text-sm text-gray-500">

                    {new Date(
                      ev.dateEvent
                    ).toLocaleDateString("id-ID")}

                  </span>

                </div>
              ))

            ) : (

              <p className="text-gray-500">
                Belum ada event
              </p>

            )}

          </div>

        </div>

        {/* PEMBICARA */}
        <div className="bg-white rounded-xl p-6 shadow-md">

          <h2 className="text-lg font-semibold mb-4 text-[#7f1d1d]">
            Pembicara
          </h2>

          <div className="flex flex-wrap gap-3">

            {speakers.length > 0 ? (

              speakers.map((sp) => (

                <div
                  key={sp.id}
                  className="px-4 py-2 bg-[#fee2e2] text-[#7f1d1d] rounded-full text-sm font-medium"
                >

                  {sp.name}

                </div>
              ))

            ) : (

              <p className="text-gray-500">
                Belum ada pembicara
              </p>

            )}

          </div>

        </div>

      </div>

      {/* CATEGORY */}
      <div className="bg-white rounded-xl p-6 shadow-md">

        <h2 className="text-lg font-semibold text-[#7f1d1d] mb-4">
          Category Event
        </h2>

        <div className="flex flex-wrap gap-3">

          {categories.length > 0 ? (

            categories.map((cat) => (

              <div
                key={cat.id}
                className="px-4 py-2 bg-[#fef2f2] rounded-lg border text-[#7f1d1d]"
              >

                {cat.name}

              </div>
            ))

          ) : (

            <p className="text-gray-500">
              Belum ada category
            </p>

          )}

        </div>

      </div>

    </div>
  );
}