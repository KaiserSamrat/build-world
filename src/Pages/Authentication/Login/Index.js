import React from 'react';
import { useSelector } from 'react-redux';

const Login = () => {
  const login = useSelector((state) => state.login);
  console.log(`🦄 ~ file: Index.js ~ line 6 ~ Login ~ login`, login);
  return (
    <React.Fragment>
      <div>
        <h3>login</h3>
      </div>
    </React.Fragment>
  );
};

export default Login;
