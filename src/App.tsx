import React, { useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
// import Lists from './components/Lists';

// const Box: React.FunctionComponent<{title: string}> = ({title}) => {
//   return <div></div>;
// };
interface todo {
  id: number;
  text: string;
}
type ActionType = {tyoe: "ADD"; text: string} | {type: "REMOVE"; id: string};

function App() {
  function reducer(state:Todo[], action: ActionType) {
    switch(action.type) {
      case "ADD":
        return [
          ...state,
          {
            id: state.length,
          }
        ]
  }
}
  const [todos, dispatch] = useReducer(reducer, []);
  return (
  <div className="App">
    {/* <Box title="hi"></Box>
    <Lists /> */}
    </div>
  );
    
}

export default App;
