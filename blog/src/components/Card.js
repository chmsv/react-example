import React from 'react';
import geo from '../images/geo.png';

const Card = (props) => {
  return (
    <div className='grid grid-cols-2 gap-1'>
      <div className='md:ml-16 ml-10 md:mt-16 mt-10'>
        <img className='md:w-80 w-56 rounded-2xl' src={`${props.img}`} alt='' />
      </div>

      <div className='md:my-16 my-10 md:mr-20 mr-10'>
        <div>
          <div className='flex flex-row'>
            <img src={geo} alt='geo' className='md:h-6 h-4' />
            <span className='md:mx-2 mx-1'>{props.location.toUpperCase()}</span>
            <span className='md:mx-2 mx-1 text-gray-500 underline underline-offset-1 md:text-base text-sm'>
              <a href={`${props.map}`}>View on Map</a>
            </span>
          </div>

          <div>
            <h1 className='md:text-3xl text-2xl font-extrabold m-4'>
              {props.title}
            </h1>
            <span className='mx-4 my-24 text-sm font-bold'>{props.period}</span>
            <p className='mx-4 my-10 text-base'>{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
