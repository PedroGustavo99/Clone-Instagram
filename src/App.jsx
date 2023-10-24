import './App.css'
import LateralEsquerda from './Componentes/LaretalEsquerda/LateralEsquerda'
import LateralDireita from './Componentes/LateralDireita/LateralDireita'
import ConteudoCentral from './Componentes/ConteudoCentral/ConteudoCentral'
document.title = 'Instagram';
function App() {

  return (
    <main>

      <LateralEsquerda/>

      <ConteudoCentral/>

      <LateralDireita/>

    </main>
  )
}

export default App
