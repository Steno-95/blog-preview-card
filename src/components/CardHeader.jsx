function CardHeader({ children, date }) {
  return (
    <header className="flex flex-col gap-4">
      <h3 className="text-slate-950 text-[12px] font-semibold">{date}</h3>
      <h1 className="text-slate-950 text-[18px] font-bold">{children}</h1>
    </header>
  );
}

export default CardHeader;
