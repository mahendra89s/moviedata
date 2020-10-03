import React from 'react';
import Result from './Result';
function Results({ results, OpenPopup }) {
    return (
        <div>
            <section className="results">
                {results.map(result => (
                    <Result key={result.imdbID} result={result} OpenPopup={OpenPopup} />
                ))}
            </section>
        </div>
    )
}
export default Results;