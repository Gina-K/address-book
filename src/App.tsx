import {Route, Routes} from 'react-router-dom';

import {ContactsProvider} from './components/ContactsProvider.tsx';
import {ContactsManager} from './views/ContactsManager.tsx';
import {ContactsViewer} from './views/ContactsViewer.tsx';

import './styles/App.css';

const App = () => {
  return (
    <ContactsProvider>
      <Routes>
        <Route path="/"
               element={<ContactsManager />}
        />
        <Route path="contacts-list"
               element={<ContactsViewer />}
        />
      </Routes>
    </ContactsProvider>
  );
};

export default App;
