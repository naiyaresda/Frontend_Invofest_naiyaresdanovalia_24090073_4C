import { forwardRef } from 'react';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, error, ...props }, ref) => (
    <div className="flex flex-col gap-1 w-full text-left">
      <label className="text-sm font-semibold text-gray-700">{label}</label>
      <textarea
        ref={ref}
        className={`px-4 py-2 border rounded-lg outline-none focus:ring-2 ${
          error ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-100'
        }`}
        {...props} 
      />
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  )
);