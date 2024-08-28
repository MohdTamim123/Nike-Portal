import ServiceCard from "../components/ServiceCard";
import {services} from "../constants";

function Services() {
  const renderedServices = services.map((service) => {
    return(
      <div key={service.label} className="flex-1 sm:w-[350] sm:min-w-[350] w-full rounded-[20px] shadow-3xl px-10 py-16">
        <ServiceCard key={service.label} {...service}/>
      </div>
    )
  });  
  return (
    <section className="max-container flex flex-wrap justify-center gap-9">
      {renderedServices}
    </section>
  )
}

export default Services;
