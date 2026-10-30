// Standing figure set into a crew name; sized in em so it scales with the name and inherits its colour.
export default function CrewNameIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 12 28"
      fill="currentColor"
      className="mx-[0.06em] h-[0.5em] max-h-8 min-h-6 w-auto"
    >
      <circle cx="6" cy="3.2" r="3.2" />
      <path d="M3.4 7.4h5.2A2.4 2.4 0 0 1 11 9.8V17a1 1 0 0 1-2 0v-5.6h-.6V27a1 1 0 0 1-2 0v-9H5.6v9a1 1 0 0 1-2 0V11.4H3V17a1 1 0 0 1-2 0V9.8a2.4 2.4 0 0 1 2.4-2.4Z" />
    </svg>
  );
}
