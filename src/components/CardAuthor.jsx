function CardAuthor({ children, image }) {
  return (
    <section className="flex items-center pl-1 gap-3 ">
      <img
        src={image}
        alt="Author profile picture"
        className="rounded-b-full w-8"
      />
      <span className="text-[15px] font-bold">{children}</span>
    </section>
  );
}

export default CardAuthor;
