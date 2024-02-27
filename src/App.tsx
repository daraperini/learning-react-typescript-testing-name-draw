import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import PaginaPadrao from './paginas/PaginaPadrao';
import PaginaConfiguracao from './paginas/PaginaConfiguracao';
import PaginaResultados from './paginas/PaginaResultados';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path= '/' element={<PaginaPadrao/>}>
            <Route index element={<PaginaConfiguracao/>}/>
            <Route path='sorteio' element={<PaginaResultados/>}/>
          </Route>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
