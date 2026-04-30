import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {

  return (
    <>
      <Navbar />

      <main className="min-h-90">
        <Outlet />
      </main>

      <footer className="mx-auto text-center text-sm text-gray-600 py-3">
        &copy; 2026 react routing
      </footer>
    </>
  )
}

export default App
