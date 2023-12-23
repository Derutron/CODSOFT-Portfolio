

const Skills = () => {
  return (
    <div className="main w-[1600px] h-[750px] bg-[#F5FCFF] mt-20">
        <div className="w-[900px] h-[50px] border-[0px] border-black mx-auto flex justify-center items-center">
            <p className="text-black text-center uppercase font-montserrat text-[50px] font-bold tracking-[20px]">My Skills</p>
        </div>



        {/* list of skills in columns */}
        <div className="w-[1600px] h-[750px] flex justify-between mt-[50px] ml-[80px]">
            {/* column one */}
            <div className="columnOne">
                <div className="w-[200px] h-[70px] mt-10">
                    <p className="text-black text-center font-montserrat text-[30px]
                    font-[700] uppercase tracking-widest">Front-end</p>
                </div>

                {/* The various skills */}
                <div className="w-[500px] h-[750px] flex flex-col space-y-10 ">
                    {/* Hypertext Markup Language */}
                    <div className="flex items-center gap-5">
                        <img
                        className="w-[50px] h-[50px] rounded-md"
                        src="src/resources/html.png"
                        alt="Your Image"
                        />

                        <div>
                            <p className="text-black font-montserrat text-[30px] font-normal tracking-widest">HTML</p>
                        </div>
                    </div>


                    {/* Cascading Style Sheets */}
                    <div className="flex items-center gap-5">
                        <img
                        className="w-[50px] h-[50px] rounded-md"
                        src="src/resources/css.png"
                        alt="Your Image"
                        />

                        <div>
                            <p className="text-black font-montserrat text-[30px] font-normal tracking-widest">CSS</p>
                        </div>
                    </div>

                    {/* JavaScript */}
                    <div className="flex items-center gap-5">
                        <img
                        className="w-[50px] h-[50px] rounded-md"
                        src="src/resources/javaScript.png"
                        alt="Your Image"
                        />

                        <div>
                            <p className="text-black font-montserrat text-[30px] font-normal tracking-widest">JavaScript</p>
                        </div>
                    </div>

                    {/* Responsive Design */}
                    <div className="flex items-center gap-5">
                        <img
                        className="w-[50px] h-[50px] rounded-md"
                        src="src/resources/responsive.png"
                        alt="Your Image"
                        />

                        <div>
                            <p className="text-black font-montserrat text-[30px] font-normal tracking-widest">Responsive Design</p>
                        </div>
                    </div>

                    {/* Frameworks-React */}
                    <div className="flex items-center gap-5">
                        <img
                        className="w-[50px] h-[50px] rounded-md"
                        src="src/resources/react.png"
                        alt="Your Image"
                        />

                        <div>
                            <p className="text-black font-montserrat text-[30px] font-normal tracking-widest">Frameworks-React</p>
                        </div>
                    </div>


                       {/* Figma design */}
                       <div className="flex items-center gap-5">
                        <img
                        className="w-[50px] h-[50px] rounded-md"
                        src="src/resources/figma.png"
                        alt="Your Image"
                        />

                        <div>
                            <p className="text-black font-montserrat text-[30px] font-normal tracking-widest">Figma</p>
                        </div>
                    </div>



                </div>
            </div>

            {/* column two */}
            <div className="columnTwo">
                <div className="w-[260px] h-[70px] mt-10">
                    <p className="text-black text-center font-montserrat text-[30px]
                    font-[700] uppercase tracking-widest">Back-End/Git</p>
                </div>

                 {/* The various skills */}
                 <div className="w-[500px] h-[750px] flex flex-col space-y-10 ">
                    {/* API  Integration */}
                    <div className="flex items-center gap-5">
                        <img
                        className="w-[50px] h-[50px] rounded-md"
                        src="src/resources/api.png"
                        alt="Your Image"
                        />

                        <div>
                            <p className="text-black font-montserrat text-[30px] font-normal tracking-widest">API  Integration</p>
                        </div>
                    </div>


                    {/* Git Commands */}
                    <div className="flex items-center gap-5">
                        <img
                        className="w-[50px] h-[50px] rounded-md"
                        src="src/resources/gitCommands.png"
                        alt="Your Image"
                        />

                        <div>
                            <p className="text-black font-montserrat text-[30px] font-normal tracking-widest">Git Commands</p>
                        </div>
                    </div>


                     {/* GitHub */}
                     <div className="flex items-center gap-5">
                        <img
                        className="w-[50px] h-[50px] rounded-md"
                        src="src/resources/GitHub.png"
                        alt="Your Image"
                        />

                        <div>
                            <p className="text-black font-montserrat text-[30px] font-normal tracking-widest">GitHub</p>
                        </div>
                    </div>
                </div>
            </div>




            {/* column three */}
            <div className="columnThree">
                <div className="w-[350px] h-[70px] ml-[50px] mt-3">
                    <p className="text-black text-center font-montserrat text-[30px]
                    font-[700] uppercase tracking-widest">Responsive Design<br></br>Web Dev</p>
                </div>

                 {/* The various skills */}
                <div className="w-[500px] h-[700px] mt-5 mr-[100px] flex flex-col space-y-5 ">
                    {/* Tailwind CSS */}
                    <div className="flex items-center gap-5">
                        <img
                        className="w-[60px] h-[60px] rounded-md ml-[50px]"
                        src="src/resources/tailwind.png"
                        alt="Your Image"
                        />

                        <div>
                            <p className="text-black font-montserrat text-[30px] font-normal tracking-widest">Tailwind CSS</p>
                        </div>
                    </div>


                     {/* Media Queries */}
                    <div className="flex items-center gap-5">
                        <img
                        className="w-[60px] h-[60px] rounded-md ml-[50px]"
                        src="src/resources/mediaQuerry.png"
                        alt="Your Image"
                        />

                        <div>
                            <p className="text-black font-montserrat text-[30px] font-normal tracking-widest">Media Queries</p>
                        </div>
                    </div>


                    
                     {/* Package Managers-npm */}
                     <div className="flex items-center gap-5">
                        <img
                        className="w-[60px] h-[60px] rounded-md ml-[50px]"
                        src="src/resources/npm.png"
                        alt="Your Image"
                        />

                        <div className="w-[300px] -ml-6">
                            <p className="text-black text-center font-montserrat text-[30px] font-normal">Package Managers (npm)</p>
                        </div>
                    </div>


                    {/* Code Editors (Visual Studio Code) */}
                    <div className="flex items-center gap-5">
                        <img
                        className="w-[60px] h-[60px] rounded-md ml-[50px]"
                        src="src/resources/vscode.png"
                        alt="Your Image"
                        />

                        <div className="w-[300px] -ml-6">
                            <p className="text-black text-center font-montserrat text-[30px] font-normal">Code Editors<br></br>(Visual Studio Code)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="border-b-4 border-blue-300 -mt-20"></div>
    </div>
  )
}

export default Skills