import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import Login from './routes/login';
import SignUp from './routes/signup';
import Home from './routes/home';
import store from './store/store';
import { Provider } from 'react-redux';
import LoadingPage from './components/LoadingPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/events',
    element: <LoadingPage />,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: '/signup',
    element: <SignUp />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/home/messages/*',
    element: <Home />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);