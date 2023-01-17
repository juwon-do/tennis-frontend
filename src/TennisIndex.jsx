export function TennisIndex(props) {
  console.log(props['rackets'][1]);
  return (
    <div>
      <h1>All Rackets</h1>
      {props['rackets'].map(racket => (
        <div className = "rackets" key={racket.id}>
          <h3>Brand: {racket.racket}</h3>
          <p>Head Size:{racket.head}</p>
          <p>Weight: {racket.weight}</p>
          <p><button type="button" className="btn btn-secondary btn-sm" onClick={()=>props.onSelectRacket(racket)}>More Info</button></p>
          <hr />
        </div>
      ))}
    </div>
  );
}