/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema, SignupSchemaType } from "@/schemas/signup-schema";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { confirmSignUp, signUp } from "@/lib/auth";

export default function SignupForm({
  className,
}: React.ComponentPropsWithoutRef<"div">) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupSchemaType>({
    resolver: zodResolver(signupSchema),
  });

  const [codeSent, setCodeSent] = useState(false);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [serverError, setServerError] = useState("");
  const router = useRouter();

  const handleSignUp = async (data: SignupSchemaType) => {
    setServerError("");
    try {
      setEmail(data.email); // store email for confirmation
      await signUp(data.email, data.password);
      setCodeSent(true);
    } catch (error: any) {
      setServerError(error.message || "Signup failed");
    }
  };

  const handleConfirm = async () => {
    try {
      await confirmSignUp(email, code);
      router.push("/signin");
    } catch (error: any) {
      setServerError(error.message || "Confirmation failed");
    }
  };

  return (
    <div className={cn("flex justify-center px-4 pb-8 sm:px-6 lg:px-8 py-10", className)}>
      <div className="w-full max-w-md">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-xl">Create an account</CardTitle>
            <CardDescription>
              Sign up with Apple or Google to get started
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!codeSent ? (
              <form onSubmit={handleSubmit(handleSignUp)}>
                <div className="grid gap-6">
                  {/* Social Signups */}
                  <div className="flex flex-col gap-4">
                    <Button variant="outline" className="w-full flex items-center justify-center gap-2 bg-gray-800 cursor-pointer text-white hover:bg-gray-700 hover:scale-105 duration-500">
                      {/* Apple Icon */}
                       Sign up with Apple
                    </Button>
                    <Button variant="outline" className="w-full flex items-center justify-center gap-2 bg-gray-800 text-white cursor-pointer hover:bg-gray-700 hover:scale-105 duration-500">
                      {/* Google Icon */}
                      G Sign up with Google
                    </Button>
                  </div>

                  <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                    <span className="relative z-10 bg-background px-2 text-muted-foreground">
                      Or continue with
                    </span>
                  </div>

                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" type="text" placeholder="John Doe" {...register("name")} />
                      {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="m@example.com" {...register("email")} />
                      {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" type="password" {...register("password")} />
                      {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
                    </div>
                    <Button type="submit" className="w-full bg-gray-800 text-white hover:bg-gray-700 hover:scale-105 duration-500">
                      Create Account
                    </Button>
                  </div>

                  {serverError && <p className="text-center text-sm text-red-600 mt-2">{serverError}</p>}

                  <div className="text-center text-sm">
                    Already have an account?{" "}
                    <Link href="/auth/login" className="underline underline-offset-4">
                      Login
                    </Link>
                  </div>
                </div>
              </form>
            ) : (
              <div className="space-y-4">
                <p>We’ve sent a verification code to your email. Please confirm to complete signup.</p>
                <Input
                  placeholder="Enter verification code"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                />
                <Button onClick={handleConfirm} className="w-full bg-gray-800 text-white hover:bg-gray-700 hover:scale-105 duration-500">
                  Confirm Account
                </Button>
                {serverError && <p className="text-sm text-red-600">{serverError}</p>}
              </div>
            )}
          </CardContent>
        </Card>

        <div className="mt-4 text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary">
          By creating an account, you agree to our{" "}
          <Link href="">Terms of Service</Link> and{" "}
          <Link href="">Privacy Policy</Link>.
        </div>
      </div>
    </div>
  );
}
