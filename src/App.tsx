import { useState } from 'react';
import './App.css';
import { QuestionItem } from './components';
import { questions } from './constants';


function App() {

  let [presentedItemIdx, setPresentedItemIdx] = useState(0);

  const handleClick = (direction: string) => {
    if (direction === 'previous') setPresentedItemIdx(--presentedItemIdx)
    else if (direction === 'next') setPresentedItemIdx(++presentedItemIdx)
  }

  return (
    <div className="App">
      <header className="App-header">
        <QuestionItem {...questions[presentedItemIdx]} />
        <button onClick={() => handleClick('previous')} disabled={presentedItemIdx === 0}>Previous</button>
        <button onClick={() => handleClick('next')} disabled={presentedItemIdx === questions.length - 1}>Next</button>
      </header>
    </div>
  );
}

export default App;
