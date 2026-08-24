import { React } from "@vendetta/metro/common";
import { storage } from "@vendetta/plugin";
import { Forms } from "@vendetta/ui/components";

const { FormSection, FormInput, FormRow, FormText } = Forms;

export default function Settings() {
    const [value, setValue] = React.useState(
        storage.formatting ?? ""
    );

    const apply = () => {
        storage.formatting = value;
    };

    return (
        <FormSection title="Auto Formatter">
            <FormText>
                NOTE: These features automatically add Discord formatting to your messages.
            </FormText>

            <FormText>
                1 = Bold{"\n"}
                2 = Italic{"\n"}
                3 = Spoiler{"\n"}
                4 = Code{"\n"}
                5 = Underline{"\n"}
                6 = Strikethrough{"\n"}
                7 = Quote
            </FormText>

            <FormInput
                title="Formatting"
                value={value}
                placeholder="Example: 1,3,4"
                onChange={setValue}
            />

            <FormRow
                label="Apply"
                onPress={apply}
            />
        </FormSection>
    );
}
