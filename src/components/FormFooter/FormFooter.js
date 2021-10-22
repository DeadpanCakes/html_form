import style from "./FormFooter.module.css";

const FormFooter = () => {
  return (
    <footer className={style.formFooter}>
      <h6>
        Invisible reCAPTCHA by Google{" "}
        <a href="https://www.google.com/intl/en/policies/privacy">
          Prvivacy Policy
        </a>{" "}
        and{" "}
        <a href="https://www.google.com/intl/en/policies/terms">Terms of Use</a>
      </h6>
    </footer>
  );
};

export default FormFooter;
