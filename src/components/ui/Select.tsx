import { forwardRef } from 'react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: { value: string; label: string }[];
  error?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, options, error, ...props }, ref) => (
    <div className="flex flex-col gap-1 w-full text-left">
      <label className="text-sm font-semibold text-gray-700">{label}</label>
      <select
        ref={ref}
        className={`px-4 py-2 border rounded-lg outline-none bg-white focus:ring-2 ${
          error ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-100'
        }`}
        {...props}
      >
        <option value="">Pilih Event</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  )
);