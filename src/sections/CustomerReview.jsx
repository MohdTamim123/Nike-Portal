import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";

function CustomerReview() {
  const renderedReviews = reviews.map((review) => {
    return (
      <ReviewCard key={review.customerName} {...review}/>
    )
  });
  return (
    <section className="max-container">
      <h3 className="text-4xl text-center font-palanquin font-bold">What Our <span className="text-coral-red">Customers</span> Say?</h3>
      <p className="info-text mt-4 max-w-lg text-center m-auto">Hear genuine stories from our satisfied customers about their experience with us.</p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {renderedReviews}
      </div>
    </section>
  )
}

export default CustomerReview;
