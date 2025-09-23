
import { Suspense, useState } from 'react'
import './App.css'
import { ToastContainer } from 'react-toastify';
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import PlayerCard from './components/PlayerCard/PlayerCard'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'
import Players from './components/Players/Players'

const playersLoad = fetch('/players.json')
  .then(res => res.json())
function App() {

  const [btnToggle, setBtnToggle] = useState(true);
  const [balance, setBalance] = useState(20000000);
  const [purchasedPlayer, setPurchasedPlayer] = useState([])
  
  

const removeItem=(id)=>{
  const remainPlayer =purchasedPlayer.filter(purchased=> purchased.player_id !== id.player_id);
  setPurchasedPlayer(remainPlayer);
  setBalance(balance+id.price)


}
  return (
    <>
      <Navbar balance={balance}></Navbar>
      <Banner></Banner>
      <div className='w-10/12 mx-auto mt-20 flex flex-col-reverse md:flex-row justify-between items-center'>
        <p className='text-2xl font-bold text-[#131313]'>{btnToggle ? "Available Players" : `Selected Player (${purchasedPlayer.length}/6)`}</p>
        <div className='border-2 border-gray-100 rounded-3xl mb-5'>
          <button onClick={() => { setBtnToggle(true) }} className={` text-[#131313] text-[16px] py-1.5 md:py-3  px-3.5 md:px-7 rounded-l-3xl ${btnToggle ? 'bg-[#E7FE29] font-bold' : ''}`}>Available</button>
          <button onClick={() => setBtnToggle(false)} className={`py-1.5 md:py-3  px-3.5 md:px-7 rounded-r-3xl ${btnToggle === false ? 'bg-[#E7FE29] font-bold' : ''}`}>Selected <span>({purchasedPlayer.length})</span></button>
        </div>
      </div>
      {
        btnToggle ? <Suspense fallback={<div className='w-10/12 mx-auto flex justify-center'><span className="loading loading-spinner loading-xl"></span></div>}>
          <Players purchasedPlayer={purchasedPlayer} setPurchasedPlayer={setPurchasedPlayer} playersLoad={playersLoad} balance={balance} setBalance={setBalance}></Players>
        </Suspense> : purchasedPlayer.map(purchased=><SelectedPlayers key={purchased.player_id} removeItem={removeItem} purchased={purchased}></SelectedPlayers>)
      }

      <ToastContainer />
    </>
  )
}

export default App
