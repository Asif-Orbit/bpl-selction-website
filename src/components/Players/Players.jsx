import React, { use } from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';

const Players = ({ playersLoad, balance,setBalance ,purchasedPlayer,setPurchasedPlayer}) => {
    const players = use(playersLoad)
    return (
        <div className='w-10/12 mx-auto mt-8 grid md:grid-cols-3 gap-4'>
            {
                players.map(player => <PlayerCard key={player.player_id} purchasedPlayer={purchasedPlayer} setPurchasedPlayer={setPurchasedPlayer} player={player} balance={balance} setBalance={setBalance}></PlayerCard>)
            }

        </div>
    );
};

export default Players;