import './home.css';
import { useEffect, useState } from 'react';
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai';
import { Link } from 'react-router-dom';

interface UserData {
    id: number;
    username: string;
    password: string;
    email: string;
    notHashedPassword: string
}

interface HomeProps{
    usersData: UserData[] | UserData
}

const Home = ({usersData}: HomeProps ) => {
    const [isVisible, setIsVisible] = useState(false)
    const isDataEmpty =  Array.isArray(usersData) ? usersData.length != 0 : true



  return (
    <div className='home'>
        { !isDataEmpty ? (
            <Link to='/login'><h1>No users detected, sign in</h1></Link>
        ): (

        <table className='home__table'>
            <tbody>
            <tr>
                <th>Id</th>
                <th>Username</th>
                <th 
                    className='home__table--password'
                    onClick={() => setIsVisible( prev => !prev)}
                    ><p>Password</p> {!isVisible ? <AiFillEyeInvisible/> : <AiFillEye/>}</th>
                <th>Email</th>
            </tr>
            { Array.isArray(usersData) ?(
            usersData.map( (user: UserData) => (
            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td

                    >{isVisible ? user.password : `${user.password.slice(0, 10)}...`  }</td>
                <td>{user.email}</td>
            </tr>
            ) )

            ): (
                <tr key={usersData.id}>
                <td>{usersData.id}</td>
                <td>{usersData.username}</td>
                <td

                    >{isVisible ? usersData.password : `${usersData.password.slice(0, 10)}...`}</td>
                <td>{usersData.email}</td>
            </tr>
            )

            }
            </tbody>
        </table>
        )}
    </div>
  )
}

export default Home