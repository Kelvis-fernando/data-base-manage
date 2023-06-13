import { FormEvent } from "react";

export const getFormData = (event: FormEvent) => {
  event.preventDefault();
  const formData = new FormData(event.target as HTMLFormElement);
  const data = Object.fromEntries(formData);
  return data;
};
