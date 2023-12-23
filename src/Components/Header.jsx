/* eslint-disable react/no-unescaped-entities */


const Header = () => {
  return (
    // main header
    <div className="header w-[1600px] h-[800px] flex px-[100px] py-[100px] items-center bg-[#F5FCFF]">
        <div className="w-[1400px] h-[600px] flex justify-between">
            {/* left header content */}
            <div className="w-[800px] h-[525px] flex flex-col items-start gap-32 flex-shrink-0">
                {/* just write-ups */}
                <div className=" w-[800px] h-[320px] lex flex-col items-start gap-[21px] self-stretch">
                    <div className="w-[600px] h-[100px] mt-[100px] mx-[auto]">
                        <p className="text-[#292f83] text-center font-roboto text-[50px] font-bold leading-[150%]">I am DEREK FIDORO</p>
                    </div>
                    <div className="w-[800px] h-[180px] self-stretch mt-[50px]">
                        <p className="text-[#282938] font-mono italic text-[40px] text-center font-bold">
                            ...an Experienced <span className="text-purple-500 uppercase text-[55px] font-[900]">Web Developer</span>
                        </p>
                    </div>



                    <div className="w-[800px] h-[180px] self-stretch -mt-[100px] px-[24px]">
                    <p className="text-[#1C1E53] font-roboto text-[25px] font-[600] leading-[40px] text-center "> skilled in React and front-end technologies.
                    Proven track record in creating user-friendly interfaces and scalable e-commerce platforms.
                    Strong problem-solving abilities and a collaborative approach to development.</p>
                </div>
                
                {/* Get in touch Button */}
                <a href="#Contact"><div className="w-[170px] h-[70px] bg-purple-700 mt-[10px] mx-[auto] flex px-[18px] py-[42px] justify-center items-center gap-[10px] rounded-[10px]">
                    <button className="text-white font-roboto text-[21px] font-[600]">Get In Touch</button>
                </div></a>

                </div>
                
               
            </div>

            {/* right header pic */}
            <div>
                <img
                className="w-[600px] h-[600px] rounded-md"
                src="src/resources/photo.jpg"
                alt="Your Image"
                />
            </div>
        </div>
        <div className="border-b-4 border-blue-300 -mt-20"></div>
    </div>
  )
}

export default Header