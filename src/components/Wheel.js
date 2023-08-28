import React, { useState } from 'react'
import { Wheel } from 'react-custom-roulette'

var data = [
    { option: '0' },
    { option: '1' },
    { option: '2' },
]

export default () => {
    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);

    const handleSpinClick = () => {
        if (!mustSpin) {
            //   const newPrizeNumber = Math.floor(Math.random() * data.length);
            const newPrizeNumber = 24;
            setPrizeNumber(newPrizeNumber);
            setMustSpin(true);
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
                        const ind = data.indexOf({ option: `$prizeNumber` });
                        data.splice(ind, 1);
                    }}
                />
                <button onClick={handleSpinClick}>Spin</button>
            </div>
        </div>
    )
}