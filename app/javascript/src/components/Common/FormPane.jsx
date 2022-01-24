import React from "react";

import { Check } from "@bigbinary/neeto-icons";
import { Pane, Typography, Button, Toastr } from "neetoui/v2";

const FormPane = ({ entity, isOpen, close, children }) => {
  const submit = () => {
    Toastr.success(`${entity} created successfully.`);
    close();
  };

  return (
    <Pane isOpen={isOpen} onClose={close}>
      <Pane.Header>
        <Typography style="h2" weight="semibold" className="px-2">
          Add New {entity}
        </Typography>
      </Pane.Header>

      <Pane.Body className="pt-2">{children}</Pane.Body>

      <Pane.Footer className="border-t">
        <Button
          label="Save Changes"
          size="large"
          icon={Check}
          onClick={submit}
        />
        <Button
          label="Cancel"
          style="text"
          size="large"
          onClick={close}
          className="ml-3"
        />
      </Pane.Footer>
    </Pane>
  );
};

export default FormPane;
