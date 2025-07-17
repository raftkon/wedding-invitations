import { ZodError } from "zod";

export function formatZodError(error: ZodError) {
  const fieldErrors: Record<string, string[]> = {};
  for (const issue of error.issues) {
    const path = issue.path[0];
    if (!fieldErrors[path]) {
      fieldErrors[path] = [];
    }
    fieldErrors[path].push(issue.message);
  }

  return {
    type: "validation",
    message: "Validation failed",
    fieldErrors,
  };
}
