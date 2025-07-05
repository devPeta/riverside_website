import EventCards from "./EventCards";
import eImg from '../assets/eImg.png';

function OurEvents() {
return(
    <div>
        <div className="justify-center mt-32 mb-12">
     <h1 className="font-poppins text-gray font-bold text-2xl">Our Events</h1>
   </div> 

   <div className="flex overflow-x-auto gap-4 pb-4">
     <EventCards title={"Cocktails & Bites"} subtitle={"RIVERSIDE VALENCIA"} Img="src\assets\eImg.png" date="24"/>
 <EventCards title={"Weekend Brunch"} subtitle={"RIVERSIDE VALENCIA"} Img="src\assets\eImg2.png" date="28"/>
  <EventCards title={"Piano Night"} subtitle={"RIVERSIDE VALENCIA"} Img="src\assets\eImg3.png" date="31"/>
       <EventCards title={"Cocktails & Bites"} subtitle={"RIVERSIDE VALENCIA"} Img="src\assets\eImg.png" date="24"/>
 <EventCards title={"Weekend Brunch"} subtitle={"RIVERSIDE VALENCIA"} Img="src\assets\eImg2.png" date="28"/>
  <EventCards title={"Piano Night"} subtitle={"RIVERSIDE VALENCIA"} Img="src\assets\eImg3.png" date="31"/>
   </div>

   <div className="mt-6 text-center">
      <button className="bg-blue text-white px-6 py-2 rounded hover:bg-blue-700 transition">
    Book
   </button>
   </div>
 
    </div>
  )
}

export default OurEvents;