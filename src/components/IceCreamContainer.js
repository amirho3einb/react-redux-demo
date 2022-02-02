import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../redux/iceCream/IceCreamActions";

const HookIceCreamContainer = (props) => {
    const numOfIceCreams = useSelector(state => state.iceCream.numOfIceCreams);
    const dispatch = useDispatch();
    return (  
        <div>
            <h2>Number of IceCream - {numOfIceCreams}</h2>
            <button onClick={() => dispatch(buyIceCream())}>buy IceCream</button>
        </div>
    );
}
export default HookIceCreamContainer;