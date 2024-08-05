import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div id="home-wrapper" name="home" className="h-screen w-full bg-[#0A192F]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600 hided">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#CCD6F6] hided">
          Adrian Mokrzycki
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892B0] hided">
          I&apos;m Frontend Developer
        </h2>
        <p className="text-[#8892B0] py-4 max-w-[700px] hided">
          I&apos;m Frontend developer specializing in building
          exceptional digital experiences. Currently, I&apos;m focused on
          building responsive React web applications.
        </p>
        <div className="hided">
          <Link to="work" smooth={true} duration={1000}>
            <button
              id="view-work-btn"
              className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 duration-300"
            >
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
