// import { ExtendedUser } from "@/next-auth";
// import { 
//   Card, 
//   CardContent, 
//   CardHeader
// } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";

// interface UserInfoProps {
//   user?: ExtendedUser;
//   label: string;
// };

// export const UserInfo = ({
//   user,
//   label,
// }: UserInfoProps) => {
//   return (
//     <Card className="w-[600px] shadow-md">
//       <CardHeader>
//         <p className="text-2xl font-semibold text-center">
//           {label}
//         </p>
//       </CardHeader>
//       <CardContent className="space-y-4">
//         <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
//           <p className="text-sm font-medium">
//             ID
//           </p>
//           <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">
//             {user?.id}
//           </p>
//         </div>
//         <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
//           <p className="text-sm font-medium">
//             Name
//           </p>
//           <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">
//             {user?.name}
//           </p>
//         </div>
//         <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
//           <p className="text-sm font-medium">
//             Email
//           </p>
//           <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">
//             {user?.email}
//           </p>
//         </div>
//         <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
//           <p className="text-sm font-medium">
//             Role
//           </p>
//           <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">
//             {user?.role}
//           </p>
//         </div>

//         <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
//           <p className="text-sm font-medium">
//             Two Factor Authentication
//           </p>
//           <Badge 
//             variant={user?.isTwoFactorEnabled ? "success" : "destructive"}
//           >
//             {user?.isTwoFactorEnabled ? "ON" : "OFF"}
//           </Badge>
//         </div>
//       </CardContent>
//     </Card>
//   )
// }


// import { ExtendedUser } from "@/next-auth";
// import { 
//   Card, 
//   CardContent, 
//   CardHeader
// } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";

// interface UserInfoProps {
//   user?: ExtendedUser;
//   label: string;
// }

// export const UserInfo = ({
//   user,
//   label,
// }: UserInfoProps) => {
//   return (
//     <Card className="w-full max-w-[600px] shadow-md mx-auto p-4 sm:p-6">
//       <CardHeader>
//         <p className="text-xl sm:text-2xl font-semibold text-center">
//           {label}
//         </p>
//       </CardHeader>
//       <CardContent className="space-y-4">
//         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between rounded-lg border p-3 shadow-sm">
//           <p className="text-sm font-medium mb-2 sm:mb-0">
//             ID
//           </p>
//           <p className="truncate text-xs max-w-full sm:max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">
//             {user?.id}
//           </p>
//         </div>
//         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between rounded-lg border p-3 shadow-sm">
//           <p className="text-sm font-medium mb-2 sm:mb-0">
//             Name
//           </p>
//           <p className="truncate text-xs max-w-full sm:max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">
//             {user?.name}
//           </p>
//         </div>
//         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between rounded-lg border p-3 shadow-sm">
//           <p className="text-sm font-medium mb-2 sm:mb-0">
//             Email
//           </p>
//           <p className="truncate text-xs max-w-full sm:max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">
//             {user?.email}
//           </p>
//         </div>
//         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between rounded-lg border p-3 shadow-sm">
//           <p className="text-sm font-medium mb-2 sm:mb-0">
//             Role
//           </p>
//           <p className="truncate text-xs max-w-full sm:max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">
//             {user?.role}
//           </p>
//         </div>
//         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between rounded-lg border p-3 shadow-sm">
//           <p className="text-sm font-medium mb-2 sm:mb-0">
//             Two Factor Authentication
//           </p>
//           <Badge 
//             variant={user?.isTwoFactorEnabled ? "success" : "destructive"}
//           >
//             {user?.isTwoFactorEnabled ? "ON" : "OFF"}
//           </Badge>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };


// import { ExtendedUser } from "@/next-auth";
// import { Card, CardContent, CardHeader } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";

// interface UserInfoProps {
//   user?: ExtendedUser;
//   label: string;
// }

// export const UserInfo = ({ user, label }: UserInfoProps) => {
//   return (
//     <Card className="relative w-full max-w-[520px] mx-auto p-8 bg-gradient-to-br from-blue-500 via-blue-500 to-blue-500 shadow-2xl rounded-[32px] overflow-hidden transform transition-transform hover:scale-105 mt-8">
//       <div className="absolute -top-16 -right-16 w-[200px] h-[200px] bg-gradient-to-br from-white/20 via-white/10 to-transparent rounded-full blur-2xl"></div>
//       <div className="absolute -bottom-16 -left-16 w-[300px] h-[300px] bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-full blur-3xl"></div>
//       <CardHeader>
//         <p className="text-4xl font-extrabold text-center text-white tracking-wide drop-shadow-lg">
//           {label}
//         </p>
//       </CardHeader>
//       <CardContent className="space-y-5 relative z-10 ">
//         <InfoRow label="ID:" value={user?.id} />
//         <InfoRow label="Name:" value={user?.name} />
//         <InfoRow label="Email:" value={user?.email} />
//         <InfoRow label="Role:" value={user?.role} />
//         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between rounded-xl p-5  backdrop-blur-md shadow-lg hover:shadow-xl transition-shadow bg-white">
//           <p className="text-xl font-semibold text-black">
//             Two Factor Authentication
//           </p>
//           <Badge
//             variant={user?.isTwoFactorEnabled ? "success" : "destructive"}
//             className={`text-sm px-4 py-2 font-semibold rounded-full shadow-lg text-white relative right-2 ${
//               user?.isTwoFactorEnabled
//                 ? "bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700"
//                 : "bg-gradient-to-r from-red-400 to-red-400 hover:from-red-500 hover:to-red-500"
//             }`}
//           >
//             {user?.isTwoFactorEnabled ? "ON" : "OFF"}
//           </Badge>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// const InfoRow = ({ label, value }: { label: string; value?: string }) => (
//   <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between rounded-3xl p-4 bg-gradient-to-r from-white via-white to-white shadow-2xl hover:shadow-[0_0_20px_5px_rgba(255,255,255,0.6)] transition-shadow border-2 border-blac ">
//     <p className="text-lg sm:text-xl font-extrabold  bg-clip-text bg-white animate-pulse  text-black mr-4">
//       {label}
//     </p>
//     <p className="truncate text-base sm:text-lg max-w-full sm:max-w-[300px] font-fancy bg-gradient-to-r from-white to-white text-black rounded-2xl px-5 py-3 shadow-inner transform hover:scale-105 transition-transform w-96 pr-0">
//       {value || "N/A"}
//     </p>
//   </div>
// );

import { ExtendedUser } from "@/next-auth";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface UserInfoProps {
  user?: ExtendedUser;
  label: string;
}

export const UserInfo = ({ user, label }: UserInfoProps) => {
  return (
    <Card className="relative w-full max-w-[500px] mx-auto p-8 bg-gradient-to-br from-white via-white to-white shadow-2xl rounded-[32px] transform transition-transform hover:scale-105 mt-8 overflow-hidden ">
      {/* Background Decorations */}
      <div className="absolute -top-16 -right-16 w-[200px] h-[200px] bg-gradient-to-br from-indigo-200/50 via-indigo-100/30 to-transparent rounded-full blur-2xl"></div>
      <div className="absolute -bottom-16 -left-16 w-[300px] h-[300px] bg-gradient-to-br from-indigo-200/30 via-indigo-100/20 to-transparent rounded-full blur-3xl"></div>
      
      {/* Header Section */}
      <CardHeader className="relative bg-blue-500 text-white rounded-t-lg shadow-sm flex items-center justify-center py-6 bottom-8 sm:right-8 right-8  w-[500px] max-w-[120%] sm:max-w-[800px] mx-auto rounded-[0px] p-10" >
  <h2 className="text-5xl sm:text-4xl font-semibold tracking-wider relative sm:left-4 left-2">
    {label}
  </h2>
</CardHeader>



      {/* Content Section */}
      <CardContent className="space-y-6 relative z-10">
        <InfoRow label="ID:" value={user?.id} />
        <InfoRow label="Name:" value={user?.name ?? undefined} />
        <InfoRow label="Email:" value={user?.email ?? undefined} />
        <InfoRow label="Role:" value={user?.role} />

        {/* Two Factor Authentication Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between rounded-3xl shadow-sm    p-5 backdrop-blur-md hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-white border border-gray-300 ">
          <p className="text-xl font-semibold text-black">
            Two Factor Authentication
          </p>
          <Badge
            variant={user?.isTwoFactorEnabled ? "success" : "destructive"}
            className={`text-sm px-4 py-2 font-semibold rounded-full shadow-lg relative transition-all ${
              user?.isTwoFactorEnabled
                ? "bg-gradient-to-r from-green-500 to-green-500 hover:from-green-500 hover:to-green-700"
                : "bg-gradient-to-r from-red-500 to-red-500 hover:from-red-500 hover:to-red-600"
            } text-white`}
          >
            {user?.isTwoFactorEnabled ? "ON" : "OFF"}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

const InfoRow = ({ label, value }: { label: string; value?: string }) => (
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between rounded-3xl p-4 bg-gradient-to-r from-gray-50 via-white to-gray-50 hover:shadow-[0_0_20px_5px_rgba(255,255,255,0.6)] transition-shadow border border-gray-300 shadow-sm">
    <p className="text-lg sm:text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-black to-black  mr-0">
      {label}
    </p>
    <p className="truncate text-base sm:text-lg max-w-full sm:max-w-[300px] font-fancy bg-gradient-to-r from-white to-white text-black rounded-2xl px-5 py-3 shadow-inner transform hover:scale-105 transition-transform w-96 pr-0 relative">
      {value || "N/A"}
    </p>
  </div>
);
