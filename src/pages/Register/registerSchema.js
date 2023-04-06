import { z } from "zod";

export const registerSchema = z
  .object({
    name: z.string().nonempty("O nome é obrigatório"),
    email: z
      .string()
      .nonempty("O e-mail é obrigatório")
      .email("Por favor, forneça um e-mail válido"),
    password: z
      .string()
      .min(8, "A senha precisa conter o mínimo de 8 caracteres")
      .regex(/(?=.*?[A-Z])/, "Necessário ao menos uma letra maiuscula")
      .regex(/(?=.*?[a-z])/, "Necessário ao menos uma letra minúscula ")
      .regex(/(?=.*?[0-9])/, "Necessário conter ao menos um número")
      .regex(
        /(?=.*?[}{,.^?~=+\-_\/*\-+.\|!@])/,
        "Necessário conter ao menos um caracter especial"
      ),
    confirm: z.string().nonempty("Por favor, confirme sua senha"),
    bio: z
      .string()
      .nonempty("Escreva sua bio")
      .max(15, "A descrição deve ser breve, com no máximo 15 caracteres"),
    contact: z.string().nonempty("Forneça um número de contato"),
    course_module: z
      .string()
      .nonempty("Selecione ao menos uma opção dentre as opções "),
  })
  .refine(({ password, confirm }) => confirm === password, {
    message:
      "A confirmação de senha e senha não correspondem. Por favor, tente novamente.",
    path: ["confirm"],
  });
