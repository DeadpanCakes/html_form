import { useState } from "react";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pass, setPass] = useState("");
  const [confirm, setConfirm] = useState("");
  return (
    <form>
      <label>
        Email address
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Phone
        <input
          type="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </label>
      <label>
        Password
        <input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
      </label>
      <label>
        Confirm
        <input
          type="password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
        />
      </label>
    </form>
  );
};

export default SignUpForm;
