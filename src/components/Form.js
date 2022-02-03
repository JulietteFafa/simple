import { useState } from "react";

const Form = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPasswordConf] = useState("");

  const handleName = (event) => {
    const value = event.target.value;
    setUsername(value);
  };

  const handleEmail = (event) => {
    const value = event.target.value;
    setEmail(value);
  };
  const handlePassword = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handlePasswordConf = (event) => {
    const value = event.target.value;
    setPasswordConf(value);
  };
  const handleSubmit = (event) => {
    // empêcher le rafraîchissement par défaut de la page
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="formdata">
        <p>Name</p>
        <input
          value={username}
          type="text"
          placeholder="username"
          // la fonction de onChange sera déclencée à chaque modification dans l'input
          onChange={handleName}
        />
        <p>Email</p>
        <input
          value={email}
          type="email"
          placeholder="email"
          onChange={handleEmail}
        />

        <p>Password</p>
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={handlePassword}
        />

        <p>Confirm your password</p>
        <input
          type="password"
          placeholder="confirmation password"
          value={password2}
          onChange={handlePasswordConf}
        />
      </div>
      <div>
        <input type="register" value={"Register"} />
      </div>
    </form>
  );
};

export default Form;
