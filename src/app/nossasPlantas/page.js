import Header from "../../componentes/Header";
import Footer from "../../componentes/Footer";
import PlantCard from "../../componentes/PlantCard";

export default function NossasPlantas() {

  const plantas = [
    {
      id: 1,
      nome: "Monstera",
      descricao: "Planta tropical de sombra.",
      imagem: "/plantas/monstera.png"
    },

    {
      id: 2,
      nome: "Jiboia",
      descricao: "Fácil de cuidar.",
      imagem: "/plantas/jiboia.png"
    },

    {
      id: 3,
      nome: "Cacto",
      descricao: "Precisa de pouca água.",
      imagem: "/plantas/cacto.png"
    },

    {
      id: 4,
      nome: "Zamioculca",
      descricao: "Vive bem com pouca luz, cresce deavagar e não ocupa espaço.",
      imagem: "/plantas/zamioculca.png"
    },

    {
      id: 5,
      nome: "Peperômia",
      descricao: "Precisa de pouca manutenção, gosta de luz indireta.",
      imagem: "/plantas/peperomia.png"
    },

    {
      id: 6,
      nome: "Fitônia",
      descricao: "Pequena e delicada, gosta de luz indireta.",
      imagem: "/plantas/fitonia.png"
    }
  ];

  return (
    <>
      <Header />

      <main>
        <h1>Conheça todas as nossas plantas!</h1>

        <section className="grid-plantas">

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
