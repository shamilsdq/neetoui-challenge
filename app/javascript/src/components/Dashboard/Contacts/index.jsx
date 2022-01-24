import React, { useState, useEffect } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { PageLoader } from "neetoui/v2";
import { Container } from "neetoui/v2/layouts";

import DeleteAlert from "components/Common/DeleteAlert";
import EmptyState from "components/Common/EmptyState";
import FormPane from "components/Common/FormPane";

import {
  SAMPLE_CONTACTS,
  INITIAL_FORM_VALUES,
  VALIDATION_SCHEMA,
} from "./constants";
import Form from "./Form";
import SideMenu from "./SideMenu";
import Table from "./Table";
import TopHeader from "./TopHeader";

const Contacts = () => {
  const [loading, setLoading] = useState(true);
  const [showSideMenu, setShowSideMenu] = useState(true);
  const [showFormPane, setShowFormPane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [contacts, setContacts] = useState([]);

  const fetchContacts = () => {
    setLoading(true);
    setContacts(SAMPLE_CONTACTS);
    setLoading(false);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  if (loading) {
    return <PageLoader />;
  }

  return (
    <>
      <SideMenu isOpen={showSideMenu} />
      <FormPane
        entity="Contact"
        isOpen={showFormPane}
        close={() => setShowFormPane(false)}
        initialValues={INITIAL_FORM_VALUES}
        validationSchema={VALIDATION_SCHEMA}
      >
        <Form />
      </FormPane>

      {contacts.length ? (
        <Container>
          <TopHeader
            toggleSideMenu={() => setShowSideMenu(!showSideMenu)}
            openFormPane={() => setShowFormPane(true)}
          />
          <Table
            data={contacts}
            deleteContact={() => setShowDeleteAlert(true)}
          />
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
