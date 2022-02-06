import './App.css';
import { Provider } from "react-redux";
import CakeContainer from './components/CakeContainer';
import store from './redux/store';
import HokkCakeContainer from './components/HooksCakeContainer';
import HookIceCreamContainer from './components/IceCreamContainer';
import CakeWithPayload from './components/CakeWithPayload';
import UserContainer from './components/UserContainer';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <CakeContainer />
        <HokkCakeContainer />
        <HookIceCreamContainer />
        <CakeWithPayload /> */}
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
