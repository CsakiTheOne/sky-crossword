import React, { useEffect } from 'react';
import './CrosswordDisplay.css';
import Cell from '../../model/Cell';
import Container from '../Container';

interface Props {
    // Define the props for your component here
}

const CrosswordDisplay: React.FC<Props> = (props) => {
    const [grid, setGrid] = React.useState<(Cell | null)[][]>([]);

    const accrossClues = [
        "2. You can play this musical instrument for free, along with the Guitar, in Village Theatre, near the Stage",
        "4. A feature which allows you to create a social customised mini zone area, where you can showcase your creations, by decorating & placing different props",
        "7. A giant golem looking creature, made of rocks, can be found in the secret area",
        "10. An area where you can explore various planets while traveling in an aeroplane",
        "11. Black or Red Limited Time Events",
        "13. You can only visit this area on specific days & can hear radio signals as well as astronauts",
        "14. A fan-made term used for beginners",
        "15. They can be Seasonal, Traveling, Returning or Regular",
        "22. the race of Valley of Triumph ends in",
        "23. Meditate here to know your location and winged lights",
        "25. You can get a table from this ancestor, which is located in Vault of Knowledge",
        "26. You can find this cave, which is located in the first realm",
        "28. After completing the Eye of Eden, you can collect some winged lights from here",
        "29. Another TGC game, Of which an exclusive cosmetic pack is available",
    ];
    const downClues = [
        "1. A sea creature found in Prairie Peaks",
        "2. A limited time event that appears in November. during Thanksgiving. in which All treasure candles, hearts, light, etc. gets doubled.",
        "3. I will be summoned, if 8 players call butterflies",
        "5. Mask used by sky kids, who loves to be a dwarf",
        "6. You can enjoy an in-game musjc concert of this singer",
        "8. Using this expression allows you to unlock the gate in Vault of Knowledge",
        "9. An area in Vault Of Knowledge, which was introduced in the Season of Rememberance",
        "12. You can find this in the middle Of the Starlight Desert, which offers Little Prince quests and other cosmetics",
        "16. Solve the maze in the Village of Theatre and you will become a",
        "17. Treasure Reef was introduced in the Season of",
        "18. Aachoo!! Yeti sneezed on you & guess what happened? You are now a",
        "19. Another term used for Black Dragon",
        "20. Sky kids are able to race, by mediating at the top of the cave of",
        "21. You can buy spells & potions from here",
        "24. Cloud tunnels can be found in this area. which allows you to travel & access different areas",
        "27. A (blank) colored flying light can be found in Isle of Dawn",
    ];

    useEffect(() => {
        setGrid([]);
        const size = [33, 27]; // [rows, columns]
        const grid: (Cell | null)[][] = new Array(size[0])
            .fill(null)
            .map(() => new Array(size[1]).fill(null));

        function addAcross(row: number, column: number, number: number, length: number) {
            for (let i = 0; i < length; i++) {
                grid[row][column + i] = {
                    ...grid[row][column + i],
                    number: i === 0 ? number : grid[row][column + i]?.number,
                    letter: '',
                };
            }
        }
        function addDown(row: number, column: number, number: number, length: number) {
            for (let i = 0; i < length; i++) {
                grid[row + i][column] = {
                    ...grid[row + i][column],
                    number: i === 0 ? number : grid[row + i][column]?.number,
                    letter: '',
                };
            }
        }

        // Across Row, Column, Number, Length
        addAcross(0, 19, 2, 4);
        addAcross(3, 13, 4, 11);
        addAcross(5, 10, 7, 6);
        addAcross(10, 0, 10, 21);
        addAcross(12, 2, 11, 14);
        addAcross(14, 17, 13, 3);
        addAcross(15, 12, 14, 4);
        addAcross(17, 11, 15, 7);
        addAcross(21, 19, 22, 8);
        addAcross(22, 6, 23, 9);
        addAcross(25, 5, 25, 18);
        addAcross(27, 15, 26, 10);
        addAcross(30, 4, 28, 5);
        addAcross(30, 17, 29, 7);
        // Down Row, Column, Number, Length
        addDown(0, 15, 1, 7);
        addDown(0, 19, 2, 12);
        addDown(2, 10, 3, 4);
        addDown(3, 22, 5, 5);
        addDown(5, 8, 6, 6);
        addDown(5, 17, 8, 11);
        addDown(9, 14, 9, 18);
        addDown(12, 9, 12, 4);
        addDown(17, 25, 16, 7);
        addDown(18, 9, 17, 5);
        addDown(19, 17, 18, 7);
        addDown(19, 22, 19, 5);
        addDown(20, 11, 20, 6);
        addDown(20, 20, 21, 12);
        addDown(24, 8, 24, 9);
        addDown(29, 23, 27, 4);

        setGrid(grid);
    }, []);

    return (
        <div className='CrosswordDisplay'>
            <div className="grid">
                {grid.map((row, rowIndex) => (
                    <div className="row" key={rowIndex}>
                        {row.map((cell, cellIndex) => {
                            if (!cell) {
                                return <div className="cell empty" key={-1}></div>;
                            }
                            return <div className="cell" key={rowIndex * row.length + cellIndex} >
                                {cell.number && <div className="number">{cell.number}</div>}
                                <input
                                    type="text"
                                    value={cell.letter}
                                    onChange={(e) => {
                                        const newGrid = [...grid];
                                        newGrid[rowIndex][cellIndex] = {
                                            ...cell,
                                            letter: e.target.value,
                                        };
                                        setGrid(newGrid);
                                    }}
                                    onFocus={(e) => {
                                        e.target.select();
                                    }}
                                    maxLength={1}
                                />
                            </div>;
                        })}
                    </div>
                ))
                }
            </div >
            <Container>
                <div className="clues">
                    <h3>Across</h3>
                    <ol>
                        {accrossClues.map((clue) => <li value={clue.split('.')[0]}>{clue.split('. ')[1]}</li>)}
                    </ol>
                    <h3>Down</h3>
                    <ol>
                        {downClues.map((clue) => <li value={clue.split('.')[0]}>{clue.split('. ')[1]}</li>)}
                    </ol>
                </div>
            </Container>
        </div >
    );
};

export default CrosswordDisplay;
