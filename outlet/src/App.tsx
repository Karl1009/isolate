import { Routes, Route , BrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import DashboardMessages from "./pages/DashboardMessages";
import DashboardTasks from "./pages/DashboardTasks";
import Nav from './pages/Nav'
function App() {
  return (
    <BrowserRouter>
      <Nav/>
    <Routes>
      <Route path="/" element={<Dashboard />}/>
      <Route path="messages" element={<DashboardMessages />}/>
      <Route path="tasks" element={<DashboardTasks />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
