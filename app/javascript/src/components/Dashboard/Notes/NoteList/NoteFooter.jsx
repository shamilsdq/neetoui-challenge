import React from "react";

import { Clock } from "@bigbinary/neeto-icons";
import { Tag, Tooltip } from "neetoui/v2";

const NoteFooter = ({ category }) => (
  <div className="flex items-center justify-between">
    <Tag
      label={category}
      size="small"
      className="neeto-ui-text-gray-600 rounded-xs neeto-ui-bg-gray-100"
    />
    <div className="flex items-center">
      <Clock size="12" />
      <Tooltip placement="bottom-end" content="Wednesday, 10:30AM">
        <span className="mx-1 text-xs neeto-ui-text-gray-600">
          Drafted 2 hours ago
        </span>
      </Tooltip>
      <img
        src="https://randomuser.me/api/portraits/med/men/13.jpg"
        className="w-6 ml-2 rounded-full"
      />
    </div>
  </div>
);

export default NoteFooter;
