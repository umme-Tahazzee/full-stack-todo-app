import React from 'react'
import { ErrorMsg } from './ErrorMsg';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

const EmailInput = () => {
  return (
    
  <div className="grid gap-2 relative">
    <Label htmlFor="email">Email</Label>
  
    <Input
      id="email"
      type="email"
      placeholder="m@example.com"
      required
    />
    <ErrorMsg message="email required" />
 
  </div>



   
  )
}

export default EmailInput