function CardHeader({ children, date }) {
  return (
    <header className="flex flex-col gap-2 pt-2">
      <h3 className="text-slate-950 text-[12px] font-[500] tracking-tight">
        {date}
      </h3>
      <h1 className="text-slate-950 text-[1.2rem] font-[800] : cursor-pointer ">
        {children}
      </h1>
    </header>
  );
}

export default CardHeader;
