// "use client";

// import * as z from "zod";
// import { useState, useTransition } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";

// import { RegisterSchema } from "@/schemas";

// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";

// import CardWrapper from "@/components/auth/card-wrapper";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { FormError } from "@/components/form-error";
// import { FormSucess } from "@/components/form-sucess";
// import { register } from "@/actions/register";

// const RegisterForm = () => {
//   const [error, setError] = useState<string | undefined>("");
//   const [sucess, setSucess] = useState<string | undefined>("");
//   const [isPending, startTransition] = useTransition();

//   const form = useForm<z.infer<typeof RegisterSchema>>({
//     resolver: zodResolver(RegisterSchema),
//     defaultValues: {
//       email: "",
//       password: "",
//       name: "",
//     },
//   });

//   const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
//     setError("");
//     setSucess("");

//     startTransition(() => {
//       register(values).then((data) => {
//         setError(data.error);
//         setSucess(data.sucess);
//       });
//     });
//   };

//   return (
//     <CardWrapper
//       headerLabel="Create an account"
//       backButtonLabel="Already have an account?"
//       backButtonHref="/auth/login"
//       showSocial
//     >
//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 p-8 rounded-xl shadow-lg backdrop-blur-md">
//           <div className="space-y-4">
//             {/* Name */}
//             <FormField
//               control={form.control}
//               name="name"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel className="text-white">Name</FormLabel>
//                   <FormControl>
//                     <Input
//                       {...field}
//                       disabled={isPending}
//                       placeholder="Name"
//                       className="bg-white/10 text-white border-none focus:ring-2 focus:ring-pink-400 placeholder:text-white"
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             {/* Email */}
//             <FormField
//               control={form.control}
//               name="email"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel className="text-white">Email</FormLabel>
//                   <FormControl>
//                     <Input
//                       {...field}
//                       disabled={isPending}
//                       placeholder="example@example.com"
//                       type="email"
//                       className="bg-white/10 text-white border-none focus:ring-2 focus:ring-pink-400 placeholder:text-white"
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             {/* Password */}
//             <FormField
//               control={form.control}
//               name="password"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel className="text-white">Password</FormLabel>
//                   <FormControl>
//                     <Input
//                       {...field}
//                       disabled={isPending}
//                       placeholder="******"
//                       type="password"
//                       className="bg-white/10 text-white border-none focus:ring-2 focus:ring-pink-400 placeholder:text-white"
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </div>
//           <FormError message={error} />
//           <FormSucess message={sucess} />
//           <Button disabled={isPending} type="submit" className="w-full">
//             Create an account
//           </Button>
//         </form>
//       </Form>
//     </CardWrapper>
//   );
// };

// export default RegisterForm;

// "use client";

// import * as z from "zod";
// import { useState, useTransition } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";

// import { RegisterSchema } from "@/schemas";

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
// import { register } from "@/actions/register";

// const RegisterForm = () => {
//   const [error, setError] = useState<string | undefined>("");
//   const [sucess, setSucess] = useState<string | undefined>("");
//   const [isPending, startTransition] = useTransition();

//   const form = useForm<z.infer<typeof RegisterSchema>>({
//     resolver: zodResolver(RegisterSchema),
//     defaultValues: {
//       email: "",
//       password: "",
//       name: "",
//     },
//   });

//   const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
//     setError("");
//     setSucess("");

//     startTransition(() => {
//       register(values).then((data) => {
//         setError(data.error);
//         setSucess(data.sucess);
//       });
//     });
//   };

//   return (
//     <div className="min-h-screen w-full h-full flex items-stretch bg-gradient-to-r from-white via-white to-white">
//       <div className="flex-1 flex bg-white shadow-2xl overflow-hidden">
//         {/* Left Section */}
//         <div className="w-1/2 p-8 flex flex-col justify-center">
//           <h2 className="text-4xl font-bold mb-4 text-gray-800">Sign up</h2>
//           <p className="text-gray-600 mb-6">Or Sign up with social platforms</p>
//           <div className="flex space-x-4 mb-6">
//             <div className="bg-gray-100 p-4 rounded-full cursor-pointer hover:bg-gray-200">
//               {/* Add Social Icon Here */}
//             </div>
//             <div className="bg-gray-100 p-4 rounded-full cursor-pointer hover:bg-gray-200">
//               {/* Add Social Icon Here */}
//             </div>
//             <div className="bg-gray-100 p-4 rounded-full cursor-pointer hover:bg-gray-200">
//               {/* Add Social Icon Here */}
//             </div>
//           </div>
//           <Form {...form}>
//             <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
//               <FormField
//                 control={form.control}
//                 name="name"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel className="text-gray-600">Username</FormLabel>
//                     <FormControl>
//                       <Input
//                         {...field}
//                         disabled={isPending}
//                         placeholder="Username"
//                         className=" text-black w-full bg-gray-100 p-3 rounded-lg border border-gray-200 focus:border-pink-500 focus:ring-pink-500"
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="email"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel className="text-gray-600">Email</FormLabel>
//                     <FormControl>
//                       <Input
//                         {...field}
//                         disabled={isPending}
//                         placeholder="Email"
//                         type="email"
//                         className="w-full bg-gray-100 p-3 rounded-lg border border-gray-200 focus:border-pink-500 focus:ring-pink-500 text-black"
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="password"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel className="text-gray-600">Password</FormLabel>
//                     <FormControl>
//                       <Input
//                         {...field}
//                         disabled={isPending}
//                         placeholder="Password"
//                         type="password"
//                         className=" text-black w-full bg-gray-100 p-3 rounded-lg border border-gray-200 focus:border-pink-500 focus:ring-pink-500"
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormError message={error} />
//               <FormSucess message={sucess} />
//               <Button
//                 disabled={isPending}
//                 type="submit"
//                 className="w-full bg-pink-500 text-white p-3 rounded-lg hover:bg-pink-600"
//               >
//                 Sign up
//               </Button>
//             </form>
//           </Form>
//         </div>
//       {/* Right Section */}
// <div
//   className="w-1/2 bg-gradient-to-tr from-purple-800 via-pink-600 to-red-600 flex flex-col items-center justify-center p-10 text-white relative"
//   style={{
//     clipPath: "path('M 0 0 C 100 150, 300 250, 100% 0 L 100% 100% L 0 100% Z')",
//   }}
// >
//   <h2 className="text-3xl font-bold mb-4">One of us?</h2>
//   <p className="mb-6 text-center text-white">
//     Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laboriosam ad deleniti.
//   </p>
//   <Button
//     className="bg-white text-pink-600 hover:bg-pink-200 hover:text-pink-500 rounded-lg px-5 py-2 font-medium transition-all"
//   >
//     <a href="/auth/login">Sign In</a>
//   </Button>
// </div>


//       </div>
//     </div>
//   );
// };

// export default RegisterForm;

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
      <div className="grid md:grid-cols-2 items-center gap-8 h-full">
        <div className="max-md:order-1 p-4">
          <img
            src="https://readymadeui.com/login-image.webp"
            className="lg:max-w-[85%] w-full h-full object-contain block mx-auto"
            alt="login-image"
          />
        </div>

        <div className="flex items-center md:p-8 p-6 bg-blue-500 h-full lg:w-11/12 lg:ml-auto">
        {/* bg-[#0C172C] */}
        <div className=" rounded-lg p-8 max-w-md  max-md:auto lg:ml-28  border-2 border-collapse border-white">
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
