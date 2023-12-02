// lib
import { z } from "zod";

export const configRouteZodSchema = z.object({
  title: z.string().min(1),
  description: z.string().optional(),
  keywords: z.array(z.string().min(1)).optional(),
  href: z.string().min(1),
  componentPath: z.string().min(1),
});

export const lazyPageComponentRouteZodSchema = z.object({
  title: z.string().min(1),
  description: z.string().optional(),
  keywords: z.array(z.string().min(1)).optional(),
  href: z.string().min(1),
  component: z.any(),
});

export type configRoute = z.infer<typeof configRouteZodSchema>;
export type LazyLoadingRoute = z.infer<typeof lazyPageComponentRouteZodSchema>;
