import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import NotFound from './pages/NotFound/NotFound';
import {Switch, Route} from 'react-router-dom';
import SignIn from './pages/SignIn/SignIn';

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/signin">
        <SignIn />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
};

export default App;
