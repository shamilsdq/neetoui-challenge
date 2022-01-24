import React from "react";

import { Search, Plus } from "@bigbinary/neeto-icons";
import { Input, Button } from "neetoui/v2";
import { Header } from "neetoui/v2/layouts";

const TopHeader = ({ toggleSideMenu, openFormPane }) => (
  <Header
    title="All Contacts"
    menuBarToggle={toggleSideMenu}
    actionBlock={
      <div className="flex space-x-3">
        <Input
          placeholder="Search Name, Email, Phone Number, etc."
          prefix={<Search />}
          className="w-80"
        />
        <Button label="Add Contact" icon={Plus} onClick={openFormPane} />
      </div>
    }
  />
);

export default TopHeader;
