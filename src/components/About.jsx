const About = () => {
  return (
    <div
      id="about-wrapper"
      name="about"
      className="w-full h-screen bg-[#0A192F] text-gray-400"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 hided">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About me
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 hided">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hello, I&apos;m Adrian, nice to meet you. Please take a look
              around.
            </p>
          </div>
          <div>
            <p>
              I&apos;m a passionate individual Frontend Developer with a strong focus on React.
              I find immense joy in crafting captivating web experiences that engage users and
              deliver seamless interactions. I constantly seek opportunities to
              apply React&apos;s principles and best practices to build efficient and
              scalable web applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
