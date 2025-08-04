import { Button } from "@/components/ui/button"

import {
 Card,
 CardAction,
 CardContent,
 CardDescription,
 CardFooter,
 CardHeader,
 CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import Link from "next/link"
import AppLogo from './../AppLogo';
import EmailInput from './../EmailInput';
import Password from './../Password';





const Signin = () => {
 return (
  <div className="w-full max-w-md"
  >
   <AppLogo />
   <Card className="w-full max-w-md py-5">
    <CardHeader className="mb-4">
     <CardTitle className="text-2xl">Login</CardTitle>
     <CardDescription>
      Enter your email below to login to your account
     </CardDescription>

    </CardHeader>
    <CardContent className="grid grid-5 mt-3">
     <form>
      <div className="flex flex-col gap-6">

       <EmailInput/>


       <Password name="Password" label="Forgot your password?" />


         <CardContent className=" flex justify-between items-center text-md">
         <p className="text-muted-foreground">Don&apos;t have an account?</p>
         <Button variant="link">
            <Link href={"/sing-up"} >Sign Up</Link>
         </Button>
        </CardContent>
      </div>
     </form>


    </CardContent>
    <CardFooter className="flex-col gap-2">
     <Button type="submit" className="w-full  bg-green-600 text-white">
      Login
     </Button>
     <Button variant="outline" className="w-full">
     Create an account
     </Button>
    </CardFooter>
   </Card>
  </div>
 )
}

export default Signin
