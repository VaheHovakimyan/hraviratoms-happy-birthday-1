import Footer from './components/footer/Footer';
import CallTo from './components/call-to/CallTo';
import Sound from './components/sound/Sound';
import Main from './components/main-bg/Main';
import 'react-international-phone/style.css';
import './App.css';

function App() {
  return (
    <div className="main_wrapper">
      <Main />
      <Footer />
      <CallTo />
      <Sound />
    </div>
  );
}

export default App;
