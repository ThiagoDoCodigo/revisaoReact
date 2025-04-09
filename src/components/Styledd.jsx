import Styled from "styled-components";

const Texto = Styled.p`
  color: red;
  font-size: 20px;
  font-weight: bold;
`;

function Styledd() {
  const list = [
    {
      id: 1,
      nome: "Narcos",
    },
    {
      id: 2,
      nome: "Breaking bad",
    },
    {
      id: 3,
      nome: "Naruto",
    },
  ];

  return (
    <>
      <div className="w-full h-full flex items-center justify-center flex-col">
        {list.map((item) => (
          <Texto>{item.nome}</Texto>
        ))}
      </div>
    </>
  );
}

export default Styledd;
