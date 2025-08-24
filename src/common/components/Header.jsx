import React, { useState } from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { BiSolidUserCircle } from "react-icons/bi";
import { CgMenuOreos } from "react-icons/cg";



function Header() {
    const [clickMenu , setClickMenu] = useState(false)
    return (
        <>
            {/* Header */}
            <div className=" flex justify-between items-center p-4 text-white 
                     bg-[url('https://static.vecteezy.com/system/resources/previews/043/555/242/non_2x/realistic-3d-cinema-film-strip-in-perspective-isolated-on-blue-background-template-cinema-festival-movie-design-cinema-film-strip-for-ad-poster-presentation-show-brochure-banner-or-flyer-vector.jpg')] bg-cover bg-center">

                <div className='flex items-center'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2d08ECqu1NBhxo2fw1hVXyiQ02oJkkFt2DQ&s" alt="" style={{ width: "80px", height: "80px" }} />
                    <h1 className='flex md:hidden text-3xl font-bold text-white m-4'>MOVIE REVIEW</h1>
                </div>

                <div className='ms-40'>
                    <h1 className='hidden md:flex text-3xl font-bold text-white'>MOVIE REVIEW</h1>
                </div>

                <div className='hidden md:flex items-center text-white'>
                    <FaInstagramSquare className='me-3 text-3xl' />
                    <FaXTwitter className='me-3 text-3xl' />
                    <FaFacebookSquare className='me-3 text-3xl' />

                    <div className='ms-3'>
                        <button className='flex px-4 py-3 border rounded items-center text-xl'><BiSolidUserCircle className='me-3' />LOGIN</button>
                    </div>
                </div>
            </div>

            {/* navbar */}
            <nav className='bg-black  p-3'>
                <div className='md:hidden flex justify-between items-center'>
                    <span onClick={()=>setClickMenu(!clickMenu)}><CgMenuOreos className='text-white text-4xl'/></span>
                    <button className='flex px-4 py-3 border text-white rounded items-center text-xl'><BiSolidUserCircle className='me-3' />LOGIN</button>
                </div>
                <ul className={clickMenu ? "md:flex text-white" : 'hidden md:flex justify-center text-white gap-10 me-5'}>
                    <li>Home</li>
                    <li>Movie</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </>
    )
}

export default Header
