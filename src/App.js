import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import { Provider } from 'react-redux';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import WatchpPage from './components/WatchpPage';
import MainContainer from './components/MainContainer';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header /> 
        <Body />
      </>
    ),
    children: [
      {
        path: '/',
        element: <MainContainer />
      },
      {
        path: 'watch',
        element: <WatchpPage />
      }
    ]
  }
]);

function App() {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
}

export default App;
