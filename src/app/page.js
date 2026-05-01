"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect } from "react";
import { useState } from "react";

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

  return (
    <>
      <header>
        <a href="#" className="logo">
            <img src="/assets/logoplanticaixa.jpeg" alt="Logo Ícone"/> 
            <img src="/assets/logoplantiescrito.jpeg" alt="Logo PlantiBox"/>
        </a>

        <button 
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
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

      <main>
          <section>
              <h1>Reconecte-se com a natureza, uma planta por vez.</h1>
              <p>Receba mini-plantas em casa todo mês e transforme seu espaço em um refúgio verde. Cuidar de plantas nunca foi tão fácil e prazeroso.</p>
              <a href="#planos">Quero minhas plantas!</a>
          </section>

          <section id="como-funciona">
              <h2>Como funciona?</h2>
              <div>
                  <h3>1. Escolha seu plano</h3>
                  <p>Selecione o plano de assinatura que mais combina com seu espaço e sua rotina.</p>
              </div>
              <div>
                  <h3>2. Receba sua caixa</h3>
                  <p>Enviamos mensalmente uma caixa surpresa com mini-plantas saudáveis e cheias de vida.</p>
              </div>
              <div>
                  <h3>3. Cuide com nosso app</h3>
                  <p>Use nosso guia digital para aprender a cuidar, receber lembretes de rega e se conectar.</p>
              </div>
          </section>

          <section id="planos">
              <h2>Encontre o plano perfeito para você</h2>
              
              <article>
                  <h3>Starter</h3>
                  <p>R$ 19,90/mês</p>
                  <ul>
                      <li>1 mini-planta por mês</li>
                      <li>Vaso decorativo simples</li>
                      <li>Acesso ao App Guia</li>
                  </ul>
                  <a href="#">Assinar Starter</a>
              </article>

              <article>
                  <h3>Nature Lover (Mais Popular)</h3>
                  <p>R$ 29,90/mês</p>
                  <ul>
                      <li>2 mini-plantas por mês</li>
                      <li>Vasos decorativos premium</li>
                      <li>Acesso total ao App Guia</li>
                      <li>Brinde surpresa</li>
                  </ul>
                  <a href="#">Assinar Nature Lover</a>
              </article>

              <article>
                  <h3>Jungle Master</h3>
                  <p>R$ 59,90/mês</p>
                  <ul>
                      <li>3 mini-plantas por mês</li>
                      <li>Vasos premium + suporte</li>
                      <li>Acesso total ao App Guia</li>
                      <li>2 brindes surpresa</li>
                  </ul>
                  <a href="#">Assinar Jungle Master</a>
              </article>
          </section>

          <section id="plantas">
              <h2>Algumas das nossas mini-plantas</h2>
              <figure>
                  <img src="/assets/suculentas.webp" alt="Suculentas"/>
                  <figcaption>
                      <h4>Suculentas</h4>
                      <p>Perfeitas para iniciantes, amam sol e pouca água.</p>
                  </figcaption>
              </figure>
          </section>

          <section id="app">
              <h2>Mais que plantas, um guia na sua mão</h2>
              <img src="/assets/plantiapp.png" alt="Mockup do App"/>
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
