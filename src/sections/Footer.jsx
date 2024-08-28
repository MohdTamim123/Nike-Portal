import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

function Footer() {
  const renderedSocialMedia = socialMedia.map((icon,index) => {
    return(
      <div key={index} className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
        <img src={icon.src} alt={icon.alt} width={24} height={24} />
      </div>
    )
  })

  const renderedFooterLinks = footerLinks.map((section) => {
    return(
      <div key={section}>
        <h4 className="mt-6 text-white font-montserrat text-2xl leading-normal font-medium mb-6">{section.title}</h4>
        <ul>
        {section.links.map((link) => {
          return(
            <li key={link.name} className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer">
              <a>{link.name}</a>
            </li>
          )
        })}
        </ul>
        
      </div>
    )
  })
  return (
    <footer className='max-container'>
      <div className="flex justify-between items-start gap-20 flex-start max-lg:flex-col">
        <div className="flex flex-col items-start ">
          <a href="/">
            <img src={footerLogo} alt="footerLogo" width={150} height={46} className="mt-20 "/>
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">Get shoes ready for the new term at your nearest nike store. Find your perfect size in store.</p>
          <div className="flex items-center gap-5 mt-8">
            {renderedSocialMedia}
          </div>
        </div>
        <div className="flex flex-1 justify-between flex-wrap lg:gap-10 gap-20">
          {renderedFooterLinks}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-36 max-sm:flex-col max-sm:items-center ">
        <div className="flex flex-1 justify-start items-center font-montserrat gap-2 cursor-pointer">
          <img src={copyrightSign} alt="copyrightSign" width={20} height={20} className=" rounded-full m-0" />
          <p>Copyright 2022. All Rights Reserved</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms and Conditions</p>
      </div>
    </footer>
  )
}

export default Footer;
