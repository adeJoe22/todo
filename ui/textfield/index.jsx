export default function TextField({
  value,
  onChange = () => {},
  onBlur = () => {},
}) {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        className="p-2 bg-transparent border-b-[3px] border-gray-300 outline-none text-white"
      />
    </div>
  );
}
