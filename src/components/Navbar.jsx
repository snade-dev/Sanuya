import burger from "../assets/hamburger.svg"
import close from "../assets/close.svg"
import logo from "../assets/logo.png"
import { useState } from "react"

export default function Navbar() {

    const [showMenu, setShowMenu] = useState(false);
  return (
    <header className=" bg-slate-700">
  <div
    className="mx-auto flex h-16 max-w-screen-xl justify-between items-center gap-8 px-4 sm:px-6 lg:px-8 relative"
  >
    <a className="block text-teal-600" href="/">
      <span className="sr-only">Home</span>
      <img src={logo} className="h-9" alt="" />
    </a>
      <nav aria-label="Global" className={`${showMenu ? "flex" : "hidden"} lg:flex bg-none`}>
        <ul className="flex flex-col lg:flex-row items-center gap-9 text-sm absolute top-full left-0 lg:relative z-10 w-full border-t-2 border-gray-300 py-2 md:py-0 md:border-0 bg-none">
          <li>
            <a className="text-slate-100 text-lg transition hover:text-slate-100/75" href="#propos">
              A propos
            </a>
          </li>


          <li>
            <a className="text-slate-100 text-lg transition hover:text-slate-100/75" href="#histoire">
              Histoire
            </a>
          </li>

          <li>
            <a className="text-slate-100 text-lg transition hover:text-slate-100/75" href="#service">
              Services
            </a>
          </li>

          <li>
            <a className="text-slate-100 text-lg transition hover:text-slate-100/75" href="#projet">
              Projets
            </a>
          </li>


        </ul>
      </nav>

        <button
          onClick={() => setShowMenu(!showMenu)}
          className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg> */}
          <img 
          className=" w-5 h-5"
          src={showMenu ? close : burger} alt="" />
        </button>
      </div>


</header>
  )
}