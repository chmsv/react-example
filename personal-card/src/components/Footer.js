import { FaGithubSquare } from 'react-icons/fa';
import { FaFontAwesome } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='mt-12 p-5 border-solid border-2 border-zinc-800'>
      <p className='flex justify-center text-zinc-100 text-sm'>
        Please feel free to reach out.
      </p>
      <div className='mt-5 text-3xl flex justify-evenly text-zinc-100'>
        <a href='https://github.com'>
          <FaGithubSquare />
        </a>
        <a href='https://google.com'>
          <FaFontAwesome />
        </a>
        <a href='https://twitter.com'>
          <FaTwitterSquare />
        </a>
      </div>
    </div>
  );
};

export default Footer;
