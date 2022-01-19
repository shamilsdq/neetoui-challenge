import React from "react";

import { Search, Plus, Settings } from "@bigbinary/neeto-icons";
import { Typography } from "neetoui/v2";
import { MenuBar } from "neetoui/v2/layouts";

const SideMenu = ({ isOpen }) => (
  <MenuBar showMenu={isOpen} title="Notes">
    <MenuBar.Block label="All" count={200} active />
    <MenuBar.Block label="Users" count={80} />
    <MenuBar.Block label="Leads" count={60} />
    <MenuBar.Block label="Visitors" count={60} />

    <MenuBar.SubTitle iconProps={[{ icon: Search }]}>
      <Typography textTransform="uppercase" weight="bold">
        Segments
      </Typography>
    </MenuBar.SubTitle>
    <MenuBar.Block label="Europe" count={80} />
    <MenuBar.Block label="Middle-East" count={60} />
    <MenuBar.Block label="Asia" count={60} />

    <MenuBar.SubTitle
      iconProps={[{ icon: Search }, { icon: Plus }, { icon: Settings }]}
    >
      <Typography textTransform="uppercase" weight="bold">
        Tags
      </Typography>
    </MenuBar.SubTitle>
    <MenuBar.Block label="Sales" count={80} />
    <MenuBar.Block label="Finance" count={60} />
    <MenuBar.Block label="User Experience" count={60} />
  </MenuBar>
);

export default SideMenu;
