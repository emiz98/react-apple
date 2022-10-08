import Carousal from "./components/Carousal";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Store from "./components/Store";
import SubHeader from "./components/SubHeader";
import data from "./mockAPI/data.mock";

const App = () => {
  return (
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
            isBack={i == 2 ? true : false}
          />
        ))}
      </div>
      <Carousal />
      <Store />
      <div className="h-20 bg-black w-full mt-10"></div>
    </div>
  );
};

export default App;
