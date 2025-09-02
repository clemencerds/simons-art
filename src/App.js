import './App.css';
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import About from './components/About/About.js';
import Portfolio from './components/Portfolio/Portfolio.js'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App/>}>
    <Route path='/about' element={<About/>} />
    <Route path='portfolio' element={<Portfolio/>} />
  </Route>
));

function App() {
  return (
    <RouterProvider router ={ router } />
  );
};

export default App;
