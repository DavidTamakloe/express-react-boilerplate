import React from "react";
import { storiesOf } from "@storybook/react";
import providerDecorator from "../../../../../../.storybook/decorators/backoffice/provider";
import Sidebar from "./index.jsx";

storiesOf("Backoffice Sidebar", module)
    .addDecorator(providerDecorator)
    .add("default", () => <Sidebar />);
