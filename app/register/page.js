"use client";

// import * as React from "react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Utensils } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { th } from "date-fns/locale"; // ใช้ locale ภาษาไทย

export default function Register() {
  const [date, setDate] = useState(); // Use useState for date
  const [age, setAge] = useState(""); // Use useState for age

  function calAge(birthDay) {
    const year = birthDay.year;
    const currentYear = new Date().getFullYear();
    const age = currentYear - year;
    setAge(age);
  }

  useEffect(() => {
    // ถ้า user มีการ Register เเล้วให้ไปหน้า Home
    
  })

  

  return (
    <div className="flex flex-2 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <nav className="flex-col self-center gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Utensils className="h-6 w-6" />
      </nav>
      <form>
        <Card className="mx-auto max-w-xl">
          <CardHeader>
            <CardTitle className="text-xl">กรุณากรอกข้อมูลของคุณ</CardTitle>
            <CardDescription>
              กรุณากรอกข้อมูลของคุณเพื่อนำไปคำนวณเเละปรับปรุงสุขภาพของคุณ
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">ชื่อ</Label>
                <Input type="text" placeholder="ชื่อของคุณ" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="birthdate">วันเกิด</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? (
                        format(date, "PPP", { locale: th, timeZone: "UTC" })
                      ) : (
                        <span>เลือกวันเกิดของคุณ</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent align="start" className="w-auto p-0">
                    <Calendar
                      mode="single"
                      captionLayout="dropdown-buttons"
                      selected={date}
                      onSelect={(newDate) => {
                        setDate(newDate);
                        if (newDate) {
                          const formattedDate = {
                            day: newDate.getDate(),
                            month: newDate.getMonth() + 1,
                            year: newDate.getFullYear(), // Convert year to BE
                          };
                          calAge(formattedDate);
                        }
                      }}
                      fromYear={1960}
                      toYear={2030}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="age">อายุ</Label>
                <Input
                  type="number"
                  placeholder="อายุของคุณ"
                  value={age}
                  disabled
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="weight">น้ำหนัก</Label>
                <Input type="number" placeholder="น้ำหนักของคุณ" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="height">ส่วนสูง</Label>
                <Input type="number" placeholder="ส่วนสูงของคุณ" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="gender" placeholder="เพศของคุณ">
                  เพศ
                </Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="กรุณาระบุเพศของคุณ" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>กรุณาระบุเพศของคุณ</SelectLabel>
                      <SelectItem value="male">ชาย</SelectItem>
                      <SelectItem value="female">หญิง</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" className="w-full">
                ถัดไป
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}
