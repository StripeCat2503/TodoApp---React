
import './App.css';
import { Provider } from "react-redux";
import configureStore from './redux/store';
import Home from './components/Home';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
