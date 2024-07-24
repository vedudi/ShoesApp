type Props={
    open:()=> void
}

const Buttons = ({open}:Props) => {
  return (
    <div className="flex mt-5 gap-10 lg:hidden">
      <button onClick={open} className="bg-white rounded-md p-1 px-4 shadow flex flex-1  gap-4 items-center justify-between">
        {" "}
        Filters
        <img src="/list.svg" alt="" />
      </button>
      <button className="bg-white rounded-md p-1 px-4 shadow flex flex-1  gap-4 items-center justify-between">
        {" "}
        Sırala
        <img src="/list.svg" alt="" />
      </button>
    </div>
  );
};

export default Buttons;
