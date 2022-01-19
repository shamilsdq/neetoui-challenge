import React from "react";

import { Notes, UserCircle, Settings } from "@bigbinary/neeto-icons";

const NotesIcon = () => <Notes color="#68737D" size={25} />;
const ContactsIcon = () => <UserCircle color="#68737D" size={25} />;
const SettingsIcon = () => <Settings color="#68737D" size={25} />;

export const APP_NAME = "neetoui-challenge";

export const PASSWORD_PATH = "/my/password/edit";
export const PROFILE_PATH = "/my/profile";
export const LOGOUT_PATH = "/logout";

export const SIDENAV_LINKS = [
  {
    label: "Notes",
    to: "/notes",
    icon: NotesIcon,
  },
  {
    label: "Contacts",
    to: "/contacts",
    icon: ContactsIcon,
  },
  {
    label: "Settings",
    to: "/settings",
    icon: SettingsIcon,
    items: [
      {
        label: "My Profile",
        to: "/my/profile",
      },
      {
        label: "Change Password",
        to: "/my/password/edit",
      },
    ],
  },
];
