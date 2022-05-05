import React from "react";
import Sidebar from "../../containers/Sidebar";
import { navigation } from "../../navigation";

import "./styles.scss";

export function App() {
  return (
    <div className="app-container">
      <Sidebar />
      {navigation}
    </div>
  );
};
