import { useEffect, useState } from "react";

interface UseQueryArgs<T> {
  queryKey: string[];
  queryFn: () => Promise<T>;
  initialData: T;
}

export const useQuery = <T>({
  queryFn,
  queryKey,
  initialData,
}: UseQueryArgs<T>) => {
  const [data, setData] = useState<T>(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await queryFn();

        setData(result);
      } catch {
        setIsError(true);
      }

      setIsLoading(false);
    };

    void fetchData();
  }, [...queryKey]);

  return { data, isLoading, isError };
};
