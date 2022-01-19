import React from "react";

import { Input, Textarea, Select } from "neetoui/v2";

const CreateForm = () => (
  <form className="w-full px-2 space-y-6">
    <Input
      label="Title"
      name="title"
      placeholder="Enter note title"
      className="flex-grow-0 w-full"
      required
    />
    <Textarea
      label="Description"
      name="description"
      placeholder="Enter note description"
      className="flex-grow-0 w-full"
      rows={2}
      required
    />
    <Select
      label="Assigned Contact"
      placeholder="Select Role"
      required
    ></Select>
    <Select label="Tags" placeholder="Select Role" required></Select>
  </form>
);

export default CreateForm;
