import { createStore} from "redux"
import mainReducer from "../reducears/main-reducer";

const store = createStore(mainReducer);

export {store}