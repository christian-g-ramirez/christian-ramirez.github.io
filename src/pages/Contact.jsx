import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="flex space-x-12 justify-center mt-6 mb-10">
      <a href="mailto:christian.g.ramirez.89@ejemplo.com" target="_blank" rel="noopener noreferrer" className="relative z-50">
        <FaEnvelope className="text-4xl text-white hover:text-blue-500 transition-colors cursor-pointer" />
      </a>
      <a href="https://www.linkedin.com/in/christian-ramirez-3208a91aa" target="_blank" rel="noopener noreferrer" className="relative z-50">
        <FaLinkedin className="text-4xl text-white hover:text-blue-500 transition-colors cursor-pointer" />
      </a>
      <a href="https://github.com/christian-g-ramirez" target="_blank" rel="noopener noreferrer" className="relative z-50">
        <FaGithub className="text-4xl text-white hover:text-blue-500 transition-colors cursor-pointer" />
      </a>
      <a href="https://wa.me/1161850933" target="_blank" rel="noopener noreferrer" className="relative z-50">
        <FaWhatsapp className="text-4xl text-white hover:text-blue-500 transition-colors cursor-pointer" />
      </a>
    </div>
  );
};

export default Contact;