// src/user.schema.ts
import { z } from 'zod';
import { PasswordSchema } from './common.schema';

export const RefreshTokensSchema = z
  .array(
    z.object({
      token: z.string().min(1, 'Token is required'),
      device: z.string().optional(),
      ip: z.string().optional(),
      createdAt: z.coerce.date().default(() => new Date()),
      expiresAt: z.coerce.date(),
    }),
  )
  .default([]);

export const CreateUserRequestSchema = z
  .object({
    email: z.email(),
    username: z.string().min(3).max(20),
    firstName: z.string().min(2),
    lastName: z.string().min(1),
    password: PasswordSchema,
    profilePhotoUrl: z.union([z.url(), z.literal('')]).optional(),
    goal: z.enum(['student', 'exam', 'typing', 'professional']),
  })
  .strict();

export type CreateUserRequest = z.infer<typeof CreateUserRequestSchema>;
