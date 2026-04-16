// src/user.schema.ts
import { z } from 'zod';

export const CreateUserRequestSchema = z
  .object({
    email: z.email(),
    username: z.string().min(3).max(20),
    firstName: z.string().min(2),
    lastName: z.string().min(1),
    password: z.string().min(6), // plain password
    profilePhotoUrl: z.url().optional(),
    goal: z.enum(['student', 'exam', 'typing', 'professional']),
  })
  .strict();

export type CreateUserRequest = z.infer<typeof CreateUserRequestSchema>;
