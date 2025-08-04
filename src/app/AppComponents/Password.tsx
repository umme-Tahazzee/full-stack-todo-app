import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'
import { ErrorMsg } from './ErrorMsg';

const Password = ({ name, label }:
 { name: string; label: string }) => {

 return (
  <div className="grid gap-2 relative">
   <div className="flex items-center">
    <Label htmlFor="password">{name}</Label>
    <a
     href="#"
     className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
    >
    {label}
    </a>
   </div>
   <Input id="password" type="password" placeholder="Your Password..." required />
   <ErrorMsg message="Invalid Password"  />


  </div>
 )
}

export default Password