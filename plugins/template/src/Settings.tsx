import { ReactNative } from "@vendetta/metro/common";
import { storage } from "@vendetta/plugin";
import { Forms } from "@vendetta/ui/components";

const { FormSection, FormInput, FormText } = Forms;
const { View, Text, TouchableOpacity } = ReactNative;

export default function Settings() {
    const [value, setValue] = ReactNative.useState(
        storage.formatting ?? ""
    );

    return (
        <View style={{ flex: 1 }}>
            <ReactNative.ScrollView
                contentContainerStyle={{
                    padding: 20,
                    paddingBottom: 40
                }}
            >
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

                    <TouchableOpacity
                        onPress={() => {
                            storage.formatting = value;
                        }}
                        style={{
                            backgroundColor: "#5865F2",
                            borderRadius: 8,
                            height: 56,
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: 20
                        }}
                    >
                        <Text
                            style={{
                                color: "#FFFFFF",
                                fontSize: 18,
                                fontWeight: "600"
                            }}
                        >
                            Apply
                        </Text>
                    </TouchableOpacity>
                </FormSection>
            </ReactNative.ScrollView>
        </View>
    );
}
