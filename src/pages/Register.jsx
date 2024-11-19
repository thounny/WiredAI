// NODE MODULES
import { Link } from "react-router-dom";

// CUSTOM MODULES
import { banner, iconLogo, logoLight, logoDark } from "../assets/assets";

// COMPONENTS
import PageTitle from "../components/PageTitle";

const Register = () => {
  return (
    <>
      <PageTitle title='Create an Account' />
      <div className="">
        <div className="">
          <Link>
          <img src={logoLight} width={133} height={23} alt="WiredAI logo" className="" />
          <img src={logoDark} width={133} height={23} alt="WiredAI logo" className="" />
          </Link>
        </div>
    </div>
  </>
  );
};
export default Register;