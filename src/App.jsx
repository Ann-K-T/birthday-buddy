import data from './data.js';
import { useState } from 'react';
import { List } from './components/List.jsx';

const App = () => {
  const [people, setPeople] = useState(data);

  const clearItemsHandler = () => {
    setPeople([]);
  };

  return (
    <main>
      <section className="container">
        <h3> {people.length} birthdays today</h3>
        <List people={people} />
        <button
          type="button"
          className="btn btn-block"
          onClick={clearItemsHandler}
        >
          clear List
        </button>
      </section>
    </main>
  );
};
export default App;
