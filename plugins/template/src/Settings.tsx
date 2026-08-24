import { Forms } from "@vendetta/ui/components";
import { storage } from "@vendetta/plugin";

const { FormSection, FormInput, FormText } = Forms;

export default function Settings() {
    return (
        <FormSection title="Auto Formatter">
            <FormText>
                Enter the formatting numbers you want to use.
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
                value={storage.formatting ?? ""}
                placeholder="Example: 1,3,4"
                onChange={(value: string) => {
                    storage.formatting = value;
                }}
            />
        </FormSection>
    );
}
