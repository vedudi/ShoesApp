import { Link } from "react-router-dom";

const Header = () => {
  return <header className="bg-fa_white flex justify-between w-full p-[32px] rounded-[12px] md:rounded-[24px] items-center">
    <div className="text-dark font-semibold flex gap-[40px] max-md:hidden items-center">
      <Link to="/">New Drops 🔥</Link>
      <Link to="/"> Men</Link>
      <Link to="/"> Women</Link>
    </div>
    <button className="md:hidden">
      <img className="w-7" src="/bar.svg" alt="" />
    </button>
    <Link to="/">
    <img src="/header-logo.svg" alt="" />
    </Link>
    <div className="flex items-center gap-[9px] md:gap-[40px]">
      <button className="max-md:hidden">
        <img src="/Search.svg" alt="" />
      </button>
      <button>
        <img src="/User.svg" alt="" />
      </button>
      <button className="grid place-items-center w-[25px] h-[25px] font-semibold bg-yellow rounded-full">0</button>
    </div>
  </header>;
};

export default Header;
