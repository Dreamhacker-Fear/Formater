import { React } from "@vendetta/metro/common";
import { storage } from "@vendetta/plugin";
import { Forms } from "@vendetta/ui/components";

const { FormSection, FormSwitchRow } = Forms;

export default function Settings() {
    const [, refresh] = React.useReducer((x) => x + 1, 0);

    const toggle = (key: string) => {
        storage[key] = !storage[key];
        refresh();
    };

    return (
        <React.ScrollView
            style={{
                flex: 1,
            }}
            contentContainerStyle={{
                paddingBottom: 40,
            }}
        >
            <FormSection title="Auto Formatter">
                <FormSwitchRow
                    label="Auto Bold"
                    subLabel="Makes every sent message bold."
                    value={storage.autoBold ?? false}
                    onValueChange={() => toggle("autoBold")}
                />

                <FormSwitchRow
                    label="Auto Italic"
                    subLabel="Makes every sent message italic."
                    value={storage.autoItalic ?? false}
                    onValueChange={() => toggle("autoItalic")}
                />

                <FormSwitchRow
                    label="Auto Spoiler"
                    subLabel="Hides every sent message behind a spoiler."
                    value={storage.autoSpoiler ?? false}
                    onValueChange={() => toggle("autoSpoiler")}
                />

                <FormSwitchRow
                    label="Auto Code"
                    subLabel="Formats every sent message as inline code."
                    value={storage.autoCode ?? false}
                    onValueChange={() => toggle("autoCode")}
                />

                <FormSwitchRow
                    label="Auto Underline"
                    subLabel="Underlines every sent message."
                    value={storage.autoUnderline ?? false}
                    onValueChange={() => toggle("autoUnderline")}
                />

                <FormSwitchRow
                    label="Auto Strikethrough"
                    subLabel="Adds strikethrough to every sent message."
                    value={storage.autoStrikethrough ?? false}
                    onValueChange={() => toggle("autoStrikethrough")}
                />

                <FormSwitchRow
                    label="Auto Quote"
                    subLabel="Turns every sent message into a Discord quote."
                    value={storage.autoQuote ?? false}
                    onValueChange={() => toggle("autoQuote")}
                />
            </FormSection>
        </React.ScrollView>
    );
}
