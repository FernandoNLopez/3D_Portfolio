import { NavLink } from "react-router-dom";

import { socialLinks } from '../constants';


const Navbar = () => {
  return (
    <header className="header">
      <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
        <p className="blue-gradient_text">
          FL
        </p>

                         {/* LINKS */}

      </NavLink>

      <div className="flex flex-row p-2">
        {socialLinks.map((socialLink) => (
          <div className='block-container w-10 h-10 flex flex-row m-2'>
          <div className='btn-back rounded-xl' />
          
          <div className='btn-front rounded-xl flex justify-center items-center'> 
            
            <a href={socialLink.link} target='_blank'>
            <img 
              src={socialLink.iconUrl}
              alt={socialLink.name}
              className='w-1/2 h-1/2 object-contain cursor-pointer'
            />
            </a>
          </div>
          </div>
        ))}
      
      </div>

      <nav className="flex text-lg gap-7 font-medium">

        <NavLink
          to="/about" 
          className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black' }
        >
          About
        </NavLink>

        <NavLink
          to="/projects" 
          className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black' }
        >
          Projects
        </NavLink>

        <NavLink
          to="/contact" 
          className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black' }
        >
          Contact
        </NavLink>

                               {/* LINKS */}
      </nav>
    </header>
  )
}

export default Navbar