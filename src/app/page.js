"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect } from "react";
import { useState } from "react";
import Link from "next/link";

export default function Home() {

  useEffect(() => {
    const elements = document.querySelectorAll(
      "section, article, figure, #app ul li, details"
    );

    elements.forEach(el => {
      el.classList.add("fade-in");
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);

  return (
    <>
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
                    <li><a href="/login">Login</a></li>
                </ul>
            </nav>
        </header>

        <main>
          <section>
              <h1>Reconecte-se com a natureza, uma planta por vez.</h1>
              <p>Receba mini-plantas em casa todo mês e transforme seu espaço em um refúgio verde. Cuidar de plantas nunca foi tão fácil e prazeroso.</p>
              <Link href="#planos">Quero minhas plantas!</Link>
          </section>

          <section id="como-funciona">
              <h2>Como funciona?</h2>
              <div>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="var(--verde-escuro)" style={{marginBottom: '1rem'}}>
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                  </div>
                  <h3>1. Escolha seu plano</h3>
                  <p>Selecione o plano de assinatura que mais combina com seu espaço e sua rotina.</p>
              </div>
              <div>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="var(--verde-escuro)" style={{marginBottom: '1rem'}}>
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 9v10l10 5V14L2 9zm20 0l-10 5v10l10-5V9z" />
                      </svg>
                  </div>
                  <h3>2. Receba sua caixa</h3>
                  <p>Enviamos mensalmente uma caixa surpresa com mini-plantas saudáveis e cheias de vida.</p>
              </div>
              <div>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="var(--verde-escuro)" style={{marginBottom: '1rem'}}>
                        <path d="M17,1H7C5.89,1 5,1.89 5,3V21C5,22.1 5.89,23 7,23H17C18.1,23 19,22.1 19,21V3C19,1.89 18.1,1 17,1ZM12,21C11.45,21 11,20.55 11,20C11,19.45 11.45,19 12,19C12.55,19 13,19.45 13,20C13,20.55 12.55,21 12,21ZM17,18H7V4H17V18Z" />
                      </svg>
                  </div>
                  <h3>3. Cuide com nosso app</h3>
                  <p>Use nosso guia digital para aprender a cuidar, receber lembretes de rega e se conectar.</p>
              </div>
          </section>

          <section id="planos">
              <h2>Encontre o plano perfeito para você</h2>
              
              <article>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="var(--verde-escuro)" style={{marginBottom: '1rem'}}>
                        <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 7,11.5 7,11.5C7,11.5 14,8 17,8Z" />
                      </svg>
                  </div>
                  <h3>Starter</h3>
                  <p>R$ 19,90/mês</p>
                  <ul>
                      <li>1 mini-planta por mês</li>
                      <li>Vaso decorativo simples</li>
                      <li>Acesso ao App Guia</li>
                  </ul>
                  <Link href="/checkout">Assinar Starter</Link>
              </article>

              <article>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="var(--verde-escuro)" style={{marginBottom: '1rem'}}>
                        <path d="M12 3c0 0-4 4-4 8 0 2 1 4 2 5v5h4v-5c1-1 2-3 2-5 0-4-4-8-4-8zm-5 7c0 0-3 3-3 6 0 1 .5 2 1 3v2h2v-2c.5-1 1-2 1-3 0-3-3-6-3-6zm10 0c0 0 3 3 3 6 0 1-.5 2-1 3v2h-2v-2c-.5-1-1-2-1-3 0-3 3-6 3-6z" />
                      </svg>
                  </div>
                  <h3>Nature Lover (Mais Popular)</h3>
                  <p>R$ 29,90/mês</p>
                  <ul>
                      <li>2 mini-plantas por mês</li>
                      <li>Vasos decorativos premium</li>
                      <li>Acesso total ao App Guia</li>
                      <li>Brinde surpresa</li>
                  </ul>
                  <Link href="/checkout">Assinar Nature Lover</Link>
              </article>

              <article>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="var(--verde-escuro)" style={{marginBottom: '1rem'}}>
                        <path d="M12 2L2 16h4v6h12v-6h4L12 2z" />
                      </svg>
                  </div>
                  <h3>Jungle Master</h3>
                  <p>R$ 59,90/mês</p>
                  <ul>
                      <li>3 mini-plantas por mês</li>
                      <li>Vasos premium + suporte</li>
                      <li>Acesso total ao App Guia</li>
                      <li>2 brindes surpresa</li>
                  </ul>
                  <Link href="/checkout">Assinar Jungle Master</Link>
              </article>
          </section>

          <section id="plantas">
              <h2>Algumas das nossas mini-plantas</h2>
              
              <div className="carousel-container">
                  <button className="carousel-btn left" onClick={() => setCarouselIndex(prev => prev === 0 ? 2 : prev - 1)}>
                      &#10094;
                  </button>
                  
                  <div className="carousel-track">
                      {[
                          { name: "Suculentas", desc: "Perfeitas para iniciantes, amam sol e pouca água.", img: "/assets/suculentas.webp" },
                          { name: "Cactos Mini", desc: "Resistentes e cheios de personalidade. Baixa manutenção.", img: "/assets/minicactus.webp" },
                          { name: "Mini Samambaias", desc: "Folhagem exuberante que adora umidade e luz indireta.", img: "/assets/minisamambaia.jpg" }
                      ].map((plant, index) => {
                          let position = "next";
                          if (index === carouselIndex) position = "active";
                          else if (index === carouselIndex - 1 || (carouselIndex === 0 && index === 2)) position = "prev";

                          return (
                              <figure key={index} className={`carousel-item ${position}`}>
                                  <Image src={plant.img} alt={plant.name} width={300} height={250}/>
                                  <figcaption>
                                      <h4>{plant.name}</h4>
                                      <p>{plant.desc}</p>
                                  </figcaption>
                              </figure>
                          );
                      })}
                  </div>

                  <button className="carousel-btn right" onClick={() => setCarouselIndex(prev => (prev + 1) % 3)}>
                      &#10095;
                  </button>
              </div>

              <div style={{ marginTop: '2rem' }}>
                  <Link href="/nossasPlantas" className="btn-primary">
                      Ver todas as plantas
                  </Link>
              </div>
          </section>

          <section id="app">
              <h2>Mais que plantas, um guia na sua mão</h2>
              <Image src="/assets/plantiapp.png" alt="Mockup do App" width={200} height={500}/>
              <p>Nosso app é o companheiro perfeito para sua jornada verde.</p>
              <ul>
                  <li>
                      <h4>Guias de Cuidado</h4>
                      <p>Tudo sobre sua nova planta: luz, água e curiosidades.</p>
                  </li>
                  <li>
                      <h4>Lembretes de Rega</h4>
                      <p>Avisamos a hora certa de regar, sem adivinhação.</p>
                  </li>
              </ul>
          </section>

          <section>
              <h2>Dúvidas Frequentes (FAQ)</h2>
              <details>
                  <summary>Posso escolher as plantas que vou receber?</summary>
                  <p>A PlantiBox opera em um modelo surpresa...</p>
              </details>
              <details>
                  <summary>Como as plantas sobrevivem ao transporte?</summary>
                  <p>Usamos embalagens ecológicas e seguras...</p>
              </details>
          </section>
      </main>

    <footer>
        <p>Reconectando pessoas e natureza, uma planta por vez.</p>
        <nav>
            <a href="#">Instagram</a>
            <a href="#">TikTok</a>
        </nav>
      <p>&copy; 2026 PlantiBox. Todos os direitos reservados.</p>
    </footer>

    </>
  );
}
