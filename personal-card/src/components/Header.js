const Header = () => {
  return (
    <div>
      <div className='flex justify-center'>
        <h1 className='p-2 text-2xl sm:text-3xl text-zinc-50 font-extrabold'>
          My Name
        </h1>
      </div>
      <div className='flex justify-center'>
        <h2 className='p-1 sm:px-2 text-lg sm:text-xl text-zinc-200'>
          FullStack Developer
        </h2>
      </div>
      <div className='flex justify-center'>
        <a
          href='https://chmsv.com'
          target='_blank'
          rel='noreferrer'
          className='p-2 text-lg sm:text-xl text-zinc-200 hover:font-bold hover:text-blue-500'
        >
          site.com
        </a>
      </div>
    </div>
  );
};

export default Header;
