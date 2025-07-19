import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import socials from '../constants/socials';

function SocialLinks() {
  return (
    <div className="flex space-x-6 mt-12 justify-center">
      {socials.map(({ icon: Icon, url, label }) => (
        <a
          key={label}
          href={url}
          aria-label={label}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
        >
          <Icon size={24} />
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
