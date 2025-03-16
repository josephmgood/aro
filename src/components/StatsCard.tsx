
interface StatsCardProps {
  title: string;
  value: string;
}

export function StatsCard({ title, value }: StatsCardProps) {
  return (
    <div className="bg-black rounded-lg p-6">
      <div className="text-gray-400 text-sm mb-2">{title}</div>
      <div className="text-white text-4xl font-bold">{value}</div>
    </div>
  );
}
