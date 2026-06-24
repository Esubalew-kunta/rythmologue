/**
 * Branded list marker (Change 6): a tiny ECG pulse instead of a hyphen/dash,
 * tying every bullet back to the "electricity of the heart" concept.
 * Rendered in pétrole (the ECG colour) so red stays action-only.
 */
export default function PulseMarker({ className = '' }) {
  return (
    <svg
      width="18"
      height="12"
      viewBox="0 0 18 12"
      fill="none"
      aria-hidden="true"
      className={`mt-[0.45em] shrink-0 text-petrole ${className}`}
    >
      <path
        d="M0 6h4l1.4-4.2L8 10l1.6-4H18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
