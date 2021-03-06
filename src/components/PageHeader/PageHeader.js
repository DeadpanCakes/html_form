import HeaderNav from "../HeaderNav/HeaderNav";
import style from "./PageHeader.module.css";

const PageHeader = () => {
  return (
    <header className={style.pageHeader}>
      <div className={style.accountCtrls}>
        <hgroup className={style.accountTxt}>
          <h3>Already have an Intuit account?</h3>
          <h3>
            <a href="https://accounts.intuit.com/signup.html?offering_id=Intuit.ifs.mint&namespace_id=50000026&redirect_url=https%3A%2F%2Fmint.intuit.com%2Foverview.event%3Ftask%3DS#">
              I forgot my User ID or Password
            </a>
          </h3>
        </hgroup>
        <button className={style.signInBtn}>Sign In</button>
      </div>
      <HeaderNav />
    </header>
  );
};

export default PageHeader;
