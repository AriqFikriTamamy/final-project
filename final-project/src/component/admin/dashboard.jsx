// import { useEffect, useState } from "react";
import DashboardNavbar from "./dashboard_navbar";
import SidebarDashboard from "./sidebar_dashboard";
import GetData from "./getData";
// import CreateData from "./createData";
// import EditData from "./editData";
function Dashboard() {


    return (
        <>
            <header>
                <DashboardNavbar />
            </header>
            <SidebarDashboard />
            <main>
                <GetData />
            </main >

        </>
    )
}

export default Dashboard;