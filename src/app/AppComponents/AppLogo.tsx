import { FaCheckDouble } from "react-icons/fa6"


const AppLogo = () => {

 return (
  <div className="flex gap-2 items-center mb-11 
  justify-center " >
   <div className="bg-green-600 
            rounded-sm  p-2" >
    <FaCheckDouble className="size-6 text-white " />
   </div>


   <div className="">
    <h1 className="text-2xl font-semibold
           ">
     <span className="text-green-600">
      Quick
     </span>
     {" "}
     Task
    </h1>


   </div>
  </div>
 )

}

export default AppLogo