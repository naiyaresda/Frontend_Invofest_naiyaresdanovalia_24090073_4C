// import { Navigate, Outlet } from "react-router-dom";
// import { useAuthStore } from "../store/useAuthStore";

// export default function ProtectedRoute(){
//     const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

//     // jika isAuthenticated false, maka redirect ke halaman login
//     if(isAuthenticated){
//         return <Navigate to="/login" replace />
//     }


//     return <Outlet />;
// }

import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export default function ProtectedRoute() {
  const isAuth = useAuthStore((state) => state.isAuthenticated);

  console.log("AUTH STATUS:", isAuth);

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}