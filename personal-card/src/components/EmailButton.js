const EmailButton = () => {
  return (
    <div className='flex justify-center'>
      <button className='w-28 sm:px-2 py-1 sm:m-5 m-3 text-lg font-semibold rounded-md bg-zinc-100 text-zinc-900 hover:text-blue-500 hover:font-bold hover:text-xl'>
        <a href='mailto:mail@mail.com'>Email</a>
      </button>
      <button className='w-28 sm:px-2 py-1 sm:m-5 m-3 text-lg font-semibold rounded-md bg-zinc-100 text-zinc-900 hover:bg-blue-500 hover:text-zinc-100 hover:font-bold hover:text-xl'>
        <a href='https://www.linkedin.com/'>
          LinkedIn
        </a>
      </button>
    </div>
  );
}

export default EmailButton;
