import HeaderDecryptText from "../ui/HeaderDecryptText";

function Header() {
  return (
    <div className="w-full h-auto flex justify-around py-4  items-center">
      <div className="flex text-xl gap-12 justify-between items-center">
        <HeaderDecryptText />
      </div>
      <div className="relative group">
        <button className="text-3xl border-[1px] border-stone-300 rounded-sm z-2 py-1 px-2">
          Hire me
        </button>
        <div className="absolute top-0 left-0 w-full h-full scale-1 bg-stone-300 mix-blend-difference transition-all duration-200  z-1 group-hover:scale-99"></div>
      </div>
    </div>
  );
}

export default Header;
