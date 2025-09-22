import React from 'react';
import bannerImg from '../../assets/banner-main.png'
const Banner = () => {
    return (
        // <div className='w-11/12 mx-auto bg-[url(../../assets/bg-shadow.png)]'>
        <div className='w-10/12 mx-auto bg-[#131313] bg-[url(https://i.ibb.co/C3SsQ0tP/bg-shadow.png)] rounded-3xl md:py-15 md:px-25 py-5 px-10'>
            
            <div className='flex justify-center flex-col items-center gap-4 text-center'>
                <img src={bannerImg} alt="" className='mx-auto'/>
                <h1 className='font-bold text-[#FFFFFF] text-3xl md:text-4xl'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <h3 className=' text-[#FFFFFF70] text-2xl'>Beyond Boundaries Beyond Limits</h3>
                <div className='border-1 border-[#E7FE29] p-1 rounded-2xl'><button className='text-[#131313] hover:bg-white font-bold py-3.5 px-5 bg-[#E7FE29] rounded-[12px]'>Claim Free Credit</button></div>
            </div>
            
            
        </div>
    );
};

export default Banner;