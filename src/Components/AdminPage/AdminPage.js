import React from 'react';
import Navbar from '../Navbar/Navbar';
import UserTable from '../UserTable/UserTable';

const AdminPage = () => {
  return (
    <div>
        <Navbar />
        <div className="container mx-auto mt-8">
            <UserTable />
        </div>
    </div>
  )
}

export default AdminPage;