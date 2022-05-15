// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { authReducer, currentUserSelector, logoutSuccess } from '../../../redux/AuthReducer';
// import './Logout.css'

// const Logout = () => {
//     const AuthReducer = useSelector(currentUserSelector);

//     const dispatch = useDispatch();
//     const handleLogout = (e) => {
//         e.prevent.Default();
        
//         dispatch(logoutSuccess());
//     }

//     return(
//         <div className='logout'>
//             <h1>Welcome
//             <span className='user_name'>{authReducer.name}</span> 
//             </h1>{" "}
//             <button className='logout_button' onClick={(e) => handleLogout(e)}>Logout</button>      
//         </div>
//     )

// }

// export default Logout