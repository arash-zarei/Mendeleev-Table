import React from 'react';

const Categores = ({ category, bgColor }) => {
    return (
        <div className={`w-20 h-20 flex items-center justify-center p-5 ${bgColor}`}>
            <p className='text-xl text-center font-primary'>{category}</p>
        </div>
    );
};

export default Categores;