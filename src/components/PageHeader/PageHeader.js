import HeaderNav from "../HeaderNav/HeaderNav";

const PageHeader = () => {
  return (
    <header>
      <div>
        <hgroup>
          <h3>Already have an Intuit account?</h3>
          <h3>
            <a href="https://accounts.intuit.com/signup.html?offering_id=Intuit.ifs.mint&namespace_id=50000026&redirect_url=https%3A%2F%2Fmint.intuit.com%2Foverview.event%3Ftask%3DS#">
              I forgot my User ID or Password
            </a>
          </h3>
        </hgroup>
        <button>Sign In</button>
      </div>
      <HeaderNav />
    </header>
  );
};

export default PageHeader;
