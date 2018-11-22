import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TodoReducer from './reducers/TodoReducer';
import Table from './containers/Table'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('+++capturing Snapshot of Table', () => {
  const div = document.createElement(<Table />);
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);

  // const renderedValue =  renderer.create(<Table/>).toJSON()
  // expect(renderedValue).toMatchSnapshot();
});

describe('>>>R E D U C E R --- Test TodoReducers',()=>{
  it('+++ reducer for ADD_TODO', () => {
      let state = [{id:20,text:"Now Only one"}]
      state = TodoReducer(state,{type:ADD_TODO, id:21, text:"No two"});
      expect(state).toEqual([{id:20,text:"Now Only One"},{id:21,text:"No two"}]);
  });
});

