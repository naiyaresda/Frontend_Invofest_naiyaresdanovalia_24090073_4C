import { forwardRef, useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface PasswordProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const PasswordInput = forwardRef<HTMLInputElement, PasswordProps>(({ label, error, ...props }, ref) => {
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-col gap-1 w-full text-left">
      <label className="text-sm font-semibold text-gray-700">{label}</label>
      <div className="relative">
        <input
          type={show ? 'text' : 'password'}
          ref={ref}
          className={`w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 ${error ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-100'
            }`}
          {...props}
        />
        <button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-2.5 text-gray-400">
          {show ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
});