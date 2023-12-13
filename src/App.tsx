import { motion, Variants } from "framer-motion";

const fadeInUpAnimation: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
      duration: 1.5,
    },
  },
};

const App = () => {
  return (
    <div className="grid place-items-center h-screen">
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeInUpAnimation}
        className="flex justify-center text-center flex-col gap-4"
      >
        <motion.p variants={fadeInUpAnimation}>
          MONITOR. ALERT. AI DIAGNOSTICS REPORT.
        </motion.p>
        <motion.h1
          variants={fadeInUpAnimation}
          className=" linear__text__gradient text-4xl font-extrabold leading-10 tracking-tight  sm:text-6xl sm:leading-none md:text-8xl"
        >
          Get downtime <br />
          AI Diagnostics to help you <br />
          build better apps
        </motion.h1>
        <motion.p
          variants={fadeInUpAnimation}
          className="text-base text-gray-500 md:text-lg"
        >
          Join the mailing list for early access to the alpha release
        </motion.p>
      </motion.div>
    </div>
  );
};

export default App;
