import { metro } from "@vendetta";
import { storage } from "@vendetta/plugin";
import { before } from "@vendetta/patcher";
import Settings from "./Settings";

let unpatch: (() => void) | null = null;

function formatMessage(content: string): string {
    let result = content;

    if (storage.autoBold) {
        result = `**${result}**`;
    }

    if (storage.autoItalic) {
        result = `*${result}*`;
    }

    if (storage.autoSpoiler) {
        result = `||${result}||`;
    }

    if (storage.autoCode) {
        result = `\`${result}\``;
    }

    if (storage.autoUnderline) {
        result = `__${result}__`;
    }

    if (storage.autoStrikethrough) {
        result = `~~${result}~~`;
    }

    if (storage.autoQuote) {
        result = result
            .split("\n")
            .map((line: string) => `> ${line}`)
            .join("\n");
    }

    return result;
}

export default {
    onLoad() {
        const MessageActions = metro.findByProps(
            "sendMessage"
        );

        if (!MessageActions) return;

        unpatch = before(
            MessageActions,
            "sendMessage",
            (args: any[]) => {
                const message = args?.[1];

                if (
                    !message ||
                    typeof message.content !== "string"
                ) {
                    return;
                }

                message.content = formatMessage(
                    message.content
                );
            }
        );
    },

    onUnload() {
        if (unpatch) {
            unpatch();
            unpatch = null;
        }
    },

    settings: Settings,
};
