import React from "react";
import Section from "../section/Section";
import Container from "../section/Container";
import { Link } from "react-router";
import Button from "../Button";
import EditProfile from "./EditProfile";
import AccountSidebar from "./AccountSidebar";
const Account = () => {
  return (
    <Section className="py-25">
      <Container>
        <div>
          <div className="flex items-center justify-between gap-10">
            <div className="flex items-center gap-3 pb-12.5 text-black/50">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Account</span>
            </div>
            <div className="flex items-center gap-3 pb-12.5 text-black/50">
              <span className="text-black font-normal text-sm leading-normal">
                Welcome!
              </span>
              <span className="text-red-500 font-normal text-sm leading-normal">
                {" "}
                Md Rimel
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[280px_minmax(0,1fr)] justify-between">
            <div>
          
          <AccountSidebar />
            </div>
            <div>
            <EditProfile />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Account;
