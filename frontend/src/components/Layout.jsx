import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div>
      <div className="layout">{/** Insérer la navbar et le outlet */}</div>
      {/** Insérer le footer ici  */}
    </div>
  );
}
