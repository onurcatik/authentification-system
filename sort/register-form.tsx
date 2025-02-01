
"use client";

import * as z from "zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { RegisterSchema } from "@/schemas";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/form-error";
import { FormSucess } from "@/components/form-sucess";
import { register } from "@/actions/register";

const RegisterForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [sucess, setSucess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError("");
    setSucess("");

    startTransition(() => {
      register(values).then((data) => {
        setError(data.error);
        setSucess(data.sucess);
      });
    });
  };

  return (
    <div className="font-[sans-serif] bg-white md:h-screen h-full">
      <div className="grid md:grid-cols-2 items-center gap-8 h-full ">
        <div className="max-md:order-1 p-4">
          <img
            src="https://readymadeui.com/login-image.webp"
            className="lg:max-w-[85%] w-full h-full object-contain block pl-36 "
            alt="login-image"
          />
        </div>

        <div className="flex items-center md:p-8 p-6 bg-blue-500 h-full lg:w-11/12 lg:ml-auto w-[630px]">
        {/* bg-[#0C172C] */}
        <div className=" rounded-lg p-8 max-w-md  max-md:auto lg:ml-28  border-2 border-collapse border-white relative left-40 ">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="max-w-lg w-full mx-auto"
            >
              <div className="mb-12">
                <h3 className="text-3xl font-bold text-white relative left-10 top-4">
                  Create an account
                </h3>
              </div>

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white text-xs block mb-2">
                      Full Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="Enter name"
                        className="w-[360px] bg-transparent text-sm text-black bg-white border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none placeholder:text-black"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white text-xs block mb-2">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="Enter email"
                        type="email"
                        className="w-[360px] bg-transparent text-sm text-black bg-white border-gray-300  px-2 py-3 outline-none placeholder:text-black"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white text-xs block mb-2">
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="Enter password"
                        type="password"
                        className="w-[360px] bg-transparent text-sm text-black bg-white border-gray-300  px-2 py-3 outline-none placeholder:text-black"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              

              <FormError message={error} />
              <FormSucess message={sucess} />

              <div className="mt-12">
                <Button
                  type="submit"
                  className="w-[360px] shadow-xl py-3 px-6 text-sm text-white font-semibold rounded-md bg-transparent bg-yellow-400 hover:bg-yellow-500 focus:outline-none"
                >
                  Register
                </Button>
                <p className="text-sm text-white mt-8">
                  Already have an account?
                  <a
                    href="/auth/login"
                    className="text-white font-semibold hover:underline ml-1"
                  >
                    Login here
                  </a>
                </p>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default RegisterForm;
