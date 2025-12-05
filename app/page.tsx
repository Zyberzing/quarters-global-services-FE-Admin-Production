import { hasSession } from '@/lib/session';
import { UserTypeENUM } from '@/lib/types';
import { getUserById } from '@/services/usersService';
import { redirect } from 'next/navigation';

const page = async () => {
  const session = await hasSession();
  const user = await getUserById(session?.id || '');
  if (user?.role === UserTypeENUM.ADMIN || user?.role === UserTypeENUM.SUBADMIN) {
    return redirect('/admin/home');
  }
  if (user?.role === UserTypeENUM.AGENT) {
    return redirect('/agent/home');
  }
  return redirect('/login');
  // return (
  //   <div className="flex min-h-screen items-center justify-center bg-muted">
  //     <Card className="w-full max-w-md p-6 text-center shadow-lg rounded-2xl">
  //       <CardHeader>
  //         <CardTitle className="text-3xl font-bold">Welcome to quarters</CardTitle>
  //       </CardHeader>

  //       <CardContent className="space-y-4">
  //         <Button className="w-full">
  //           <Link href={'/admin/login'}>Continue as Admin</Link>
  //         </Button>
  //         <Button className="w-full" asChild variant="secondary">
  //           <Link href={'/agent/register'}>Continue as Agent</Link>
  //         </Button>
  //       </CardContent>
  //     </Card>
  //   </div>
  // );
};

export default page;
