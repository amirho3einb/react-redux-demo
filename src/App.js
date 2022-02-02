import './App.css';
import { Provider } from "react-redux";
import CakeContainer from './components/CakeContainer';
import store from './redux/store';
import HokkCakeContainer from './components/HooksCakeContainer';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HokkCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
