import PropTypes from "prop-types";

function Pessoas({ pessoas }) {
  return (
    <>
      <div className="flex flex-col gap-3">
        {pessoas.map((pessoa) => (
          <div
            className="p-4 bg-[#ffffff] shadow-md flex gap-2 rounded-md"
            key={pessoa.id}
          >
            <p>Nome: </p>
            <p>{pessoa.nome}</p>
            <p>{pessoa.idade} anos</p>
          </div>
        ))}
      </div>
    </>
  );
}

Pessoas.PropTypes = {
  pessoas: PropTypes.array.isRequired,
};

export default Pessoas;
