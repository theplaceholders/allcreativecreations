import { useEffect, useState } from "react";
import { getCustomers } from "../../api/customeApi";

import CustomersTable from "./helper/CustomersTable";

import "../../styles/pages_styles/admin.sass";

const AdminPage = () => {
    const [customers, setCustomers] = useState([]);
    useEffect(() => {
        getCustomers().then((data) => {
            data.map((customer) => {
                customer.name = `${customer.first_name} ${customer.last_name}`;
                return customer;
            });
            
            setCustomers(data);
        });
    }, []);
    return (
        <div>
            <p>This is Admin Page</p>
            <div>
                <CustomersTable customers={customers} />
            </div>
        </div>
    );
}

export default AdminPage;