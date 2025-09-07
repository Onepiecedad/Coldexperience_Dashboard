"use client";

import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import KpiCard from "../components/KpiCard";
import { getKpi } from "../lib/api";

interface Kpi {
  title: string;
  value: string | number;
}

export default function Page() {
  const [kpis, setKpis] = useState<Kpi[]>([]);

  useEffect(() => {
    getKpi().then(setKpis).catch(console.error);
  }, []);

  return (
    <main className="space-y-6 p-6">
      <Banner />
      <div className="grid gap-4 sm:grid-cols-3">
        {kpis.slice(0, 3).map((kpi) => (
          <KpiCard key={kpi.title} title={kpi.title} value={kpi.value} />
        ))}
      </div>
    </main>
  );
}
