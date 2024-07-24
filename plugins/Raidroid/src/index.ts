import vendetta from "@vendetta";

export default {
    onLoad: () => {
        vendetta.commands.registerCommand({
            name: "test",
            description: "test command",
            options: [],
            applicationId: "",
            displayName: "displayName",
            displayDescription: "displayDescription",
            inputType: ApplicationCommandInputType.BUILT_IN,
            type: ApplicationCommandType.CHAT,
            execute: () => {
                console.log("test");
            }
        })
    },
}