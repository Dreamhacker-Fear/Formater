import { Forms } from "@vendetta/ui/components";
import { storage } from "@vendetta/plugin";

const { FormSection, FormSwitchRow } = Forms;

export default function Settings() {
    const toggle = (key: string, value: boolean) => {
        storage[key] = value;
    };

    return (
        <FormSection title="Auto Formatter">
            <FormSwitchRow
                label="Auto Bold"
                subLabel="Makes every sent message bold."
                value={storage.autoBold ?? false}
                onValueChange={(value: boolean) => toggle("autoBold", value)}
            />

            <FormSwitchRow
                label="Auto Italic"
                subLabel="Makes every sent message italic."
                value={storage.autoItalic ?? false}
                onValueChange={(value: boolean) => toggle("autoItalic", value)}
            />

            <FormSwitchRow
                label="Auto Spoiler"
                subLabel="Hides every sent message behind a spoiler."
                value={storage.autoSpoiler ?? false}
                onValueChange={(value: boolean) => toggle("autoSpoiler", value)}
            />

            <FormSwitchRow
                label="Auto Code"
                subLabel="Formats every sent message as inline code."
                value={storage.autoCode ?? false}
                onValueChange={(value: boolean) => toggle("autoCode", value)}
            />

            <FormSwitchRow
                label="Auto Underline"
                subLabel="Underlines every sent message."
                value={storage.autoUnderline ?? false}
                onValueChange={(value: boolean) => toggle("autoUnderline", value)}
            />

            <FormSwitchRow
                label="Auto Strikethrough"
                subLabel="Adds strikethrough to every sent message."
                value={storage.autoStrikethrough ?? false}
                onValueChange={(value: boolean) => toggle("autoStrikethrough", value)}
            />

            <FormSwitchRow
                label="Auto Quote"
                subLabel="Turns every sent message into a Discord quote."
                value={storage.autoQuote ?? false}
                onValueChange={(value: boolean) => toggle("autoQuote", value)}
            />
        </FormSection>
    );
}
