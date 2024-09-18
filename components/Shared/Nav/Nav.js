import React from "react";
import logo from "@/public/assets/logo/livingLogo.gif";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import Button from "../../Custom/Button";
import { GoChevronDown } from "react-icons/go";






const Nav = () => {

  const navItems = (
    <>

      <li className="border-b border-teal-700 lg:border-0">
        <Link href={"/work"}>Work</Link>
      </li>
      {/* Solution */}
      <li className="relative group hidden lg:block ">
        <span className="cursor-pointer flex items-center">
          Solutions <GoChevronDown className="ml-1 font-bold " />
        </span>
        <ul className="absolute lg:left-[-870px] lg:w-[1530px]  hidden bg-white text-black shadow-md rounded-md opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-300 ease-in-out p-2">
          <div className="flex justify-center items-center gap-6 py-10">
            <Link href="/sub-company">
              <div className="card bg-base-100 w-96 shadow-xl overflow-hidden">
                <figure>
                  <img
                    className="w-52 h-52"
                    src="https://i.postimg.cc/LsR1YHLM/fcl-02.png"
                    alt="M/S MAN ENTERPRISE"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="text-sm text-center">Brand Solutions</h2>
                </div>
              </div>
            </Link>

            <Link href={"media-solutions"}>
              <div className="card bg-base-100 w-96 shadow-xl overflow-hidden">
                <figure>
                  <img
                    className="w-52 h-52"
                    src="https://i.postimg.cc/LsR1YHLM/fcl-02.png"
                    alt="M/S MAN ENTERPRISE"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="text-sm text-center">Brand Solutions</h2>
                </div>
              </div>
            </Link>
            <Link href={"tech-solutions"}>
              <div className="card bg-base-100 w-96 shadow-xl overflow-hidden">
                <figure>
                  <img
                    className="w-52 h-52"
                    src="https://i.postimg.cc/LsR1YHLM/fcl-02.png"
                    alt="M/S MAN ENTERPRISE"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="text-sm text-center">Tech Solutions</h2>
                </div>
              </div>
            </Link>
          </div>
        </ul>
      </li>

      {/* solution small device */}
      <li className="lg:hidden border-b border-teal-700">
        <details className="relative dropdown">
          <summary className="cursor-pointer list-none">Solutions</summary>
          <ul className="menu absolute left-0 w-full bg-neutral-100 space-y-4 mt-2 shadow-lg z-[1]">
            <li className="border-b border-orange-500">
              <Link href={"/brand-solutions"}>Brand Solutions</Link>
            </li>
            <li className="border-b border-orange-500">
              <Link href={"/media-solutions"}>Media Solutions</Link>
            </li>
            <li className="border-b border-orange-500">
              <Link href={"/tech-solutions"}>Tech Solutions</Link>
            </li>
          </ul>
        </details>
      </li>



      {/* About Small device */}
      <li className="lg:hidden border-b border-teal-700">
        <details className="dropdown border-none">
          <summary className="cursor-pointer list-none">About</summary>
          <ul className="menu absolute left-0 w-full bg-neutral-100 space-y-4 mt-2 shadow-lg z-[1]">
            <li className="border-b border-orange-500">
              <Link href={"how-we-work"}>How We Work</Link>
            </li>
            <li className="border-b border-orange-500">
              <Link href={"/news-center"}>News Center</Link>
            </li>
            <li className="border-b border-orange-500">
              <Link href={"/our-partner"}>Our Partnership</Link>
            </li>
            <li className="border-b border-orange-500">
              <Link href={"/csr"}>CSR</Link>
            </li>
          </ul>
        </details>
      </li>

      {/* About */}
      <li className="relative group hidden lg:block">
        <span className="cursor-pointer flex items-center">
          About <GoChevronDown className="ml-1 font-bold " />
        </span>

        <ul className="  py-10 px-10 absolute lg:left-[-1100px] lg:w-[1530px] overflow-hidden  hidden bg-white text-black shadow-md rounded-md opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-300 ease-in-out p-2">
          <div className="flex justify-center gap-72 py-10">
          <div className="grid grid-col-1 gap-5">
            <li className="font-bold text-xl">
            Flame Awards 2024 - LB and Habson Static
            </li>

            <li className="font-bold text-xl">
            A Magnificent Masterstroke!(LB & Habson Logo)
            </li>

            <li className="font-bold text-xl">
            Ten Awards
Five golds, Three silvers, Two bronzes
            </li>

            <li className="font-bold text-xl">
            Flame Awards Asia 2024
            </li>

            <li className="font-bold text-xl">
            Digital Marketing Awards 2022 - Living Brands
            </li>

            <li className="font-bold text-xl">
            Pusti Home Chef 
Best Digital Campaign by New Agency (Silver) 

            </li>

            <li className="font-bold text-xl">
            Commward 2022 - Habson Communication
            </li>

            <li className="font-bold text-xl">
            PUMA Flagship Store Launch
Best Outdoor Campaign (Bronze)
            </li>
            
          </div>
          <div className="w-[100%]">
              <Link href={"/about-details"} className="">
                
                  <img
                    className="w-full h-[40vh] rounded-sm"
                    src="https://i.postimg.cc/brZ136ZB/Whats-App-Image-2024-09-17-at-12-59-57.jpg"
                    alt="Shoes"
                  />
               
              </Link>
            </div>
            </div>
        </ul>
      </li>


      {/* Blog small device */}
      <li className="lg:hidden border-b border-teal-700">
        <details className="dropdown border-none">
          <summary className="cursor-pointer list-none">Blogs</summary>
          <ul className="menu absolute left-0 w-full bg-neutral-100 space-y-4 mt-2 shadow-lg z-[1]">
            <li className="border-b border-orange-500">
              <Link href={"/blogs"}>Blogs</Link>
            </li>
            <li className="border-b border-orange-500">
              <Link href={"/the-edge"}>The Edge</Link>
            </li>
          </ul>
        </details>
      </li>

      {/* Blogs */}
      <li className="relative group hidden lg:block">
        <span className="cursor-pointer flex items-center">
          Blog <GoChevronDown className="ml-1 font-bold " />
        </span>

        <ul className="absolute ease-in duration-300 lg:left-[-1200px] lg:w-[1530px]  hidden bg-white text-black shadow-md rounded-md opacity- group-hover:opacity-100 group-hover:block transition-opacity  p-2">
          <div className="flex justify-center items-center gap-6 py-10">
            <div className="card bg-base-100 w-96 shadow-xl">
              <Link href={"/blogs"}>
                <figure>
                  <img
                    className="w-full h-52 rounded-xl"
                    src="https://t4.ftcdn.net/jpg/02/49/04/93/360_F_249049329_BpYUPt5TGST3qTTfOJVpTakAdCLFzcg1.jpg"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">How We Work</h2>
                </div>
              </Link>
            </div>
            <div className="card bg-base-100 w-96 shadow-xl">
              <Link href={"/the-edge"}>
                <figure>
                  <img
                    className="w-full h-52 rounded-xl"
                    src="https://nmccat.com/wp-content/uploads/2020/09/Cat-Backhoe-1.jpg"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">The Edge</h2>
                </div>
              </Link>
            </div>
          </div>
        </ul>
      </li>

      <li className="border-b border-teal-700 lg:border-0">
        <Link href={"/career"}>Careers</Link>
      </li>
    </>
  );


  return (
    <div className="bg-base-100 z-50">
      <div className="navbar container mx-auto">
        <div className="w-48 md:w-56 navbar-start ml-5 lg:ml-0">
          <Link href="/">
            <Image src={logo} className="w-32" alt="Habson logo"></Image>
          </Link>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-left ">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:text-teal-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 space-y-5  rounded z-[1] mt-16 w-72 h-64 px-2 shadow"
            >
              {
                navItems
              }
            </ul>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 z-50">
            {
              navItems
            }
          </ul>
          <Link href={"/contact"}>
            <Button>
              Contact Us <FaArrowRightLong />
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Nav;
