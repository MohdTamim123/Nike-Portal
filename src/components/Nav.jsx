import { headerLogo } from "../assets/images";
import {hamburger} from "../assets/icons"
import { navLinks } from "../constants";
function Nav() {
  const renderedItems = navLinks.map((item) => {
    return (
      <li key={item.label}>
        <a
          href={item.href}
          className='font-montserrat text-lg leading-normal text-slate-gray'
        >
          {item.label}
        </a>
      </li>
    );
  });

  return (
    <header className='padding-x py-8 z-10 absolute w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img src={headerLogo} alt='Logo' width={130} height={39} />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {renderedItems}
        </ul>
        <div className="lg:hidden">
        <img src={hamburger} height={25} width={25} />
        </div>
      </nav>
    </header>
  );
}

export default Nav;
