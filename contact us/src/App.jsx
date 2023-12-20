import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./components/nvbar";
import HeaderSection from "./components/hero";
import Form from "./components/form";

function App() {
  return (
    <div>
      <Nav></Nav>
      <main className="main_container">

      <HeaderSection></HeaderSection>
      <Form></Form>
      </main>
    </div>
  );
}
export default App;
