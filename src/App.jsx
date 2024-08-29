import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import InvoiceForm from "./Componets/InvoiceForm";
import Home from "./Componets/Home";
import { authContext } from "./Provider/AuthProvider";
function App() {
  const { user } = useContext(authContext);

  return (
    <>
      <Home />
      {user && <InvoiceForm />}
    </>
  );
}

export default App;
