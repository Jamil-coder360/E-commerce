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
      <Container className="py-5 lg:pt-20 lg:pb-17.5 border-b border-border px-5 lg:px-0">
        <div>
          <div className="flex flex-wrap lg:flex-nowrap items-start lg:items-center lg:justify-between mb-15">
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
