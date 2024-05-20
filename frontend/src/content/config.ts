import { z, defineCollection } from "astro:content";

const agendaPointSchema = z.object({
    date: z.string().regex(/^\d{2}.\d{2}.\d{4}$/), // DD.MM.YYYY
    time: z.string().regex(/^(?:[01]\d|2[0-3]):[0-5]\d(?: - (?:[01]\d|2[0-3]):[0-5]\d)?$/), // HH:MM or HH:MM - HH:MM
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
