import React, { useState } from 'react';
import userImg from '../../assets/user.png'
import flag from '../../assets/flag.png'
import { toast } from 'react-toastify';

const PlayerCard = ({ player, balance, setBalance, purchasedPlayer, setPurchasedPlayer }) => {
    const { name, image, country, role, rating, batting_style, bowling_style, price } = player;
    const [isSelected, setIsSelected] = useState(true)
    const latestBalance = (player) => {
        const playerPrice = parseInt(player.price);
        if (playerPrice > balance) {
            toast("Not Enough Balance")
            isSelected(true);
            return;
        }

        const newBalance = balance - playerPrice;
        setBalance(newBalance);
        if (purchasedPlayer.length >= 6) {
            toast("You Already Purchased 6 Players");
            isSelected(true);
            return;
        }
        setPurchasedPlayer([...purchasedPlayer, player]);
    }

    return (
        <div >
            <div className="card bg-base-100  shadow-sm">
                <figure className="px-6 py-6">
                    <img
                        src={image}
                        alt="Player's Photo"
                        className="rounded-xl object-cover h-80" />
                </figure>
                <div className="space-y-3 px-6 pb-6">
                    <h2 className="card-title"><img src={userImg} alt="" /> {name}</h2>
                    <div className='flex justify-between border-b-1 pb-4 border-[#13131310]'>
                        <div className='flex gap-2 items-center text-[#131313]'>
                            <img src={flag} alt="" /> <p>{country}</p>
                        </div>
                        <button className='btn'>{role}</button>
                    </div>
                    <div className='flex justify-between items-center'>
                        <p className='font-bold text-[#131313]'>Rating</p>
                        <p className='font-semibold text-[#131313]'>{rating}</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <p className='font-bold text-[#131313]'>{batting_style}</p>
                        <p className='font-semibold text-[#131313]'>{bowling_style}</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className='font-semibold'>Price: $<span>{price}</span> USD</p>
                        <button disabled={!isSelected} onClick={() => {
                            latestBalance(player),
                                setIsSelected(false)
                        }} className="btn ">{isSelected ? "Choose Player" : "Selected"}</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PlayerCard;