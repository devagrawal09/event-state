import { useEffect, useState } from "react";

const eventEmitter = new EventTarget();

export const createEvent = () => {
  return Symbol();
};

export const useEvent = <T = any>(event: Symbol) => {
  const [state, setState] = useState<T>();

  useEffect(() => {
    const handler = (d) => setState(d);

    eventEmitter.addEventListener(event.toString(), handler);

    return () => eventEmitter.removeEventListener(event.toString(), handler);
  }, [event]);

  return state;
};

export const emitEvent = (event: Symbol, data: any) => {
  eventEmitter.dispatchEvent(
    new Event(event.toString(), {
      bubbles: false
    })
  );
};
