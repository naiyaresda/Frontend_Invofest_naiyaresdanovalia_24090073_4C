import { useState } from "react";
import Button from "../components/ui/Button";
import { Link, useNavigate } from "react-router-dom";

import { useAuthStore } from "../store/useAuthStore";

export default function Login() {
  const navigate = useNavigate();

  const login = useAuthStore((state) => state.login);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (data.email == "24090073" && data.password == "admin123") {
      alert("Login Berhasil");

      login(data.email);
      navigate("/dashboard");
    } else {
      alert("Email atau password anda salah");
    }
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white rounded-xl shadow-md overflow-hidden flex max-w-4xl w-full">

        {/* LEFT */}
        <div className="hidden md:flex w-1/2 from-red-100 to-red-200 items-center justify-center p-6">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png"
            alt="login"
            className="w-72"
          />
        </div>

        {/* RIGHT */}
        <div className="w-full md:w-1/2 p-8">
          <h1 className="text-2xl font-bold text-red-900 text-center mb-6">
            Login
          </h1>

          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="NIM"
              className="border p-3 rounded-lg"
              value={data.email}
              onChange={(e) =>
                setData({ ...data, email: e.target.value })
              }
            />

            <input
              type="password"
              placeholder="Password"
              className="border p-3 rounded-lg"
              value={data.password}
              onChange={(e) =>
                setData({ ...data, password: e.target.value })
              }
            />

            <Button label="Masuk" variant="primary" />

            <p className="text-sm text-center text-gray-600">
              Belum punya akun?{" "}
              <Link to="/register" className="text-red-900 font-semibold">
                Registrasi Sekarang
              </Link>
            </p>
          </form>
        </div>

      </div>
    </div>
  );
}