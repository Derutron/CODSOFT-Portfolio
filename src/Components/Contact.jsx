const Contact = () => {
  return (
    <div className="w-[1600px] h-[400px]">

        <div className="w-[800px] h-[390px] bg-[#F5FCFF] mx-[auto] flex justify-center items-center">
        {/* Contact Us  */}
        <div className="w-[350px] h-[90px] flex-shrink-0 absolute top-[70px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <p className="text-blue-700 text-center font-poppins text-5xl font-extrabold uppercase">Contact me</p>
          </div>

        {/* The three Contacts */}

        <div className="threeContact ml-[250px] w-[1200px] flex-shrink-0 absolute top-[200px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
           
           {/* Mail */}
       <div className="mail w-[1000px] flex justify-between mb-5">
       <img
         className="w-[30px] h-[30px]"
         src="src/resources/mail.jpg"
         alt="Your Image"
       />

       <div className="w-[900px]">
         <p className="text-gray-900 font-mono text-[25px] font-bold leading-normal">fidg_1@yahoo.com</p>
       </div>
       </div>



              {/* Call */}
              <div className="mail w-[1000px] flex justify-between mb-5">
       <img
         className="w-[30px] h-[30px]"
         src="src/resources/call.jpg"
         alt="Your Image"
       />

       <div className="w-[900px]">
         <p className="text-gray-900 font-mono text-[25px] font-bold leading-normal">+234-803-7491-748</p>
       </div>
       </div>



              {/* Location */}
              <div className="mail w-[800px] flex gap-[70px] items-center">
       <img
         className="w-[30px] h-[30px]"
         src="src/resources/location.jpg"
         alt="Your Image"
       />

       <div className="w-[600px] h-[50px] ">
         <p className="text-gray-900 font-mono text-[25px] font-bold leading-normal">11 Third Lane off summot road, Osisioma, aba, Abia state, Nigeria.</p>
       </div>
       </div>

     </div>

     </div>

    </div>
  )
}

export default Contact