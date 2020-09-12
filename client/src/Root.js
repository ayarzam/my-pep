import React from 'react';
import App from './App';
import { useHistory } from 'react-router-dom';

const History = () => {
  const history = useHistory();

  return (
    <App history={history}/>
  )
}
  
export default History;

