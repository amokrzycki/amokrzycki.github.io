const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0A192F] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/11a54705-2082-46b8-93c7-fabbb3f0f8fd"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below or send me an email - amokrzycki96@gmail.com
          </p>
        </div>
        <input
          className="bg-[#CCD6F6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#CCD6F6]"
          type="email"
          name="email"
          placeholder="Email"
        />
        <textarea
          name="message"
          className="p-2 bg-[#CCD6F6]"
          rows="10"
          placeholder="Message"
        />
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center duration-300">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
