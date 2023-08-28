import React, { useContext, useState } from 'react';
import '../Form.css'; // Import your CSS file for styling
import { Context } from '../Context/Context';
function Form() {
    const [formData, setFormData] = useState({
        totalTeam: 0,
        chose: 0
    });
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };
    const { setTeams, setToChoose, setChosenTeams, teams, toChoose, chosenTeams } = useContext(Context);
    function handleSubmit(e) {
        e.preventDefault();
        setTeams(formData.totalTeam);
        setToChoose(formData.chose);
        // setChosenTeams(getRandomNumbersInRange(toChoose, teams));
        // setChosenTeams()
        // getRandomNumbersInRange(toChoose, teams);
        // console.log(chosenTeams)
    }

    function getRandomNumbersInRange(m, n) {
        const randomNumbers = [];

        while (randomNumbers.length < m) {
            const randomNumber = Math.floor(Math.random() * n) + 1;

            if (!randomNumbers.includes(randomNumber)) {
                randomNumbers.push(randomNumber);
            }
        }

        return randomNumbers;
    }
    return (
        <div className="form-container">
            <form className="custom-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="form-label">Total number of teams </label>
                    <input type="number" className="form-control" id="totalTeam" aria-describedby="emailHelp" onChange={handleInputChange} />
                </div>
                {/* <div className="form-group">
                    <label htmlFor="exampleInputPassword1" className="form-label">Teams to be selected</label>
                    <input type="number" className="form-control" id="chose" onChange={handleInputChange} />
                </div> */}

                <button type="submit" className="btn btn-primary">Set</button>
            </form>
        </div>
    );
}

export default Form;
