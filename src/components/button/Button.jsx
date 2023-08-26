import className from 'classnames';
import { twMerge } from 'tailwind-merge';

import './Button.css';

function Button({
  children,
  primary,
  success,
  info,
  warning,
  danger,
  pill,
  outline,
  rounded,
  ...rest
}) {
  const classes = twMerge(
    className(
      rest.className,
      'flex items-center px-3 py-1.5 border border-solid',
      {
        'bg-blue-500 border-blue-500 text-white': primary,
        'bg-green-500 border-green-500 text-white': success,
        'bg-aqua-500 border-aqua-500 text-white': info,
        'bg-yellow-500 border-yellow-500 text-white': warning,
        'bg-red-500 border-red-500 text-white': danger,
        'rounded-md': rounded,
        'rounded-full': pill,
        'bg-dark-slate': outline,
        'text-blue-500': outline && primary,
        'text-green-500': outline && success,
        'text-aqua-500': outline && info,
        'text-yellow-500': outline && warning,
        'text-red-500': outline && danger,
      }
    )
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

Button.propTypes = {
  checkValues: ({ primary, success, info, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!success) +
      Number(!!info) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        'Can only have one of "primary", "success", "info", "warning", "danger" passed through props.'
      );
    }
  },
};

export default Button;
