import { DevSupport } from '@react-buddy/ide-toolbox';
import ReactDOM from 'react-dom/client';
import VConsole from 'vconsole';
import { ComponentPreviews, useInitial } from '@/dev';
import jsBridge from '@/utils/jsBridge';
import App from './App';
import reportWebVitals from './reportWebVitals';

window.jsBridge = jsBridge;

if (import.meta.env.MODE !== 'production') {
  new VConsole();
}
// or init with options
// call `console` methods as usual

// remove it when you finish debugging
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <DevSupport ComponentPreviews={ComponentPreviews} useInitialHook={useInitial}>
    <App />
  </DevSupport>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
