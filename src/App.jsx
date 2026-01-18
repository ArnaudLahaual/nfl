// App.jsx
import { BrowserRouter } from "react-router-dom";
import AppHeader from "./components/AppHeader";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#002C66] text-white">
        <AppHeader />
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
