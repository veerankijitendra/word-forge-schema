import { z } from 'zod';

export const PartsOfSpeechEnum = z.enum([
  'noun',
  'pronoun',
  'verb',
  'adjective',
  'adverb',
  'preposition',
  'conjunction',
  'interjection',
]);

const MeaningsSchema = z
  .array(
    z.object({
      partsOfSpeech: PartsOfSpeechEnum,
      definition: z.string().min(1),
      examples: z.array(z.string().min(1)).min(2).max(6),
      verbForms: z
        .object({
          base: z.string().min(1),
          past: z.string().min(1),
          pastParticiple: z.string().min(1),
          presentParticiple: z.string().min(1),
          thirdPerson: z.string().min(1),
        })
        .optional(),
    }),
  )
  .min(1);

export const CreateWordSchema = z
  .object({
    word: z.string().min(1),
    level: z.number().int().min(0).default(0),
    frequencyRank: z.number().int().min(0).default(0),
    meanings: MeaningsSchema,
  })
  .strict();

export type CreateWordType = z.infer<typeof CreateWordSchema>;
