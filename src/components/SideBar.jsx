import { Boxes, Eclipse, MessageCircleMore, Monitor } from "lucide-react";
import { useNavigate } from "react-router-dom";

function SiderBar() {
  const navigate = useNavigate();
  return (
    <div className="absolute top-0 left-0 w-[250px] h-full shadow-md bg-[#ffffff] mb-7 flex flex-col">
      <p className="text-[22px] font-bold text-[#505050] text-center">
        Revisão
      </p>
      <div className="flex flex-col mt-5">
        <div
          className="flex items-center gap-2 hover:bg-[#f3f3f3] py-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <Boxes size={20} />
          <p>Componentes</p>
        </div>
        <div
          className="flex items-center gap-2 hover:bg-[#f3f3f3] py-2 cursor-pointer"
          onClick={() => navigate("/styled")}
        >
          <Eclipse size={20} />
          <p>Styled components</p>
        </div>
        <div
          className="flex items-center gap-2 hover:bg-[#f3f3f3] py-2 cursor-pointer"
          onClick={() => navigate("/mensagens")}
        >
          <MessageCircleMore size={20} />
          <p>Mensagens</p>
        </div>
        <div
          className="flex items-center gap-2 hover:bg-[#f3f3f3] py-2 cursor-pointer"
          onClick={() => navigate("/render")}
        >
          <Monitor size={20} />
          <p>Renderização condicional</p>
        </div>
      </div>
    </div>
  );
}

export default SiderBar;
