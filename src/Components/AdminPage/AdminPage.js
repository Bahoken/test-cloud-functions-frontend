import React from 'react';
import Navbar from '../Navbar/Navbar';
import UserTable from '../UserTable/UserTable';
import { UserAuth } from '../../AuthContext/AuthContext';

const AdminPage = () => {
  
  const { user } = UserAuth();

  return (
    <div>
        <Navbar />
       
        <h1> { JSON.stringify(user) } </h1>

        <div className="container mx-auto mt-8">
            <UserTable />
        </div>
    </div>
  )
}

export default AdminPage;