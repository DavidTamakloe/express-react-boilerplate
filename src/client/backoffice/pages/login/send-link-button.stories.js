import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import SendLinkButton from "./send-link-button";
import { store } from "../../index";
import { Provider } from "react-redux";

export const actions = {
    sendLoginLink: action("sendLoginLink"),
    onResetForm: action("onResetForm")
};

storiesOf("SendLinkButton", module)
    .addDecorator(story => <Provider store={store}>{story()}</Provider>)
    .add("default", () => <SendLinkButton isLoading={false} linkSent={false} linkFailed={false} {...actions} />)
    .add("loading", () => <SendLinkButton isLoading={true} linkSent={false} linkFailed={false} {...actions} />)
    .add("link sent", () => <SendLinkButton isLoading={false} linkSent={true} linkFailed={false} {...actions} />)
    .add("link failed", () => <SendLinkButton isLoading={false} linkSent={false} linkFailed={true} {...actions} />);
