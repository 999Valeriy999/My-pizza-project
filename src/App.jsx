import Header from "./components/header/header";
import SubmitButton from "./components/Submit-button/Submit-button";
import Todo from "./components/Todo/Todo";
import SearchTaskForm from './components/SearchTask/SearchTaskForm';

function App() {
  return (
    <>
      <Header />
      <SubmitButton />
      <Todo />
      <SearchTaskForm />
     </>
  );
}

export default App;
