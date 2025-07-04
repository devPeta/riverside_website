function NavBar() {
return(
    <div className="px-6 py-4">
      <div className="flex items-center justify-between">
        <h1 className="font-poppins text-blue font-bold">RIVERSIDE</h1>
        <div className="flex space-x-6 items-center">
            <h2 className="text-gray hover:text-blue-600 cursor-pointer">About Us</h2>
             <h2 className="text-gray hover:text-blue-600 cursor-pointer">Rooms</h2>
              <h2 className="text-gray hover:text-blue-600 cursor-pointer">Events</h2>
               <h2 className="text-gray hover:text-blue-600 cursor-pointer">Cuisine</h2>
                <h2 className="text-gray hover:text-blue-600 cursor-pointer">Contact us</h2>
                <button className="bg-blue text-white px-6 py-2 rounded hover:bg-blue-700 transition">BOOK</button>
        </div>
      </div>
    </div>
  )
}

export default NavBar;