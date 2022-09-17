import React, { useEffect } from 'react';
import PostContainer from './components/PostContainer';
import { useAppDispach, useAppSelector } from './hooks/redux';
import { fetchUsers } from './store/reducers/ActionCreators';

import { userSlice } from './store/reducers/UserSlice';

function App() {
  // const dispatch = useAppDispach()
  // const {users, isLoading, error} = useAppSelector(state => state.userReducer)
  // useEffect(() => {
  //   dispatch(fetchUsers())
  // }, [])
  
  return (
    <div className=" text-gray-600 mx-auto container flex content-center justify-center flex-col">
      <PostContainer/>
      {/* {isLoading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>} */}
      {/* {!error && !isLoading && JSON.stringify(users, null, 2)} */}
      {/* {users.map(user => (
        <div key={user.id} className=' text-center'>
          <h1>Name: {user.name}</h1>
          <p>id: {user.id}</p>
          <p>email: {user.email}</p>
        </div>
      ))} */}
    </div>
  );
}

export default App;
