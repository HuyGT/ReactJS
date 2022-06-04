import './App.css';
import Button from './components/Lesson1/Button';
import Divider from './components/Lesson1/Divider';
import HeaderTitle from './components/Lesson1/HeaderTitle';
import Input from './components/Lesson1/Input';
import List from './components/Lesson1/List';
import Pagination from './components/Lesson1/Pagination';

function App() {

  let listTask = [
    {
      id: 1,
      content: 'This is a first task'
    },
    {
      id: 2,
      content: 'This is a second task'
    },
    {
      id: 3,
      content: 'This is a third task'
    },
    {
      id: 4,
      content: 'This is a fourth task'
    },
    {
      id: 5,
      content: 'This is a fifth task'
    },
  ]

  return (
    <div className="App">
      <HeaderTitle title = "TO DO LIST APPLICATION" />
      <div className='addTask'>
        <Input placeholder="Add new task" />
        <Button plus /> 
      </div>
      <Divider fullWidth/>
      <List listTask={listTask}/>
      <Divider fullWidth/>
      <Pagination />
    </div>
  );
}

export default App;
