// "use client";

// import { Card, CardHeader, CardContent } from "../../../components/ui/card";
// import { Button } from "../../../components/ui/button";
// import { settings } from "../../../actions/settings";
// import { useTransition, useState } from "react";
// import { useSession } from "next-auth/react";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { Input } from "@/components/ui/input";
// import { SettingsSchema } from "@/schemas";
// import {
//   Form,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormDescription,
//   FormMessage,
//   FormControl,
// } from "@/components/ui/form";
// import { useForm } from "react-hook-form";
// import * as z from "zod";
// import { useCurrentUser } from "@/hooks/use-current-user";
// import { FormSucess } from "@/components/form-sucess";
// import { FormError } from "@/components/form-error";

// const SettingsPage = () => {
//   const [isPending, startTransition] = useTransition();
//   const { update } = useSession();
//   const [error, setError] = useState<string | undefined>();
//   const [succes, setSucces] = useState<string | undefined>();
//   const user = useCurrentUser()

//   // Hatalı `useForm` atamasını düzeltildi
//   const form = useForm({
//     resolver: zodResolver(SettingsSchema),
//     defaultValues: {
//       name: user?.name || undefined,
//       email : user?.email || undefined,
//     },
//   });

//   // `onClick` fonksiyonundaki hatalar düzeltildi
//   const onSubmit = (values: z.infer<typeof SettingsSchema>) => {
//     startTransition(() => {
//       settings({
//         name: "Something",
//       })
//         .then((data) => {
//           if (data.error) {
//             setError(data.error);
//           }

//           if (data.success) {
//             setSucces(data.success);
//           }
//         })
//         .catch(() => setError("Someting went wrong!"));
//     });
//   };

//   return (
//     <Card className="w-[600px]">
//       <CardHeader>
//         <p className="text-2xl font-semibold text-center">Settings Page</p>
//       </CardHeader>
//       <CardContent>
//         <Form {...form}>
//           <form
//             className="space-y-6"
//             onSubmit={form.handleSubmit(onSubmit)}
//           >

//           <div className="space-y-4">
//             <FormField
//               control={form.control}
//               name="name"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Name</FormLabel>
//                   <FormControl>
//                     <Input {...field} placeholder="Name" disabled={isPending} />
//                   </FormControl>
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="name"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Email</FormLabel>
//                   <FormControl>
//                     <Input {...field} placeholder="Email" type = "email" disabled={isPending}  />
//                   </FormControl>
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="name"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Password</FormLabel>
//                   <FormControl>
//                     <Input {...field} placeholder="******* " type = "password" disabled={isPending} />
//                   </FormControl>
//                 </FormItem>
//               )}
//             />
//           </div>
//           <FormError message={error} />
//           <FormSucess message={succes} />
//           <Button type="submit"
//           disabled={isPending}>
//             Save
//           </Button>
//           </form>
//         </Form>
//       </CardContent>
//     </Card>
//   );
// };

// export default SettingsPage;

// "use client";

// import { Card, CardHeader, CardContent } from "../../../components/ui/card";
// import { Button } from "../../../components/ui/button";
// import { settings } from "../../../actions/settings";
// import { useTransition, useState } from "react";
// import { useSession } from "next-auth/react";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { Input } from "@/components/ui/input";
// import { SettingsSchema } from "@/schemas";
// import { Switch } from "@/components/ui/switch";
// import {
//   Form,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormDescription,
//   FormMessage,
//   FormControl,
// } from "@/components/ui/form";
// import { useForm } from "react-hook-form";
// import * as z from "zod";
// import { useCurrentUser } from "@/hooks/use-current-user";
// import { FormSucess } from "@/components/form-sucess";
// import { FormError } from "@/components/form-error";
// import { newPassword } from "@/actions/new-password";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectValue,
// } from "@/components/ui/select";
// import { SelectTrigger } from "@radix-ui/react-select";
// import { UserRole } from "@prisma/client";

// const SettingsPage = () => {
//   const [isPending, startTransition] = useTransition();
//   const { update } = useSession();
//   const [error, setError] = useState<string | undefined>();
//   const [succes, setSucces] = useState<string | undefined>();
//   const user = useCurrentUser();

//   const form = useForm({
//     resolver: zodResolver(SettingsSchema),
//     defaultValues: {
//       name: user?.name || undefined,
//       email: user?.email || undefined,
//       password: undefined,
//       newPassword: undefined,
//       role: user?.role || undefined,
//       isTwoFactorEnabled: user?.isTwoFactorEnabled || undefined,
//     },
//   });

//   const onSubmit = (values: z.infer<typeof SettingsSchema>) => {
//     startTransition(() => {
//       settings(values)
//         .then((data) => {
//           if (data.error) {
//             setError(data.error);
//           }

//           if (data.success) {
//             setSucces(data.success);
//           }
//         })
//         .catch(() => setError("Something went wrong!"));
//     });
//   };

//   return (
//     <Card className="w-[600px]">
//       <CardHeader>
//         <p className="text-2xl font-semibold text-center">Settings Page</p>
//       </CardHeader>
//       <CardContent>
//         <Form {...form}>
//           <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
//             <div className="space-y-4">
//               <FormField
//                 control={form.control}
//                 name="name"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Name</FormLabel>
//                     <FormControl>
//                       <Input
//                         {...field}
//                         placeholder="Name"
//                         disabled={isPending}
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               {user?.isOAuth === false && (
//                 <>
//               <FormField
//                 control={form.control}
//                 name="email"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Email</FormLabel>
//                     <FormControl>
//                       <Input
//                         {...field}
//                         placeholder="Email"
//                         type="email"
//                         disabled={isPending}
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
//                     <FormLabel>Password</FormLabel>
//                     <FormControl>
//                       <Input
//                         {...field}
//                         placeholder="*******"
//                         type="password"
//                         disabled={isPending}
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="newPassword"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>New Password</FormLabel>
//                     <FormControl>
//                       <Input
//                         {...field}
//                         placeholder="*******"
//                         type="password"
//                         disabled={isPending}
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               </>
//             ) }
//               <FormField
//                 control={form.control}
//                 name="role"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Role</FormLabel>
//                     <Select
//                       disabled={isPending}
//                       onValueChange={field.onChange}
//                       defaultValue={field.value}
//                     >
//                       <FormControl>
//                         <SelectTrigger>
//                           <SelectValue placeholder= "Select a role" />
//                         </SelectTrigger>
//                       </FormControl>
//                       <SelectContent>
//                         <SelectItem value={UserRole.ADMIN}>Admin</SelectItem>
//                       </SelectContent>
//                       <SelectContent>
//                         <SelectItem value={UserRole.USER}>User</SelectItem>
//                       </SelectContent>



//                     </Select>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               {user?.isOAuth === false && (
//               <FormField
//                 control={form.control}
//                 name="isTwoFactorEnabled"
//                 render={({ field }) => (
              
//                     <FormItem className="flex flex-row items-center justify-between rounded-lg shadow-sm">
//                       <div className="space-y-0.5">
//                         <FormLabel>Two Factor Authentication</FormLabel>
//                         <FormDescription>
//                           Enable two factor authentication
//                         </FormDescription>

//                       </div>

//                       <FormControl>
//                         <Switch
//                         disabled={isPending}
//                         checked={field.value}
//                         onCheckedChange={field.onChange}
//                         />
//                       </FormControl>

//                     </FormItem>
                  
//                 )}
//               />
//               )}
//             </div>
//             <FormError message={error} />
//             <FormSucess message={succes} />
//             <Button type="submit" disabled={isPending}>
//               Save
//             </Button>
//           </form>
//         </Form>
//       </CardContent>
//     </Card>
//   );
// };

// export default SettingsPage;

// 'use client';

// import * as z from 'zod';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { useTransition, useState } from 'react';


// import { Switch } from '@/components/ui/switch';
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from '@/components/ui/select';
// import { SettingsSchema } from '@/schemas';
// import { Card, CardHeader, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { settings } from '@/actions/settings';
// import {
//   Form,
//   FormField,
//   FormControl,
//   FormItem,
//   FormLabel,
//   FormDescription,
//   FormMessage,
// } from '@/components/ui/form';
// import { Input } from '@/components/ui/input';
// import { useCurrentUser } from '@/hooks/use-current-user';
// import { FormError } from '@/components/form-error';
// import { FormSucess } from '@/components/form-sucess';
// import { UserRole } from '@prisma/client';

// const SettingsPage = () => {
//   const user = useCurrentUser();

//   const [error, setError] = useState<string | undefined>();
//   const [success, setSuccess] = useState<string | undefined>();
  
//   const [isPending, startTransition] = useTransition();

//   const form = useForm<z.infer<typeof SettingsSchema>>({
//     resolver: zodResolver(SettingsSchema),
//     defaultValues: {
//       password: undefined,
//       newPassword: undefined,
//       name: user?.name || undefined,
//       email: user?.email || undefined,
//       role: user?.role || undefined,
//       isTwoFactorEnabled: user?.isTwoFactorEnabled || undefined,
//     },
//   });

//   const onSubmit = (values: z.infer<typeof SettingsSchema>) => {
//     startTransition(() => {
//       settings(values)
//         .then((data) => {
//           if (data.error) {
//             setError(data.error);
//           }

//           if (data.success) {
            
//             setSuccess(data.success);
//           }
//         })
//         .catch(() => setError('Something went wrong!'));
//     });
//   };

//   return (
//     <Card className="w-[600px]">
//       <CardHeader>
//         <p className="text-2xl font-semibold text-center">Settings</p>
//       </CardHeader>
//       <CardContent>
//         <Form {...form}>
//           <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
//             <div className="space-y-4">
//               <FormField
//                 control={form.control}
//                 name="name"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Name</FormLabel>
//                     <FormControl>
//                       <Input
//                         {...field}
//                         placeholder="Example Name"
//                         disabled={isPending}
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               {user?.isOAuth === true && (
//                 <>
//                   <FormField
//                     control={form.control}
//                     name="email"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Email</FormLabel>
//                         <FormControl>
//                           <Input
//                             {...field}
//                             placeholder="example@example.com"
//                             type="email"
//                             disabled={isPending}
//                           />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <FormField
//                     control={form.control}
//                     name="password"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Password</FormLabel>
//                         <FormControl>
//                           <Input
//                             {...field}
//                             placeholder="******"
//                             type="password"
//                             disabled={isPending}
//                           />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <FormField
//                     control={form.control}
//                     name="newPassword"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>New Password</FormLabel>
//                         <FormControl>
//                           <Input
//                             {...field}
//                             placeholder="******"
//                             type="password"
//                             disabled={isPending}
//                           />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                 </>
//               )}
//               <FormField
//                 control={form.control}
//                 name="role"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Role</FormLabel>
//                     <Select
//                       disabled={isPending}
//                       onValueChange={field.onChange}
//                       defaultValue={field.value}
//                     >
//                       <FormControl>
//                         <SelectTrigger>
//                           <SelectValue placeholder="Select a role" />
//                         </SelectTrigger>
//                       </FormControl>
//                       <SelectContent>
//                         <SelectItem value={UserRole.ADMIN}>Admin</SelectItem>
//                         <SelectItem value={UserRole.USER}>User</SelectItem>
//                       </SelectContent>
//                     </Select>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               {user?.isOAuth === true && (
//                 <FormField
//                   control={form.control}
//                   name="isTwoFactorEnabled"
//                   render={({ field }) => (
//                     <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
//                       <div className="space-y-0.5">
//                         <FormLabel>Two Factor Authentication</FormLabel>
//                         <FormDescription>
//                           Enable two factor authentication for your account
//                         </FormDescription>
//                       </div>
//                       <FormControl>
//                         <Switch
//                           disabled={isPending}
//                           checked={field.value}
//                           onCheckedChange={field.onChange}
//                         />
//                       </FormControl>
//                     </FormItem>
//                   )}
//                 />
//               )}
              
//             </div>
//             <FormError message={error} />
//             <FormSucess message={success} />
//             <Button disabled={isPending} type="submit">
//               Save
//             </Button>
//           </form>
//         </Form>
//       </CardContent>
//     </Card>
//   );
// };

// export default SettingsPage;


// "use client";

// import * as z from "zod";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useTransition, useState } from "react";
// import { motion } from "framer-motion";

// import { Switch } from "@/components/ui/switch";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { SettingsSchema } from "@/schemas";
// import { Card, CardHeader, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { settings } from "@/actions/settings";
// import {
//   Form,
//   FormField,
//   FormControl,
//   FormItem,
//   FormLabel,
//   FormDescription,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { useCurrentUser } from "@/hooks/use-current-user";
// import { FormError } from "@/components/form-error";
// import { FormSucess } from "@/components/form-sucess";
// import { UserRole } from "@prisma/client";

// const SettingsPage = () => {
//   const user = useCurrentUser();

//   const [error, setError] = useState<string | undefined>();
//   const [success, setSuccess] = useState<string | undefined>();

//   const [isPending, startTransition] = useTransition();

//   const form = useForm<z.infer<typeof SettingsSchema>>({
//     resolver: zodResolver(SettingsSchema),
//     defaultValues: {
//       password: undefined,
//       newPassword: undefined,
//       name: user?.name || undefined,
//       email: user?.email || undefined,
//       role: user?.role || undefined,
//       isTwoFactorEnabled: user?.isTwoFactorEnabled || undefined,
//     },
//   });

//   const onSubmit = (values: z.infer<typeof SettingsSchema>) => {
//     startTransition(() => {
//       settings(values)
//         .then((data) => {
//           if (data.error) {
//             setError(data.error);
//           }

//           if (data.success) {
//             setSuccess(data.success);
//           }
//         })
//         .catch(() => setError("Something went wrong!"));
//     });
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.9 }}
//       animate={{ opacity: 1, scale: 1 }}
//       exit={{ opacity: 0, scale: 0.9 }}
//       transition={{ duration: 0.5 }}
//       className="flex justify-center items-center h-[750px] bg-gray-100 px-4"
//     >
//       <motion.div
//         initial={{ y: 50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.8, delay: 0.2 }}
//         className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
//       >
//         <Card className="shadow-lg">
//           <motion.div
//             initial={{ scale: 0.8 }}
//             animate={{ scale: 1 }}
//             transition={{ duration: 0.5, ease: "easeInOut" }}
//           >
//             <CardHeader>
//               <p className="text-2xl font-semibold text-center">Settings</p>
//             </CardHeader>
//           </motion.div>
//           <CardContent>
//             <Form {...form}>
//               <motion.form
//                 className="space-y-6"
//                 onSubmit={form.handleSubmit(onSubmit)}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.7 }}
//               >
//                 <div className="space-y-4">
//                   <FormField
//                     control={form.control}
//                     name="name"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Name</FormLabel>
//                         <FormControl>
//                           <Input
//                             {...field}
//                             placeholder="Example Name"
//                             disabled={isPending}
//                           />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   {user?.isOAuth === true && (
//                     <>
//                       <FormField
//                         control={form.control}
//                         name="email"
//                         render={({ field }) => (
//                           <FormItem>
//                             <FormLabel>Email</FormLabel>
//                             <FormControl>
//                               <Input
//                                 {...field}
//                                 placeholder="example@example.com"
//                                 type="email"
//                                 disabled={isPending}
//                               />
//                             </FormControl>
//                             <FormMessage />
//                           </FormItem>
//                         )}
//                       />
//                       <FormField
//                         control={form.control}
//                         name="password"
//                         render={({ field }) => (
//                           <FormItem>
//                             <FormLabel>Password</FormLabel>
//                             <FormControl>
//                               <Input
//                                 {...field}
//                                 placeholder="******"
//                                 type="password"
//                                 disabled={isPending}
//                               />
//                             </FormControl>
//                             <FormMessage />
//                           </FormItem>
//                         )}
//                       />
//                       <FormField
//                         control={form.control}
//                         name="newPassword"
//                         render={({ field }) => (
//                           <FormItem>
//                             <FormLabel>New Password</FormLabel>
//                             <FormControl>
//                               <Input
//                                 {...field}
//                                 placeholder="******"
//                                 type="password"
//                                 disabled={isPending}
//                               />
//                             </FormControl>
//                             <FormMessage />
//                           </FormItem>
//                         )}
//                       />
//                     </>
//                   )}
//                   <FormField
//                     control={form.control}
//                     name="role"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Role</FormLabel>
//                         <Select
//                           disabled={isPending}
//                           onValueChange={field.onChange}
//                           defaultValue={field.value}
//                         >
//                           <FormControl>
//                             <SelectTrigger>
//                               <SelectValue placeholder="Select a role" />
//                             </SelectTrigger>
//                           </FormControl>
//                           <SelectContent>
//                             <SelectItem value={UserRole.ADMIN}>Admin</SelectItem>
//                             <SelectItem value={UserRole.USER}>User</SelectItem>
//                           </SelectContent>
//                         </Select>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   {user?.isOAuth === true && (
//                     <FormField
//                       control={form.control}
//                       name="isTwoFactorEnabled"
//                       render={({ field }) => (
//                         <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
//                           <div className="space-y-0.5">
//                             <FormLabel>Two Factor Authentication</FormLabel>
//                             <FormDescription>
//                               Enable two factor authentication for your account
//                             </FormDescription>
//                           </div>
//                           <FormControl>
//                             <Switch
//                               disabled={isPending}
//                               checked={field.value}
//                               onCheckedChange={field.onChange}
//                             />
//                           </FormControl>
//                         </FormItem>
//                       )}
//                     />
//                   )}
//                 </div>
//                 <FormError message={error} />
//                 <FormSucess message={success} />
//                 <motion.div
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <Button disabled={isPending} type="submit">
//                     Save
//                   </Button>
//                 </motion.div>
//               </motion.form>
//             </Form>
//           </CardContent>
//         </Card>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default SettingsPage;

"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition, useState } from "react";

import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SettingsSchema } from "@/schemas";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { settings } from "@/actions/settings";
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useCurrentUser } from "@/hooks/use-current-user";
import { FormError } from "@/components/form-error";
import { FormSucess } from "@/components/form-sucess";
import { UserRole } from "@prisma/client";

const SettingsPage = () => {
  const user = useCurrentUser();

  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof SettingsSchema>>({
    resolver: zodResolver(SettingsSchema),
    defaultValues: {
      password: undefined,
      newPassword: undefined,
      name: user?.name || undefined,
      email: user?.email || undefined,
      role: user?.role || undefined,
      isTwoFactorEnabled: user?.isTwoFactorEnabled || undefined,
    },
  });

  const onSubmit = (values: z.infer<typeof SettingsSchema>) => {
    startTransition(() => {
      settings(values)
        .then((data) => {
          if (data.error) {
            setError(data.error);
          }

          if (data.success) {
            setSuccess(data.success);
          }
        })
        .catch(() => setError("Something went wrong!"));
    });
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-white px-8"
      // bg-gradient-to-br from-blue-500 via-blue-500 to-blue-500
    >
      <div
        className="w-full max-w-4xl shadow-2xl transform  transition-transform relative lg:bottom-16"
      >
        <Card className=" bg-white border border-white overflow-hidden mb-0">
          <CardHeader className="py-12 bg-gradient-to-r from-blue-500 to-blue-500 text-white">
            <h2 className="text-5xl font-bold text-center">Account Settings</h2>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                className="space-y-10 px-10 py-8"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-lg font-semibold text-gray-700 ">
                          Full Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Your Name"
                            disabled={isPending}
                            className="rounded-full border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-500"
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
                        <FormLabel className="text-lg font-semibold text-gray-700">
                          Email Address
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Your Email"
                            disabled={isPending}
                            className="rounded-full border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-500"
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
                        <FormLabel className="text-lg font-semibold text-gray-700">
                          Password
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Enter Password"
                            type="password"
                            disabled={isPending}
                            className="rounded-full border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-500"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="newPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-lg font-semibold text-gray-700">
                          New Password
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Enter New Password"
                            type="password"
                            disabled={isPending}
                            className="rounded-full border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-500"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-lg font-semibold text-gray-700">
                          Role
                        </FormLabel>
                        <Select
                          disabled={isPending}
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="rounded-full border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-500">
                              <SelectValue placeholder="Select Role" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value={UserRole.ADMIN}>Admin</SelectItem>
                            <SelectItem value={UserRole.USER}>User</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="isTwoFactorEnabled"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-center justify-between">
                          <FormLabel className="text-lg font-semibold text-gray-700">
                            Enable Two-Factor Authentication
                          </FormLabel>
                          <FormControl>
                            <Switch
                              disabled={isPending}
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              className="focus:ring-indigo-500 focus:ring-2 mr-6 relative left-6 top-4"
                            />
                          </FormControl>
                        </div>
                        <FormDescription className="text-sm text-gray-500">
                          Add an extra layer of security to your account.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormError message={error} />
                <FormSucess message={success} />
                <div className="text-center">
                  <div
                    className="inline-block"
                  >
                    <Button
                      disabled={isPending}
                      type="submit"
                      className="px-10 py-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-500 text-white font-bold shadow-lg transform hover:translate-y-1 hover:shadow-xl"
                      // bg-gradient-to-r from-red-500 to-yellow-400
                    >
                      Update Settings
                    </Button>
                  </div>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SettingsPage;

