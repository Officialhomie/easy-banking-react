import React from 'react'
import sideImg from '../../assets/side-img.png'


const Home = () => {
  return (
    <div className='flex items-center flex-col-reverse text-center lg:text-left lg:flex-row px-20 py-[50px] xl:gap-[250px] gap-[100px] bg-[#F3F4F6]'>
      <div className='flex-col'>
        <h1 className='text-5xl pb-5'>Next generation digital banking</h1>
        <p className='text-2xl pb-5'>Take your financial life online. Your easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
        <button className='py-3 px-7 rounded-full text-white mb-5 bg-gradient-to-r from-green-400 to-blue-500 border hover:border-black'>Request Invite</button>
      </div>

      <img className='w-[50%]' src={sideImg} alt="my banking portfolio" />

    </div>
  )
}

export default Home