import { Layout, Menu, Tooltip } from "antd";
import logoNfl from "../assets/logos/nfl-logo.png";
import { Link, useLocation } from "react-router-dom";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/Log/log";

const { Header } = Layout;

export default function AppHeader() {
  const location = useLocation();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.log);

  useEffect(() => {
    console.log("user:", user);
  });
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

  const handleLogout = () => {
    dispatch(setUser());
    console.log("deconnexion réussie");
  };

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
        {user ? (
          <div className="flex items-center gap-3 text-white">
            <span>{user.nickname}</span>
            <Tooltip title="Se déconnecter">
              <LogoutOutlined
                onClick={handleLogout}
                className="cursor-pointer"
              />
            </Tooltip>
          </div>
        ) : (
          <Tooltip title="Se connecter">
            <Link to="/auth">
              <UserOutlined className="text-white text-xl mr-6 cursor-pointer" />
            </Link>
          </Tooltip>
        )}
      </div>
    </Header>
  );
}
