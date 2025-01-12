import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

// Pages
import Body from './Pages/HomePage/Body';
import AuthorPage from './Pages/ProfilePage/Profile';
import PostPage from './Pages/PostPage/PostPage';
import MostLikedPost from './Pages/MostLikedPost/MostLikedPost';
import LoginPage from './Pages/LoginPage/LoginPage'; // <-- Import your new LoginPage

// Components
import NavigationBar from './components/NavBar/NavigationBar';
import Footer from './components/Footer/Footer';

/**
 * PrivateRoute: 
 * A helper component that only renders the desired component if the user
 * is authenticated. Otherwise, it redirects to /login.
 */
function PrivateRoute({ component: Component, ...rest }) {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  return (
    <Route
      {...rest}
      render={(props) => 
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />

        <Switch>
          {/* Public Routes */}
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/" component={Body} />
          <Route exact path="/page/:pageNo" component={Body} />

          {/* Protected Routes */}
          <PrivateRoute exact path="/most-liked" component={MostLikedPost} />
          <PrivateRoute exact path="/most-commented" component={MostLikedPost} />
          <PrivateRoute exact path="/profile/:authorId" component={AuthorPage} />
          <PrivateRoute exact path="/post/:postId" component={PostPage} />
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
