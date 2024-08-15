import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

    const handleDelete = id => {
        // make sure user is confirmed to delete
        fetch(`espresso-emporium-server-beta-opal.vercel.app/user/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "User has been deleted.",
                        icon: "success"
                    });
                    // remove the user from UI
                    const remainingUsers = users.filter(user => user._id !== id)
                    setUsers(remainingUsers)
                }
            })
    }

    return (
        <div className='w-3/4 mx-auto'>
            <h2 className='text-4xl my-6 text-center'>Users: {users.length}</h2>
            <div className="overflow-x-auto shadow-2xl">
                <table className="table">
                    {/* head */}
                    <thead className='text-xl uppercase text-center bg-slate-400 text-white'>
                        <tr>
                            <th>id</th>
                            <th>Email</th>
                            <th>Created At</th>
                            <th>Last Login</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className='text-xl'>
                        {/* row 1 */}
                        {
                           users.map(user => <tr key={user._id}>
                                <td>{user._id}</td>
                                <td>{user.email}</td>
                                <td>{user.createdAt}</td>
                                <td>{user.lastLoggedAt}</td>
                                <td>
                                    <button onClick={ () => handleDelete(user._id)}
                                    className='btn btn-primary'>X</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;