export default function BiodataIndex() {

  return (

    <div className="w-full min-h-screen bg-gradient-to-br from-[#fff1f2] via-[#ffe4e6] to-[#fecdd3] p-8 flex items-center justify-center">

      {/* CONTAINER */}

      <div className="w-full max-w-6xl bg-white/70 backdrop-blur-xl rounded-[35px] shadow-2xl overflow-hidden border border-white relative">


        {/* EFFECT */}

        <div className="absolute top-0 right-0 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl"></div>

        <div className="absolute bottom-0 left-0 w-72 h-72 bg-rose-300/20 rounded-full blur-3xl"></div>


        <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10">


          {/* LEFT SIDE */}

          <div className="bg-gradient-to-br from-[#7f1d1d] via-[#9f1239] to-[#be123c] p-10 flex flex-col items-center justify-center text-white relative overflow-hidden">


            {/* CIRCLE */}

            <div className="absolute w-80 h-80 bg-white/10 rounded-full -top-24 -left-24"></div>

            <div className="absolute w-72 h-72 bg-white/10 rounded-full -bottom-20 -right-20"></div>


            {/* FOTO */}

            <div className="relative z-10">

              <div className="absolute inset-0 rounded-full blur-xl bg-pink-300/40"></div>

              <img
                src="/naiya.png"
                alt="profile"
                className="relative w-60 h-60 rounded-full object-cover border-[6px] border-white shadow-2xl"
              />

            </div>


            {/* NAMA */}

            <div className="text-center mt-8 z-10">

              <h1 className="text-4xl font-bold tracking-wide">
                Naiya Resda Novalia
              </h1>

              <p className="mt-3 text-pink-100 text-lg">
                Mahasiswa Teknik Informatika
              </p>

            </div>


            {/* STATUS */}

            <div className="mt-6 px-6 py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/20 z-10 shadow-lg">

              <p className="font-medium">
                ✦ Status : Mahasiswa Aktif
              </p>

            </div>


            {/* CONTACT */}

            <div className="mt-8 flex flex-col gap-3 text-center z-10">

              <div className="bg-white/10 px-5 py-3 rounded-2xl backdrop-blur-md border border-white/10">

                <p className="text-sm text-pink-100">
                  Contact
                </p>

                <p className="font-semibold">
                  085802764729
                </p>

              </div>


              <div className="bg-white/10 px-5 py-3 rounded-2xl backdrop-blur-md border border-white/10">

                <p className="text-sm text-pink-100">
                  Email
                </p>

                <p className="font-semibold break-all">
                  naiyaresda@gmail.com
                </p>

              </div>

            </div>

          </div>


          {/* RIGHT SIDE */}

          <div className="p-10 flex flex-col justify-center">


            {/* TITLE */}

            <div className="mb-8">

              <h2 className="text-4xl font-bold text-[#881337]">
                Biodata Mahasiswa
              </h2>

              <p className="text-gray-500 mt-2">
                Profil pembuat website Invofest
              </p>

            </div>


            {/* BIODATA CARD */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">


              <div className="bg-white shadow-md hover:shadow-xl transition rounded-3xl p-5 border border-pink-100">

                <p className="text-sm text-gray-400">
                  NIM
                </p>

                <h2 className="text-xl font-bold text-[#881337] mt-1">
                  24090073
                </h2>

              </div>


              <div className="bg-white shadow-md hover:shadow-xl transition rounded-3xl p-5 border border-pink-100">

                <p className="text-sm text-gray-400">
                  Kelas
                </p>

                <h2 className="text-xl font-bold text-[#881337] mt-1">
                  4C
                </h2>

              </div>


              <div className="bg-white shadow-md hover:shadow-xl transition rounded-3xl p-5 border border-pink-100">

                <p className="text-sm text-gray-400">
                  Program Studi
                </p>

                <h2 className="text-xl font-bold text-[#881337] mt-1">
                  Teknik Informatika
                </h2>

              </div>


              <div className="bg-white shadow-md hover:shadow-xl transition rounded-3xl p-5 border border-pink-100">

                <p className="text-sm text-gray-400">
                  Nama Kampus
                </p>

                <h2 className="text-xl font-bold text-[#881337] mt-1">
                  Universitas Harkat Negeri
                </h2>

              </div>

            </div>


            {/* ABOUT WEBSITE */}

            <div className="mt-10 bg-gradient-to-r from-[#fff1f2] to-[#ffe4e6] border border-pink-100 rounded-[30px] p-7 shadow-inner">

              <h2 className="text-2xl font-bold text-[#881337] mb-4">
                Tentang Website
              </h2>

              <p className="text-gray-700 leading-relaxed text-justify">

                Website Invofest ini saya buat sebagai media informasi dan
                manajemen event berbasis web untuk memenuhi tugas UTS
                Pemrograman Website. Website ini memiliki fitur pengelolaan
                category, event, dan pembicara yang telah terhubung dengan
                database menggunakan backend dan frontend sehingga data dapat
                dikelola secara dinamis melalui dashboard admin.

              </p>

            </div>


            {/* FOOTER */}

            <div className="mt-8 flex items-center justify-between">

              <div>

                <p className="text-sm text-gray-400">
                  Created By
                </p>

                <h2 className="font-semibold text-[#881337]">
                  Naiya Resda Novalia
                </h2>

              </div>


              <div className="px-5 py-2 rounded-full bg-[#881337] text-white shadow-lg">

                Pemrograman Website ✦ 2026

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}