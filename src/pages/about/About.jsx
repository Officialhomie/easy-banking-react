import React from 'react'
import iconO from '../../assets/icon-online.svg'
import iconB from '../../assets/icon-budgeting.svg'
import iconON from '../../assets/icon-onboarding.svg'
import iconA from '../../assets/icon-api.svg'

const About = () => {

  const aboutArray = [
    {
      img:iconO,
      title: 'Online Banking',
      desc: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.'
    },
    {
      img:iconB,
      title: 'Simple Budgeting',
      desc:'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.'
    },
    {
      img:iconA,
      title: 'Open API',
      desc:'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.'
    },
    {
      img:iconON,
      title: 'Simple Budgeting',
      desc: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.'
    }
  ]
  return (
    <div className='px-20 py-[50px]'>
      <div className='flex-col'>
          <h1 className='text-5xl pb-5'>Why choose Easybank?</h1>
          <p className='text-xl pb-5'>We leaverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-[50px] py-[30px]">
        {aboutArray.map(about =>(
          <div className='flex-col bg-white hover:bg-gray-200 py-[40px] px-[20px] rounded-[20px] transition duration-300'>
            <img className='' src={about.img} alt="Icon Online" />

            <h3 className='py-[10px] lg:py-[20px] xl:py-[30px] font-bold'>{about.title}</h3>

            <p className=''>{about.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About