import { before } from "@vendetta/patcher";
import { findByProps } from "@vendetta/metro";
import Settings, { settings } from "./Settings";

const MessageActions = findByProps("sendMessage", "editMessage");

let unpatch: (() => void) | undefined;

function formatMessage(content: string) {
    if (!content || typeof content !== "string") return content;

    let result = content;

    if (settings.bold)
        result = `**${result}**`;

    if (settings.italic)
        result = `*${result}*`;

    if (settings.underline)
        result = `__${result}__`;

    if (settings.strikethrough)
        result = `~~${result}~~`;

    if (settings.spoiler)
        result = `||${result}||`;

    if (settings.code)
        result = `\`${result}\``;

    if (settings.quote)
        result = result
            .split("\n")
            .map(line => `> ${line}`)
            .join("\n");

    return result;
}

export default {
    onLoad() {
        if (!MessageActions?.sendMessage) return;

        unpatch = before("sendMessage", MessageActions, args => {
            const message = args?.[1];

            if (!message || typeof message.content !== "string")
                return;

            message.content = formatMessage(message.content);
        });
    },

    onUnload() {
        unpatch?.();
        unpatch = undefined;
    },

    settings: Settings
};
