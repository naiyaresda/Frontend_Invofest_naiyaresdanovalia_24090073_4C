import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import Beranda from "./pages/Beranda";
import Competition from "./pages/Competition";
import Seminar from "./pages/Seminar";
import Workshop from "./pages/Workshop";
import Talkshow from "./pages/Talkshow";
import Login from "./pages/Login";
import Register from "./pages/Register";

import DashboardIndex from "./pages/dashboard/DashboardIndex";
import ProtectedRoute from "./routes/ProtectedRoute";
import DashboardLayout from "./layouts/DashboardLayout";

// CATEGORY
import CategoryIndex from "./pages/dashboard/category/CategoryIndex";
import CategoryCreate from "./pages/dashboard/category/CategoryCreate";

// PEMBICARA
import PembicaraIndex from "./pages/dashboard/pembicara/PembicaraIndex";
import PembicaraCreate from "./pages/dashboard/pembicara/PembicaraCreate";

// EVENT
import EventIndex from "./pages/dashboard/event/EventIndex";
import EventCreate from "./pages/dashboard/event/EventCreate";

// BIODATA
import BiodataIndex from "./pages/dashboard/biodata";

function App() {
  return (
    <Routes>

      {/* ================= PUBLIC ================= */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Beranda />} />
        <Route path="/competition" element={<Competition />} />
        <Route path="/seminar" element={<Seminar />} />
        <Route path="/workshop" element={<Workshop />} />
        <Route path="/talkshow" element={<Talkshow />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* ================= PROTECTED ================= */}
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<DashboardLayout />}>

          {/* DASHBOARD */}
          <Route index element={<DashboardIndex />} />

          {/* CATEGORY */}
          <Route path="category" element={<CategoryIndex />} />
          <Route path="category/create" element={<CategoryCreate />} />

          {/* PEMBICARA */}
          <Route path="pembicara" element={<PembicaraIndex />} />
          <Route path="pembicara/create" element={<PembicaraCreate />} />

          {/* EVENT */}
          <Route path="event" element={<EventIndex />} />
          <Route path="event/create" element={<EventCreate />} />

          {/* BIODATA */}
          <Route path="biodata" element={<BiodataIndex />} />

        </Route>
      </Route>

    </Routes>
  );
}

export default App;