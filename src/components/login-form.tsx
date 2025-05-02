/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
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
import { useState } from "react"
import { useRouter } from "next/navigation" // ✅ app router
import { signIn } from "@/lib/auth"

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
})

type LoginSchema = z.infer<typeof loginSchema>

export function LoginForm() {
  const [authError, setAuthError] = useState("")
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (data: LoginSchema) => {
    setAuthError("")
    try {
      const user = await signIn(data.email, data.password)
      console.log("Signed in:", user)
      router.push("/dashboard")
    } catch (error: any) {
      console.error("Error signing in:", error.message)
      setAuthError("Invalid email or password.")
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Welcome back</CardTitle>
          <CardDescription>Login with your Apple or Google account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6">
            {/* Social login buttons (placeholders) */}
            <div className="flex flex-col gap-4">
              <Button variant="outline" className="w-full bg-gray-800 text-white hover:bg-gray-700">
                {/* Apple icon */}
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.152 6.896c-...z" />
                </svg>
                Login with Apple
              </Button>

              <Button variant="outline" className="w-full bg-gray-800 text-white hover:bg-gray-700">
                {/* Google icon */}
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.48 10.92v...z" />
                </svg>
                Login with Google
              </Button>
            </div>

            <div className="relative text-center text-sm">
              <span className="relative z-10 bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
              <div className="absolute inset-0 flex items-center border-t border-border" />
            </div>

            {/* Email */}
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" {...register("email")} placeholder="m@example.com" />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            {/* Password */}
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a href="#" className="ml-auto text-sm underline hover:underline-offset-4">
                  Forgot your password?
                </a>
              </div>
              <Input id="password" type="password" {...register("password")} />
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>

            {/* Auth error */}
            {authError && <p className="text-red-500 text-sm text-center">{authError}</p>}

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gray-800 text-white hover:bg-gray-700"
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </Button>

            <div className="text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/auth/signup" className="underline underline-offset-4">
                Sign up
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>

      <div className="text-center text-xs text-muted-foreground">
        By clicking continue, you agree to our{" "}
        <a href="#" className="underline hover:text-primary">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="#" className="underline hover:text-primary">
          Privacy Policy
        </a>
        .
      </div>
    </div>
  )
}
