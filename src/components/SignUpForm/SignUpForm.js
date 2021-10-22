import { useState } from "react";
import FormHeader from "../FormHeader/FormHeader";
import FormFooter from "../FormFooter/FormFooter";
import style from "./SignUpForm.module.css";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pass, setPass] = useState("");
  const [confirm, setConfirm] = useState("");
  return (
    <form className={style.signUpForm}>
      <FormHeader />
      <div className={style.labeledInput}>
        <label for="signUpEmail">Email address</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="signUpEmail"
        />
      </div>
      <div className={style.labeledInput}>
        <label for="signUpPhone">Phone (recommended)</label>
        <input
          type="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          id="signUpPhone"
        />
      </div>
      <div className={style.labeledInput}>
        <label for="signUpPass">Password</label>
        <input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          id="signUpPass"
        />
      </div>
      <div className={style.labeledInput}>
        <label for="signUpConfirm">Confirm</label>
        <input
          type="password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          id="signUpConfirm"
        />
      </div>
      <button className={style.signUpBtn}>Create Account</button>
      <FormFooter />
    </form>
  );
};

export default SignUpForm;
