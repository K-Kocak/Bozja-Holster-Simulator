import ReactDOM from 'react-dom/client'

import App from './ui/App.tsx'

import { store } from '@backend/store.ts';
import { Provider } from 'react-redux';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
      <App />
  </Provider>
)
