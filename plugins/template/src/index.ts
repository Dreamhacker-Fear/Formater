import { metro } from "@vendetta/metro/common";
import { storage } from "@vendetta/plugin";
import { before } from "@vendetta/patcher";
import { logger } from "@vendetta";
import Settings from "./Settings";

let unpatch: (() => void) | null = null;

function formatMessage(content: string) {
    let result = content;

    if (storage.autoBold) result = `**${result}**`;
    if (storage.autoItalic) result = `*${result}*`;
    if (storage.autoSpoiler) result = `||${result}||`;
    if (storage.autoCode) result = `\`${result}\``;
    if (storage.autoUnderline) result = `__${result}__`;
    if (storage.autoStrikethrough) result = `~~${result}~~`;

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
        logger.log("Auto Formatter loaded");

        try {
            const MessageActions = metro.findByProps("sendMessage");

            if (!MessageActions) {
                logger.log("Auto Formatter: sendMessage not found");
                return;
            }

            unpatch = before(
                "sendMessage",
                MessageActions,
                (args: any[]) => {
                    try {
                        const message = args?.[1];

                        if (
                            message &&
                            typeof message.content === "string"
                        ) {
                            message.content = formatMessage(
                                message.content
                            );
                        }
                    } catch (e) {
                        logger.error(
                            `Auto Formatter message hook: ${String(e)}`
                        );
                    }
                }
            );
        } catch (e) {
            logger.error(
                `Auto Formatter load: ${String(e)}`
            );
        }
    },

    onUnload() {
        if (unpatch) {
            unpatch();
            unpatch = null;
        }

        logger.log("Auto Formatter unloaded");
    },

    settings: Settings,
};
