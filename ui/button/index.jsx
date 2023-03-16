export default function Button({ children, className }) {
  const defaultClassname = `bg-gray-300 text-white border-[3px] border-gray-600 p-3 rounded-2xl`;
  return (
    <button className={`${className ? className : defaultClassname}`}>
      {children}
    </button>
  );
}
