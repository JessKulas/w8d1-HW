export default function Cars(props) {
    return (
        <div className="card" onClick={() => props.clickHandler(props.cars)}>
            <div className="card-body">
                <h2>{ props.car.make }</h2>
                <p><strong>{ props.car.model }</strong></p>
            </div>
        </div>
    )
}



