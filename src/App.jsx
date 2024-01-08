import Header from './components/Header/Header';
import Filters from './components/Filters/Filters';
import Main from './components/Main/Main';
import './App.scss';

const App = () => {
  return (
    <>
      <Header />

      <main>
        <section className="aviasales">
          <div className="container">
            <div className="aviasales__content">
              <Filters />
              <Main />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
