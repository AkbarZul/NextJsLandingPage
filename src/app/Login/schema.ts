import {
  EMAIL_INVALID,
  PASSWORD_INVALID,
  REQUIRED,
} from "@/constans/errorMessages";
import { z } from "zod";

const schema = z.object({
  email: z.string().min(1, REQUIRED).email(EMAIL_INVALID).max(255),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(255)
    .regex(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).+$/,
      PASSWORD_INVALID
    ),
});

export default schema;

export type FormValues = z.infer<typeof schema>;
