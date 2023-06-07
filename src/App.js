import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import CueTable from './components/CueTable';

function App() {
  const data = [
    {
      startSegRT: '10:30',
      activity: 'Introduction',
      presenter: 'John Doe',
      audio: 'ON',
      center: 'Occupied',
      wings: 'Clear',
      lighting: 'Bright',
      stage: 'Prepared'
    },
    // other rows here
  ];

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/cuetable" element={<CueTable data={data} />} />
      </Routes>
    </Router>
  );
}

export default App;
