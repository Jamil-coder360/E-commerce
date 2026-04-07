// import  all reuseable component
import Section from "./section/Section";
import Container from "./section/Container";
import SectionHeader from "./section/SectionHeader";
import Arrows from "./section/Arrows";
import ProductCard from "./ProductCart";
import Button from "./Button";

// "exploreOurProductsData" data list for  explore page
import { ExploreOurProductsData } from "../data";

const Explore = () => {
  return (
    <Section className="pb-42">
      <Container>
        <div>
          <div className="flex items-center justify-between">
            <SectionHeader
              title="Explore Our Products"
              subtitle="Our Products"
            />
            <Arrows />
          </div>
          <div className="grid grid-cols-4 gap-x-7.5 gap-y-15  pt-15">
            {/* product mapping from "ExploreOurProductsData"  data list */}
            {ExploreOurProductsData.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="flex items-center justify-center pt-15">
            <Button>View All Products</Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Explore;
