import React from "react";

import { Typography } from "neetoui/v2";

import NoteFooter from "./NoteFooter";
import NoteHeader from "./NoteHeader";

const NoteList = ({ notes, deleteNote }) => (
  <div className="flex-1 ml-1 overflow-y-auto">
    {notes.map((note, index) => (
      <div
        key={note.title + index}
        className="p-5 my-5 bg-white border rounded-sm neeto-ui-border-gray-300 neeto-ui-shadow-xs"
      >
        <NoteHeader title={note.title} deleteNote={deleteNote} />
        <Typography style="body2">{note.description}</Typography>
        <hr className="my-4" />
        <NoteFooter category={note.category} />
      </div>
    ))}
  </div>
);

export default NoteList;
