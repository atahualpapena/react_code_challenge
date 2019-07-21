import React, { Component } from 'react';
import './App.css';
import TopBar from './Components/TopBar';
import PersonsModal from './Components/Modals/PersonsModal';
import DutiesModal from './Components/Modals/DutiesModal';
import CommentsModal from './Components/Modals/CommentsModal';
import InfoBar from './Components/InfoBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <br />
        <InfoBar />
        <br /> 
        <PersonsModal />
        <br />
        <DutiesModal />
        <br />
        <CommentsModal />
      </div>
    );
  }
}

export default App;
