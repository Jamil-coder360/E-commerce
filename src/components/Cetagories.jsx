// reuseable component declear
import Section from "./section/Section";
import Container from "./section/Container";
import SectionHeader from "./section/SectionHeader";
import Arrows from "../components/section/Arrows";
import CetagoriesCard from "./CetagoriesCard";
import { useRef } from "react";

const Cetagories = () => {
    const swiperRef = useRef(null);
  
  return (
    <Section className="">
      <Container className="pt-20 pb-17.5 border-b border-border">
        <div>
          <div className="flex items-center justify-between mb-15">
            <SectionHeader title="Browse By Category" subtitle="Categories" />
            <Arrows swiperRef={swiperRef}/>
          </div>
          <div>
            <CetagoriesCard  swiperRef={swiperRef}/>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Cetagories;
