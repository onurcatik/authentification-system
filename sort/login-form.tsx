"use client";

import * as z from "zod";
import { useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { LoginSchema } from "@/schemas";

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
import CardWrapper from "@/components/auth/card-wrapper";
import { FormError } from "@/components/form-error";
import { FormSucess } from "@/components/form-sucess";

import { login } from "@/actions/login";

const LoginForm = () => {
  const [showTwoFactor, setShowTwoFactor] = useState(false);
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Email already in use with different Provider!"
      : "";

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      login(values, callbackUrl)
        .then((data) => {
          if (data?.error) {
            form.reset();
            setError(data?.error);
          }

          if (data?.success) {
            form.reset();
            setSuccess(data?.success);
          }

          if (data?.twoFactor) {
            setShowTwoFactor(true);
          }
        })
        .catch(() => setError("Something went wrong"));
    });
  };

  return (
    <div className="font-[sans-serif] bg-white md:h-screen h-full ">
      <div className="grid md:grid-cols-2 items-center gap-8 h-full ">
        <div className="max-md:order-1 p-4">
          <img
            src="https://readymadeui.com/login-image.webp"
            className="lg:max-w-[85%] w-full h-full object-contain block pl-36"
            alt="login-image"
          />
        </div>

        <div className="flex items-center md:p-8 p-4 bg-blue-500 h-full lg:w-11/12 lg:ml-auto  w-[630px]">
          {/* Login Form */}
          <div className=" rounded-none p-4 max-w-md  max-md:auto lg:ml-24 relative left-40">
            <CardWrapper
              headerLabel="Login"
              backButtonLabel="Don't have an account?"
              backButtonHref="/auth/register"
              showSocial
            >
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6 p-0"
                   // className="space-y-6 bg-gradient-to-br from-blue-500 via-blue-500 to-blue-500 p-8 rounded-xl shadow-lg backdrop-blur-md"
                >
                  <div className="space-y-4">
                    {showTwoFactor ? (
                      <FormField
                        control={form.control}
                        name="code"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-semibold text-white">
                              Two Factor Code
                            </FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                disabled={isPending}
                                placeholder="******"
                                className="bg-white/10 text-white border-none focus:ring-2 focus:ring-purple-400"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    ) : (
                      <>
                      
                        {/* Email */}
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm font-semibold text-white">
                                Email
                              </FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  disabled={isPending}
                                  placeholder="example@example.com"
                                  type="email"
                                  className="bg-white w-[360px] text-black border-none focus:ring-2 focus:ring-blue-400 placeholder:text-black"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        {/* Password */}
                        <FormField
                          control={form.control}
                          name="password"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm font-semibold text-white">
                                Password
                              </FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  disabled={isPending}
                                  placeholder="******"
                                  type="password"
                                  className="bg-white w-[360px] text-black border-none focus:ring-2 focus:ring-pink-400 placeholder:text-black"
                                />
                              </FormControl>
                              <Button
                                size="sm"
                                variant="link"
                                asChild
                                className="text-white hover:underline"
                              >
                                <Link href="/auth/reset">Forgot password?</Link>
                              </Button>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </>
                    )}
                  </div>
                  <FormError message={error || urlError} />
                  <FormSucess message={success} />
                  <Button
                    disabled={isPending}
                    type="submit"
                    className="w-[360px] py-3 bg-gradient-to-r from-blue-700 to-blue-700 text-white rounded-lg hover:from-blue-900 hover:to-blue-900 shadow-lg transition-transform transform hover:scale-105"
                  >
                    {showTwoFactor ? "Confirm" : "Login"}
                  </Button>
                </form>
              </Form>
            </CardWrapper>
          </div>
          {/* Image Section */}
          
        </div>
      </div>
    </div>
  );
};

export default LoginForm;


