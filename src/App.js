import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";


function App() {
  return (
    // тебе нужен этот оборачивающий див? Он на что-то влияет? Если нет, лучше фрагмент здесь использовать
    <div>
    <Header />
    <Main />
    <Footer />
    </div>
  );
}

export default App;
