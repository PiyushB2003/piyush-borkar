import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";
const Google = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Trainee Intern
        <span className="text-textGreen tracking-wide">@Skillvertex</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Aug 2021 - Oct 2021
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          As a trainee intern at Skillvertex company, I had the opportunity to work closely with the MERN stack (MongoDB, Express.js, React.js, and Node.js), which allowed me to gain hands-on experience in full-stack web development.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          During my internship, I collaborated with a talented team of developers and learned how to implement industry best practices. I got a chance to enhance my skills in problem-solving by working on real-world projects that required efficient coding and debugging.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          This internship was a significant learning experience as it provided me with the opportunity to grow both technically and professionally.
        </li>
      </ul>
    </motion.div>
  );
};

export default Google;
