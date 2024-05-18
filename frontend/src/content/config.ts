import { z, defineCollection } from "astro:content";

const agendaPointSchema = z.object({
    date: z.string().regex(/^\d{2}.\d{2}.\d{4}$/), // DD.MM.YYYY
    time: z.string().regex(/^\d{2}:\d{2}$/), // HH:MM
    title: z.string(), // name of the agenda point
});

const agendaCollection = defineCollection({
    type: "content",
    schema: agendaPointSchema,
});

export type AgendaPointType = z.infer<typeof agendaPointSchema>;

export const collections = {
    agenda: agendaCollection,
};
