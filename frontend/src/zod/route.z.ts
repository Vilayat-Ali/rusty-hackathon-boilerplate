// lib
import { z } from "zod";

const routeZodSchema = z.object({
  title: z.string().min(1),
  description: z.string().optional(),
  keywords: z.array(z.string().min(1)).optional(),
  href: z.string().min(1),
  component: z.any(),
});

export type AppRoute = z.infer<typeof routeZodSchema>;
export default routeZodSchema;
