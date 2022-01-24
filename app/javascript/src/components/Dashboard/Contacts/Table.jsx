import React, { useState } from "react";

import { MenuHorizontal } from "@bigbinary/neeto-icons";
import { Table as NeetoTable, Typography, Avatar, Dropdown } from "neetoui/v2";

const Table = ({ data }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(9);

  const COLUMNS = [
    {
      key: "nameAndRole",
      title: "NAME & ROLE",
      render: ({ name, role, image_url }) => (
        <div className="flex items-center space-x-3">
          <Avatar size="large" user={{ name: "TEST", imageUrl: image_url }} />
          <div>
            <Typography style="h5" className="leading-5 neeto-ui-text-gray-800">
              {name}
            </Typography>
            <Typography className="text-xs leading-5 neeto-ui-text-gray-600">
              {role}
            </Typography>
          </div>
        </div>
      ),
    },
    {
      dataIndex: "email",
      key: "email",
      title: "EMAIL",
      width: 250,
      render: value => <Typography className="text-sm">{value}</Typography>,
    },
    {
      dataIndex: "created_at",
      key: "created_at",
      title: "CREATED AT",
      width: 200,
      render: value => <Typography className="text-sm">{value}</Typography>,
    },
    {
      dataIndex: "action",
      key: "action",
      width: 50,
      render: () => (
        <Dropdown icon={() => <MenuHorizontal />} buttonStyle="text">
          <li>Edit</li>
          <li>Delete</li>
        </Dropdown>
      ),
    },
  ];

  const handlePageChange = (number, size) => {
    setPageNumber(number);
    setPageSize(size);
  };

  return (
    <NeetoTable
      currentPageNumber={pageNumber}
      defaultPageSize={pageSize}
      handlePageChange={handlePageChange}
      columnData={COLUMNS}
      rowData={data}
    />
  );
};

export default Table;
