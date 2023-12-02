// lib
import { z } from "zod";

// zod schema
export const envZodSchema = z.object({
  NODE_ENV: z.enum(["PROD", "DEV"]).default("DEV"),
});

export type ENV = z.infer<typeof envZodSchema>;

// ENV validation
export const getValidatedEnvs = (): ENV | undefined => {
  try {
    const result = envZodSchema.parse(import.meta.env);
    return result as ENV;
  } catch (err: unknown) {
    console.log(err);
  }
};
