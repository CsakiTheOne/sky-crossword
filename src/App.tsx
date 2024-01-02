import React from 'react';
import './App.css';
import CrosswordDisplay from './components/CrosswordDisplay/CrosswordDisplay';
import Container from './components/Container';
import originalPuzzleImage from './media/SKY_COTL_CROSSWORD_BY_RAJ_BADIANI.jpg';

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
            <Container>
                <h2>Get the original puzzle</h2>
                <p>
                    If you want to print it or solve it in an image editor, you can download the original puzzle here:
                </p>
                <img
                    src={originalPuzzleImage}
                    alt=""
                    style={{
                        maxWidth: '50%',
                        height: 'auto',
                    }}
                />
                <p>
                    <a href={originalPuzzleImage} download>Direct download</a>
                </p>
            </Container>
        </div>
    );
}

export default App;
