import React from 'react'

function Result({ result, OpenPopup }) {
    return (
        <div className="result" onClick={() => OpenPopup(result.imdbID)}>
            <img src={result.Poster} />
            <h3>{result.Title}</h3>
        </div>
    )
}
export default Result
