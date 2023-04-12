import { z } from "zod";

export const registerSchema = z
  .object({
    title: z.string().nonempty("Escreva o nome de uma tecnologia"),
    status: z
      .string()
      .nonempty("Selecione ao menos uma opção dentre as opções "),
  });
