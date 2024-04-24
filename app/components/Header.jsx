import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="flex justify-between items-center py-2 md:py-5 px-8 md:px-14 lg:px-20 font-medium border-b-2 border-[#EBEBEB]">
        <div className="flex items-center gap-8 lg:gap-14">
          <Image src="/logo.png" width={95} height={95} alt="Logo" className="hidden md:block" />
          <Image src="/logo.png" width={65} height={65} alt="Logo" className="block md:hidden" />
          <nav className="hidden md:block">
            <ul className="flex gap-6 lg:gap-10 text-base lg:text-lg text-[#677510]">
              <li>
                <Link href="/description">使用說明</Link>
              </li>
              <li>
                <Link href="/charge">收費方式</Link>
              </li>
              <li className="text-[#B5CC22]">
                <Link href="/station">站點資訊</Link>
              </li>
              <li>
                <Link href="/news">最新消息</Link>
              </li>
              <li>
                <Link href="/activity">活動專區</Link>
              </li>
            </ul>
          </nav>
        </div>
        <button className="hidden md:block py-2 px-5 lg:px-7 text-base lg:text-lg text-white bg-[#B5CC22] rounded-[100px]">登入</button>
        <button className="block md:hidden" onClick={handleMenu}>
          <Image src={isMenuOpen ? "/close.svg" : "/menu.svg"} width={24} height={24} alt="Menu" />
        </button>
      </header>
      {isMenuOpen && (
        <div className="absolute z-10 h-[90%] w-full py-10 px-8 flex flex-col justify-between bg-[#B5CC22]">
          <nav>
            <ul className="flex flex-col gap-8 text-lg text-white">
              <li>
                <Link href="/">使用說明</Link>
              </li>
              <li>
                <Link href="/">收費方式</Link>
              </li>
              <li className="text-[#677510]">
                <Link href="/">站點資訊</Link>
              </li>
              <li>
                <Link href="/">最新消息</Link>
              </li>
              <li>
                <Link href="/">活動專區</Link>
              </li>
            </ul>
          </nav>
          <button className="py-2 px-7 w-fit text-lg text-[#B5CC22] bg-white rounded-[100px]">登入</button>
        </div>
      )}
    </>
  );
};