import { Layout, Menu, Tooltip } from "antd";
import logoNfl from "../assets/logos/nfl-logo.png";
import { Link, useLocation } from "react-router-dom";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/Log/log";
import { DownOutlined, SettingOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

const { Header } = Layout;

export default function AppHeader() {
  const location = useLocation();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.log);

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
  };

  const items = [
    {
      key: "1",
      label: <Link to="/profile">Mon compte</Link>,
      disabled: false,
    },
    {
      type: "divider",
    },
    {
      key: "2",
      label: <Link to="/"> Se déconnecter</Link>,
      onClick: handleLogout,
    },
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
        {user ? (
          <div className="flex items-center gap-3 text-white">
            <Dropdown menu={{ items }}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  {user.nickname}
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
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
