import './App.css';
import Avatar from './components/Avatar';
import Header from './components/Header';
import EmailButton from './components/EmailButton';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className='flex justify-center'>
      <div className='w-96 p-8 bg-zinc-900 m-20 rounded-md'>
        <div className='App'>
          <Avatar />
          <Header />
          <EmailButton />
          <About />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
