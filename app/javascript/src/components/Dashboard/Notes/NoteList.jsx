import React from "react";

import { MenuVertical, Clock } from "@bigbinary/neeto-icons";
import { Typography, Dropdown, Tag, Tooltip } from "@bigbinary/neetoui/v2";

const NoteList = ({ notes }) => (
  <div className="ml-1">
    {notes.map(note => (
      <div
        key={note.title}
        className="p-5 my-5 bg-white border rounded-sm neeto-ui-border-gray-300 neeto-ui-shadow-xs"
      >
        <div className="flex justify-between">
          <Typography weight="semibold">{note.title}</Typography>
          <Dropdown icon={MenuVertical} buttonStyle="icon">
            <li>Edit</li>
            <li>Delete</li>
          </Dropdown>
        </div>
        <Typography style="body2">{note.description}</Typography>
        <hr className="my-4" />
        <div className="flex items-center justify-between">
          <Tag
            label="Getting Started"
            size="small"
            className="neeto-ui-text-gray-600 rounded-xs neeto-ui-bg-gray-100"
          />
          <div className="flex items-center">
            <Clock size="12" />
            <Tooltip placement={"bottom-end"} content={"Wednesday, 10:30AM"}>
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
      </div>
    ))}
  </div>
);

export default NoteList;
