import React from 'react';
import remove from '../../assets/Frame.png';
const SelectedPlayers = ({purchased,removeItem}) => {
    const handleRemove=()=>{
        removeItem(purchased)
    }
    return (
        <div className='w-10/12 mx-auto mt-9'>
            <div className='flex justify-between items-center border-2 border-[#13131310] rounded-2xl p-6 shadow-lg'>
                <div className='flex items-center gap-3'>
                    <img src={purchased.image} alt="" className='h-12 object-cover rounded-full' />
                    <div>
                        <h2 className='font-semibold text-2xl text-[#131313]'>{purchased.name}</h2>
                        <p className='text-[#13131360]'>{purchased.role}</p>
                    </div>
                </div>
                <div onClick={handleRemove}>
                    <img src={remove} alt="" />
                </div>

            </div>

        </div>
    );
};

export default SelectedPlayers;