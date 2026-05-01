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
