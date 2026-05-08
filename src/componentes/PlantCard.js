const PlantCard = ({ imagem, nome, descricao }) => {
    return (
        <div className="card">
            <img src={imagem} alt={nome} />

            <div className="card-info">
                <h3>{nome}</h3>
                <p>{descricao}</p>
            </div>
        </div>
    );
};

export default PlantCard;
