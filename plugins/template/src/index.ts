import { metro } from "@vendetta/metro/common";
import { storage } from "@vendetta/plugin";
import { before } from "@vendetta/patcher";
import { logger } from "@vendetta";
import Settings from "./Settings";

let unpatch: (() => void) | null = null;

function formatMessage(content: string): string {
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
                        for (const arg of args) {
                            if (
                                arg &&
                                typeof arg === "object" &&
                                typeof arg.content === "string"
                            ) {
                                arg.content = formatMessage(arg.content);
                                return;
                            }
                        }
                    } catch (error) {
                        logger.error(
                            `Auto Formatter: ${String(error)}`
                        );
                    }
                }
            );
        } catch (error) {
            logger.error(
                `Auto Formatter: ${String(error)}`
            );
        }
    },

    onUnload() {
        unpatch?.();
        unpatch = null;
    },

    settings: Settings,
};
