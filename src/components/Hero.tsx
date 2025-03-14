import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";

const container = (delay: number) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay,
    },
  },
});

function Hero() {
  return (
    <div className="hero border-b border-neutral-900 pb-4 lg:mb-35">
      <div className={"flex flex-wrap"}>
        <div className={"w-full lg:w-1/2"}>
          <div className={"flex flex-col items-center lg:items-start"}>
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className={
                "pb-16 text-6xl font-light tracking-tight lg:mt-16 lg:text-8xl"
              }
            >
              Adrian Mokrzycki
            </motion.h1>
            <motion.span
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className={
                "bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
              }
            >
              JavaScript Developer
            </motion.span>
            <motion.p
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className={"my-2 max-w-xl py-6 font-light tracking-tighter"}
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.button
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className={
                "bg-gradient-to-r from-pink-300 to-purple-500 text-white px-6 py-2 rounded-lg cursor-pointer mb-8"
              }
              rel="noopener noreferrer"
              aria-label={"Resume"}
              onClick={() =>
                window.open("https://amokrzycki.ovh/resume", "_blank")
              }
            >
              Let's Work Together
            </motion.button>
          </div>
        </div>
        <div className={"w-full lg:w-1/2 lg:p-8"}>
          <div className={"flex justify-center"}>
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={"/assets/profile.webp"}
              alt={"Adrian Mokrzycki"}
              className={"rounded-2xl"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
