import { Provider } from "react-redux";
import store from '../store'
import UsersList from "./users_list";
const App = ()=>{
   
    return (
        <Provider store={store}>
          <div className="container-fluid">
            <div className="row">
                <UsersList/>
            </div>
          </div>
        </Provider>
    )
}

export default App;