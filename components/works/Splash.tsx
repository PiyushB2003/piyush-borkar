import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const Splash = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Full-Stack Developer
        <span className="text-textGreen tracking-wide">@Radical Global</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Oct 2024 - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Focusing on building and enhancing Shopify applications using React,
          Node.js, and MySQL.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I have successfully developed 3+ Shopify apps, leveraging React for
          dynamic front-end interfaces, Node.js for scalable back-end solutions,
          and MySQL for efficient data management.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Utilize Liquid templates to customize Shopify themes and employ the
          Polaris UI library to create consistent, userfriendly interfaces.
        </li>
      </ul>
    </motion.div>
  );
};

export default Splash;
