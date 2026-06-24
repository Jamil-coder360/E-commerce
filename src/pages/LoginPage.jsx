import Button from "../components/Button";
import Container from "../components/section/Container";
import Section from "../components/section/Section";

// import image
import Side from "../assets/side.png";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";
const LoginPage = () => {
  const navigate = useNavigate();
  const {login} =useContext(AuthContext);
  const handleLogin = (e)=>{
  e.preventDefault();
  const fromData = new FormData(e.target);
  const data={};
  // menually get data from input value it use for 1 or 2 feild
// data.email=fromData.get("email");
// data.password=fromData.get("password")

// dynamic get data from input value it use for too many feild

for (let [key,value] of fromData) {
  data[key]=value;
}


  if (!data.email || !data.password) {
    alert("Please fill all fields");
    return;
  }
  login(data.email, data.password)
    .then((res) => {
      navigate("/");
    })
    .catch((error) => {
      console.error("Login error:", error);
      alert("Login failed ❌");
    });
  // console.log(fromData.get("password"));
  };

  return (
    <Section className="pt-15 pb-35">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[auto_1fr] md:gap-32">
          <div>
            <img src={Side} alt="" className="w-full max-w-lg mx-auto md:mx-0" />
          </div>
          <div className="w-full max-w-md mx-auto md:mx-0">
           
            <h3 className="text-black font-inter font-medium text-[36px] leading-[30px]">
              Log in to Exclusive
            </h3>
            <p className="text-black text-base font-normal pt-6 pb-12">
              Enter your details below
            </p>
            <form onSubmit={handleLogin} action="" className="flex w-full max-w-md flex-col gap-10">
              <input
                className="border-b border-border focus:outline-0 placeholder:text-[#000000]/40"
                type="text"
                name="email"
                id=""
                placeholder="Email or Phone Number"
              />
              <input
                className="border-b border-border focus:outline-0 placeholder:text-[#000000]/40"
                type="password"
                name="password"
                id=""
                placeholder="Password"
              />
            <div className="flex items-center justify-between pt-10">
              <Button type="submit">Log In</Button>
              <span className="text-base font-normal text-secondary">
                Forget Password?
              </span>
            </div>
            </form>
          </div>
        </div>
    </Section>
  );
};

export default LoginPage;
