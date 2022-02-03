import "./App.css";
// import { useState } from "react";
import Footer from "./components/Footer";
import Form from "./components/Form";
import StepTwo from "./components/StepTwo";

function App() {
  // const handleSubmit = (event) => {
  //   // empêcher le rafraîchissement par défaut de la page
  //   event.preventDefault();
  // };
  return (
    <div>
      <h1>Create account</h1>
      <Form />
      <div>
        {handlePassword !== handlePasswordConf && (
          <p>Vos deux mots de passe ne sont identiques</p>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
