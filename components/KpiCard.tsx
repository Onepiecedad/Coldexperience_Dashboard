interface Props {
  title: string;
  value: string | number;
}

export default function KpiCard({ title, value }: Props) {
  return (
    <div className="rounded-lg border p-4 shadow-sm">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="mt-2 text-2xl font-semibold">{value}</p>
    </div>
  );
}
