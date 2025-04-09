import { Trash2 } from "lucide-react";
import { useState } from "react";

function Comentarios() {
  const [msg, setMsg] = useState([
    {
      id: 1,
      text: "Olá, mundo!",
    },
  ]);

  const [text, setText] = useState("");

  const addMsg = () => {
    if (text !== "") {
      const novaMensagem = {
        id: Date.now(),
        text: text,
      };
      setMsg([...msg, novaMensagem]);
      setText("");
    }
  };

  const drop = (id) => {
    const lista = msg.filter((msg) => {
      return msg.id !== id;
    });
    setMsg(lista);
  };

  return (
    <>
      <div className="w-[full] h-full align-center items-center flex justify-center">
        <div className="bg-black w-[350px] h-[800px] rounded-lg p-2">
          <div className="bg-[#c1c1c1] w-full h-full rounded-lg relative p-2">
            <div className="absolute top-1 w-full flex justify-center">
              <div className="p-2 rounded-full bg-black"></div>
            </div>
            <div className="w-full h-[80%] mt-5 flex flex-col gap-2">
              {msg.map((item) => (
                <div
                  key={item.id}
                  className="w-full p-3 bg-[#fff] flex justify-between"
                >
                  <p>{item.text}</p>
                  <Trash2
                    color="red"
                    className="cursor-pointer"
                    onClick={() => drop(item.id)}
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <input
                type="text"
                className="p-3 w-full hover:outline-none rounded-sm"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <button className="w-full p-3 bg-[green]" onClick={addMsg}>
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Comentarios;
