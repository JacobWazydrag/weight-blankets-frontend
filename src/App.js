import { Container } from 'react-bootstrap' 
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main className='py-3'>
      <Container>
        <h1>Welcom to Weight Blankets</h1>
      </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
