import { Route, Switch } from 'react-router-dom';
import './App.css';
import AppBar from './Components/AppBar/AppBar';
import Container from './Components/Container/Container';
import HomePage from './pages/HomePage/';
import MoviesPage from './pages/MoviesPage';

function App() {
  return (
    <>
      <AppBar />
      <Container>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies">
            <MoviesPage />
          </Route>

          <Route>
            <HomePage />
          </Route>
        </Switch>
      </Container>
    </>
  );
}

export default App;
