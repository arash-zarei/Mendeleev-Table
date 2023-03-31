import React from 'react';

const ElementTable = ({ data }) => {
    const { symbol, name, atomicMass, atomicNum, category } = data
    return (
        <div className={`w-20 h-24 flex flex-col cursor-pointer m-[1px] hover:border-black hover:border-[2px] ${category}`}>
            <p className='font-table text-[12px] pl-2'>{atomicNum}</p>
            <div className='flex flex-col items-center'>
                <p className='font-table text-[18px]'>{symbol}</p>
                <p className='text-lg font-primary text-[13px] font-bold'>{name}</p>
                <p className='text-[12px] font-table'>{atomicMass}</p>
            </div>
        </div>
    );
};

export default ElementTable;