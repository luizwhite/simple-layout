import { ArticlesSection } from './components/ArticlesSection';
import { Featured } from './components/Featured';
import { Header } from './components/Header';
import { MainQuestions } from './components/MainQuestions';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Featured />
        <MainQuestions />
        <ArticlesSection />
      </main>
    </>
  );
};

export default App;
