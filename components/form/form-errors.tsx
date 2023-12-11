import { XCircle } from "lucide-react";

interface IFormErrorsProps {
  id: string;
  errors?: Record<string, string[] | undefined>;
}

const FormErrors = ({ id, errors }: IFormErrorsProps) => {
  if (!errors) {
    return null;
  }
  return (
    <div
      id={`${id}-error`}
      aria-live="polite"
      className="mt-2 text-xs text-red-500"
    >
      {errors?.[id]?.map((error: string) => (
        <div
          className="flex items-center font-medium p-2 border border-rose-500 bg-rose-500/10 rounded-sm"
          key={error}
        >
          <XCircle className="h-4 w-4 mr-2" />
          {error}
        </div>
      ))}
    </div>
  );
};
export default FormErrors;