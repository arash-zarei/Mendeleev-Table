import React from 'react';

const NumGroup = ({ number, text }) => {
    return (
        <div className='w-20 h-24 flex flex-col items-center justify-center m-[1px]'>
            <p className='text-xl text-center'>{number}</p>
            <p className='text-lg text-center'>{text}</p>
        </div>
    );
};

export default NumGroup;