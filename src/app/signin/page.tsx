'use client';

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "../_components/ui/button";
import { Input } from "../_components/ui/input";
import { Card, CardHeader, CardContent, CardTitle } from "../_components/ui/card";

const signInSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

const SignIn: React.FC = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (data: any) => {
    try {
      const response = await fetch('/api/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to sign in');
      }

      const result = await response.json();
      console.log('User signed in:', result);
      router.push('/');
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-800 via-green-600 to-green-300 text-white">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <Card className="relative w-full max-w-md p-4 bg-gray-800 border-black rounded shadow">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold text-white">Sign In</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                className="mt-1 block w-full rounded px-4 py-2 text-black"
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                Password
              </label>
              <Input
                id="password"
                type="password"
                {...register("password")}
                className="mt-1 block w-full rounded px-4 py-2 text-black"
              />
              {errors.password && (
                <p className="mt-2 text-sm text-red-600">{errors.password.message}</p>
              )}
            </div>
            <Button type="submit" className="w-full mt-4 rounded px-4 py-2">
              Sign In
            </Button>
          </form>
          <div className="mt-4 text-center text-white">
            If it's your first time here, create an account{" "}
            <Link href="/register">
              <span className="underline text-green-300">here</span>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignIn;