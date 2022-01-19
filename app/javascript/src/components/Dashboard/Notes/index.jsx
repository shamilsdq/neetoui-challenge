import React, { useState, useEffect } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { PageLoader } from "neetoui/v2";

import EmptyState from "components/Common/EmptyState";

import { SAMPLE_NOTES } from "./constants";
import DeleteAlert from "./DeleteAlert";
import FormPane from "./FormPane";
import NoteList from "./NoteList";
import SideMenu from "./SideMenu";
import TopHeader from "./TopHeader";

const Notes = () => {
  const [loading, setLoading] = useState(true);
  const [showSideMenu, setShowSideMenu] = useState(true);
  const [showFormPane, setShowFormPane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      setLoading(true);
      setNotes(SAMPLE_NOTES);
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
      <FormPane isOpen={showFormPane} close={() => setShowFormPane(false)} />

      {notes.length ? (
        <div className="flex flex-col w-full px-5">
          <TopHeader
            toggleSideMenu={() => setShowSideMenu(prev => !prev)}
            openFormPane={() => setShowFormPane(true)}
          />
          <NoteList notes={notes} deleteNote={() => setShowDeleteAlert(true)} />
          <DeleteAlert
            isOpen={showDeleteAlert}
            close={() => setShowDeleteAlert(false)}
          />
        </div>
      ) : (
        <EmptyState
          image={EmptyNotesListImage}
          title="Looks like you don't have any notes!"
          subtitle="Add your notes to send customized emails to them."
          primaryAction={() => setShowFormPane(true)}
          primaryActionLabel="Add New Note"
        />
      )}
    </div>
  );
};

export default Notes;
