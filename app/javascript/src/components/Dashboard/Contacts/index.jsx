import React, { useState, useEffect } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { PageLoader } from "neetoui/v2";

import EmptyState from "components/Common/EmptyState";

import { SAMPLE_CONTACTS } from "./constants";
import SideMenu from "./SideMenu";

const Notes = () => {
  const [loading, setLoading] = useState(true);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = () => {
    try {
      setLoading(true);
      setContacts(SAMPLE_CONTACTS);
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
      <SideMenu isOpen={true} />
      {contacts.length ? (
        <div className="flex flex-col w-full px-5"></div>
      ) : (
        <EmptyState
          image={EmptyNotesListImage}
          title="Looks like you don't have any contacts!"
          subtitle="Add your contacts to send customized emails to them."
          primaryAction={() => {}}
          primaryActionLabel="Add New Note"
        />
      )}
    </div>
  );
};

export default Notes;
