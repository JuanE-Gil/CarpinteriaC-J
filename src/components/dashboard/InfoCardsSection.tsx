import InfoCard from './InfoCard';
import data from '../../data/infoCardData.json';

const InfoCardsSection: React.FC = () => {
  return (
    <section className="grid grid-cols-4 gap-4">
      {data.map((item, index) => (
        <InfoCard key={index} title={item.title} number={item.number} icon={item.icon} />
      ))}
    </section>
  );
};

export default InfoCardsSection;
