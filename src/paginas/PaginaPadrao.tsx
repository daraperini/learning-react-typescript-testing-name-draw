import { Outlet } from "react-router-dom";
import Cabecalho from "../componentes/Cabecalho";
import Card from "../componentes/Card";
import Formulario from "../componentes/Formulario";

const PaginaPadrao = () => {
  return (
    <>
      <Cabecalho />
      <Card><Formulario/></Card>
      <div>
        <Outlet/>
      </div> 
    </>
  );
};

export default PaginaPadrao;
