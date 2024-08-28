import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

function SpecialOffer() {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} width={773} height={687} className="object-contain w-full"/>
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className='text-4xl capitalize font-bold font-palanquin lg:max-w-lg'>
          <span className='text-coral-red inline-block mt-3'>Special</span> Offer
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          During this special offer, we are offering unbeatable discounts on all of our shoes. Take advantage of our limited-time offer and get the best shoes at unbeatable prices.
        </p>
        <p className="mt-6 info-text lg:max-w-lg">
        Whether you are looking for a pair of comfortable sneakers or a high-performance running shoe, Nike has something for everyone. Do not miss out on this incredible opportunity to upgrade your footwear.        </p>
        <div className="mt-11 flex gap-4 flex-wrap">  
        <Button label='Shop Now' iconURL={arrowRight} />
        <Button label='Learn more' backgroundColor = "bg-white" borderColor= "border-slate-gray" textColor = "text-slate-gray" />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer;
