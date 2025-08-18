import { BrowserRouter, Routes, Route } from "react-router"
import { MainLayout } from "./pages/main-layout"
import Home from "./pages/home"
import SavedTasks from "./pages/saved-tasks"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/saved-tasks" element={<SavedTasks />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
