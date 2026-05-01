# PARTE 1

Página Inicial:
<img width="1366" height="4050" alt="Página Inicial" src="https://github.com/user-attachments/assets/4ed76a67-82fd-41cf-86e9-f4a687cf4d84" />

Landing page principal com apresentação do serviço.

Estrutura:

🔝 Header

* Logotipo + nome
* Menu de navegação:
    * Nossas plantas
    * Nossos planos
    * Nosso app
    * Login

⸻

🖼️ Hero Section

* Banner com imagem de fundo
* Texto descritivo central:
    * Explicação breve do serviço

⸻

⚙️ Seção “Como funciona?”

* 3 etapas ilustradas:
    1. Escolha do plano
    2. Recebimento da caixa
    3. Cuidados via app
* Cards com título + descrição

⸻

💰 Seção de Planos

* Destaque para três planos:
    * Starter
    * Nature Lover (marcado como mais popular)
    * Jungle Master
* Exibição de preço e benefícios
* Botão CTA: “Assine já”

⸻

🌱 Seção de Produtos (Mini-plantas)

* Grid com cards de plantas:
    * Imagem
    * Nome (Planta 1, 2, 3…)
    * Descrição breve

⸻

📱 Seção do Aplicativo

* Layout em duas colunas:
    * Imagem do app
    * Descrição funcional
* Destaques:
    * Guias de cuidado
    * Lembretes de rega

⸻

❓ FAQ (Dúvidas frequentes)

* Lista de perguntas expansíveis (accordion)

⸻

🔚 Footer

* Texto institucional
* Ícones sociais (Instagram, TikTok)

⸻

Características técnicas:

* Estrutura baseada em seções modulares
* Uso de cards reutilizáveis
* Layout com grid e flexbox
* Elementos de destaque (CTA, plano popular)
* Componentes interativos:
    * Accordion (FAQ)
* Design responsivo e escalável

  


Página de Login:
<img width="1366" height="768" alt="Página de Login" src="https://github.com/user-attachments/assets/c4c4841e-4688-42d6-96e1-23ed9b37e7ac" />

A tela de login apresenta uma interface minimalista e centralizada, com foco na autenticação do usuário.

Estrutura:

* Header fixo no topo contendo:
    * Logotipo (ícone + nome “PLANTIBOX”)
* Área principal centralizada verticalmente, composta por:
    * Título: “Acesse com seu login ou cadastre-se!”
    * Campo de entrada para e-mail
    * Campo de entrada para senha
* Ações disponíveis:
    * Botão primário: “Entrar”
    * Botão secundário: “Quero criar a minha conta”

Características técnicas:

* Layout com alinhamento central (provavelmente flexbox ou grid)
* Inputs com estilo “underline” (linha inferior)
* Botão primário com destaque em cor verde (ação principal)
* Separação clara entre autenticação e cadastro
* Design responsivo com foco em mobile-first

⸻



Página de Seleção de Planos:
<img width="1366" height="1901" alt="Página com formulário para escolher o plano" src="https://github.com/user-attachments/assets/0cf1777b-79cf-4bc9-b32c-d3503e4b3a1d" />
Tela destinada à escolha de plano e inserção de dados para assinatura.

Estrutura:

* Header padrão com navegação:
    * “Nossas plantas”, “Nossos planos”, “Nosso app”, “Login”
* Seção: Escolha do plano
    * Opções com seleção única (radio buttons):
        * Starter — R$ 19,90/mês
        * Nature Lover — R$ 29,90/mês
        * Jungle Master — R$ 59,90/mês
    * Cada plano contém descrição resumida
* Seção: Dados Pessoais
    * Campos:
        * Nome completo
        * Email
        * CPF
        * CEP + Logradouro
        * Bairro, Cidade, Estado
    * Layout em múltiplas colunas (grid)
* Seção: Pagamento
    * Campo para seleção de forma de pagamento (dropdown ou expansível)
* Ação final:
    * Botão de confirmação: “Confirmar Plano”
* Footer:
    * Texto institucional
    * Ícones de redes sociais (Instagram e TikTok)

Características técnicas:

* Uso de formulário estruturado com validação de dados
* Inputs organizados em grid responsivo
* Uso de radio buttons para seleção exclusiva
* Separação por seções bem definidas (UX clara)
* Botão CTA com destaque visual

Página com plantas que são oferecidas
![WIREFRAME MOBILE](plantas_oferecidas.jpg)
Tela destinada à mostrar quais plantas são oferecidas com apenas algumas informações básicas.

Estrutura:

* Header padrão com navegação:
    * “Nossas plantas”, “Nossos planos”, “Nosso app”, “Login”
* Seção: Conheça todas as nossas plantas
    * Cards com imagens das plantas e informações simples sobre cada uma delas.
* Footer:
    * Texto institucional
    * Ícones de redes sociais (Instagram e TikTok)

Características técnicas:

* Utilização de cards para exibir cada planta
* Uso de rotas dinâmicas que será mostrado no wireframe a seguir

Página com informações de uma única planta
![WIREFRAME MOBILE](planta_individual.jpg)
Tela destinada à mostrar informações sobre a planta que foi selecionada.

Estrutura:

* Header padrão com navegação:
    * “Nossas plantas”, “Nossos planos”, “Nosso app”, “Login”
* Seção: Informações sobre a planta
    * Imagem da planta selecionada com todas as informações necessárias sobre ela, incluindo seu nome.
* Footer:
    * Texto institucional
    * Ícones de redes sociais (Instagram e TikTok)
 


 
Características técnicas:

* Utilização de rota dinâmica para mostrar informações sobre as plantas que foram selecionadas em cada card.

# PARTE 2

Nesta aula, realizamos a integração das diretrizes visuais do projeto através da implementação direta do arquivo global.css

~~~~~~~~~~~~~~
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
  }, [ ]);

  const [menuOpen, setMenuOpen] = useState(false);
~~~~~~~~~~~~~~

Esse código usa useEffect para criar um efeito de animação ao rolar a página, executando apenas uma vez quando o site carrega, e começa selecionando vários elementos importantes do HTML como section, article, figure, itens de lista dentro de #app e elementos details, ou seja, praticamente todo o conteúdo visível da página; em seguida, ele adiciona a classe "fade-in" em todos esses elementos para deixá-los inicialmente invisíveis e levemente deslocados (geralmente com opacity: 0 e um pequeno translateY no CSS), depois cria um IntersectionObserver, que é uma API do navegador responsável por detectar quando um elemento entra na área visível da tela do usuário durante o scroll, e para cada elemento observado ele verifica se está visível usando entry.isIntersecting, e quando isso acontece adiciona a classe "visible" ao elemento, o que ativa a animação no CSS (normalmente mudando para opacity: 1, posição normal e aplicando uma transição suave), fazendo com que o elemento apareça de forma gradual e elegante; após isso, o código usa observer.unobserve para parar de observar aquele elemento específico, evitando processamento desnecessário e melhorando a performance, define também a opção { threshold: 0.1 }, que significa que a animação será ativada quando pelo menos 10% do elemento estiver visível na tela, e por fim inicia a observação em todos os elementos selecionados com observer.observe, resultando em um comportamento onde todo o conteúdo da página (como seções, cards de planos, imagens e FAQ) começa invisível e vai aparecendo suavemente conforme o usuário rola a página, criando uma experiência mais moderna, fluida e profissional.

~~~~~~~~~~~~~~~
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
~~~~~~~~~~~~~~~~~~

O HTML presente nesse código funciona como o esqueleto e a estrutura semântica da sua página PlantiBox, definindo o significado e a hierarquia de cada conteúdo para que o navegador e os motores de busca entendam o que é cada parte. Através de tags como header, main e footer, ele organiza o layout em blocos lógicos, enquanto elementos de seção como section e article agrupam as informações de planos e serviços, e tags de conteúdo como h1, p, img e a dão propósito aos textos, imagens e links, garantindo que a interface tenha uma base sólida, acessível e organizada antes mesmo de receber qualquer estilo visual ou comportamento interativo.

