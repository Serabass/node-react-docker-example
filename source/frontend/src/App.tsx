import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function useAjax(url: string) {
  let [response, setResponse] = useState(null);
  useEffect(() => {
    fetch(url).then(async (res) => {
      let json = await res.json();

      setResponse(json);
    });
  }, [url]);

  return [response];
}

function App() {
  let [node]: any[] = useAjax('/api/node');
  let [python]: any[] = useAjax('/api/python/test');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Node: {node?.message}</p>
        <p>Python: {JSON.stringify(python)}</p>
      </header>
    </div>
  );
}

export default App;
