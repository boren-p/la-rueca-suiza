import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({cart}) => {
    const [menu, setMenu] = useState(false);



    return (
        <header className='fixed z-40 flex items-center justify-between bg-[#fcf8f5] w-full h-20 px-[5%] md:px-[10%] shadow-xl'>
            {menu && <div className='fixed inset-0'>
                        <div onClick={()=>{setMenu(false)}} className='fixed inset-0 h-screen w-screen backdrop-blur-xs bg-black/50'/>
                        <div className='absolute inset-0 h-screen w-50 bg-amber-600'>
                            <Link to="/"><h2 onClick={()=>{setMenu(false)}} className='p-5 bg-amber-600 text-white hover:font-semibold transition '>¿Quienes somos?</h2></Link>
                            <Link to="/products"><h2 onClick={()=>{setMenu(false)}} className='p-5 bg-amber-600 text-white hover:font-semibold transition'>Nuestros productos</h2></Link>
                        </div>
                    </div>}
            <div onClick={()=>{setMenu(true)}} className='flex md:hidden'><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#e0720b"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></div>
            <img src="./logo.png" alt="" className='w-auto h-[70%]'/>
            <nav className='flex items-center md:gap-6'>
                <Link to="/"><h2 className='hidden md:flex p-5 hover:bg-amber-600 hover:text-white hover:font-semibold transition '>¿Quienes somos?</h2></Link>
                <Link to="/products"><h2 className='hidden md:flex p-5 hover:bg-amber-600 hover:text-white hover:font-semibold transition'>Nuestros productos</h2></Link>
                {/* <h2>Siguenos</h2> */}
                <div onClick={cart} className='cursor-pointer p-3 rounded-full bg-amber-600'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="white"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/>
                    </svg>
                </div>
            </nav>
        </header>
    );
}

export default Header;
