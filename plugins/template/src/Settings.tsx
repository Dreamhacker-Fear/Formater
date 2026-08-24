import { Forms } from "@vendetta/ui/components";
import { React } from "@metro/common";
import { settings } from "./Settings";

const { FormSection, FormRow, FormSwitch, FormText } = Forms;

const toggle = (key: keyof typeof settings) => {
    settings[key] = !settings[key];
};

export default () => (
    <React.Fragment>
        <FormSection title="Auto Formatter">
            <FormText>
                NOTE: These features automatically add Discord formatting to your messages.
            </FormText>

            <FormRow
                label="Auto Bold"
                subLabel="Makes every sent message bold."
                trailing={<FormSwitch value={settings.bold} onValueChange={() => toggle("bold")} />}
            />

            <FormRow
                label="Auto Italic"
                subLabel="Makes every sent message italic."
                trailing={<FormSwitch value={settings.italic} onValueChange={() => toggle("italic")} />}
            />

            <FormRow
                label="Auto Spoiler"
                subLabel="Hides every sent message behind a spoiler."
                trailing={<FormSwitch value={settings.spoiler} onValueChange={() => toggle("spoiler")} />}
            />

            <FormRow
                label="Auto Code"
                subLabel="Formats every sent message as inline code."
                trailing={<FormSwitch value={settings.code} onValueChange={() => toggle("code")} />}
            />

            <FormRow
                label="Auto Underline"
                subLabel="Underlines every sent message."
                trailing={<FormSwitch value={settings.underline} onValueChange={() => toggle("underline")} />}
            />

            <FormRow
                label="Auto Strikethrough"
                subLabel="Adds strikethrough to every sent message."
                trailing={<FormSwitch value={settings.strikethrough} onValueChange={() => toggle("strikethrough")} />}
            />

            <FormRow
                label="Auto Quote"
                subLabel="Turns every sent message into a Discord quote."
                trailing={<FormSwitch value={settings.quote} onValueChange={() => toggle("quote")} />}
            />
        </FormSection>
    </React.Fragment>
);
