import QuizNavBar from './components/QuizNavBar';
import {questions} from './models';

import './App.css';

function App() {
  return (
    <div className="App">
      <QuizNavBar questions={questions} />
    </div>
  );
}

export default App;
