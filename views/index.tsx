import Head from 'next/head'
import React from 'react'
import Navbar from '../components/nav/navbar'
import Main from '../layouts/main'


const Lottory = () => {

  let prizes = 0
  let round = 0
  let ticket = 0
  let prizePot = 0

  const textFooter = [
    'wallet', 'About us', 'How to use', 'Contact', 'FAQs'
  ]

  return (
    <>
      <Head>
        <title>Dao-Lottory</title>
      </Head>
      <Navbar/>

        <section className='w-full h-[400px] bg-[#0E0D32]'>
          <div className='container flex flex-col items-center justify-center mx-auto h-full'>
            <div className='place-self-center'>
              <div className='text-center text-white'>
                <p className='p-4 font-bold text-transparent text-2xl bg-clip-text bg-gradient-to-t from-[#F9A424] to-[#F9F024]'>DAO
                  <span className='text-white'>LOTTORY</span>
                </p>
                <p className='text-4xl '> 
                  <span className='mr-2 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-[#F9A424] to-[#F9F024]'>{prizes}</span> 
                  in prizes
                </p>
              </div>
            </div>
            <button className='place-self-center p-2 mt-5 bg-gradient-to-l from-[#F9A424] to-[#F9D724] rounded-[18px] w-[241px] cursor-pointer'>BUY TICKET</button>
          </div>
        </section>

        <section className='w-full bg-[#181741] h-[600px]'>
          <div className='container grid justify-center mx-auto h-full w-full'>
            <div className='text-4xl text-yellow-500 place-self-center '>Get your ticket now!</div>

            <div className='place-self-center w-full max-w-[867px] rounded-[20px]'>
              <div className='flex justify-between bg-[#F9A424] p-5 rounded-t-[20px]'>
                <div className='font-bold text-xl'>Next draw</div>
                <div className='font-bold flex '>
                  Round: 
                  <div className='ml-2 w-20 bg-black rounded-[20px] text-white text-center'>#{round}</div>
                </div>
              </div>

              <div className='grid bg-[#0E0D32] rounded-b-[20px] p-5 gap-5'>
                <div className='flex'>
                  <div className='text-yellow-500 p-5'>Prizes Pot <span className='text-white'>{prizePot}</span> </div>
                </div>
                <div className='flex justify-between text-yellow-500'>
                  <div className='flex items-center p-5'>
                    Your Ticket 
                    <p className='text-white ml-2'>you have 0 ticket this round</p>
                  </div>
                  <div className='flex items-center'>
                    <div>Dao Members: <span className='text-white'>{ticket}</span> </div>
                    <div className='ml-2'>tickets</div>
                  </div>
                </div>
                <button className='p-3 w-[170px] font-bold rounded-[20px] place-self-center bg-gradient bg-gradient-to-l from-[#F9A424] to-[#F9D724]'>Buy tickets</button>
              </div>
            </div>
          </div>

        </section >

        <section className='w-full bg-[#0E0D32] h-[600px]'>
          <div className='container grid justify-center mx-auto h-full w-full'>
            <div className='text-center text-4xl text-yellow-500 place-self-center'>
              <div> Are you a winner ? </div>
              <div className='p-5 mt-10 w-[410px] rounded-[20px] h-[336px] bg-[#181741] flex flex-col gap-5'>
                <div>Put round</div>
                <input 
                  type="number" 
                  className='bg-[#0E0D32] rounded-[20px] text-center text-white'
                />
                <button className='p-3 w-[170px] text-base text-black font-bold rounded-[20px] place-self-center bg-gradient bg-gradient-to-l from-[#F9A424] to-[#F9D724]'>Check</button>
              </div>
            </div>
          </div> 
        </section>

        <section className='w-full h-[400px] bg-[#181741]'>
          <div className='container flex flex-col gap-10 justify-center mx-auto h-full w-full'>
            <div className='place-self-center text-center'>
              <div className='flex text-2xl text-white font-bold justify-center'>
                <span className='text-yellow-500'>DAO</span>
                  LOTTORY
              </div>
              <p className='text-white opacity-50 mt-5'>Enjoy with DAO LOTTERY and Good luck!</p>
            </div>
            <div className='flex justify-center gap-10'>
              {textFooter.map((item,i) => (
                <div key={i} className='text-white' >{item}</div>
              ))}
            </div>
          </div>
        </section>
        
    </>
  )
}

export default Lottory