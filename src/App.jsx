import Carousal from "./components/Carousal";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Store from "./components/Store";
import SubHeader from "./components/SubHeader";
import data from "./mockAPI/data.mock";
import { AnimatePresence } from "framer-motion";

const App = () => {
  return (
    <AnimatePresence>
      <div className="bg-gray-50">
        <Header />
        <SubHeader />
        <Hero name="AirPods Pro" price="$249" tag="All-new" isImage={false} />
        <div className="flex flex-col items-center justify-center">
          {data.products.map(({ name, tag, price, image }, i) => (
            <Hero
              key={i}
              name={name}
              tag={tag}
              price={price}
              image={image}
              isImage={true}
              animationIndex={i}
              isBack={i == 2 ? true : false}
            />
          ))}
        </div>
        <Carousal />
        <Store />
        <Footer />
      </div>
    </AnimatePresence>
  );
};

export default App;
