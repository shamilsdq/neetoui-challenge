import React from "react";

import { Alert, Toastr } from "neetoui/v2";

const DeleteAlert = ({ entity, isOpen, close }) => {
  const submit = () => {
    Toastr.success(`${entity} deleted successfully.`);
    close();
  };

  return (
    <Alert
      title={`Delete ${entity}`}
      message={`Are you sure you want to delete the ${entity.toLowerCase()}? This cannot be undone.`}
      size="md"
      isOpen={isOpen}
      onSubmit={submit}
      onClose={close}
    />
  );
};

export default DeleteAlert;
