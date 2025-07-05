import React, { useState } from 'react';

interface InputTextFieldProps {
  label?: string;
  hintText?: string;
  type?: string;
  value?: string;
  onChange?: (value: string) => void;
  errorText?: string;
  isPassword?: boolean;
  isLoading?: boolean;
  prefixText?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  maxLines?: number;
  initialValue?: string;
}

const InputTextField: React.FC<InputTextFieldProps> = ({
  label,
  hintText,
  type = 'text',
  value,
  onChange,
  errorText,
  isPassword = false,
  isLoading = false,
  prefixText,
  prefix,
  suffix,
  maxLines,
  initialValue,
}) => {
  const [isObscured, setIsObscured] = useState(true);

  return (
    <div className="flex flex-col  space-y-1 w-full">
      {label && (
        <label className="text-xl font-medium text-gray-700 text-left mb-4" >{label}</label>
      )}

      <div className="relative">
        {prefix && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
            {prefix}
          </div>
        )}

        <input
          type={isPassword && isObscured ? 'password' : type}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          placeholder={hintText}
          defaultValue={initialValue}
          className={`w-full py-3 px-4 pl-${prefix ? '10' : '4'} pr-${isPassword || suffix || isLoading ? '10' : '4'} py-3 rounded-md border  bg-slate-300 text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-brand ${
            errorText ? 'border-red-500' : 'border-gray-300'
          }`}
          style={{ resize: maxLines ? 'vertical' : 'none' }}
        />

        {isLoading && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {isPassword && !isLoading && (
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            onClick={() => setIsObscured(!isObscured)}
          >
            {isObscured ? '👁️‍🗨️' : '👁️'}
          </button>
        )}

        {suffix && !isPassword && !isLoading && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
            {suffix}
          </div>
        )}
      </div>

      {errorText && (
        <p className="text-xs text-red-500 mt-1">{errorText}</p>
      )}
    </div>
  );
};

export default InputTextField;
