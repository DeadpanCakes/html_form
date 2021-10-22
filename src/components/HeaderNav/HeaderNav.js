import intuitSrc from "../../assets/intuitLogo.png";
import mintSrc from "../../assets/mintLogo.png";
import quickbooksSrc from "../../assets/quickbooksLogo.png";
import turbotaxSrc from "../../assets/turbotaxLogo.png";
import style from "./HeaderNav.module.css";

const HeaderNav = () => {
  return (
    <nav className={style.headerNav}>
      <ul>
        <li>
          <a href="https://accounts.intuit.com/signup.html?offering_id=Intuit.ifs.mint&namespace_id=50000026&redirect_url=https%3A%2F%2Fmint.intuit.com%2Foverview.event%3Ftask%3DS#">
            <img alt="Intuit Logo" src={intuitSrc} />
          </a>
        </li>
        <li>
          <ul className={style.servicesNav}>
            <li>
              <a href="https://mint.intuit.com/">
                <img alt="Mint Logo" src={mintSrc}></img>
              </a>
            </li>
            <li>
              <a href="https://quickbooks.intuit.com/#live-bookkeeping">
                <img alt="Quickbooks Logo" src={quickbooksSrc}></img>{" "}
              </a>
            </li>
            <li>
              {" "}
              <a href="https://turbotax.intuit.com/">
                <img alt="Turbotax Logo" src={turbotaxSrc}></img>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
