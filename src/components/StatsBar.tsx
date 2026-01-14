const StatsBar = () => {
  const stats = [
    {
      label: "Average Responses",
      value: "200+",
      change: "↑ 24% from last week",
      color: "bg-primary/10 text-primary",
    },
    {
      label: "Average Response Time",
      value: "2.3 days",
      change: "↑ 10% faster",
      color: "bg-primary/10 text-primary",
    },
    {
      label: "Quality Score",
      value: "98%",
      change: "Verified responses",
      color: "bg-primary/10 text-primary",
    },
  ];

  return (
    <div className="w-full">
      {/* Traffic Light Dots */}
      <div className="flex gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-xl p-4 shadow-card border border-border/50"
          >
            <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${stat.color}`}>
              {stat.label}
            </div>
            <div className="text-2xl font-display font-bold text-foreground mb-1">
              {stat.value}
            </div>
            <div className="text-sm text-muted-foreground">{stat.change}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsBar;
