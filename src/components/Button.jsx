import classnames from "classnames";
function Button({ label, iconURL, backgroundColor, borderColor, textColor, fullWidth }) {
  const classNames = classnames(`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full ring-1 hover:ring-coral-red`, textColor || "text-white", backgroundColor || "bg-coral-red", borderColor || "border-coral-red",fullWidth || "w-full");
  return (
    <button className={classNames}>
      {label}
      {iconURL && <img src={iconURL} alt="arrowRightIcon" className="ml-2 rounded-full w-5 h-5"/>}
    </button>
  );
}

export default Button;
