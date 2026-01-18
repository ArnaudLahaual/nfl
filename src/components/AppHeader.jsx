// components/Header.jsx
import { Layout, Menu } from "antd";
import logoNfl from "../assets/nfl-logo.png";

const { Header } = Layout;

export default function AppHeader() {
  return (
    <Header className="flex items-center px-6 h-16">
      <div className="flex items-center h-full mr-6">
        <img
          style={{ width: "100px", height: "50px" }}
          src={logoNfl}
          alt="NFL logo"
        />
      </div>

      <div className="flex-1 flex justify-center items-center">
        <Menu
          mode="horizontal"
          className="bg-[#002C66] text-white"
          defaultSelectedKeys={["home"]}
          items={[
            { key: "home", label: "Accueil" },
            { key: "teams", label: "Équipes" },
            { key: "confs", label: "Conférences" },
            { key: "rules", label: "Règles" },
            { key: "news", label: "Actualités" },
          ]}
        />
      </div>
    </Header>
  );
}
