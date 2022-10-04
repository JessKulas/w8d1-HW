export default function FeaturedCar(props) {

    function displayInfo() {
        const skillElements = [];

        for(const key in props.car.info) {
            const val = props.car.info[key]

            skillElements.push(<li key={key}>{key}: {val}</li>)
        }

        return skillElements
    }

    return (
        <div className="card">
            <div className="card-body">
                <h2>{ props.car.make }</h2>
                <p><strong>{ props.car.model }</strong></p>
                <ul>
                    {displayInfo()}
                </ul>
            </div>
        </div>
    )
}