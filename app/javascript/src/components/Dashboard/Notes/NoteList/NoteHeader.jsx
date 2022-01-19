import React from "react";

import { MenuVertical } from "@bigbinary/neeto-icons";
import { Typography, Dropdown } from "neetoui/v2";

const NoteHeader = ({ title }) => (
  <div className="flex justify-between">
    <Typography weight="semibold">{title}</Typography>
    <Dropdown icon={MenuVertical} buttonStyle="icon">
      <li className="m-2">Edit</li>
      <li className="m-2">Delete</li>
    </Dropdown>
  </div>
);

export default NoteHeader;
