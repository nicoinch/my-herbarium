import React from 'react';
import { Flower } from 'src/types/flower';
import { FlowerCard } from 'src/components/FlowerCard';

type HomeProps = {
  title?: string;
  flowers: Array<Flower>;
};

export const Home: React.FC<HomeProps> = ({ title, flowers }) => {
  const [sortedFlowers, setSortedFlowers] = React.useState<Array<Flower>>([]);

  React.useEffect(() => {
    setSortedFlowers(flowers.sort((a, b) => a.name.localeCompare(b.name)));
  }, [flowers]);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-title-1 font-black pt-[104px] text-dark dark:text-light">
        {title}
      </h1>
      {sortedFlowers.map((flower) => (
        <FlowerCard
          key={flower.id}
          title={flower.name}
          color={flower.color}
          temperature={flower.temperature}
          humidity={flower.humidity}
          description={flower.description}
          backgroundUrl={`./img/${flower.name.toLowerCase()}.png`}
        />
      ))}
    </div>
  );
};
