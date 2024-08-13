import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="flex space-x-12 justify-center mt-12">
      <a href="christian.g.ramirez.89@gmail.com" target="_blank" rel="noopener noreferrer">
        <FaEnvelope className="text-3xl text-white hover:text-blue-500 transition-colors" />
      </a>
      <a href="tel:54901161850933" target="_blank" rel="noopener noreferrer">
        <FaPhone className="text-3xl text-white hover:text-blue-500 transition-colors" />
      </a>
      <a href="https://www.linkedin.com/in/christian-ramirez-3208a91aa" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-3xl text-white hover:text-blue-500 transition-colors" />
      </a>
      <a href="https://github.com/christian-g-ramirez" target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-3xl text-white hover:text-blue-500 transition-colors" />
      </a>
      <a href="https://wa.me/1161850933" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp className="text-3xl text-white hover:text-blue-500 transition-colors" />
      </a>
    </div>
  );
};

export default Contact;