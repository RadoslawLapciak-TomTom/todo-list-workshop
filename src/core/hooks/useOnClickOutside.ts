import { MutableRefObject, useEffect } from 'react';

export function useOnClickOutside(
  ref: MutableRefObject<any>,
  handler: (ev: MouseEvent) => void,
) {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
}
