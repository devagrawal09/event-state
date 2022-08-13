import { useEffect, useState } from "react";

const eventHandlers = new HashMap<Symbol, Set<(...args: any[]) => void>>();

export const createEvent = () => {
  return Symbol();
};

export const useEvent = <T = any>(event: Symbol) => {
  const [state, setState] = useState<T>();

  useEffect(() => {
    const handler = (d) => setState(d);
    
    eventHandlers.get(event).add(handler);
    
    return () => eventHandlers.get(event).delete(handler);
  }, [event]);

  return state;
};

export const emitEvent = (event: Symbol, data: any) => {
  eventHandlers.get(event).forEach((handler) => handler(data));
};
