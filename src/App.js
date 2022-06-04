import logo from './logo.svg';
import './App.css';
import useFetch from './useFetch.js';

function Form(){

  const { loading, data, error } = useFetch(
    'https://randomuser.me/api/'
  );
  if(loading) return <h1> Loading...</h1>;
  if (error) return <h1> ERROR!</h1>;
  console.log(data.results);
  return(
    <div>Name: {data.results[0].name.title}</div>
  );
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        Get random data from the API!
      </header>
      <Form />
    </div>
  );
}

export default App;
