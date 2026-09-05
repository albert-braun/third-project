import Header from './components/Header/Header'
import HeaderBlock from './components/Header-block/Header-block'
import What from './components/What/What'
import Tools from './components/Tools/Tools'
import Past from './components/Past/Past'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  return (
    <div className="wrapper" id="top">
      <Header />
      <main className="main">
        <HeaderBlock />
        <What />
        <Tools />
        <Past />
      </main>
      <Footer />
    </div>
  )
}

export default App
