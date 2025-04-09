import Pessoas from "./Pessoas";

function Componentes() {
  const pessoas = [
    {
      id: 1,
      nome: "TH",
      idade: 24,
    },
    {
      id: 2,
      nome: "Gaybriel",
      idade: 20,
    },
    {
      id: 3,
      nome: "Marcus",
      idade: 21,
    },
    {
      id: 4,
      nome: "João",
      idade: 23,
    },
  ];

  return (
    <>
      <div className="w-full h-full flex flex-col items-center justify-center p-8">
        <p className="text-2xl text-[#505050] font-bold mb-7">Pessoas</p>
        <Pessoas pessoas={pessoas} />
      </div>
    </>
  );
}

export default Componentes;
