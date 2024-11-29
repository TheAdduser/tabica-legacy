'use client';

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";
import { Button } from "../_components/ui/button";
import { Input } from "../_components/ui/input";
import { Card, CardHeader, CardContent, CardTitle } from "../_components/ui/card";

const registerSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  username: z.string().min(1, 'Username is required'),
});

const Register: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: any) => {
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to register');
      }

      const result = await response.json();
      console.log('User registered:', result);
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-800 via-green-600 to-green-300 text-white">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <Card className="relative w-full max-w-md p-4 bg-gray-800 border-black rounded shadow">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold text-white">Register</CardTitle>
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
              <label htmlFor="username" className="block text-sm font-medium text-gray-300">
                Username
              </label>
              <Input
                id="username"
                type="text"
                {...register("username")}
                className="mt-1 block w-full rounded px-4 py-2 text-black"
              />
              {errors.username && (
                <p className="mt-2 text-sm text-red-600">{errors.username.message}</p>
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
              Register
            </Button>
          </form>
          <div className="mt-4 text-center text-white">
            Already have an account? {" "}
            <Link href="/signin">
               <span className="underline text-green-300">Sign in here</span>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;