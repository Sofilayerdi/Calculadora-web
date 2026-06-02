import './App.css'
import Calculator from './components/Calculator/Calculator'

function App() {
  return (
    <main>
      <Calculator />

      <p className="repo-link">
        <a
          href="https://github.com/Sofilayerdi/Calculadora-web"
          target="_blank"
          rel="noreferrer"
        >
          Link a repositorio
        </a>
      </p>
    </main>
  )
}

export default App