import {
  NavLink,
  Outlet,
  useNavigate,
} from "react-router-dom";

import { useAuthStore } from "../store/useAuthStore";

export default function DashboardLayout() {

  const logout = useAuthStore(
    (state) => state.logout
  );

  const navigate = useNavigate();


  // =========================
  // LOGOUT
  // =========================

  const handleLogout = () => {

    logout();

    navigate("/login");
  };


  return (

    <div className="flex min-h-screen w-full">


      {/* SIDEBAR */}

      <div className="w-64 bg-gradient-to-b from-red-900 to-red-700 text-white flex flex-col items-center p-6 shadow-2xl">

        {/* LOGO */}

        <div className="w-full flex flex-col items-center">

          <h1 className="text-3xl font-bold mb-10 tracking-wide">
            Invofest
          </h1>


          {/* MENU */}

          <ul className="flex flex-col gap-5 w-full max-w-[180px]">


            {/* DASHBOARD */}

            <li>

              <NavLink
                to="/dashboard"
                end
                className={({ isActive }) =>

                  `block w-full py-3 rounded-xl transition text-center font-medium

                  ${

                    isActive

                      ? "bg-white text-red-900 shadow-lg scale-105"

                      : "bg-red-800 text-white hover:bg-red-600"

                  }`
                }
              >

                Dashboard

              </NavLink>

            </li>


            {/* CATEGORY */}

            <li>

              <NavLink
                to="/dashboard/category"
                className={({ isActive }) =>

                  `block w-full py-3 rounded-xl transition text-center font-medium

                  ${

                    isActive

                      ? "bg-white text-red-900 shadow-lg scale-105"

                      : "bg-red-800 text-white hover:bg-red-600"

                  }`
                }
              >

                Category

              </NavLink>

            </li>


            {/* PEMBICARA */}

            <li>

              <NavLink
                to="/dashboard/pembicara"
                className={({ isActive }) =>

                  `block w-full py-3 rounded-xl transition text-center font-medium

                  ${

                    isActive

                      ? "bg-white text-red-900 shadow-lg scale-105"

                      : "bg-red-800 text-white hover:bg-red-600"

                  }`
                }
              >

                Pembicara

              </NavLink>

            </li>


            {/* EVENT */}

            <li>

              <NavLink
                to="/dashboard/event"
                className={({ isActive }) =>

                  `block w-full py-3 rounded-xl transition text-center font-medium

                  ${

                    isActive

                      ? "bg-white text-red-900 shadow-lg scale-105"

                      : "bg-red-800 text-white hover:bg-red-600"

                  }`
                }
              >

                Event

              </NavLink>

            </li>


            {/* BIODATA */}

            <li>

              <NavLink
                to="/dashboard/biodata"
                className={({ isActive }) =>

                  `block w-full py-3 rounded-xl transition text-center font-medium

                  ${

                    isActive

                      ? "bg-white text-red-900 shadow-lg scale-105"

                      : "bg-red-800 text-white hover:bg-red-600"

                  }`
                }
              >

                Biodata

              </NavLink>

            </li>

          </ul>

        </div>


        {/* LOGOUT */}

        <button

          onClick={handleLogout}

          className="mt-auto w-full max-w-[180px] py-3 bg-white text-red-900 rounded-xl hover:bg-gray-100 transition font-semibold shadow-lg cursor-pointer"
        >

          Logout

        </button>

      </div>


      {/* CONTENT */}

      <div className="flex-1 flex flex-col bg-gradient-to-br from-red-50 to-white">

        <main className="flex-1 w-full px-8 py-6 overflow-y-auto">

          <Outlet />

        </main>


        {/* FOOTER */}

        <footer className="text-center text-sm p-3 bg-red-900 text-white">

          © 2026 Invofest

        </footer>

      </div>

    </div>
  );
}