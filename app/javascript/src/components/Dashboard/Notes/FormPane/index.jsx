import React from "react";

import { Pane, Typography } from "neetoui/v2";

const FormPane = ({ isOpen }) => (
  <Pane isOpen={isOpen}>
    <Pane.Header>
      <Typography style="h2" weight="semibold">
        Add New Note
      </Typography>
    </Pane.Header>
  </Pane>
);

export default FormPane;
