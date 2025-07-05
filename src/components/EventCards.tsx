import React from 'react';

interface EventCardProps {
  title: string;
  subtitle: string;
  date?: string;
  Img?: string;
}

const EventCards: React.FC<EventCardProps> = ({ title, subtitle, date, Img }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden min-w-[250px] max-w-sm mr-4">
      <div className="relative">
        {Img && (
          <img
            src={Img}
            alt="Event"
            className="w-full h-48 object-cover"
          />
        )}

        {date && (
          <div className="absolute top-2 right-2 bg-white text-black text-sm font-semibold px-3 py-1 rounded shadow">
            {date}
          </div>
        )}
      </div>

      <div className="p-4">
        <h2 className="text-lg font-bold text-darkText">{title}</h2>
        <p className="text-black mt-2">{subtitle}</p>
      </div>
    </div>
  );
};

export default EventCards;
