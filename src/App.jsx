import { BrowserRouter } from "react-router-dom";
import AppHeader from "./components/AppHeader";
import AppRoutes from "./AppRoutes";
import ScrollToTop from "./components/ScrollToTop";

function App() {
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
