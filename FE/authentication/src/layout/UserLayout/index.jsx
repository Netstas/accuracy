import React from "react";
function Layout({ children }) {
  return (
    <div className="wapper">
      <div className="content">{children}</div>
    </div>
  );
}

export default Layout;
