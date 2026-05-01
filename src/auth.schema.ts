import { z } from 'zod';
import { PasswordSchema } from './common.schema';

export const LoginRequestSchema = z
  .object({
    email: z.email(),
    password: z.string().min(1, 'Password is required'), // plain password
  })
  .strict();

export type LoginRequest = z.infer<typeof LoginRequestSchema>;

export const RefreshTokenRequestSchema = z
  .object({
    refreshToken: z.string().min(1),
  })
  .strict();

export type RefreshTokenRequest = z.infer<typeof RefreshTokenRequestSchema>;

export const LogoutRequestSchema = z
  .object({
    refreshToken: z.string().min(1),
  })
  .strict();

export type LogoutRequest = z.infer<typeof LogoutRequestSchema>;

export const ForgotPasswordRequestSchema = z
  .object({
    email: z.email(),
  })
  .strict();

export type ForgotPasswordRequest = z.infer<typeof ForgotPasswordRequestSchema>;

export const ResetPasswordRequestSchema = z
  .object({
    token: z.string().min(1),
    newPassword: PasswordSchema, // plain password
  })
  .strict();

export type ResetPasswordRequest = z.infer<typeof ResetPasswordRequestSchema>;

export const ChangePasswordRequestSchema = z
  .object({
    currentPassword: z.string().min(1, 'Current password is required'), // plain password
    newPassword: PasswordSchema, // plain password
  })
  .strict();

export type ChangePasswordRequest = z.infer<typeof ChangePasswordRequestSchema>;

export const VerifyEmailRequestSchema = z
  .object({
    token: z.string().min(1),
  })
  .strict();

export type VerifyEmailRequest = z.infer<typeof VerifyEmailRequestSchema>;

export const ResendVerificationEmailRequestSchema = z
  .object({
    email: z.email(),
  })
  .strict();

export type ResendVerificationEmailRequest = z.infer<typeof ResendVerificationEmailRequestSchema>;

export const AuthResponseSchema = z
  .object({
    accessToken: z.string().min(1),
    refreshToken: z.string().min(1),
  })
  .strict();

export type AuthResponse = z.infer<typeof AuthResponseSchema>;
