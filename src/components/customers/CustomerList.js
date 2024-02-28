import {useState} from 'react'
import customerdata from './customers.json'
import CustomerDetails from './CustomerDeatils'
import CustomerForm from './CustomerForm'

export default function CustomerList () {

    const[customers, setNewCustomer] = useState(customerdata)
    const[selectedCustomer, setNewSelectedCustomer] = useState(null)

    const onCustomerSelect = (customer) => {
        setNewSelectedCustomer(customer)
    }

    const tableRows = customers.map((customer, index) => {
        return (
            <tr onClick={(event) => onCustomerSelect(customer)} key={customer.id} >
                <td>{customer.id}</td>
                <td>{customer.firstName}</td>
                <td>{customer.lastName}</td>
                <td>{customer.email}</td>
            </tr>
        )
    })

    const createCustomer = (newCustomer) => {
        const totalLength = customers.length
        newCustomer.id = totalLength+1
        let newList=[...customers]
        newList.push(newCustomer)
        setNewCustomer(newList)
    }

    return(
        <div>
            <table className='table table-bordered table-hover table-striped'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </table>
            <br/>
            <br/>
            <div className='row'>
                <div className='col-md-6'>
                    <CustomerForm addCustomer={createCustomer}/>
                </div>
                <div className='col-md-4'>
                    {selectedCustomer ? <CustomerDetails customer={selectedCustomer} /> : null}
                </div>
            </div>                
        </div>
    )

}