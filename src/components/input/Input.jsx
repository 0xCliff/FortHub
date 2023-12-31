import className from 'classnames';
import { twMerge } from 'tailwind-merge';

import './Input.css';

function Input({
  value,
  onChange,
  small,
  medium,
  large,
  type,
  placeholder,
  ...rest
}) {
  const classes = twMerge(
    className(
      rest.className,
      'rounded px-3 py-1.5 placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-2 mb-5',
      {
        'h-8': small,
        'h-10': medium,
        'h-14': large,
      }
    )
  );

  return (
    <input
      {...rest}
      type={type}
      placeholder={placeholder}
      className={classes}
      value={value}
      onChange={onChange}
    />
  );
}

Input.propTypes = {
  checkValues: ({ small, medium, large }) => {
    const count = Number(!!small) + Number(!!medium) + Number(!!large);

    if (count > 1) {
      return new Error(
        'Can only have one of "small", "medium", "large" passed through props.'
      );
    }
  },
};

export default Input;
