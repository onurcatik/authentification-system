// "use client";

// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";
// import { Input } from "../../components/ui/input";
// import { useSearchParams } from "next/navigation";

// import CardWrapper from "../auth/card-wrapper";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { LoginSchema } from "@/schemas";
// import { Button } from "../ui/button";
// import { FormError } from "../form-error";
// import { FormSucess } from "../form-sucess";
// import {login} from "../../actions/login"
// import { useState, useTransition } from "react";

// export const LoginForm = () => {

//   const [isPending, startTransition] = useTransition();
//   const [error, setError] = useState<string | undefined>("");
//   const [success, setSuccess] = useState<string | undefined>("");
//   const [showTwoFactor, setShowTwoFactor] = useState(false);

//   const searchParams = useSearchParams();
//   const callbackUrl = searchParams.get("callbackUrl");
//   const urlError =
//     searchParams.get("error") === "OAuthAccountNotLinked"
//       ? "Email already in use with different Provider!"
//       : "";

//   const form = useForm<z.infer<typeof LoginSchema>>({
//     resolver: zodResolver(LoginSchema),
//     defaultValues: {
//       email: "",
//       password: "",
//     },
//   });

//   const onSubmit = (values: z.infer<typeof LoginSchema>) => {

//     setError("")
//     setSuccess("")

//        startTransition(() => {
//       login(values )
//         .then((data) => {
//           setError(data.error)
//           setSuccess(data.success)

//           if (data?.twoFactor) {
//             setShowTwoFactor(true);
//           }
//         })

//     });
//   };

//   return (
//     <CardWrapper
//       headerLabel="Welcome back"
//       backButtonLabel="Don't have an account?"
//       backButtonHref="/auth/register"
//       showSocial
//     >
//       <Form {...form}>
//         {/* <form onSubmit={form.handleSubmit(() => {onSubmit})} className="space-y-6"> */}
//         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//           <div className="space-y-4">
//             <FormField
//               control={form.control}
//               name="email"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Email</FormLabel>
//                   <FormControl>
//                     <Input
//                       {...field}
//                       disabled= {isPending}
//                       placeholder="john.doe@example.com"
//                       type="email"
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="password"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Password</FormLabel>
//                   <FormControl>
//                     <Input {...field} placeholder="*******" type="password" />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </div>
//          <FormError message={error || urlError }/>
//           <FormSucess message={success}/>
//           <Button
//           disabled= {isPending}
//           type="submit"
//           className="w-full"
//           >
//              Login
//           </Button>
//         </form>
//       </Form>
//     </CardWrapper>
//   );
// };

// export default LoginForm;

// "use client";

// import * as z from "zod";
// import { useState, useTransition } from "react";
// import { useSearchParams } from "next/navigation";
// import Link from "next/link";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";

// import { LoginSchema } from "@/schemas";

// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import CardWrapper from "@/components/auth/card-wrapper";
// import { FormError } from "@/components/form-error";
// import { FormSucess } from "@/components/form-sucess";

// import { login } from "@/actions/login";

// const LoginForm = () => {
//   const [showTwoFactor, setShowTwoFactor] = useState(false);
//   const [error, setError] = useState<string | undefined>("");
//   const [success, setSuccess] = useState<string | undefined>("");
//   const [isPending, startTransition] = useTransition();

//   const searchParams = useSearchParams();
//   const callbackUrl = searchParams.get("callbackUrl");
//   const urlError =
//     searchParams.get("error") === "OAuthAccountNotLinked"
//       ? "Email already in use with different Provider!"
//       : "";

//   const form = useForm<z.infer<typeof LoginSchema>>({
//     resolver: zodResolver(LoginSchema),
//     defaultValues: {
//       email: "",
//       password: "",
//     },
//   });

//   const onSubmit = (values: z.infer<typeof LoginSchema>) => {
//     setError("");
//     setSuccess("");

//     startTransition(() => {
//       login(values, callbackUrl)
//         .then((data) => {
//           if (data?.error) {
//             form.reset();
//             setError(data?.error);
//           }

//           if (data?.success) {
//             form.reset();
//             setSuccess(data?.success);
//           }

//           if (data?.twoFactor) {
//             setShowTwoFactor(true);
//           }
//         })
//         .catch(() => setError("Something went wrong"));
//     });
//   };

//   return (

    
//     <CardWrapper
//       headerLabel="Login"
//       backButtonLabel="Don't have an account?"
//       backButtonHref="/auth/register"
//       showSocial
      
//     >
//       <Form {...form}>
//         <form
//           onSubmit={form.handleSubmit(onSubmit)}
//           className="space-y-6 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 p-8 rounded-xl shadow-lg backdrop-blur-md"
//         >
//           <div className="space-y-4">
//             {showTwoFactor && (
//               <>
//                 {/* 2FA */}
//                 <FormField
//                   control={form.control}
//                   name="code"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel className="text-sm font-semibold text-white">
//                         Two Factor Code
//                       </FormLabel>
//                       <FormControl>
//                         <Input
//                           {...field}
//                           disabled={isPending}
//                           placeholder="******"
//                           className="bg-white/10 text-white border-none focus:ring-2 focus:ring-purple-400"
//                         />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//               </>
//             )}
//             {!showTwoFactor && (
//               <>
//                 {/* Email */}
//                 <FormField
//                   control={form.control}
//                   name="email"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel className="text-sm font-semibold text-white">
//                         Email
//                       </FormLabel>
//                       <FormControl>
//                         <Input
//                           {...field}
//                           disabled={isPending}
//                           placeholder="example@example.com"
//                           type="email"
//                           className="bg-white/10 text-white border-none focus:ring-2 focus:ring-blue-400 placeholder:text-white"
//                         />
//                       </FormControl>

//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />

//                 {/* Password */}
//                 <FormField
//                   control={form.control}
//                   name="password"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel className="text-sm font-semibold text-white">
//                         Password
//                       </FormLabel>
//                       <FormControl>
//                         <Input
//                           {...field}
//                           disabled={isPending}
//                           placeholder="******"
//                           type="password"
//                           className="bg-white/10 text-white border-none focus:ring-2 focus:ring-pink-400 placeholder:text-white"
//                         />
//                       </FormControl>
//                       <Button
//                         size="sm"
//                         variant="link"
//                         asChild
//                         className="text-pink-300 hover:underline"
//                       >
//                         <Link href="/auth/reset">Forgot password?</Link>
//                       </Button>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//               </>
//             )}
//           </div>
//           <FormError message={error || urlError} />
//           <FormSucess message={success} />
//           <Button
//             disabled={isPending}
//             type="submit"
//             className="w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-500 text-white rounded-lg hover:from-indigo-500 hover:to-purple-600 shadow-lg transition-transform transform hover:scale-105"
//           >
//             {showTwoFactor ? "Confirm" : "Login"}
//           </Button>
//         </form>
//       </Form>
//     </CardWrapper>
//   );
// };

// export default LoginForm;



// "use client";

// import * as z from "zod";
// import { useState, useTransition } from "react";
// import { useSearchParams } from "next/navigation";
// import Link from "next/link";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";

// import { LoginSchema } from "@/schemas";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { FormError } from "@/components/form-error";
// import { FormSucess } from "@/components/form-sucess";
// import { login } from "@/actions/login";

// const LoginSignUp = () => {
//   const [showTwoFactor, setShowTwoFactor] = useState(false);
//   const [error, setError] = useState<string | undefined>("");
//   const [success, setSuccess] = useState<string | undefined>("");
//   const [isPending, startTransition] = useTransition();

//   const searchParams = useSearchParams();
//   const callbackUrl = searchParams.get("callbackUrl");
//   const urlError =
//     searchParams.get("error") === "OAuthAccountNotLinked"
//       ? "Email already in use with different Provider!"
//       : "";

//   const form = useForm<z.infer<typeof LoginSchema>>({
//     resolver: zodResolver(LoginSchema),
//     defaultValues: {
//       email: "",
//       password: "",
//     },
//   });

//   const onSubmit = (values: z.infer<typeof LoginSchema>) => {
//     setError("");
//     setSuccess("");

//     startTransition(() => {
//       login(values, callbackUrl)
//         .then((data) => {
//           if (data?.error) {
//             form.reset();
//             setError(data?.error);
//           }

//           if (data?.success) {
//             form.reset();
//             setSuccess(data?.success);
//           }

//           if (data?.twoFactor) {
//             setShowTwoFactor(true);
//           }
//         })
//         .catch(() => setError("Something went wrong"));
//     });
//   };

//   return (
//     <div className="font-serif min-h-screen flex items-center justify-center w-full h-full bg-gradient-to-r from-gray-100 to-gray-300">
//       <div className="container grid md:grid-cols-2 items-center gap-6 w-full p-6 m-6 shadow-lg rounded-lg bg-gray-50 h-full max-w-6xl">
//         {/* Left Panel */}
//         <div className="forms-container md:max-w-lg w-full px-6 py-8 bg-white rounded-md shadow-md">
//           <div className="signin-signup">
//             <Form {...form}>
//               <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//                 <div className="mb-10">
//                   <h3 className="text-gray-900 text-4xl font-bold">Sign in</h3>
//                   <p className="text-base mt-2 text-gray-700">
//                     Don't have an account?
//                     <Link
//                       href="/auth/register"
//                       className="text-indigo-500 font-medium hover:underline ml-1"
//                     >
//                       Register here
//                     </Link>
//                   </p>
//                 </div>

//                 {showTwoFactor ? (
//                   <FormField
//                     control={form.control}
//                     name="code"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Two Factor Code</FormLabel>
//                         <FormControl>
//                           <Input {...field} disabled={isPending} placeholder="******" />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                 ) : (
//                   <>
//                     <FormField
//                       control={form.control}
//                       name="email"
//                       render={({ field }) => (
//                         <FormItem>
//                           <FormLabel className="text-gray-700">Email</FormLabel>
//                           <FormControl>
//                             <Input
//                               {...field}
//                               disabled={isPending}
//                               placeholder="example@example.com"
//                             />
//                           </FormControl>
//                           <FormMessage />
//                         </FormItem>
//                       )}
//                     />

//                     <FormField
//                       control={form.control}
//                       name="password"
//                       render={({ field }) => (
//                         <FormItem>
//                           <FormLabel className="text-gray-700">Password</FormLabel>
//                           <FormControl>
//                             <Input
//                               {...field}
//                               disabled={isPending}
//                               type="password"
//                               placeholder="******"
//                             />
//                           </FormControl>
//                           <Button size="sm" variant="link" asChild>
//                             <Link href="/auth/reset">Forgot password?</Link>
//                           </Button>
//                           <FormMessage />
//                         </FormItem>
//                       )}
//                     />
//                   </>
//                 )}

//                 <FormError message={error || urlError} />
//                 <FormSucess message={success} />
//                 <Button
//                   disabled={isPending}
//                   type="submit"
//                   className="w-full py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-md transition-transform transform hover:scale-105"
//                 >
//                   {showTwoFactor ? "Confirm" : "Login"}
//                 </Button>
//               </form>
//             </Form>
//           </div>
//         </div>

//         {/* Right Panel */}
//         <div className="panels-container md:h-full bg-gradient-to-r from-indigo-500 to-blue-400 rounded-lg p-10 flex items-center justify-center">
//           <img
//             src="https://readymadeui.com/signin-image.webp"
//             className="w-3/4 h-auto object-contain"
//             alt="login-image"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginSignUp;
// "use client";

// import * as z from "zod";
// import { useState, useTransition } from "react";
// import { useSearchParams } from "next/navigation";
// import Link from "next/link";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";

// import { LoginSchema } from "@/schemas";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { FormError } from "@/components/form-error";
// import { FormSucess } from "@/components/form-sucess";
// import { login } from "@/actions/login";
// import CardWrapper from "./card-wrapper";

// const LoginSignUp = () => {
//   const [showTwoFactor, setShowTwoFactor] = useState(false);
//   const [error, setError] = useState<string | undefined>("");
//   const [success, setSuccess] = useState<string | undefined>("");
//   const [isPending, startTransition] = useTransition();

//   const searchParams = useSearchParams();
//   const callbackUrl = searchParams.get("callbackUrl");
//   const urlError =
//     searchParams.get("error") === "OAuthAccountNotLinked"
//       ? "Email already in use with different Provider!"
//       : "";

//   const form = useForm<z.infer<typeof LoginSchema>>({
//     resolver: zodResolver(LoginSchema),
//     defaultValues: {
//       email: "",
//       password: "",
//     },
//   });

//   const onSubmit = (values: z.infer<typeof LoginSchema>) => {
//     setError("");
//     setSuccess("");

//     startTransition(() => {
//       login(values, callbackUrl)
//         .then((data) => {
//           if (data?.error) {
//             form.reset();
//             setError(data?.error);
//           }

//           if (data?.success) {
//             form.reset();
//             setSuccess(data?.success);
//           }

//           if (data?.twoFactor) {
//             setShowTwoFactor(true);
//           }
//         })
//         .catch(() => setError("Something went wrong"));
//     });
//   };

//   return (
//     <CardWrapper
//       headerLabel="Welcome back"
//       backButtonLabel="Don't have an account?"
//       backButtonHref="/auth/register"
//       showSocial
//     >
//       <div className="font-[sans-serif] bg-[#0C172C] ">
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center lg:gap-10 gap-4">
//           <div className="max-md:order-1 h-screen min-h-full">
//             <img
//               src="https://readymadeui.com/image-3.webp"
//               className="w-full h-[850px] object-cover relative bottom-12 left-[-24px]"
//               alt="login-image"
//             />
//           </div>

//           <Form {...form}>
//             <form
//               className="lg:col-span-2 max-w-lg w-full p-6 mx-auto"
//               onSubmit={form.handleSubmit(onSubmit)}
//             >
//               <div className="mb-12">
//                 <h3 className=" text-4xl font-extrabold text-white">Sign in</h3>
//                 <p className="text-white text-sm mt-6 ">
//                   Don't have an account
//                   <Link
//                     href="/auth/register"
//                     className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap"
//                   >
//                     Register here
//                   </Link>
//                 </p>
//               </div>

//               <div>
//                 <FormField
//                   control={form.control}
//                   name="email"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel className="text-white text-sm block mb-2">
//                         Email
//                       </FormLabel>
//                       <FormControl>
//                         <Input
//                           {...field}
//                           disabled={isPending}
//                           placeholder="Enter email"
//                           type="email"
//                           className="bg-transparent w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
//                         />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />

//                 <FormField
//                   control={form.control}
//                   name="password"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel className="text-white text-sm block mb-2">
//                         Password
//                       </FormLabel>
//                       <FormControl>
//                         <Input
//                           {...field}
//                           placeholder="Enter password"
//                           type="password"
//                           disabled={isPending}
//                           className="bg-transparent w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
//                         />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//               </div>

//               <FormError message={error || urlError} />
//               <FormSucess message={success} />

//               <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
//                 <div className="flex items-center">
//                   <input
//                     id="remember-me"
//                     name="remember-me"
//                     type="checkbox"
//                     className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//                   />
//                   <label
//                     htmlFor="remember-me"
//                     className="text-white ml-3 block text-sm"
//                   >
//                     Remember me
//                   </label>
//                 </div>
//                 <div>
//                   <Link
//                     href="/auth/reset"
//                     className="text-blue-600 text-sm font-semibold hover:underline"
//                   >
//                     Forgot Password?
//                   </Link>
//                 </div>
//               </div>

//               <div className="mt-8">
//                 <Button
//                   type="submit"
//                   disabled={isPending}
//                   className="w-full py-2.5 px-5 text-sm tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
//                 >
//                   Sign in
//                 </Button>
//               </div>
//             </form>
//           </Form>
//         </div>
//       </div>
//     </CardWrapper>
//   );
// };

// export default LoginSignUp;


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
      <div className="grid md:grid-cols-2 items-center gap-8 h-full">
        <div className="max-md:order-1 p-4">
          <img
            src="https://readymadeui.com/login-image.webp"
            className="lg:max-w-[85%] w-full h-full object-contain block mx-auto"
            alt="login-image"
          />
        </div>

        <div className="flex items-center md:p-8 p-4 bg-blue-500 h-full lg:w-11/12 lg:ml-auto  w-[610px]">
          {/* Login Form */}
          <div className=" rounded-none p-4 max-w-md  max-md:auto lg:ml-24 relative left-32">
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


