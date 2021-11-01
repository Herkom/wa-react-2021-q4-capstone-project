import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants';

const INITIAL_API_METADATA = { ref: null, isLoading: true };

export function useLatestAPI() {
  const [apiMetadata, setApiMetadata] = useState(() => INITIAL_API_METADATA);

  useEffect(() => {
    const controller = new AbortController();

    async function getAPIMetadata() {
      try {
        setApiMetadata(INITIAL_API_METADATA);

        const response = await fetch(API_BASE_URL, {
          signal: controller.signal,
        });

        //Esta declaración no me quedo muy clara
        //Se desestructura el objeto para solo tomar el valor de ref
        //pero no me queda claro como se consiguió
        const { refs: [{ ref } = {}] = [] } = await response.json();
        
        setApiMetadata({ ref, isLoading: false });
      } catch (err) {
        setApiMetadata({ ref: null, isLoading: false });
        console.error(err);
      }
    }

    getAPIMetadata();

    return () => {
      controller.abort();
    };
  }, []);

  return apiMetadata;
}
