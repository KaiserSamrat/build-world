import React from 'react';

const NoTableData = ({ colSpan, children, ...props }) => {
  return (
    <React.Fragment>
      <tr>
        <td colSpan={colSpan}>
          <div {...props}>{children}</div>
        </td>
      </tr>
    </React.Fragment>
  );
};

export default NoTableData;
