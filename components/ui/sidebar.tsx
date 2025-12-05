'use client';

import React, { useState } from 'react';
import { ChevronLeft, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { Button } from './button';
import { toggleCollapse } from '@/store/slices/sidebarSlice';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LogoutConfirm from '../shared/LogoutConfirm';
import { Skeleton } from './skeleton';

export interface SubItem {
  name: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export interface NavItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  subItems?: SubItem[];
  isVisible?: boolean;
}

export function Sidebar({
  navigationItems = [],
  isLoading,
}: {
  isLoading?: boolean;
  navigationItems: NavItem[];
}) {
  const { isCollapsed } = useAppSelector((state) => state.sidebar);
  return (
    <div
      className={cn(
        'bg-secondary z-50 transition-all duration-300 ease-in-out border-r border flex flex-col h-full',
        isCollapsed ? 'md:w-16 md:min-w-16' : 'hidden md:flex md:w-64 md:min-w-64',
      )}
    >
      <SideBarContent navigationItems={navigationItems} isLoading={isLoading} />
    </div>
  );
}
export const SideBarContent = ({
  navigationItems,
  isLoading,
}: {
  navigationItems: NavItem[];
  isLoading?: boolean;
}) => {
  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = useState(0);
  const dispatch = useAppDispatch();
  const { isCollapsed } = useAppSelector((state) => state.sidebar);
  const handleItemClick = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <>
      <div
        className={cn(
          'flex items-center justify-between h-[80px] border-b p-4',
          isCollapsed && 'md:justify-center md:p-3',
        )}
      >
        <div className={cn('flex items-center space-x-3 relative', isCollapsed && 'md:space-x-0')}>
          {!isCollapsed ? (
            <Image src="/logo-text.png" width={238} height={80} alt="Logo" />
          ) : (
            <Image src="/logo.svg" width={125} height={125} alt="logo" />
          )}

          <Button
            onClick={() => {
              dispatch(toggleCollapse());
            }}
            className={cn(
              'hidden md:flex  bg-secondary w-7 h-7  absolute -right-9 hover:bg-unset rounded-lg',
              isCollapsed && 'rotate-180',
            )}
          >
            <ChevronLeft className="w-4 h-4 text-primary-100" />
          </Button>
        </div>
      </div>
      {/* Body */}
      {isLoading ? (
        <div className="grow py-4 space-y-2 overflow-y-auto overflow-x-hidden px-2">
          <Skeleton className="h-[36px] w-full rounded bg-primary/30" />
          <Skeleton className="h-[36px] w-full rounded bg-primary/30" />
          <Skeleton className="h-[36px] w-full rounded bg-primary/30" />
          <Skeleton className="h-[36px] w-full rounded bg-primary/30" />
          <Skeleton className="h-[36px] w-full rounded bg-primary/30" />
          <Skeleton className="h-[36px] w-full rounded bg-primary/30" />
          <Skeleton className="h-[36px] w-full rounded bg-primary/30" />
          <Skeleton className="h-[36px] w-full rounded bg-primary/30" />
        </div>
      ) : (
        <nav className="grow py-4 overflow-y-auto overflow-x-hidden">
          <div className="relative">
            <ul className="relative ">
              {navigationItems.map((item, index) => {
                const isActive = pathname.includes(item.href);
                return (
                  <React.Fragment key={item.name}>
                    {isActive && (
                      <div
                        className="absolute left-0 w-2.5 h-[56px] bg-primary-100 rounded-tr-md rounded-br-md transition-transform duration-300"
                        // style={{
                        //   transform: `translateY(${activeIndex * 56}px)`,
                        // }}
                      />
                    )}
                    <li key={item.name} className="relative h-[56px]  ">
                      <Link
                        href={item.href}
                        className={cn(
                          'flex items-center cursor-pointer transition-all duration-200 h-full group',
                          isCollapsed ? 'p-2 justify-center' : 'p-3 justify-between',
                          activeIndex === index || isActive
                            ? 'text-primary-100 font-semibold'
                            : 'text-black hover:text-primary-100',
                        )}
                        onClick={() => handleItemClick(index)}
                        prefetch={false}
                      >
                        <div
                          className={cn(
                            'flex items-center min-w-0 ',
                            isCollapsed ? 'justify-center ml-0' : 'space-x-3 ml-4',
                          )}
                        >
                          <item.icon
                            className={cn(
                              'w-5 h-5 flex-shrink-0',
                              activeIndex === index || isActive
                                ? 'text-primary-100'
                                : 'text-black hover:text-primary-100',
                            )}
                          />
                          {!isCollapsed && (
                            <span className="text-sm whitespace-nowrap">{item.name}</span>
                          )}
                        </div>
                      </Link>
                    </li>
                  </React.Fragment>
                );
              })}
            </ul>
          </div>
        </nav>
      )}

      {/* logout */}
      <div className="py-4 px-4">
        <LogoutConfirm>
          <Button variant="outline" className="w-full flex justify-between">
            Logout
            <LogOut />
          </Button>
        </LogoutConfirm>
      </div>
    </>
  );
};
