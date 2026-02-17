import { BrowserRouter } from "react-router-dom";
import AppHeader from "./components/AppHeader";
import AppRoutes from "./AppRoutes";
import ScrollToTop from "./components/ScrollToTop";
import { useGetTeams } from "./hooks/Teams/useGetTeams";
import { useGetPlayers } from "./hooks/Players/useGetPlayers";

function App() {
  useGetTeams();
  useGetPlayers();
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#002C66] text-white">
        <AppHeader />
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
