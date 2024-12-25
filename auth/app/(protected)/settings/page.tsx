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

'use client';

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTransition, useState } from 'react';


import { Switch } from '@/components/ui/switch';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SettingsSchema } from '@/schemas';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { settings } from '@/actions/settings';
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useCurrentUser } from '@/hooks/use-current-user';
import { FormError } from '@/components/form-error';
import { FormSucess } from '@/components/form-sucess';
import { UserRole } from '@prisma/client';

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
        .catch(() => setError('Something went wrong!'));
    });
  };

  return (
    <Card className="w-[600px]">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">Settings</p>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Example Name"
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {user?.isOAuth === true && (
                <>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="example@example.com"
                            type="email"
                            disabled={isPending}
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
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="******"
                            type="password"
                            disabled={isPending}
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
                        <FormLabel>New Password</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="******"
                            type="password"
                            disabled={isPending}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Role</FormLabel>
                    <Select
                      disabled={isPending}
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a role" />
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
              {user?.isOAuth === true && (
                <FormField
                  control={form.control}
                  name="isTwoFactorEnabled"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                      <div className="space-y-0.5">
                        <FormLabel>Two Factor Authentication</FormLabel>
                        <FormDescription>
                          Enable two factor authentication for your account
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          disabled={isPending}
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              )}
              
            </div>
            <FormError message={error} />
            <FormSucess message={success} />
            <Button disabled={isPending} type="submit">
              Save
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default SettingsPage;
