'use client';

import { IoIosArrowRoundBack } from "react-icons/io";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdAnalytics } from "react-icons/md";

import Link from "next/link";
import {usePathname} from "next/navigation";
import Logoutbutton from "@/components/buttons/Logoutbutton";

export default function AppSidebar() {
  const path = usePathname();
  return (
    <nav className="inline-flex mx-auto flex-col text-center mt-8 gap-2 text-gray-500">
      <Link
        href={'/account'}
        className={
          "flex gap-4 p-2 "
          + (path === '/account' ? 'text-blue-500' : '')
        }>
            <IoDocumentTextOutline  className={'w-6 h-6'} />
     
        <span className="">My Page</span>
      </Link>
      <Link
        href={'/analytics'}
        className={
          "flex gap-4 p-2 "
          + (path === '/analytics' ? 'text-blue-500' : '')
        }>
            <MdAnalytics className={'w-6 h-6'} />
       
        <span className="">Analytics</span>
      </Link>
      <Logoutbutton/>
      <Link href={'/'} className="flex items-center gap-2 text-xs text-gray-500 border-t pt-4">
      <IoIosArrowRoundBack className="w-6 h-6" />
        <span>Back to website</span>
      </Link>
    </nav>
  );
}