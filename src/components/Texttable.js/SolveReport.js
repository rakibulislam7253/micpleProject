import React from 'react';


const SolveReport = () => {
    // const handelsubmit = (event) => {
    //     event.preventDefault()
    //     console.log(event.target.name.value);
    // }


    const handleBlure = (e) => {
        e.preventDefault()
        console.log(e.target.name.value);
    }
    return (
        <div>
            <h1>micple</h1>
            <form  onSubmit ={handleBlure}>
                <div>

                <input name='name'></input>
                <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default SolveReport;