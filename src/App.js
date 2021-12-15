import { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Components from './pages/Components';
import Profile from './pages/Profile';

import './styles.scss';

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [image, setImage] = useState(false);
  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };

  const handleImageChange = (checked) => {
    setImage(checked);
  };

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <div className={`app ${toggled ? 'toggled' : ''}`}>
      <Sidebar
        image={image}
        collapsed={collapsed}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
        handleCollapsedChange={handleCollapsedChange}
      />
      <main>
        <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
          <FaBars />
        </div>
        <Switch>
          <Route path="/components" component={Components} />
          <Route path="/profile" component={Profile} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/" exact>
            <Home image={image} handleImageChange={handleImageChange} />
          </Route>
          <Redirect to="/not-found" />
        </Switch>
        <Footer />
      </main>
    </div>
  );
}

export default App;
