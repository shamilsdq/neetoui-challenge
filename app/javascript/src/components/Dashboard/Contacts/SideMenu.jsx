import React from "react";

import { Search, Plus, Settings } from "@bigbinary/neeto-icons";
import { Typography } from "neetoui/v2";
import { MenuBar } from "neetoui/v2/layouts";

const SideMenu = ({ isOpen }) => (
  <MenuBar showMenu={isOpen} title="Notes">
    <MenuBar.Block label="All" count={0} active />
    <MenuBar.Block label="Archived" count={0} />
    <MenuBar.Block label="Completed" count={0} />
    <MenuBar.Block label="Phase 2" count={0} />

    <MenuBar.SubTitle iconProps={[{ icon: Search }]}>
      <Typography textTransform="uppercase" weight="bold">
        Segments
      </Typography>
    </MenuBar.SubTitle>

    <MenuBar.SubTitle
      iconProps={[{ icon: Search }, { icon: Plus }, { icon: Settings }]}
    >
      <Typography textTransform="uppercase" weight="bold">
        Tags
      </Typography>
    </MenuBar.SubTitle>
  </MenuBar>
);

export default SideMenu;
