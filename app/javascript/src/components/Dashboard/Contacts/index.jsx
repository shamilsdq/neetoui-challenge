import React, { useState, useEffect } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { PageLoader } from "neetoui/v2";
import { Container } from "neetoui/v2/layouts";

import DeleteAlert from "components/Common/DeleteAlert";
import EmptyState from "components/Common/EmptyState";

import { SAMPLE_CONTACTS } from "./constants";
import SideMenu from "./SideMenu";
import Table from "./Table";
import TopHeader from "./TopHeader";

const Contacts = () => {
  const [loading, setLoading] = useState(true);
  const [showSideMenu, setShowSideMenu] = useState(true);
  const [showDeleteAlert, setShowDeleteAlert] = useState(true);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = () => {
    setLoading(true);
    setContacts(SAMPLE_CONTACTS);
    setLoading(false);
  };

  if (loading) {
    return <PageLoader />;
  }

  return (
    <>
      <SideMenu isOpen={showSideMenu} />
      {contacts.length ? (
        <Container>
          <TopHeader toggleSideMenu={() => setShowSideMenu(!showSideMenu)} />
          <Table data={contacts} />
        </Container>
      ) : (
        <EmptyState
          image={EmptyNotesListImage}
          title="Looks like you don't have any contacts!"
          subtitle="Add your contacts to send customized emails to them."
          primaryAction={() => {}}
          primaryActionLabel="Add New Contact"
        />
      )}
      <DeleteAlert
        entity="Contact"
        isOpen={showDeleteAlert}
        close={() => setShowDeleteAlert(false)}
      />
    </>
  );
};

export default Contacts;
