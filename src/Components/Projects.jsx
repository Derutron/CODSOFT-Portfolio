/* eslint-disable react/no-unescaped-entities */
const Projects = () => {
  return (
    <div className="w-[1600px] h-[1000px]  bg-[#F5FCFF] mt-20">
        <div className="w-[900px] h-[50px] border-[0px] border-black mx-auto flex justify-center items-center">
            <p className="text-black text-center uppercase font-montserrat text-[50px] font-bold tracking-[20px]">My projects</p>
        </div>

        {/* list of projects */}
        <div className="w-[1600px] h-[1000px]">

            {/* Project  one */}
            <div className="flex justify-evenly w-[1600px] mt-10">
                <img
                className="w-[300px] h-[300px] rounded-md"
                src="src/resources/countryApp.png"
                alt="Your Image"
                />

                {/* writeups */}
                <div className="writeups w-[1000px] h-[300px]">
                    <div className="title w-[1000px] h-[50px] mt-2">
                        <p className="text-black font-mono uppercase text-[40px] text-center font-bold">Country App</p>
                    </div>

                    <div className="description w-[1000px] h-[250px] flex items-center">
                        <p className="text-black font-roboto text-[25px] font-[600] leading-[40px] text-center ">A Country App is a mobile or web application designed to provide information about various countries. 
                        It typically includes features such as country details, flags, maps, currency, population, languages, and more.
                        Users can explore and compare information about different countries, making it a handy tool for travelers, students, or anyone interested in global data. </p>
                    </div>


                    <div className="border-b-4 border-blue-900"></div>
                        
                        <div className="flex justify-between">
                        <a href="https://derutron.github.io/Country_App/" target="_blank" rel="noopener noreferrer" className=" w-[120px] h-[50px] -mt-[55px] border-blue-500 border-2  flex justify-center rounded-md items-center">
                            <div>
                                <button className="text-[20px] font-bold">Go to App</button>
                            </div>
                        </a>
                   
                        <a href="https://github.com/Derutron/Country_App" target="_blank" rel="noopener noreferrer" className=" w-[140px] h-[50px] -mt-[55px] border-blue-500 border-2 flex justify-center rounded-md items-center">
                            <div>
                                <button className="text-[20px] font-bold">Go to GitHub</button>
                            </div>
                        </a>
                        </div>

                    </div>
            </div>




            {/* Project two */}
            <div className="flex justify-evenly w-[1600px] mt-20">
                <img
                className="w-[300px] h-[300px] rounded-md border-black border-[2px]"
                src="src/resources/dictionaryApp.png"
                alt="Your Image"
                />

                {/* writeups */}
                <div className="writeups w-[1000px] h-[300px]">
                    <div className="title w-[1000px] h-[50px] mt-2">
                        <p className="text-black font-mono uppercase text-[40px] text-center font-bold">Dictionary App</p>
                    </div>

                    <div className="description w-[1000px] h-[250px] flex items-center">
                        <p className="text-black font-roboto text-[25px] font-[600] leading-[40px] text-center ">A dictionary app is a digital application designed for accessing and exploring linguistic information. 
                        It provides definitions, meanings, pronunciations, and often examples of words, 
                        aiding users in improving vocabulary and language comprehension. Users can search for specific  </p>
                    </div>


                    <div className="border-b-4 border-blue-900"></div>

                    <div className="flex justify-between">
                    <a href="https://derutron.github.io/dictionary_web_app/" target="_blank" rel="noopener noreferrer" className=" w-[120px] h-[50px] -mt-[55px] border-blue-500 border-2 flex justify-center rounded-md items-center">
                    <div>
                        <button className="text-[20px] font-bold">Go to App</button>
                    </div>
                    </a>

                    <a href="https://github.com/Derutron/dictionary_web_app" target="_blank" rel="noopener noreferrer" className=" w-[140px] h-[50px] -mt-[55px] border-blue-500 border-2 flex justify-center rounded-md items-center">
                    <div>
                        <button className="text-[20px] font-bold">Go to GitHub</button>
                    </div>
                    </a>
                    </div>


                </div>
            </div>


            {/* Project three */}
            <div className="flex justify-evenly w-[1600px] mt-20">
                <img
                className="w-[300px] h-[300px] rounded-md  border-black border-[2px]"
                src="src/resources/gitHubApp.png"
                alt="Your Image"
                />

                {/* writeups */}
                <div className="writeups w-[1000px] h-[300px]">
                    <div className="title w-[1000px] h-[50px] mt-2">
                        <p className="text-black font-mono uppercase text-[40px] text-center font-bold">GitHub User App</p>
                    </div>

                    <div className="description w-[1000px] h-[250px] flex items-center">
                        <p className="text-black font-roboto text-[25px] font-[600] leading-[40px] text-center ">A GitHub User App is a digital application focused on interacting with GitHub's user-related functionalities. It allows users to explore GitHub profiles, view repositories and other informations . Users can search for other GitHub users. The app facilitates seamless access to a wide array of GitHub features. </p>
                    </div>

                    <div className="border-b-4 border-blue-900"></div>

                    <div className="flex justify-between">
                    <a href="https://derutron.github.io/github_user/" target="_blank" rel="noopener noreferrer" className=" w-[120px] h-[50px] -mt-[55px] border-blue-500 border-2  flex justify-center rounded-md items-center">
                    <div>
                        <button className="text-[20px] font-bold">Go to App</button>
                    </div>
                    </a>

                    <a href="https://github.com/Derutron/github_user" target="_blank" rel="noopener noreferrer" className=" w-[140px] h-[50px] -mt-[55px] border-blue-500 border-2  flex justify-center rounded-md items-center">
                    <div>
                        <button className="text-[20px] font-bold">Go to GitHub</button>
                    </div>
                    </a>
                </div>
                </div>
            </div>


            {/* Project four */}
            <div className="flex justify-evenly w-[1600px] mt-20">
                <img
                className="w-[300px] h-[300px] rounded-md"
                src="src/resources/ecommerce.png"
                alt="Your Image"
                />

                {/* writeups */}
                <div className="writeups w-[1000px] h-[300px]">
                    <div className="title w-[1000px] h-[50px] mt-2">
                        <p className="text-[black] font-mono uppercase text-[40px] text-center font-bold">Audiophile E-commerce app</p>
                    </div>

                    <div className="description w-[1000px] h-[250px] flex items-center">
                        <p className="text-[black] font-roboto text-[25px] font-[600] leading-[40px] text-center ">The Audiophile E-commerce app is an online platform. It offers a curated selection of high-quality audio products, including headphones, speakers, and earphones. Users can explore detailed product information, make purchases, and enjoy a seamless shopping experience. The app incorporates responsive design for both desktop and mobile users, ensuring accessibility and convenience. It also features interactive elements, such as a mobile menu, product images, and a dynamic cart overlay. </p>
                    </div>

                    <div className="border-b-4 border-blue-900 mt-10"></div>

                    <div className="flex justify-between">
                    <a href="https://derutron.github.io/Audiophile_ecommerce/" target="_blank" rel="noopener noreferrer" className=" w-[120px] h-[50px] -mt-[55px] border-blue-500 border-2 flex justify-center rounded-md items-center">
                    <div>
                        <button className="text-[20px] font-bold">Go to App</button>
                    </div>
                    </a>

                    <a href="https://github.com/Derutron/Audiophile_ecommerce" target="_blank" rel="noopener noreferrer" className=" w-[140px] h-[50px] -mt-[55px] border-blue-500 border-2 flex justify-center rounded-md items-center">
                    <div>
                        <button className="text-[20px] font-bold">Go to GitHub</button>
                    </div>
                    </a>
                </div>
                </div>
            </div>
           
        </div>
        
    </div>
  )
}

export default Projects