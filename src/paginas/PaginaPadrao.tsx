import { Outlet } from "react-router-dom";
import Cabecalho from "../componentes/Cabecalho";

const PaginaPadrao = () => {
  return (
    <>
      <Cabecalho />
      <div>
        <Outlet/>
      </div> 
    </>
  );
};

export default PaginaPadrao;
