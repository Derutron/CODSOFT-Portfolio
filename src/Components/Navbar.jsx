

const Navbar = () => {
  return ( 
    // Main Navbar container
    <div className=" w-[1600px] h-[120px] flex justify-between items-center px-36 bg-gray-200 shadow-lg">
      
        {/* Three different items logo, navItems & ContactMe*/}
        <div className=" contain w-[1600px] h-[70px] bg-gray-200 flex justify-between items-center gap-10">
            {/* logo */}
            <img
            className="w-[200px] h-[70px] rounded-md"
            src="src/resources/logo.jpg"
            alt="Your Image"
            />

                {/* Navigation items */}
                <div className="w-[480px] h-[32px] flex justify-between gap-10">
                <a href="#Header"><div className="w-[80px] h-[30px]">
                    <p className="ml-5 text-[20px] font-roboto  font-[700] leading-6">HOME</p>
                </div></a>

                <a href="#Skills"><div className="w-[80px] h-[30px]">
                    <p className="text-[20px] font-roboto  font-[700] leading-6 uppercase">skills</p>
                </div></a>

                <a href="#Projects"><div className="w-[90px] h-[30px] mr-6">
                    <p className="text-[20px] font-roboto font-[700] leading-6 uppercase">PROJECTS</p>
                </div></a>

                <a href="#Resume"><div className="w-[80px] h-[30px]">
                    <p className="text-[20px] font-roboto font-[700] leading-6 uppercase">Resume</p>
                </div></a>
            </div>
                
                {/* Contact Me */}
                <a href="#Contact"><div className="w-[170px] h-[70px] border-2 border-[#5E3BEE] flex px-[20px] py-[18px] justify-center items-center gap-[10px] rounded-[5px]">
           <div className="w-[130px] h-[32px] "> 
                    <p className="text-[#5E3BEE] font-roboto text-[21px] font-normal uppercase">Contact Me</p>
                </div>
            </div></a>

            
        </div>
    </div>
  )
}

export default Navbar