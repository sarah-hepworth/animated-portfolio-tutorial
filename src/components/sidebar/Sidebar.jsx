import "./sidebar.scss";
import ToggleButton from "./toggleButton/ToggleButton.jsx";
import Links from "./links/Links.jsx";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="background">
        <Links />
      </div>
      <ToggleButton />
    </div>
  )
}

export default Sidebar;