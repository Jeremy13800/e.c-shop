"use client";
import { useState, useEffect } from "react";

interface Props {
  className?: string;
  style?: React.CSSProperties;
}

export default function InstagramFollowersCount({ className, style }: Props) {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    async function fetchCount() {
      try {
        const res = await fetch("/api/instagram-followers");
        const data = await res.json();
        setCount(data.count);
      } catch {
        setCount(1530);
      }
    }

    fetchCount();
    const interval = setInterval(fetchCount, 900_000); // re-fetch toutes les 15 min (durée du cache serveur)
    return () => clearInterval(interval);
  }, []);

  const formatted =
    count !== null ? count.toLocaleString("fr-FR") : "1 530";

  return (
    <span className={className} style={style}>
      {formatted}
    </span>
  );
}
