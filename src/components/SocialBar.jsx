import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialBar = () => {
  return (
    <div
      id="social-wrapper"
      className="hidden lg:flex fixed flex-col top-[35%] left-0"
    >
      <ul>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href="https://www.linkedin.com/in/amokrzycki/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="p-1">LinkedIn</p>
            <FaLinkedin size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href="https://github.com/Sajson"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="p-1">Github</p>
            <FaGithub size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-600">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href="xdd"
          >
            <p className="p-1">Mail</p>
            <HiOutlineMail size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-700">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href="https://drive.google.com/file/d/1yi9uKFUE6CFrqbOKrbYnMsJ4srAWJ3E_/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="p-1">Resume</p>
            <BsFillPersonLinesFill size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialBar;
