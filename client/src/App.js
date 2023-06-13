
import './App.css';

//components 
import Header from './components/Header';
import Todo from './components/ToDo';
import ToDoForm from './components/ToDoForm';




function App() {
  return (
    <div>
      <Header/> 
      <ToDoForm/>
      <Todo/>
    </div>
  );
}

export default App;
