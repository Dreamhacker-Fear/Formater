import { logger } from "@vendetta";
import Settings from "./Settings";

export default {
    onLoad() {
        logger.log("Auto Formatter loaded");
    },

    onUnload() {
        logger.log("Auto Formatter unloaded");
    },

    settings: Settings,
};
