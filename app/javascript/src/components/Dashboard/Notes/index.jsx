import React, { useState, useEffect } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { PageLoader } from "neetoui/v2";

import notesApi from "apis/notes";
import EmptyState from "components/Common/EmptyState";

import NoteList from "./NoteList";
import SideMenu from "./SideMenu";
import TopHeader from "./TopHeader";

const Notes = () => {
  const [loading, setLoading] = useState(true);
  const [showSideMenu, setShowSideMenu] = useState(true);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      setLoading(true);
      const { data } = await notesApi.fetch();
      setNotes(data.notes);
    } catch (error) {
      logger.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <PageLoader />;
  }

  return (
    <div className="flex w-full">
      <SideMenu isOpen={showSideMenu} />
      {notes.length ? (
        <div className="flex flex-col w-full px-5">
          <TopHeader toggleSideMenu={() => setShowSideMenu(prev => !prev)} />
          <NoteList notes={notes} />
        </div>
      ) : (
        <EmptyState
          image={EmptyNotesListImage}
          title="Looks like you don't have any notes!"
          subtitle="Add your notes to send customized emails to them."
          primaryAction={() => {}}
          primaryActionLabel="Add New Note"
        />
      )}
    </div>
  );
};

export default Notes;
