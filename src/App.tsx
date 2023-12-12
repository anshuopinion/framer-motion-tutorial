import { Variants, motion } from "framer-motion";
import { FadeInAnimation } from "./components/FadeTextAnimation";

const defaultAnimations: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      staggerChildren: 0.8,
    },
  },
};

const App = () => {
  return (
    <div className="grid place-items-center h-screen">
      <motion.div
        className="flex justify-center text-center flex-col gap-4 py-16"
        initial="hidden"
        animate="visible"
        variants={defaultAnimations}
      >
        <FadeInAnimation variants={defaultAnimations}>
          <p>MONITOR. ALERT. AI DIAGNOSTICS REPORT.</p>
        </FadeInAnimation>
        <FadeInAnimation variants={defaultAnimations}>
          <h1 className=" linear__text__gradient text-4xl font-extrabold leading-10 tracking-tight  sm:text-6xl sm:leading-none md:text-8xl">
            Get downtime <br />
            AI Diagnostics to help you <br />
            build better apps
          </h1>
        </FadeInAnimation>
        <FadeInAnimation variants={defaultAnimations}>
          <p className="text-base text-gray-500 md:text-lg">
            Join the mailing list for early access to the alpha release
          </p>
        </FadeInAnimation>
      </motion.div>
    </div>
  );
};

export default App;
