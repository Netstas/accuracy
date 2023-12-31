import React from "react";
import Header from "./header/index.jsx";

function Admin({ children }) {
  return (
    <div className="layout-admin">
      <Header></Header>
      <div className="container-fluid ">
        <div className="d-felx row">
          <div className="col-2 p-0">
          </div>
          <div className="col-10 p-0">
            <div className="content-admin">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
