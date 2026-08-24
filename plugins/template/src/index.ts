import { logger } from "@vendetta";

export default {
    onLoad() {
        logger.log("Auto Formatter loaded");
    },

    onUnload() {
        logger.log("Auto Formatter unloaded");
    },
};
