import data from "../mockAPI/data.mock";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const SubHeader = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 80,
      }}
      animate={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.5,
        },
      }}
      className="flex flex-col"
    >
      <div className="flex items-start justify-center space-x-2 py-5 bg-white overflow-x-scroll md:overflow-hidden pl-20">
        {data.headerProducts.map(({ name, image }, i) => (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: i * 0.2,
                duration: 0.5,
              },
            }}
            key={name}
            className="flex flex-col justify-center items-center group cursor-pointer"
          >
            <img src={image} alt={name} />
            <h4 className="text-[10px] w-24 text-center text-gray-700 group-hover:text-blue-500">
              {name}
            </h4>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{
          opacity: 0,
          y: -20,
          backgroundColor: "#f6f6f6",
          color: "#414141",
          transition: {
            duration: 1,
          },
        }}
        animate={{
          opacity: 1,
          y: 0,
          backgroundColor: "#f6f6f6",
          color: "#414141",
          transition: {
            duration: 0.6,
            delay: 0.3,
          },
        }}
        className="justify-center text-xs flex items-center gap-x-2 py-2 overflow-hidden"
      >
        <span>Get 6 months of Apple Music free with your AirPods.*</span>
        <div className="text-blue-500 flex items-center">
          <span>Learn more</span>
          <ChevronRightIcon className="h-3 object-contain mt-[1px]" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SubHeader;
