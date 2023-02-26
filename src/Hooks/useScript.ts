import { useEffect, useState } from 'react';

function useScript(src: string) {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Event | null>(null);

  useEffect(() => {
    let script = document.querySelector(`script[src="${src}"]`) as HTMLScriptElement;

    if (!script) {
      script = document.createElement('script');
      script.src = src;
      script.async = true;
    }

    const handleLoad = () => setLoading(true);
    const handleError = (err: Event | null) => setError(err);

    script.addEventListener('load', handleLoad);
    script.addEventListener('error', handleError);

    document.body.appendChild(script);

    return () => {
      script.removeEventListener('load', handleLoad);
      script.removeEventListener('error', handleError);
    };
  }, [src]);

  return [loading, error];
}

export default useScript;
