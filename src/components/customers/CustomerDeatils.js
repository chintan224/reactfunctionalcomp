
export default function CustomerDetails(props) {
    const customerData = props.customer
    return (
        <div className="container">
            <h3> Customer Details </h3>
            <hr/>
            <p> ID: {customerData.id}</p>
            <p> First Name: {customerData.firstName}</p>
            <p> Last Name: {customerData.lastName}</p>
            <p> Email: {customerData.email}</p>
        </div>
    )
}