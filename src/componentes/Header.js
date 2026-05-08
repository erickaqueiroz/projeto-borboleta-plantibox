"use client";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
    const[menuOpen, setMenuOpen] = useState(false);

    return (
        <header>
            <a href="#" className="logo">
                <Image src="/assets/logoplanticaixa.jpeg" alt="Logo ícone" width={50} height={50}/>
                <Image src="/assets/logoplantiescrito.jpeg" alt="Logo Plantibox" width={120} height={40}/>
            </a>

            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? "✖" : "☰"}
            </button>

            <nav className={menuOpen ? "active" : ""}>
                <ul>
                    <li><a href="#como-funciona">Como Funciona</a></li>
                    <li><a href="#planos">Planos</a></li>
                    <li><a href="#plantas">Nossas Plantas</a></li>
                    <li><a href="#app">Nosso App</a></li>
                    <li><a href="#planos">Assine Já</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
