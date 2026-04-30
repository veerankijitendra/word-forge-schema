// src/user.schema.ts
import { z } from 'zod';

const RefreshTokensSchema = z.array(
  z.object({
    token: z.string().min(1, 'Tokenis required'),
    device: z.string().optional(),
    ip: z.string().optional(),
    createdAt: z
      .date()
      .optional()
      .default(() => new Date()),
    expiredAt: z.date({
      error: 'Expiry date is required',
    }),
  }),
);

export const CreateUserRequestSchema = z
  .object({
    email: z.email(),
    username: z.string().min(3).max(20),
    firstName: z.string().min(2),
    lastName: z.string().min(1),
    password: z.string().min(6), // plain password
    profilePhotoUrl: z.url().optional(),
    goal: z.enum(['student', 'exam', 'typing', 'professional']),
    refreshTokens: RefreshTokensSchema,
  })
  .strict();

export type CreateUserRequest = z.infer<typeof CreateUserRequestSchema>;
