// NODE MODULES
import { Link, Form } from "react-router-dom";

// CUSTOM MODULES
import { logoLight, logoDark } from "../assets/assets";

// COMPONENTS
import PageTitle from "../components/PageTitle";
import TextField from "../components/TextField";

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

          <div className="">
            <h2 className="">Create an Account</h2>

            <p className="">
              Register today to connect with WiredAI—your gateway to The Wired.
            Tap into powerful AI tools that transcend boundaries and bring your ideas to life.
            </p>

            <Form
              method="POST"
              className=""
            >
              <TextField />
            </Form>
          </div>
        </div>
    </div>
  </>
  );
};
export default Register;