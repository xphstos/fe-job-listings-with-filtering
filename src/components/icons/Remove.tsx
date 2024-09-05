import { JSX } from 'solid-js';

type SvgProps = JSX.IntrinsicElements['svg'];

export default function IconRemove(props: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      fill="none"
      viewBox="0 0 14 14"
      class={props.class}
    >
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
