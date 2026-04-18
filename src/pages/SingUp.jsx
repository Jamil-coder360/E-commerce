import Section from "../components/section/Section";
import GoogleIcon from "../components/Icons/GoogleIcon";
import Side from "../assets/side.png";
import Button from "../components/Button";
import { Link } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


const SignUpPage = () => {
const {signUp} = useContext(AuthContext);

const handleSingup = () =>{
  signUp("mindgame@gmial.com","password" );
  console.log(signUp);
};

  return (
    <Section className="pt-15 pb-35">
      <div className="grid grid-cols-[auto_1fr] items-center gap-[129px]">
        <div>
          <img src={Side} alt="" />
        </div>
        <div className="max-w-[371px]">
          <h3 className="text-black font-inter font-medium text-[36px] leading-[30px]">
            Create an account
          </h3>
          <p className="text-black text-base font-normal pt-6 pb-12">
            Enter your details below
          </p>
          <form action="" className="flex flex-col gap-10 w-[370px]">
            <input
              className="border-b border-border focus:outline-0 placeholder:text-[#000000]/40"
              type="text"
              name=""
              id=""
              placeholder="name"
            />
            <input
              className="border-b border-border focus:outline-0 placeholder:text-[#000000]/40"
              type="text"
              name=""
              id=""
              placeholder="Email or Phone Number"
            />
            <input
              className="border-b border-border focus:outline-0 placeholder:text-[#000000]/40"
              type="password"
              name=""
              id=""
              placeholder="Password"
            />
          </form>
          <div className="flex flex-col items-center justify-between gap-4 w-full pt-10">
            <Button onClick={handleSingup} className="w-full">Create Account</Button>
            <Button  className="w-full" variant="white">
              <GoogleIcon /> Sign up with Google
            </Button>
          </div>
          <div className="flex items-center justify-center gap-4 pt-8">
            <p className="text-base font-normal text-[#000000]/70">
              Already have account?
            </p>
            <Link to="/login">
              <span className="text-base font-normal text-[#000000]/70">
                Log in
              </span>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default SignUpPage;
