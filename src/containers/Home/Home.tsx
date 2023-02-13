import { useState } from 'react';
import './home.css'

interface UserData {
    id: number;
    username: string;
    password: string;
    email: string;
    notHashedPasswrod: string
}

const Home = ({userData}: {userData: UserData | any}) => {

    function handleStringLength (x: number, y: number) {
        return userData.password.length > x ? `${userData.password.slice(0, y)}...` : userData.password
    }
  return (
    <div className='home'>
        <table className='home__table'>
            <tbody>
            <tr>
                <th>id</th>
                <th>username</th>
                <th>password</th>
                <th>email</th>
                <th>password without hash</th>
            </tr>
            { userData.id ?(
            <tr>
                <td>{userData.id}</td>
                <td>{userData.username}</td>
                <td >{ handleStringLength(10, 10)}</td>
                <td>{userData.email}</td>
                <td>{userData.notHashedPassword}</td>
            </tr>

            ): ''

            }
            </tbody>
        </table>
    </div>
  )
}

export default Home