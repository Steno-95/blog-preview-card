function CardTag({ children }) {
  return (
    <span className="py-1 px-3 font-bold w-fit rounded-sm bg-linear-to-br from-yellow-300 to-amber-400 mt-1 text-[12px]">
      {children}
    </span>
  );
}

export default CardTag;
