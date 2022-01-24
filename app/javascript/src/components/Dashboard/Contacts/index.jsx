import React, { useState, useEffect } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { PageLoader } from "neetoui/v2";
import { Container } from "neetoui/v2/layouts";

import EmptyState from "components/Common/EmptyState";

import { SAMPLE_CONTACTS } from "./constants";
import ContactTable from "./ContactTable";
import SideMenu from "./SideMenu";
import TopHeader from "./TopHeader";

const Notes = () => {
  const [loading, setLoading] = useState(true);
  const [showSideMenu, setShowSideMenu] = useState(true);
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
    <>
      <SideMenu isOpen={showSideMenu} />
      {contacts.length ? (
        <Container isHeaderFixed>
          <TopHeader toggleSideMenu={() => setShowSideMenu(prev => !prev)} />
          <ContactTable data={contacts} />
        </Container>
      ) : (
        <EmptyState
          image={EmptyNotesListImage}
          title="Looks like you don't have any contacts!"
          subtitle="Add your contacts to send customized emails to them."
          primaryAction={() => {}}
          primaryActionLabel="Add New Note"
        />
      )}
    </>
  );
};

export default Notes;
