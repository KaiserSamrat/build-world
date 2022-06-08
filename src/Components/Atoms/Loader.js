import React from 'react';

const Loader = ({ className }) => {
  return (
    <React.Fragment>
      <div className={className + 'h-full'}>
        <div className="flex justify-center items-center ">
          <i className="bx bx-loader bx-spin" style={{ color: '#5d5d5d' }}></i>{' '}
          Loading...
        </div>
      </div>
    </React.Fragment>
  );
};

export default Loader;
