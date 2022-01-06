import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import NotFound from './pages/NotFound/NotFound';
import {Switch, Route} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {auth} from './firabase/firebase';


const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  let unsubscribeFromAuth = null;

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, []);
  return (
    <Switch>
      <Route exact path="/">
        <Home currentUser={currentUser}/>
      </Route>
      <Route path="/search">
        <Search currentUser={currentUser}/>
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
};

export default App;
