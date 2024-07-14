import { star } from "../assets/icons";

function PopularProductCard({ imgURL, name, price, rating }) {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
      <img src={imgURL} alt={name} className='w-[280] h-[280]' />
      <div className='mt-8 flex justify-start gap-2.5'>
        <img src={star} alt='rating' width={24} height={24} />
        <p className='font-montserrat text-slate-gray text-xl leading-normal'>
          {rating}
        </p>
      </div>
      <h3 className='mt-2 leading-normal font-palanquin font-semibold text-2xl'>
        {name}
      </h3>
      <p className="mt-2 font-montserrat text-coral-red leading-normal font-semibold text-2xl">{price}</p>
    </div>
  );
}

export default PopularProductCard;
