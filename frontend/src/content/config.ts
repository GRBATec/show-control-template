import { z, defineCollection } from "astro:content";

const agendaPointSchema = z.object({
    date: z.string().regex(/^\d{2}.\d{2}.\d{4}$/), // DD.MM.YYYY
    time: z.string().regex(/^\d{2}:\d{2}$/), // HH:MM
    title: z.string(), // name of the agenda point
    /*
     * start - the beginning of the event
     * default - the default point of the agenda
     * pause - the pause between two points
     * q-and-a - the question and answer session with the audience
     * speech - a speech or presentation
     * special - any special performance during the event
     * end - the end of the event
     */
    type: z
        .enum(["start", "default", "pause", "q-and-a", "performance", "speech", "end"])
        .optional()
        .default("default"),
});

const agendaCollection = defineCollection({
    type: "content",
    schema: agendaPointSchema,
});

export type AgendaPointType = z.infer<typeof agendaPointSchema>;

export const collections = {
    agenda: agendaCollection,
};
