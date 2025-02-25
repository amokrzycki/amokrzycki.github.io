import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { IoDocumentAttach } from "react-icons/io5";

function Navbar() {
  return (
    <nav className={"mb-20 flex items-center justify-between py-6"}>
      <div className={"flex shrink-0 items-center"}>
        <a href={"/"} className={"text-2xl font-bold text-white"}>
          AM
        </a>
      </div>
      <div className={"m-8 flex items-center justify-center gap-4 text-2xl"}>
        <a
          href="https://www.linkedin.com/in/amokrzycki/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={"LinkedIn"}
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/amokrzycki"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={"Github"}
        >
          <FaGithub />
        </a>
        <a
          href="https://amokrzycki.ovh/resume"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={"Resume"}
        >
          <IoDocumentAttach />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
