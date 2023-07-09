import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { History } from "./pages/History";
import { DefaultLayout } from "./layouts/DefaultLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  );
}

{
  /*   <Route path="/admin" element={<AdminLayout />}>
        <Route path="/products"  />
      </Route> 
      AQUI POSSO TER OUTRO LAYOUT PARA UM PAINEL DE ADMIN
      LOCALHOST:3000/ADMIN/PRODUCTS  VAI SOMANDO OS PATH

      componente de DefaultLayout aplicar o layout em todas as rotas
*/
}
