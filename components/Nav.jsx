"use client";

import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Utensils, Users, LogOut, User } from "lucide-react";
import ModeToggle from "@/components/ModeToggle"


export default function Nav() {


  return (

    
    <div className="sticky z-50 top-0 flex h-16 whitespace-nowrap items-center gap-4 border-b bg-background px-4 md:px-6">
      <div className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 text-lg md:text-base"
        >
          <Utensils className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>

        <Link
          href="/dashboard"
          className={`transition-colors hover:text-foreground`}
        >
          หน้าหลัก
        </Link>
        <Link
          href="/history"
          className={`transition-colors hover:text-foreground`}
        >
          ประวัติการกิน
        </Link>

        <Link
          href="/setting"
          className={`transition-colors hover:text-foreground`}
        >
          ตั้งค่า
        </Link>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <div className="grid gap-6 text-lg font-medium">
          
            <Link
              href="/dashboard"
            >
              หน้าหลัก
            </Link>
            <Link
              href="/history"
            >
              ประวัติการกิน
            </Link>
            <Link
              href="/setting"
            >
              ตั้งค่า
            </Link>
          </div>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form className="ml-auto flex-2 sm:flex-initial "></form>
        <ModeToggle />
        <DropdownMenu>

          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <img
                src="https://www.melivecode.com/users/3.png"
                className="h-9 w-9"
              />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuLabel>บัญชีของฉัน</DropdownMenuLabel>
            <div className="mx-2 mb-2 text-muted-foreground text-xs">
              test@test.com
            </div>

            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex text-muted-foreground hover:text-foreground">
                <User className="mr-2 h-4 w-4" />

                <Link href="/setting">
                  <span
                    className={`trasettingnsition-colors `}
                  >
                    ตั้งค่าบัญชีของฉัน
                  </span>
                </Link>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />

            <DropdownMenuItem>
              <div className="flex text-muted-foreground hover:text-foreground">
                <Users className="mr-2 h-4 w-4" />
                <span>แจ้งปัญหา</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex text-muted-foreground hover:text-foreground">
                <LogOut className="mr-2 h-4 w-4" />
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground"
                >
                  ออกจากระบบ
                </Link>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
