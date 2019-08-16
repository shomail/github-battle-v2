import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import { ThemeProvider } from './contexts/theme';
import Nav from './components/Nav';
import Loading from './components/Loading';

const Popular = React.lazy(() => import('./components/Popular'));
const Battle = React.lazy(() => import('./components/Battle'));
const Results = React.lazy(() => import('./components/Results'));

function App() {
  const [theme, setTheme] = React.useState('light');
  const toggleTheme = () =>
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));

  return (
    <Router>
      <ThemeProvider value={theme}>
        <div className={theme}>
          <div className="container">
            <Nav toggleTheme={toggleTheme} />
            <h1>Github Explorer</h1>
            <React.Suspense fallback={<Loading />}>
              <Switch>
                <Route exact path="/" component={Popular} />
                <Route exact path="/battle" component={Battle} />
                <Route path="/battle/results" component={Results} />
                <Route render={() => <h1>404 Page Not Found!</h1>} />
              </Switch>
            </React.Suspense>
          </div>
        </div>
      </ThemeProvider>
    </Router>
  );
}

ReactDom.render(<App />, document.getElementById('app'));
