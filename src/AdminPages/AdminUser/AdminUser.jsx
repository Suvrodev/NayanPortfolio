import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AdminLogedUser from "./AdminLogedUser/AdminLogedUser";
import AdminAdmin from "./AdminAdmin/AdminAdmin";

const AdminUser = () => {
  return (
    <div className="p-28">
      <Tabs>
        <TabList>
          <Tab>All User</Tab>
          <Tab>Admin</Tab>
        </TabList>

        <TabPanel>
          <AdminLogedUser />
        </TabPanel>

        <TabPanel>
          <AdminAdmin />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default AdminUser;
