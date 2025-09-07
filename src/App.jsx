import { Outlet } from "react-router-dom"
import { Toaster } from "react-hot-toast"

function App() {
  return (
    <div className="bg-black min-h-screen font-sans">
      <Toaster />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App
