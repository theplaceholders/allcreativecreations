import PropTypes from 'prop-types';

const CustomersTable = ({ customers }) => {
    return (
        <div className=''>
            <table id="customersTable">
                <thead>
                    <tr>
                        <th>Customer ID</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    { customers.map((customer) => {
                        return (
                            <tr key={customer.internal_id}>
                                <th>{customer.customer_id}</th>
                                <th>{customer.name}</th>
                                <th>{customer.email}</th>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

CustomersTable.propTypes = {
  customers: PropTypes.array.isRequired,
};

export default CustomersTable;
