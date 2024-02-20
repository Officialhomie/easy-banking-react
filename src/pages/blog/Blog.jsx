import React from 'react'
import { Link } from 'react-router-dom'
import currImg from '../../assets/image-currency.jpg'
import restImg from '../../assets/image-restaurant.jpg'
import planeImg from '../../assets/image-plane.jpg'
import conImg from '../../assets/image-confetti.jpg'

const Blog = () => {
  
  const blogArray = [
    {
      img:currImg,
      title:"By OneTrueHomie",
      link:"Recieve money in any currency with no fees",
      desc:"The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single..." 
    },
    {
      img:restImg,
      title:"By Only1Temmy",
      link:"Treat yourself without worrying about money",
      desc:"Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you..." 
    },
    {
      img:planeImg,
      title:"By Wilson Hutton",
      link:"Take your Easybank card wherever you go",
      desc:"We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you..." 
    },
    {
      img:conImg,
      title:">By Claire Robinson",
      link:"Our invite-only Beta accounts are now live!",
      desc:"After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site..." 
    },
  ]
  
  return (
    <div className='px-20 py-5 mt-9'>
      <div>
        <h1 className='text-5xl pb-5'>
          Latest Articles
        </h1>
      </div>

      
      <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[50px] py-[50px]'>
        {blogArray.map(blog => (
          <div className='flex-col shadow-[5px_5px_10px_rgba(0,0,0,0.5)]'>
            <img src={blog.img} className='h-[260px] w-[100%] object-cover' alt="" />
            <div className='px-[10px]'>
              <h3 className='py-[15px] font-bold'>{blog.title}</h3>
              <Link to="#" className='hover:text-green-300'>{blog.link}</Link>
              <p className='py-[15px]'>{blog.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog