import React from 'react';

class Jumbotron extends React.Component {
    render() {
        return (
            <div >
                <div className="jumbotron jumbotron-fluid ">
                    <div className="container">
                        <h1 className="text-center text-white">Employee Directory</h1>
                        <p className="lead text-center text-white">Click on heading to filter by the name or use the search box to narrow results.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Jumbotron;