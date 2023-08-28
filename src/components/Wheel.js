import React, { useState, useContext } from 'react'
import { Wheel } from 'react-custom-roulette'
import { Context } from '../Context/Context'

export default () => {
    var data = [
        { option: '1' },
        { option: '2' },
        { option: '3' },
    ]
    const { teams, chosenTeams } = useContext(Context);
    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);
    const [index, setIndex] = useState(0);
    for (let index = 4; index <= teams; index++) {
        const element = { option: `${index}` };
        data.push(element);
    }


    const handleSpinClick = () => {
        if (!mustSpin) {
            
            const remove = { option: `${prizeNumber}` };
            data.splice(data.indexOf(remove), 1);
            setMustSpin(true);
            // const newPrizeNumber = chosenTeams[index];
            const newPrizeNumber = Math.floor(Math.random() * data.length) + 1
            setIndex(index + 1);
            setPrizeNumber(newPrizeNumber);
        }
    }

    return (
        <div className='container'>
            <div className='wheel'>
                <Wheel
                    mustStartSpinning={mustSpin}
                    prizeNumber={prizeNumber}
                    data={data}
                    onStopSpinning={() => {
                        setMustSpin(false);
                    }}
                />

                <button onClick={handleSpinClick}>Spin</button>

            </div>
        </div>
    )
}