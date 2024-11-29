'use client';

import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '../_components/ui/button';
import { Input } from '../_components/ui/input';
import { Card, CardHeader, CardContent, CardTitle } from '../_components/ui/card';
import { getUserData } from './page.server';

const accountSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  username: z.string().min(1, 'Username is required'),
  email: z.string().email('Invalid email address'),
});

const AccountForm = ({ user }: { user: any }) => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    resolver: zodResolver(accountSchema),
  });

  useEffect(() => {
    if (user) {
      setValue('name', user.usr_name);
      setValue('username', user.usr_username);
      setValue('email', user.usr_email);
    }
  }, [user, setValue]);

  const onSubmit = async (formData: any) => {
    const updatedUser = await fetch('/api/updateUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: user.usr_id, ...formData }),
    }).then(res => res.json());
    console.log(updatedUser);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <Card className="w-full max-w-md p-4 bg-gray-800 border-black rounded shadow">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold text-white">Account Information</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                Name
              </label>
              <Input
                id="name"
                type="text"
                {...register('name')}
                className="mt-1 block w-full rounded px-4 py-2 text-black"
              />
              {errors.name && (
                <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-300">
                Username
              </label>
              <Input
                id="username"
                type="text"
                {...register('username')}
                className="mt-1 block w-full rounded px-4 py-2 text-black"
              />
              {errors.username && (
                <p className="mt-2 text-sm text-red-600">{errors.username.message}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <Input
                id="email"
                type="email"
                {...register('email')}
                className="mt-1 block w-full rounded px-4 py-2 text-black"
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>
            <Button type="submit" className="w-full mt-4 rounded px-4 py-2">
              Update
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

const Account = async () => {
  const user = await getUserData(1);
  return <AccountForm user={user} />;
};


export default Account;