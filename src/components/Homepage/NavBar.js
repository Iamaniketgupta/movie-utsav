"use client";
import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { GoBell } from "react-icons/go";
import logo from "../../assets/logo.png";
import Image from "next/image";
import { HiBars3BottomRight } from "react-icons/hi2";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import SearchModal from "./SearchModal";

export default function NavBar() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [modalOpen, setModalOpen] = useState(false);

    const hidenavItems = pathname.startsWith("/show/");

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <header className="flex fixed bg-gradient-to-b from-black top-0   w-full h-24 z-50
     items-center justify-between gap-4 lg:px-40 md:px-10 px-4 py-4">

            {modalOpen && <SearchModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />}


            {/* Logo */}
            <Link href={"/"} className="">
                <Image src={logo} width={150} height={55} alt="logo " />
            </Link>

            {/* Menu */}
            {!hidenavItems && (
                <nav className="bg-black06 text-gray75 font-[400] md:text-sm h-18 border-4 py-2 px-8 flex items-center gap-4 border-black12 rounded-xl hidden lg:flex">
                    <a
                        href="#"
                        className={`cursor-pointer hover:bg-black10 py-2 px-4 rounded-lg   ${activeSection === "#" ? "text-white bg-black12" : ""}`}
                    >
                        Home
                    </a>
                    <a
                        href="#upcoming"
                        className={`hover:bg-black10 py-2 px-4 rounded-lg  cursor-pointer  ${activeSection === "upcoming" ? "bg-black12 text-white" : "text-gra75"}`}
                    >
                        Upcoming
                    </a>
                    <a
                        href="#latest"
                        className={`hover:bg-black10 py-2 px-4 rounded-lg cursor-pointer ${activeSection === "latest" ? "bg-black12 text-white" : "text-gra75"}`}
                    >
                        Latest
                    </a>
                    <a
                        href="#popular"
                        className={`hover:bg-black10 py-2 px-4 rounded-lg cursor-pointer ${activeSection === "popular" ? "bg-black12 text-white" : "text-gra75"}`}
                    >
                        Popular
                    </a>
                    <a
                        href="#toprated"
                        className={`hover:bg-black10 py-2 px-4 rounded-lg cursor-pointer ${activeSection === "toprated" ? "bg-black12 text-white" : "text-gra75"}`}
                    >
                        TopRated
                    </a>
                </nav>
            )}

            {/* Search and Notification */}
            <div className="hidden lg:flex items-center text-xl justify-between text-white gap-4">
                <div className="cursor-pointer hover:text-gray75">
                    <CiSearch  onClick={() => setModalOpen(true)} />
                </div>
                <div className="cursor-pointer hover:text-gray75">
                    <GoBell />
                </div>
            </div>

            {/* Mobile Menu Icon - Visible only on mobile */}
            <div className="bg-black06 border-4 lg:hidden w-12 h-12 text-white flex items-center justify-center gap-4 border-black12 rounded-lg">
                <HiBars3BottomRight
                    className="text-2xl cursor-pointer hover:text-gray75"
                    onClick={() => setIsMobileMenuOpen(true)}
                />
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, x: "100%" }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: "100%" }}
                    transition={{ duration: 0.3 }}
                    className="fixed top-0 right-0 w-full h-full bg-black bg-opacity-90 p-6 z-60"
                >
                    <div className="flex justify-between items-center text-white">
                        <Image src={logo} width={150} height={55} alt="logo" />
                        <div
                            className="cursor-pointer w-12 h-12 text-white flex items-center justify-center gap-4 bg-black03 border-2 border-black12 rounded-lg"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <IoMdClose
                                className="text-2xl cursor-pointer hover:text-gray75"
                            />
                        </div>
                    </div>

                    <div className="my-5  flex items-center justify-end text-xl  text-white gap-4">
                        <div className="cursor-pointer hover:text-gray75">
                            <CiSearch />
                        </div>
                        <div className="cursor-pointer hover:text-gray75">
                            <GoBell />
                        </div>
                    </div>
                    <nav className="flex flex-col gap-6 mt-6">
                        <a
                            href="#home"
                            className={`text-white ${activeSection === "home" ? "font-bold" : ""}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Home
                        </a>
                        <a
                            href="#upcoming"
                            className={`text-white ${activeSection === "upcoming" ? "font-bold" : ""}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Upcoming
                        </a>
                        <a
                            href="#latest"
                            className={`text-white ${activeSection === "latest" ? "font-bold" : ""}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Latest
                        </a>
                        <a
                            href="#popular"
                            className={`text-white ${activeSection === "popular" ? "font-bold" : ""}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Popular
                        </a>
                        <a
                            href="#toprated"
                            className={`text-white ${activeSection === "toprated" ? "font-bold" : ""}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            TopRated
                        </a>
                        {/* Mobile Icons (Search & Notifications) */}
                        <div className="flex items-center gap-4 mt-6">
                            <div className="cursor-pointer hover:text-gray75">
                                <CiSearch 
                                 onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setModalOpen(true)}}/>
                            </div>
                            <div className="cursor-pointer hover:text-gray75">
                                <GoBell />
                            </div>
                        </div>
                    </nav>
                </motion.div>
            )}

        </header>
    );
}
