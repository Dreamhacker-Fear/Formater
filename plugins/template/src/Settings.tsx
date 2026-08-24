import { Forms } from "@vendetta/ui/components";
import { storage } from "@vendetta/plugin";

const { FormSection, FormSwitchRow, FormText } = Forms;

export default function Settings() {
    return (
        <FormSection title="Auto Formatter">
            <FormText>
                NOTE: These features automatically add Discord formatting to your messages.
            </FormText>

            <FormSwitchRow
                label="Auto Bold"
                subLabel="Makes every sent message bold."
                value={storage.autoBold ?? false}
                onValueChange={(value: boolean) => {
                    storage.autoBold = value;
                }}
            />

            <FormSwitchRow
                label="Auto Italic"
                subLabel="Makes every sent message italic."
                value={storage.autoItalic ?? false}
                onValueChange={(value: boolean) => {
                    storage.autoItalic = value;
                }}
            />

            <FormSwitchRow
                label="Auto Spoiler"
                subLabel="Hides every sent message behind a spoiler."
                value={storage.autoSpoiler ?? false}
                onValueChange={(value: boolean) => {
                    storage.autoSpoiler = value;
                }}
            />

            <FormSwitchRow
                label="Auto Code"
                subLabel="Formats every sent message as inline code."
                value={storage.autoCode ?? false}
                onValueChange={(value: boolean) => {
                    storage.autoCode = value;
                }}
            />

            <FormSwitchRow
                label="Auto Underline"
                subLabel="Underlines every sent message."
                value={storage.autoUnderline ?? false}
                onValueChange={(value: boolean) => {
                    storage.autoUnderline = value;
                }}
            />

            <FormSwitchRow
                label="Auto Strikethrough"
                subLabel="Adds strikethrough to every sent message."
                value={storage.autoStrikethrough ?? false}
                onValueChange={(value: boolean) => {
                    storage.autoStrikethrough = value;
                }}
            />

            <FormSwitchRow
                label="Auto Quote"
                subLabel="Turns every sent message into a Discord quote."
                value={storage.autoQuote ?? false}
                onValueChange={(value: boolean) => {
                    storage.autoQuote = value;
                }}
            />
        </FormSection>
    );
}
