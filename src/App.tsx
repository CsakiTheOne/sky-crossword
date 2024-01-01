import React from 'react';
import './App.css';
import CrosswordDisplay from './components/CrosswordDisplay/CrosswordDisplay';
import Container from './components/Container';

function App() {
    return (
        <div className="App">
            <Container>
                <h1>Sky Crossword Puzzle</h1>
                <p>
                    Puzzle made by RajBadiani, website built by Csáki
                </p>
            </Container>
            <CrosswordDisplay />
        </div>
    );
}

export default App;
