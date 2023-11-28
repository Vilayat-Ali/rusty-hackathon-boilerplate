// lib
import { z, ZodError } from "zod";

// BASE USER SCHEMA
const baseUserSchema = z.object({
  name: z.object({
    first: z.string().min(1),
    last: z.string().min(1),
  }),
  email: z.string().email().min(1),
});

// REGISTER USER SCHEMA
const userRegisterZodSchema = baseUserSchema
  .extend({
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
  })
  .refine((registerData) => {
    if (registerData.password !== registerData.confirmPassword) {
      throw new ZodError([
        {
          path: ["password"],
          code: "custom",
          message: "Password not same as custom password",
        },
      ]);
    }
  });

// LOGIN USER SCHEMA
const userLoginZodSchema = z.object({
  email: z.string().email().min(1),
  password: z.string().min(8),
});

// DB Schema
const userDBZodSchema = baseUserSchema.extend({
  role: z.enum(["USER", "ADMIN"]).default("USER"),
  password: z.string().min(8),
});

export type userRegister = z.infer<typeof userRegisterZodSchema>;
export type userLogin = z.infer<typeof userLoginZodSchema>;
export type User = z.infer<typeof userDBZodSchema>;

const zodSchemas = {
  userRegisterZodSchema,
  userLoginZodSchema,
  userDBZodSchema,
};

export default zodSchemas;
