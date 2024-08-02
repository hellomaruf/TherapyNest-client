import { Outlet } from "react-router-dom";
import Sidebar from "../Components/SideBar/Sidebar";

function MainLayout() {
  return (
    <div>
          <Sidebar />
          <Outlet/>
    </div>
  );
}

export default MainLayout;
