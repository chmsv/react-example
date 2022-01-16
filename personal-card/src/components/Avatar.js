import avatar from '../images/avatar.png';

const Avatar = () => {
  return (
    <div className='flex justify-center'>
      <img className='avatar sm:h-56 h-36' src={avatar} alt='Avatar' />
    </div>
  )
}

export default Avatar;