import { useCallback, useEffect, useState } from "react";
import { fetchCryptoPrices, TokenPrice } from "../api/cryptoApi";

type UseCryptoPricesResult = {
  prices: TokenPrice[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
};

export function useCryptoPrices(
  refreshIntervalMs: number | null = 15000
): UseCryptoPricesResult {
  const [prices, setPrices] = useState<TokenPrice[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    try {
      setError(null);
      const data = await fetchCryptoPrices();
      setPrices(data);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Unknown error";
      setError(message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  useEffect(() => {
    if (!refreshIntervalMs) return;

    const id = setInterval(() => {
      void load();
    }, refreshIntervalMs);

    return () => clearInterval(id);
  }, [load, refreshIntervalMs]);

  return { prices, loading, error, refetch: load };
}
