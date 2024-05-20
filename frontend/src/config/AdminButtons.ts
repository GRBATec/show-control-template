const ADMIN_BUTTONS: Array<{
    label: string;
    wstarget: string;
    wsargs?: any;
}> = [
    {
        label: "No Content",
        wstarget: "beamer/no-content",
    },
    {
        label: "Show Clock",
        wstarget: "beamer/show-clock",
    },
    {
        label: "Show Timer",
        wstarget: "beamer/show-timer",
    },
    {
        label: "Plain Text",
        wstarget: "beamer/plain-text",
    },
    {
        label: "GRB Text",
        wstarget: "beamer/grb-text",
    },
    {
        label: "ATec Text",
        wstarget: "beamer/atec-text",
    },
    {
        label: "Set Pause Text",
        wstarget: "set_text",
        wsargs: "PAUSE"
    },
    {
        label: "Clear Text",
        wstarget: "set_text",
        wsargs: ""
    },{
        label: "Set Thanks Text",
        wstarget: "set_text",
        wsargs: "THANKS"
    }
] as const;

export default ADMIN_BUTTONS;
