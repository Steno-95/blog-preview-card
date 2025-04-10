function Card({ children }) {
  return (
    <section className="bg-white 2xl:max-w-2/12 2xl:max-h-9/12 p-4 sm:p-5 sm:gap-5 border-1 border-black rounded-3xl flex flex-col mx-auto gap-4 shadow-[6px_6px_0px_rgb(0,0,0)] w-[300px] ">
      {children}
    </section>
  );
}

export default Card;
