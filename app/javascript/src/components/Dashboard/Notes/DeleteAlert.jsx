import React from "react";

import { Alert } from "neetoui/v2";

const DeleteAlert = ({ isOpen, close }) => (
  <Alert
    title="Delete Note"
    message="Are you sure you want to delete the note? This cannot be undone."
    size="md"
    isOpen={isOpen}
    onSubmit={close}
    onClose={close}
  />
);

export default DeleteAlert;
