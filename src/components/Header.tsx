const Header = () => {
  return (
    <div className="relative mx-auto my-4 flex max-w-[1440px] justify-center p-4">
      <div className="absolute left-0 top-1/2 -translate-y-1/2">
        <p>LOGO</p>
      </div>
      <div className="flex w-fit rounded-2xl bg-light-yellow px-10 py-2">
        <ul className="flex gap-10">
          <li className="cursor-pointer rounded-xl p-2 transition-all duration-200 hover:-translate-y-0.5 hover:font-semibold">
            Home
          </li>
          <li>About</li>
          <li>Contact</li>
          <li>Contact</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
