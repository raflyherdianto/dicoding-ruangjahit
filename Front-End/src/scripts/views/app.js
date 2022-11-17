import DrawerInitiator from '../utils/drawer-initiator';
// import UrlParser from '../routes/url-parser';
import './element/hero-element';
import './element/app-bar';
import './element/footer';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }
}

export default App;
