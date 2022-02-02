import './App.css';
import { Provider } from "react-redux";
import CakeContainer from './components/CakeContainer';
import store from './redux/store';
import HokkCakeContainer from './components/HooksCakeContainer';
import IceCreamReducer from './redux/iceCream/IceCreamReducer';
import HookIceCreamContainer from './components/IceCreamContainer';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HokkCakeContainer />
        <HookIceCreamContainer />
      </div>
    </Provider>
  );
}

export default App;
