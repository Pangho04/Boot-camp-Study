import { Navigate, Outlet, useLocation } from "react-router-dom";
import Header from "./Header";

function App() {
  const location = useLocation();

  return (
    <>
      <Header />
      <main className="flex w-full h-[176.5%]">
        <Outlet />
      </main>
      {location.pathname === "/" ? <Navigate to="/calendar" /> : ""}
    </>
  );
}

export default App;
