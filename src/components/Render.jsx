import { ThumbsDown, ThumbsUp } from "lucide-react";
import { useState } from "react";

function Render() {
  const [visivel, setVisivel] = useState(true);

  return (
    <>
      <div className="w-full h-full flex items-center justify-center flex-col">
        <p className="cursor-pointer" onClick={() => setVisivel(!visivel)}>
          Bora estudar? (clique aqui)
        </p>
        {visivel === false ? (
          <>
            <ThumbsDown /> <p>Vai ficar pra trás</p>
          </>
        ) : (
          <>
            <ThumbsUp /> <p>Vai ganhar muita grana</p>
          </>
        )}
      </div>
    </>
  );
}

export default Render;
