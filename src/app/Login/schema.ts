import {
  EMAIL_INVALID,
  PASSWORD_INVALID,
  PASSWORD_MIN_LENGTH,
  REQUIRED,
} from "@/constans/errorMessages";
import { z } from "zod";

const schema = z.object({
  email: z.string().min(1, REQUIRED).email(EMAIL_INVALID).max(255),
  password: z
    .string()
    .min(8, PASSWORD_MIN_LENGTH)
    .max(255)
    .regex(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).+$/,
      PASSWORD_INVALID
    ),
});

export default schema;

export type FormValues = z.infer<typeof schema>;
