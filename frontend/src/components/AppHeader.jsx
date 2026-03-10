import { Layout, Menu, Tooltip } from "antd";
import logoNfl from "../assets/logos/nfl-logo.png";
import { Link, useLocation } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const { Header } = Layout;

export default function AppHeader() {
  const location = useLocation();
  const user = useContext(AuthContext);

  const selectedKey =
    location.pathname === "/" ? "home" : location.pathname.slice(1);

  const menuItems = [
    { key: "home", label: <Link to="/">Accueil</Link> },
    { key: "teams", label: <Link to="/teams">Équipes</Link> },
    { key: "players", label: <Link to="/players">Joueurs</Link> },
    { key: "history", label: <Link to="/history">Histoire</Link> },
    { key: "rules", label: <Link to="/rules">Règles</Link> },
    { key: "news", label: <Link to="/news">Actualités</Link> },
  ];

  return (
    <Header className="flex items-center justify-between  px-6 h-20 bg-[#002C66] shadow-md">
      <div className="flex items-center h-full mr-6">
        <img className="h-12 w-auto" src={logoNfl} alt="NFL logo" />
      </div>
      <Menu
        mode="horizontal"
        theme="dark"
        selectedKeys={[selectedKey]}
        items={menuItems}
        className="flex-1 justify-center"
        style={{ backgroundColor: "#002C66", borderBottom: "none" }}
      />
      <div>
        <Tooltip title="Se connecter">
          {user ? (
            <UserOutlined className="text-white text-xl mr-6 cursor-pointer" />
          ) : (
            <Link to={"/auth"}></Link>
          )}
        </Tooltip>
      </div>
    </Header>
  );
}
