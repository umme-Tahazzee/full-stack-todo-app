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
import AppLogo from "../AppLogo"
import EmailInput from './../EmailInput';
import Password from './../Password';

const page = () => {
 return (
  <div className="w-full max-w-md"
  >
   <AppLogo />
   <Card className="w-full max-w-md py-5">
    <CardHeader className="mb-4">
     <CardTitle className="text-2xl">Sign Up</CardTitle>
     <CardDescription>
      Enter your email below to login to your account
     </CardDescription>

    </CardHeader>
    <CardContent>
     <form>
      <div className="flex flex-col gap-6">
      
       <EmailInput/>

        <Password name="Password" label="Your Password...." />

        <Password name="Confirm Password" label="Your Confirm Password" />
       
       
        <CardContent className=" flex justify-between items-center text-md">
         <p className="text-muted-foreground">Already have an account?</p>
         <Button variant="link">
            <Link href={"/"} >Sign In</Link>
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

export default page
