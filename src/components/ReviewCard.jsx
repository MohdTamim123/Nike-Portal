import { star } from "../assets/icons"

function ReviewCard({customerName, feedback, imgURL, rating}) {
  return (
    <div className="flex justify-center items-center flex-col hover:scale-105">
      <img src={imgURL} className="rounded-full object-cover w-[120px] h-[120px]" />
      <p className="info-text max-w-sm mt-6 text-center">{feedback}</p>
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <img src={star} alt="rating" width={24} height={24} className="object-contain m-0" />
        <p className="text-xl font-montserrat text-slate-gray">{rating}</p>
      </div>
        <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">{customerName}</h3>
    </div>
  )
}

export default ReviewCard
