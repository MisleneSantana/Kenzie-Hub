import { z } from "zod";

export const editOrDeleteSchema = z.object({
  status: z.string().nonempty("Para alterar, selecione uma das opções"),
});
