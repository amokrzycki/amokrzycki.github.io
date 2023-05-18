const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0A192F] text-gray-400">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About me
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hello, I&apos;m Adrian, nice to meet you. Please take a look
              around.
            </p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
              alias, saepe voluptatem aspernatur eos maxime in voluptatibus
              repellendus dolorum repudiandae iusto vero praesentium ut numquam?
              Ratione repellendus quisquam modi unde?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
