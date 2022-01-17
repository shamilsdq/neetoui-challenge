import React from "react";

import { Search, Plus } from "@bigbinary/neeto-icons";
import { Input, Button } from "@bigbinary/neetoui/v2";
import { Header } from "@bigbinary/neetoui/v2/layouts";

const TopHeader = ({ toggleSideMenu }) => (
  <Header
    title="All Notes"
    menuBarToggle={toggleSideMenu}
    actionBlock={
      <div className="flex space-x-3">
        <Input
          placeholder="Search Name, Email, Phone Number, etc."
          prefix={<Search />}
          className="w-80"
        />
        <Button label="Add Note" icon={Plus} />
      </div>
    }
  />
);

export default TopHeader;
