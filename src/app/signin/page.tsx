'use client'

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "../_components/ui/button";
import { Input } from "../_components/ui/input";
import { Card, CardHeader, CardContent, CardTitle } from "../_components/ui/card";

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const SignIn: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
    // Handle sign-in logic here

  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <Card className="w-full max-w-md p-4 bg-gray-800 border-black rounded shadow">
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
            <Button type="submit" className="w-full mt-4 bg-blue-600 text-white rounded px-4 py-2">
              Sign In
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignIn;