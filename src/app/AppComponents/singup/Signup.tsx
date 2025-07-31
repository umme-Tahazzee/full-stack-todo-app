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
       <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
         id="email"
         type="email"
         placeholder="m@example.com"
         required
        />
       </div>
       <div className="grid gap-2">
        <div className="flex items-center">
         <Label htmlFor="password">Password</Label>
        
        </div>
        <Input id="password" type="password" placeholder="Your Password..." required />
       
       </div>
       <div className="grid gap-2">
        <div className="flex items-center">
         <Label htmlFor="password">Confrim Password</Label>
        
        </div>
        <Input id="password" type="password" placeholder="Your Confirm Password" required />
       
       </div>

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
