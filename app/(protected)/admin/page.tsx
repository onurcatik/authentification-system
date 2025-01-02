// "use client";

// import { admin } from "../../../actions/admin";
// import { RoleGate } from "../../../components/auth/role-gate";
// import { FormSucess } from "../../../components/form-sucess";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader } from "@/components/ui/card";
// import { UserRole } from "@prisma/client";
// import { toast } from "sonner";

// const AdminPage = () => {
//   const onServerActionClick = () => {
//     admin()
//       .then((data) => {
//         if (data.error) {
//           toast.error(data.error);
//         }

//         if (data.success) {
//           toast.success(data.success);
//         }
//       })
//   }
  
//   const onApiRouteClick = () => {
//     fetch("/api/admin")
//       .then((response) => {
//         if (response.ok) {
//           toast.success("Allowed API Route!");
//         } else {
//           toast.error("Forbidden API Route!");
//         }
//       })
//   }

//   return (
//     <Card className="w-[600px]">
//       <CardHeader>
//         <p className="text-2xl font-semibold text-center">
//            Admin
//         </p>
//       </CardHeader>
//       <CardContent className="space-y-4">
//         <RoleGate allowedRole={UserRole.ADMIN}>
//           <FormSucess
//             message="You are allowed to see this content!"
//           />
//         </RoleGate>
//         <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
//           <p className="text-sm font-medium">
//             Admin-only API Route
//           </p>
//           <Button onClick={onApiRouteClick}>
//             Click to test
//           </Button>
//         </div>

//         <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
//           <p className="text-sm font-medium">
//             Admin-only Server Action
//           </p>
//           <Button onClick={onServerActionClick}>
//             Click to test
//           </Button>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default AdminPage;


// "use client";

// import { admin } from "../../../actions/admin";
// import { RoleGate } from "../../../components/auth/role-gate";
// import { FormSucess } from "../../../components/form-sucess";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader } from "@/components/ui/card";
// import { UserRole } from "@prisma/client";
// import { toast } from "sonner";

// const AdminPage = () => {
//   const onServerActionClick = () => {
//     admin()
//       .then((data) => {
//         if (data.error) {
//           toast.error(data.error);
//         }

//         if (data.success) {
//           toast.success(data.success);
//         }
//       });
//   };

//   const onApiRouteClick = () => {
//     fetch("/api/admin")
//       .then((response) => {
//         if (response.ok) {
//           toast.success("Allowed API Route!");
//         } else {
//           toast.error("Forbidden API Route!");
//         }
//       });
//   };

//   return (
//     <div className="flex items-center justify-center p-4 bg-gray-100">
//       <Card className="w-full max-w-[500px]  mx-auto ">
//         <CardHeader>
//           <p className="text-xl sm:text-2xl font-semibold text-center">
//             Admin
//           </p>
//         </CardHeader>
//         <CardContent className="space-y-4">
//           <RoleGate allowedRole={UserRole.ADMIN}>
//             <FormSucess message="You are allowed to see this content!" />
//           </RoleGate>
//           <div className="flex flex-col sm:flex-row items-center justify-between rounded-lg border p-4 shadow-md ">
//             <p className="text-sm font-medium text-center sm:text-left">
//               Admin-only API Route
//             </p>
//             <Button className="mt-2 sm:mt-0" onClick={onApiRouteClick}>
//               Click to test
//             </Button>
//           </div>

//           <div className="flex flex-col sm:flex-row items-center justify-between rounded-lg border p-4 shadow-md">
//             <p className="text-sm font-medium text-center sm:text-left mr-24">
//               Admin-only Server Action
//             </p>
//             <Button className="mt-2 sm:mt-0" onClick={onServerActionClick}>
//               Click to test
//             </Button>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default AdminPage;


"use client";

import { admin } from "../../../actions/admin";
import { RoleGate } from "../../../components/auth/role-gate";
import { FormSucess } from "../../../components/form-sucess";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { UserRole } from "@prisma/client";
import { toast } from "sonner";

const AdminPage = () => {
  const onServerActionClick = () => {
    admin()
      .then((data) => {
        if (data.error) {
          toast.error(data.error);
        }

        if (data.success) {
          toast.success(data.success);
        }
      });
  };

  const onApiRouteClick = () => {
    fetch("/api/admin")
      .then((response) => {
        if (response.ok) {
          toast.success("Allowed API Route!");
        } else {
          toast.error("Forbidden API Route!");
        }
      });
  };

  return (
    <div className="flex items-center justify-center min-h-auto p-4 bg-white h-[10px]">
      <Card className="max-w-[600px] mx-auto rounded-3xl bg-white shadow-2xl overflow-hidden transform transition-transform hover:scale-105 mt-[650px]">
        <div className="relative bg-gradient-to-r from-blue-500 to-blue-500 py-6 px-8">
          <CardHeader className="relative z-10 p-2 ">
            <p className="text-4xl font-bold text-white text-center tracking-wide drop-shadow-md">
              Admin Dashboard
            </p>
          </CardHeader>
          <div className="absolute inset-0 bg-gradient-to-t opacity-50"></div>
        </div>
        <CardContent className="p-6 space-y-8">
          <RoleGate allowedRole={UserRole.ADMIN}>
            <FormSucess
              message="Welcome, Admin! You have exclusive access."
              className="text-center text-blue-500 font-medium"
            />
          </RoleGate>
          <div className="flex flex-col md:flex-row items-center justify-between p-4 rounded-xl border-2 border-dashed border-gray-300 bg-gradient-to-br from-gray-50 via-white to-gray-100 shadow-lg hover:shadow-xl transition-shadow">
            <p className="text-base font-semibold text-gray-600 text-center md:text-left">
              Admin API Endpoint Access
            </p>
            <Button
              className="mt-3 md:mt-0 bg-gradient-to-r from-blue-500 to-blue-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:from-green-500 hover:to-green-500 transition-all"
              onClick={onApiRouteClick}
            >
              Test API
            </Button>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between p-4 rounded-xl border-2 border-dashed border-gray-300 bg-gradient-to-br from-gray-50 via-white to-gray-100 shadow-lg hover:shadow-xl transition-shadow">
            <p className="text-base font-semibold text-gray-600 text-center md:text-left">
              Server-Side Action Testing
            </p>
            <Button
              className="mt-3 md:mt-0 bg-gradient-to-r from-blue-500 to-blue-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:from-red-500 hover:to-red-500 transition-all"
              onClick={onServerActionClick}
            >
              Test Server
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminPage;

