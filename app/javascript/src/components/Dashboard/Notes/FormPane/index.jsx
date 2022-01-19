import React from "react";

import { Check } from "@bigbinary/neeto-icons";
import { Pane, Typography, Button } from "neetoui/v2";

import CreateForm from "./CreateForm";

const FormPane = ({ isOpen, close }) => (
  <Pane isOpen={isOpen} onClose={close}>
    <Pane.Header>
      <Typography style="h2" weight="semibold" className="px-2">
        Add New Note
      </Typography>
    </Pane.Header>

    <Pane.Body className="pt-2">
      <CreateForm />
    </Pane.Body>

    <Pane.Footer className="border-t">
      <Button label="Save Changes" size="large" icon={Check} onClick={close} />
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

export default FormPane;
