import {useState} from 'react'

export default function CustomerForm(props) {

    const [formData, setNewFormData] = useState({
        id: "",
        firstName: "",
        lastName: "",
        email: ""
    })

    const handleChange = (event) => {
        const {name, value} = event.target
        let customerData = {...formData}
        customerData[name] = value
        setNewFormData(customerData)
    }

    const saveCustomer = () => {
        const customer = {...formData}
        props.addCustomer(customer)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        saveCustomer()
        setNewFormData({
            id: "",
            firstName: "",
            lastName: "",
            email: ""
        });
    }

    return (
        <div>
            <h3>Add Customer</h3>
            <hr/>
            <form className='ui form' onSubmit={(event)=>handleSubmit(event)}>
                <div className='form-group'>
                    First Name: <input type='text'
                        name="firstName"
                        value={formData.firstName}
                        onChange={(event) =>handleChange(event)}/> 
                </div>
                <div className='form-group'>
                    Last Name: <input type='text'
                        name="lastName"
                        value={formData.lastName}
                        onChange={(event) =>handleChange(event)}/> 
                </div>
                <div className='form-group'>
                    E-mail: <input type='text'
                        name="email"
                        value={formData.email}
                        onChange={(event) =>handleChange(event)}/> 
                </div>
                <button type='submit'> Add Customer </button>
            </form>
        </div>
    )
}