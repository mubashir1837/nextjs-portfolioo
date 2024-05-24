import Link from "next/link";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin,  FaYoutube } from "react-icons/fa"; 

const Navbar = () => {
  return (
    <nav className="bg-[#1d1e50] p-4">
      <div className="flex justify-between items-center">
        <div className="text-[#fff] font-bold">
          <Link href="/">𝕄𝕌𝔹𝔸𝕊ℍ𝕀ℝ 𝔸𝕃𝕀</Link>
        </div>
        <div className="flex space-x-4 text-white">
          <a href="https://github.com/mubashir1837">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/mubashirali3">
            <FaLinkedin />
          </a>
          <a href="https://facebook.com/mubashiraliyaar">
            <FaFacebook/>
            </a>
          <a href="https://instagram.com/mubashir_aliyaar_37/">
            <FaInstagram />
          </a>
          <a href="https://www.youtube.com/@BismiAllah_coder">
            <FaYoutube/>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
