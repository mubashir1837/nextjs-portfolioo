import { FaTelegram, FaTwitter, FaEnvelope, FaSkype, FaWhatsapp, FaYoutube } from 'react-icons/fa';

const githubProfilePhotoUrl = "https://avatars.githubusercontent.com/u/163585695?v=4";

const Footer = () => {
  return (
    <footer className="text-gray-800 py-8 mt-8">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="my-4 lg:my-0 text-center lg:text-left">
            <h3 className="text-lg font-semibold mb-2 text-[#fff]">Let&apos;s Connect</h3>
            <p className="text-sm text-[#ebe1e1] mb-4"> I&apos;m actively exploring new opportunities, and my inbox eagerly awaits your message.</p>
            <ul className="flex flex-wrap space-x-4 justify-center lg:justify-start">
              <li>
                <a href="mailto:mubashirali1837@gmail.com" className="flex items-center hover:text-[#1ff]">
                  <FaEnvelope className="mr-2 text-[#fff]" />
                </a>
              </li>
              <li>
                <a href="http://Wa.me/+923275882664" className="flex items-center hover:text-[#1ff]">
                  <FaWhatsapp className="mr-2 text-[#fff]" /> 
                </a>
              </li>
              <li>
                <a href="https://twitter.com/mubashiraliyaar" className="flex items-center hover:text-[#1ff]">
                  <FaTwitter className="mr-2 text-[#fff]" /> 
                </a>
              </li>
              <li>
                <a href="https://join.skype.com/invite/tbUVmyPL6ySt" className="flex items-center hover:text-[#1ff]">
                  <FaSkype className="mr-2 text-[#fff]" /> 
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@BismiAllah_coder" className="flex items-center hover:text-[#579b9b]">
                  <FaYoutube className="mr-2 text-white" /> 
                </a>
              </li>
              <li>
                <a href="http://t.me/mubashir1837" className="flex items-center hover:text-[#579b9b]">
                  <FaTelegram className="mr-2 text-white" /> 
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <img src={githubProfilePhotoUrl} alt="GitHub Profile" className="w-11 h-11 rounded-full lg:rounded-lg" />
          </div>
        </div>
      </div>  
    </footer>
  );
};

export default Footer;
