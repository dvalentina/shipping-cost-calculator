import { z } from "zod";

const requiredMessage = "Это обязательное поле";

export const homeCalulateCardSchema = z.object({
  from: z
    .string({ required_error: requiredMessage })
    .trim()
    .min(1, { message: requiredMessage }),
  to: z
    .string({ required_error: requiredMessage })
    .trim()
    .min(1, { message: requiredMessage }),
  size: z
    .string({ required_error: requiredMessage })
    .trim()
    .min(1, { message: requiredMessage }),
});

export type THomeCalculateCardSchema = z.infer<typeof homeCalulateCardSchema>;
