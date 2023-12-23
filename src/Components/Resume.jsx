const Resume = () => {
  return (
    <div className="w-[1600px] h-[350px] border-black border-[10px] rounded-[50px] bg-[#F5FCFF] ">
        <div className="w-[400px] h-[100px] -mt-[60px] mx-[auto] flex justify-center items-center bg-[#F5FCFF]">
            <p className="font-[Rockwell] font-bold text-6xl">My Resume</p>
        </div>

        <div className="summary w-[200px] h-[70px] -mt-12 ml-12 flex justify-center items-center">
            <p className="font-mono uppercase text-[35px] font-[700]">Summary</p>
        </div>
        <div className="w-[1400px] h-[200px] mx-[auto]">
            <p className="font-mono text-[25px] font-[700]">Frontend Developer with approximately 1 year of experience as a Web Developer. The professional journey began over 10 years ago as an Electrical Engineer. Throughout 12 months in the Tech career, expertise has been developed in frontend and software projects with skillset in HTML, CSS, JavaScript and React. Possesses collaborative abilities and finds satisfaction in collective efforts, leading groups towards shared objectives.</p>
        </div>
    </div>
  )
}

export default Resume