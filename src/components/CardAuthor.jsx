function CardAuthor({ children, image }) {
  return (
    <section className="flex items-center pl-1 gap-3 ">
      <img
        src={image}
        alt="Author profile picture"
        className="rounded-b-full w-8 h-8 xl:w-7 xl:h-7"
      />
      <span className="text-[0.9rem] font-extrabold tracking-tight">
        {children}
      </span>
    </section>
  );
}

export default CardAuthor;
