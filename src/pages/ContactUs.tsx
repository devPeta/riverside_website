import InputTextField from "../components/InputTextField";

function ContactUs() {
return(
    <div>
    <div className="justify-center mt-32 mb-12">
     <h1 className="font-poppins text-gray font-bold text-2xl">Contact Us</h1>
   </div> 

    <div className="bg-slate-300 mt-16 p-16" >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputTextField label="Name"/>
          <InputTextField label="Surname"/>
          <InputTextField label="City"/>
          <InputTextField label="Country"/>
          <InputTextField label="Phone"/>
          <InputTextField label="Email"/>
      </div>

      <button className="bg-brand text-white px-6 py-3 rounded-lg hover:bg-hoverBlue transition mt-16">Send</button>
    </div>

    </div>
  )
}

export default ContactUs;