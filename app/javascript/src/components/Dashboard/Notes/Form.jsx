import React from "react";

import { Input, Textarea, Select } from "neetoui/v2/formik";

import { SAMPLE_CONTACTS } from "components/Dashboard/Contacts/constants";

import { TAG_OPTIONS } from "./constants";

const Form = () => {
  const contactOptions = SAMPLE_CONTACTS.slice(0, 5).map(({ name, id }) => ({
    label: name,
    value: id,
  }));

  const tagOptions = TAG_OPTIONS.map(({ name, id }) => ({
    label: name,
    value: id,
  }));

  return (
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
        options={contactOptions}
      />
      <Select
        required
        isMulti
        label="Tags"
        name="tags"
        placeholder="Select Role"
        options={tagOptions}
      />
    </div>
  );
};

export default Form;
