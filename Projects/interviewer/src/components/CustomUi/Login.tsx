"use client"

import {Card, CardContent} from '../ui/card';
import { Button } from '../ui/button';
import { FcGoogle } from "react-icons/fc";
import {auth, googleProvider } from '@/firebase/client';
import { signInWithPopup } from 'firebase/auth';
import { signupWithGoogle } from '@/lib/action/auth.action';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

function Login() {
    
    const router=useRouter();
    const handleGoogleSignIn = async() => {
      try{
        const result = await signInWithPopup(auth, googleProvider);
        const user = result.user;
        const idToken = await user.getIdToken();

        const response=await signupWithGoogle({
          idToken,
          uid: user.uid,
          name: user.displayName ?? "",
          email: user.email ?? "",
        })
        console.log("User signed in:", response);

        if(!response.success) {
          toast.error(response.message || "Failed to sign in");
          return;
        }

        toast.success("Successfully signed in with Google!");
        router.push("/dashboard");

      }catch(error: unknown){
        console.error("Error during Google sign-in:", error);
        toast.error("Error signing in with Google:");
      }

    }

  return (
    <div className="background">
      <Card className="w-full max-w-md bg-gray-900/90 backdrop-blur-xl shadow-2xl border-cyan-700 rounded">
        <CardContent className='flex justify-center items-center text-center flex-col gap-4 py-10'>
            <div className="text-logo">
                AI
            </div>
            <h1 className='text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600 select-none'>
                English Speaking Friend
            </h1>
            <p className='text-md text-gray-400 max-w-xs'>
                A platform to practice English conversation
            </p>
            <Button 
                onClick={handleGoogleSignIn} 
                className='cursor-pointer mt-10 w-full  flex items-center justify-center gap-4 rounded bg-cyan-700 text-cyan-100 shadow-md hover:bg-cyan-600 hover:text-white focus:bg-cyan-600 focus:text-white' 
            >
                <FcGoogle size={30} />
                Continue with Google
            </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default Login;