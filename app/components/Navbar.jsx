import Link from "next/link";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"; // Import icons from react-icons library

const Navbar = () => {
  return (
    <nav className="bg-[#1d1e50] p-4">
      <div className="flex justify-between items-center">
        <div className="text-[#fff] font-bold">
          <Link href="/">༺≛⃝𝓜𝓾𝓫𝓪𝓼𝓱𝓲𝓻  𝓐𝓵𝓲༻</Link>
        </div>
        <div className="flex space-x-4 text-white">
          <a href="https://github.com/mubashir1837">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/mubashirali3">
            <FaLinkedin />
          </a>
          <a href="https://facebook.com/">
            <FaFacebook/>
            </a>
          <a href="https://instagram.com/mubashir_aliyaar_37/">
            <FaInstagram />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
