import React from "react";

import { Alert } from "neetoui/v2";

const DeleteAlert = ({ entity, isOpen, close }) => (
  <Alert
    title={`Delete ${entity}`}
    message={`Are you sure you want to delete the ${entity.toLowerCase()}? This cannot be undone.`}
    size="md"
    isOpen={isOpen}
    onSubmit={close}
    onClose={close}
  />
);

export default DeleteAlert;
