import { Forms } from "@vendetta/ui/components";
import { storage } from "@vendetta/plugin";

const { FormSection, FormRow, FormText } = Forms;

export default function Settings() {
    return (
        <FormSection title="Auto Formatter">
            <FormText>
                NOTE: These features automatically add Discord formatting to your messages.
            </FormText>

            <FormRow
                label="Auto Bold"
                subLabel="Makes every sent message bold."
                onPress={() => {
                    storage.autoBold = !storage.autoBold;
                }}
            />

            <FormRow
                label="Auto Italic"
                subLabel="Makes every sent message italic."
                onPress={() => {
                    storage.autoItalic = !storage.autoItalic;
                }}
            />

            <FormRow
                label="Auto Spoiler"
                subLabel="Hides every sent message behind a spoiler."
                onPress={() => {
                    storage.autoSpoiler = !storage.autoSpoiler;
                }}
            />

            <FormRow
                label="Auto Code"
                subLabel="Formats every sent message as inline code."
                onPress={() => {
                    storage.autoCode = !storage.autoCode;
                }}
            />

            <FormRow
                label="Auto Underline"
                subLabel="Underlines every sent message."
                onPress={() => {
                    storage.autoUnderline = !storage.autoUnderline;
                }}
            />

            <FormRow
                label="Auto Strikethrough"
                subLabel="Adds strikethrough to every sent message."
                onPress={() => {
                    storage.autoStrikethrough = !storage.autoStrikethrough;
                }}
            />

            <FormRow
                label="Auto Quote"
                subLabel="Turns every sent message into a Discord quote."
                onPress={() => {
                    storage.autoQuote = !storage.autoQuote;
                }}
            />
        </FormSection>
    );
}
