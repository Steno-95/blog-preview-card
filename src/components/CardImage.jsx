function CardImage({ image }) {
  return (
    <figure className="w-full h-48 sm:h-40 rounded-2xl overflow-hidden ">
      <img
        src={image}
        alt="simbolic image of a programming language"
        className="max-w-full scale-120 translate-y-5 sm:scale-100 sm:translate-y-0"
      />
    </figure>
  );
}

export default CardImage;
