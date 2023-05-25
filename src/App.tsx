import {Route, Routes} from 'react-router-dom';

import {ContactsManager} from './views/ContactsManager.tsx';
import {ContactsViewer} from './views/ContactsViewer.tsx';
import './styles/App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<ContactsManager />} />
      <Route path="contacts-list" element={<ContactsViewer />} />
    </Routes>
  );
}

export default App;
