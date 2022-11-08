import React from 'react';
import './App.css';
import Form from './components/Form';
import { useSelector, useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { add, create } from './redux/actions/main'
import Matrix from './components/Matrix';

interface PaintOptions {
  main: IMatrix
}

function App() {

    const state = useSelector(
    (state: PaintOptions) => state.main
  )
  

  const dispatch: Dispatch<any> = useDispatch()

  const createMatrix = React.useCallback(
    (numbers: IMatrix) => dispatch(create(numbers)),
    [dispatch]
  )
  const addAmount = React.useCallback(
    (item: itemSquare) => dispatch(add(item)),
    [dispatch]
  )
  

  return (
    <main>
      <div className="container">
      <Form saveArticle={createMatrix}/>
        <Matrix
          state = {state}
          addAmount={addAmount}
        />
      </div>
    </main>
  );
}

export default App;
