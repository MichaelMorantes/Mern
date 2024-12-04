export function Button({ onClick, children, className = "", ...props }) {

  return (
    <button
      className={`${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}