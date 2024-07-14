import { shoe8 } from "../assets/images";
import Button from "../components/Button";

function SuperQuality() {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col w-full max-container gap-10">
      <div className="flex flex-1 flex-col">
        <h2 className='text-4xl capitalize font-bold font-palanquin lg:max-w-lg'>
            We Provide You <span className='text-coral-red inline-block mt-3'>Super</span>
          <span className='text-coral-red inline-block mt-3'>Quality</span> Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          We are committed to providing you with the best quality shoes that exceed your expectations. Our shoes are designed to provide comfort, style, and performance. We use the highest quality materials and craftsmanship to ensure that our shoes last for a long time.
        </p>
        <p className="mt-6 info-text lg:max-w-lg">
        Whether you are looking for a casual pair of sneakers or a high-performance running shoe, we have something for everyone.
        </p>
        <div className="mt-11">  
        <Button label='View Details' />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center hover:scale-105">
        <img src={shoe8} alt="shoe8" width={570} height={522}/>
      </div>
    </section>
  )
}

export default SuperQuality;
