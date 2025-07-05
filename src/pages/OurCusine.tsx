import bgImage from '../assets/imggg.png';



function OurCusine() {
return(
    <div>
    <div className="justify-center mt-32 mb-12">
     <h1 className="font-poppins text-gray font-bold text-2xl">Our Cuisine</h1>
   </div> 

  
      <div className="flex flex-row items-center gap-12 justify-start">
        <div className="w-1/2">
          <img src={bgImage} alt="Background" className="w-full h-auto object-cover rounded-lg" />
        </div>

    
        <div className="w-1/2 ">
          <h1 className="font-poppins text-darkText font-bold text-2xl mb-6">Gastronomy</h1>
          <p className="font-poppins text-grayText mb-10 leading-relaxed">
            The way we travel and move has changed in the last few years. We no longer want the typical photo that all our contacts post on Instagram. We no longer want to elbow our way through crowded museums. We no longer want to view the city through the mobile lens. It’s not about travelling, it’s about discovering.
          </p>
          <button className="bg-brand text-white px-6 py-3 rounded-lg hover:bg-hoverBlue transition">
            EXPLORE NOW....
          </button>
        </div>
      </div>
   </div>
  )
}

export default OurCusine;