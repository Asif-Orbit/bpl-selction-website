import React from 'react';
import removeItem from '../../assets/Frame.png';
const SelectedPlayers = () => {
    return (
        <div className='w-10/12 mx-auto mt-9'>
            <div className='flex justify-between items-center border-2 border-[#13131310] rounded-2xl p-6 shadow-lg'>
                <div className='flex items-center gap-3'>
                    <img src="https://i.ibb.co/CrjzDvf/image.png" alt="" className='h-12 object-cover rounded-full' />
                    <div>
                        <h2 className='font-semibold text-2xl text-[#131313]'>name</h2>
                        <p className='text-[#13131360]'>batsman</p>
                    </div>
                </div>
                <img src={removeItem} alt="" />

            </div>

        </div>
    );
};

export default SelectedPlayers;