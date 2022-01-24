import React from "react";

import { Input, Textarea, Select } from "neetoui/v2/formik";

const Form = () => (
  <div className="w-full px-2 space-y-6">
    <Input
      required
      label="Title"
      name="title"
      placeholder="Enter note title"
      size="large"
      className="flex-grow-0 w-full"
    />
    <Textarea
      required
      label="Description"
      name="description"
      placeholder="Enter note description"
      size="large"
      className="flex-grow-0 w-full"
      rows={2}
    />
    <Select
      required
      label="Assigned Contact"
      name="contact"
      placeholder="Select Role"
    />
    <Select required label="Tags" name="tags" placeholder="Select Role" />
  </div>
);

export default Form;
