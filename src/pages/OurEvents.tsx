import EventCards from "../components/EventCards";
import eImg from '../assets/eImg.png';
import eImg2 from '../assets/eImg2.png';
import eImg3 from '../assets/eImg3.png';

const eventData = [
  { title: "Cocktails & Bites", subtitle: "RIVERSIDE VALENCIA", Img: eImg, date: "24" },
  { title: "Weekend Brunch", subtitle: "RIVERSIDE VALENCIA", Img: eImg2, date: "28" },
  { title: "Piano Night", subtitle: "RIVERSIDE VALENCIA", Img: eImg3, date: "31" },
  { title: "Cocktails & Bites", subtitle: "RIVERSIDE VALENCIA", Img: eImg, date: "24" },
  { title: "Weekend Brunch", subtitle: "RIVERSIDE VALENCIA", Img: eImg2, date: "28" },
  { title: "Piano Night", subtitle: "RIVERSIDE VALENCIA", Img: eImg3, date: "31" },

    { title: "Cocktails & Bites", subtitle: "RIVERSIDE VALENCIA", Img: eImg, date: "24" },
  { title: "Weekend Brunch", subtitle: "RIVERSIDE VALENCIA", Img: eImg2, date: "28" },
  { title: "Piano Night", subtitle: "RIVERSIDE VALENCIA", Img: eImg3, date: "31" },
];

function OurEvents() {
  return (
    <div className="px-4 md:px-16">
      <div className="text-center mt-32 mb-12">
        <h1 className="font-poppins text-gray font-bold text-2xl">Our Events</h1>
      </div>

      <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide">
        {eventData.map((event, index) => (
          <EventCards
            key={index}
            title={event.title}
            subtitle={event.subtitle}
            Img={event.Img}
            date={event.date}
          />
        ))}
      </div>

      <div className="mt-6 text-center">
        <button className="bg-blue text-white px-6 py-2 rounded hover:bg-blue-700 transition">
          Book
        </button>
      </div>
    </div>
  );
}

export default OurEvents;
