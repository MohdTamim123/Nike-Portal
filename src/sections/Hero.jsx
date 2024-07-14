import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import { shoes } from "../constants";
import ShoeCard from "../components/ShoeCard";
import { useState } from "react";

function Hero() {
  const [bigShoeImg,setBigShoeImg] = useState(bigShoe1);

  const renderedStatistics = statistics.map((stat, index) => {
    return (
      <div key={index}>
        <p className='text-4xl font-bold font-palanquin'>{stat.value}</p>
        <p className='leading-7 font-montserrat text-slate-gray'>
          {stat.label}
        </p>
      </div>
    );
  });

  const renderedShoes = shoes.map((shoe)=>{
    return (
      <div key={shoe}>
        {/* {console.log(shoe)} */}
        <ShoeCard imgURL = {shoe} changeBigShoeImage ={(shoe) => {setBigShoeImg(shoe)}} bigShoeImg = {bigShoeImg}/>
      </div>
    )
  })
  return (
    <section
      id='home'
      className='w-full flex xl:flex-row flex-col justify-center items-center max-container gap-10 min-h-screen'
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
        <p className='text-lg text-coral-red font-montserrat'>
          Our Summer Collections
        </p>  
        <h1 className='mt-10 text-8xl font-bold font-palanquin max-sm:text-[72px] max-sm:leading-[82px]'>
          <span className='xl:bg-white xl:rounded-r-full xl:whitespace-nowrap relative z-10 pr-10'>
            The New Arrival
          </span>
          <br />
          <span className='text-coral-red inline-block mt-3'>Nike</span> Shoes
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-6 mt-6 mb-14 sm:max-w-sm'>
          Discover Stylish Arrival, Quality comforts, and innovation for your
          active life.
        </p>
        <Button label='Shop Now' iconURL={arrowRight} />

        <div className='flex flex-wrap justify-start items-start w-full mt-20 gap-16'>
          {renderedStatistics}
        </div>
      </div>
      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img
          src={bigShoeImg}
          alt='shoe collection'
          width={610}
          height={500}
          className='object-contain relative z-10'
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {renderedShoes}
      </div>
      </div>  
      
    </section>
  );
}

export default Hero;
