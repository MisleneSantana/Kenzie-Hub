import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "O e-mail é obrigatório")
    .email("Por favor, forneça um e-mail válido"),
  password: z
    .string()
    .min(8, "A senha precisa conter o mínimo de 8 caracteres"),
});
