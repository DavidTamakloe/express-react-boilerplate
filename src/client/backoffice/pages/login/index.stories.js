import React from "react";
import { storiesOf } from "@storybook/react";
import providerDecorator from "../../../../../.storybook/decorators/backoffice/provider";
import BackofficeLoginPage from "./index.jsx";

// A super-simple mock of a redux store

storiesOf("BackofficeLoginPage", module)
    .addDecorator(providerDecorator)
    .add("default", () => <BackofficeLoginPage />);
