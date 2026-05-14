import Header from "../../componentes/Header";
import Footer from "../../componentes/Footer";
import PlantCard from "../../componentes/PlantCard";

export default function NossasPlantas() {

  const plantas = [
    {
      id: 1,
      nome: "Suculentas",
      descricao: "Perfeitas para iniciantes, amam sol e pouca água.",
      imagem: "/assets/suculentas.webp"
    },
    {
      id: 2,
      nome: "Cactos Mini",
      descricao: "Resistentes e cheios de personalidade. Baixa manutenção.",
      imagem: "/assets/minicactus.webp"
    },
    {
      id: 3,
      nome: "Mini Samambaias",
      descricao: "Folhagem exuberante que adora umidade e luz indireta.",
      imagem: "/assets/minisamambaia.jpg"
    },
    {
      id: 4,
      nome: "Jiboia",
      descricao: "Planta super adaptável, ótima para ambientes internos e purifica o ar.",
      imagem: "/assets/jiboia.webp"
    },
    {
      id: 5,
      nome: "Fitônia",
      descricao: "Pequena e com folhas desenhadas, adora sombra e umidade.",
      imagem: "/assets/fitonia.jpg"
    },
    {
      id: 6,
      nome: "Peperômia",
      descricao: "Folhas carnudas e fáceis de cuidar. Vai muito bem em luz indireta.",
      imagem: "/assets/peperomia.webp"
    },
    {
      id: 7,
      nome: "Clorofito",
      descricao: "A famosa 'planta-aranha', excelente para purificar o ar e pet-friendly.",
      imagem: "/assets/clorofito.webp"
    },
    {
      id: 8,
      nome: "Maranta",
      descricao: "Folhas vibrantes que se movem de acordo com a luz, a famosa 'planta rezadeira'.",
      imagem: "/assets/maranta.webp"
    },
    {
      id: 9,
      nome: "Lírio da Paz",
      descricao: "Elegante, fácil de cuidar e ainda ajuda a purificar o ar. Precisa de pouca luz.",
      imagem: "/assets/liriodapaz.webp"
    }
  ];

  return (
    <>
      <Header />

      <main>
        <h1 style={{ textAlign: 'center', paddingTop: '4rem', color: 'var(--verde-escuro)' }}>Conheça todas as nossas plantas!</h1>

        <section 
          className="grid-plantas" 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: '2.5rem', 
            maxWidth: '1000px', 
            margin: '0 auto', 
            padding: '2rem 5% 5rem' 
          }}
        >

          {plantas.map((planta) => (
            <PlantCard
              key={planta.id}
              nome={planta.nome}
              descricao={planta.descricao}
              imagem={planta.imagem}
            />
          ))}

        </section>
      </main>

      <Footer />
    </>
  );
};
