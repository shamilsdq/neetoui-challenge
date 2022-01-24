import React, { useState } from "react";

import { Table, Typography, Avatar } from "neetoui/v2";

const ContactTable = ({ data }) => {
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
    },
    {
      dataIndex: "createdAt",
      key: "createdAt",
      title: "CREATED AT",
      width: 250,
    },
    {
      dataIndex: "action",
      key: "action",
      title: "1",
      width: 50,
    },
  ];

  const handlePageChange = (number, size) => {
    setPageNumber(number);
    setPageSize(size);
  };

  return (
    <Table
      currentPageNumber={pageNumber}
      defaultPageSize={pageSize}
      handlePageChange={handlePageChange}
      columnData={COLUMNS}
      rowData={data}
      className="w-full"
    />
  );
};

export default ContactTable;
