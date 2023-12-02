// lib
import { z } from "zod";

export const appAccessRole = z.array(
  z.object({
    role: z.string().min(1),
    level: z.number().min(0).max(10),
  })
);

export type APP_ACCESS_ROLE = z.infer<typeof appAccessRole>;
