// stories/userStory/index.jsx
import React from "react";
import { storiesOf } from "@storybook/react";
import BasicInfo from "../../../src/components/BasicInfo";

storiesOf("用户信息", module).add("基础信息", () => <BasicInfo />);
