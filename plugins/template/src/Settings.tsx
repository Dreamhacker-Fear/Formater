import { React } from "@vendetta/metro/common";
import { storage } from "@vendetta/plugin";
import { Forms } from "@vendetta/ui/components";

const { FormSection, FormSwitchRow, FormDivider } = Forms;

export default function Settings() {
    const [, forceUpdate] = React.useReducer((x) => x + 1, 0);

    const toggle = (key: string, value: boolean) => {
        storage[key] = value;
        forceUpdate();
    };

    return (
        <FormSection title="Auto Formatter">
            <FormSwitchRow
                label="Auto Bold"
                subLabel="Makes every sent message bold."
                value={!!storage.autoBold}
                onValueChange={(value: boolean) => toggle("autoBold", value)}
            />
            <FormDivider />

            <FormSwitchRow
                label="Auto Italic"
                subLabel="Makes every sent message italic."
                value={!!storage.autoItalic}
                onValueChange={(value: boolean) => toggle("autoItalic", value)}
            />
            <FormDivider />

            <FormSwitchRow
                label="Auto Spoiler"
                subLabel="Hides every sent message behind a spoiler."
                value={!!storage.autoSpoiler}
                onValueChange={(value: boolean) => toggle("autoSpoiler", value)}
            />
            <FormDivider />

            <FormSwitchRow
                label="Auto Code"
                subLabel="Formats every sent message as inline code."
                value={!!storage.autoCode}
                onValueChange={(value: boolean) => toggle("autoCode", value)}
            />
            <FormDivider />

            <FormSwitchRow
                label="Auto Underline"
                subLabel="Underlines every sent message."
                value={!!storage.autoUnderline}
                onValueChange={(value: boolean) => toggle("autoUnderline", value)}
            />
            <FormDivider />

            <FormSwitchRow
                label="Auto Strikethrough"
                subLabel="Adds strikethrough to every sent message."
                value={!!storage.autoStrikethrough}
                onValueChange={(value: boolean) => toggle("autoStrikethrough", value)}
            />
            <FormDivider />

            <FormSwitchRow
                label="Auto Quote"
                subLabel="Turns every sent message into a Discord quote."
                value={!!storage.autoQuote}
                onValueChange={(value: boolean) => toggle("autoQuote", value)}
            />
        </FormSection>
    );
}
