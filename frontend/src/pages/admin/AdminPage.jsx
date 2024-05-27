import { useEffect, useState } from "react";

import CustomersTable from "./helper/CustomersTable";

import "./admin.sass";
import { getReservations } from "../../api/reservationApi";
const AdminPage = () => {
    const [customers, setCustomers] = useState([]);
    useEffect(() => {
        getReservations().then((data) => {
            console.log(data, "this is the data")
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