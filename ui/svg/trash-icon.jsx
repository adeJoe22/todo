export default function TrashIcon({ className }) {
  return (
    <svg
      className={`${className ? className : "h-6 w-6"}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M19 7l-.867 12.142A2 2 0 0116.138 21h7 .862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v"
      ></path>
    </svg>
  );
}
