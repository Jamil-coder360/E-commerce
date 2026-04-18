import Button from "../components/Button";
import Container from "../components/section/Container";
import Section from "../components/section/Section";

// import image
import Side from "../assets/side.png";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
const LoginPage = () => {
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

login(data.email, data.password);

  //for practice 
  // console.log(fromData.get("email"));
  // console.log(fromData.get("password"));
  };

  return (
    <Section className="pt-15 pb-35">
        <div className="grid grid-cols-[auto_1fr] items-center gap-[129px]">
          <div>
            <img src={Side} alt="" />
          </div>
          <div className="max-w-[371px]">
           
            <h3 className="text-black font-inter font-medium text-[36px] leading-[30px]">
              Log in to Exclusive
            </h3>
            <p className="text-black text-base font-normal pt-6 pb-12">
              Enter your details below
            </p>
            <form onSubmit={handleLogin} action="" className="flex flex-col gap-10 w-[370px]">
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
