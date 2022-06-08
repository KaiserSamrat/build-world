import Pagination from 'components/Common/Pagination';
import React from 'react';
import { Input, Table } from 'reactstrap';

const CustomTable = ({
  data,
  pageNo,
  tableHead,
  setCurrentPage,
  paginationClass,
  isPagination,
  isCheckbox,
  handleAllSelect,
  reInitialize,
  children,
}) => {
  return (
    <React.Fragment>
      <div className="table-responsive">
        <Table className="table table-hover mb-0 table-centered table-nowrap">
          <thead className="table-light">
            <tr>
              {isCheckbox ? (
                <th>
                  <Input
                    type={'checkbox'}
                    size={'sm'}
                    name="all"
                    className="tableCheckBox"
                    onChange={handleAllSelect}
                  />
                </th>
              ) : null}
              {tableHead.map((data, idx) => (
                <th key={idx}>{data}</th>
              ))}
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </Table>
        {isPagination && data?.length !== 0 ? (
          <Pagination
            parentClass={`${paginationClass} py-3`}
            reInitialize={reInitialize}
            page={pageNo}
            setCurrentPage={setCurrentPage}
          />
        ) : null}
      </div>
    </React.Fragment>
  );
};

export default CustomTable;
