import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Route, BrowserRouter } from 'react-router-dom';
import { firebaseApp } from './firebase';
import { logUser } from './actions';
import reducer from './reducers';

import App from './components/App';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Signout from './components/Signout';
import AddGoal from './components/AddGoal';
import GoalList from './components/GoalList';
import Welcome from './components/Welcome';

const store = createStore(reducer);

firebaseApp.auth().onAuthStateChanged(user => {
    if (user) {
        //console.log('there is a user lol', user);
        const { email } = user;
        store.dispatch(logUser(email));
    } else {
        //console.log('no user here lel');
    }
})

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
              <div>
                <Route path="/" exact component={Welcome} />
                <Route path="/app" component={App} />
                <Route path="/signin" component={Signin} />
                <Route path="/signup" component={Signup} />
                <Route path="/signout" component={Signout} />
                <Route path="/addgoal" component={AddGoal} />
                <Route path="/goallist" component={GoalList} />
              </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root')
)
