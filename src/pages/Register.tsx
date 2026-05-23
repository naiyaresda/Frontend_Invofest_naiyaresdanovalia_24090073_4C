import Button from "../components/ui/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Input } from "../components/ui/Input";
import { PasswordInput } from "../components/ui/PasswordInput";

export default function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      setError("Semua field harus diisi");
      return;
    }

    if (password.length < 8) {
      setError("Password minimal 8 karakter");
      return;
    }

    if (password !== confirmPassword) {
      setError("Konfirmasi password tidak sama");
      return;
    }

    setError("");

    alert("Registrasi berhasil!");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">

        <h1 className="text-2xl font-bold text-red-900 text-center mb-6">
          Register
        </h1>

        <form onSubmit={handleRegister} className="flex flex-col gap-4">

          <Input
            label="Nama Lengkap"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <PasswordInput
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <PasswordInput
            label="Konfirmasi Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          {error && (
            <p className="text-sm text-red-500 text-center">{error}</p>
          )}

          <Button label="Daftar" />

          <p className="text-sm text-center text-gray-600">
            Sudah punya akun?{" "}
            <Link to="/login" className="text-red-900 font-semibold">
              Login
            </Link>
          </p>

        </form>
      </div>
    </div>
  );
}