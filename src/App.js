import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './App.css';
import AppBar from './Components/AppBar';
import Container from './Components/Container';

const HomePage = lazy(
  () => import('./pages/HomePage') /* chunkName: HomePage*/,
);
const MoviesPage = lazy(
  () => import('./pages/MoviesPage') /* chunkName: MoviesPage*/,
);
const MovieDetailsPage = lazy(
  () => import('./pages/MovieDetailsPage') /* chunkName: MovieDetailsPage*/,
);

function App() {
  return (
    <div>
      <AppBar />
      <Container>
        <Switch>
          <Suspense
            fallback={
              <Loader
                type="ThreeDots"
                color="-webkit-link"
                height={40}
                width={80}
                timeout={2000}
              />
            }
          >
            <Route path="/" exact>
              <HomePage />
            </Route>

            <Route path="/movies" exact>
              <MoviesPage />
            </Route>

            <Route path="/movies/:movieId">
              <MovieDetailsPage />
            </Route>
          </Suspense>
          <Route>
            <HomePage />
          </Route>
        </Switch>
      </Container>
      <ToastContainer autoClose={3000} />
    </div>
  );
}

export default App;
