function NavBar() {
return(
    <div className="bg-white shadow-md px-6 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">RIVERSIDE</h1>
        <div className="flex space-x-6 items-center">
            <h2 className="text-gray-700 hover:text-blue-600 cursor-pointer">About Us</h2>
             <h2 className="text-gray-700 hover:text-blue-600 cursor-pointer">Rooms</h2>
              <h2 className="text-gray-700 hover:text-blue-600 cursor-pointer">Events</h2>
               <h2 className="text-gray-700 hover:text-blue-600 cursor-pointer">Cuisine</h2>
                <h2 className="text-gray-700 hover:text-blue-600 cursor-pointer">Contact us</h2>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">BOOK</button>
        </div>
      </div>
    </div>
  )
}

export default NavBar;