"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { signupSchema, SignupSchemaType } from "@/schemas/signup-schema"

export default function SignupForm({
  className,
  searchParams,
  ...props
}: React.ComponentPropsWithoutRef<"div"> & { searchParams?: any }) {
    
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupSchemaType>({
    resolver: zodResolver(signupSchema),
  })

  const onSubmit = (data: SignupSchemaType) => {
    console.log("Form Data:", data)
  }

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
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-6">
                {/* Social Signups */}
                <div className="flex flex-col gap-4">
                  <Button variant="outline" className="w-full flex items-center justify-center gap-2 bg-gray-800 cursor-pointer hover:text-white text-white hover:bg-gray-700 hover:scale-105 duration-500">
                    {/* Apple Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5">
                      <path d="..." fill="currentColor" />
                    </svg>
                    Sign up with Apple
                  </Button>
                  <Button variant="outline" className="w-full flex items-center justify-center gap-2 bg-gray-800 hover:text-white text-white cursor-pointer hover:bg-gray-700 hover:scale-105 duration-500">
                    {/* Google Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5">
                      <path d="..." fill="currentColor" />
                    </svg>
                    Sign up with Google
                  </Button>
                </div>

                <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                  <span className="relative z-10 bg-background px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>

                {/* Zod-validated Inputs */}
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
                  <Button type="submit" className="w-full bg-gray-800 cursor-pointer text-white hover:bg-gray-700 hover:scale-105 duration-500">
                    Create Account
                  </Button>
                </div>

                <div className="text-center text-sm">
                  Already have an account?{" "}
                  <Link href={"/login"} className="underline underline-offset-4">
                    Login
                  </Link>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="mt-4 text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary">
          By creating an account, you agree to our{" "}
          <Link href={""}>Terms of Service</Link> and{" "}
          <Link href={""}>Privacy Policy</Link>.
        </div>
      </div>
    </div>
  )
}
