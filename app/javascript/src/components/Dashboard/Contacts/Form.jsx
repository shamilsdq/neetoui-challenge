import React from "react";

import { Input, Select } from "neetoui/v2";

const Form = () => (
  <form className="w-full px-2 space-y-6">
    <div className="flex space-x-5">
      <Input
        required
        label="First Name"
        name="firstName"
        placeholder="Enter first name"
        size="large"
        className="flex-grow-0 w-full"
      />
      <Input
        required
        label="Last Name"
        name="lastName"
        placeholder="Enter last name"
        size="large"
        className="flex-grow-0 w-full"
      />
    </div>

    <Input
      required
      label="Email Address"
      name="email"
      placeholder="Enter your email address"
      size="large"
      className="flex-grow-0 w-full"
    />

    <Select required label="Role" name="role" placeholder="Select Role" />
  </form>
);

export default Form;
