import logo from './logo.svg';
import './App.css';
import AddTodo from './components/AddTodo';
import SearchTodo from './components/SearchTodo';
import DeleteTodo from './components/DeleteTodo';
import ViewAllTodo from './components/ViewAllTodo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddTodo />} />
        <Route path='/Search' element={<SearchTodo />} />
        <Route path='/Delete' element={<DeleteTodo />} />
        <Route path='/ViewAll' element={<ViewAllTodo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
