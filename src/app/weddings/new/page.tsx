"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Heart, Menu, MoveLeft } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export default function NewWeddingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-amber-50">
      {/* Header  */}
      <header className="sticky top-0 z-50 px-4 lg:px-6 h-16 flex items-center border-b border-rose-100 bg-white/80 backdrop-blur-md">
        <Link href="/" className="flex items-center justify-center">
          <div className="flex items-center">
            <Heart className="h-6 w-6 text-rose-400 mr-2" />
            <span className="text-xl font-semibold text-gray-800">
              WeddingInvite
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="ml-auto hidden md:flex items-center gap-4">
          <div>
            <Button
              variant="outline"
              asChild
              className="border-rose-200 text-rose-600 hover:bg-rose-50 bg-transparent"
            >
              <Link href="/">
                <MoveLeft />
                t.backtohome
                {/* {t.backToHome} */}
              </Link>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="ml-auto md:hidden flex items-center gap-2">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <div>
                <Button variant="ghost" size="sm" className="p-2">
                  <Menu className="h-5 w-5" />
                </Button>
              </div>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-6 mt-8">
                <div>
                  <Button
                    variant="outline"
                    asChild
                    className="w-full justify-start border-rose-200 text-rose-600 hover:bg-rose-50 bg-transparent"
                    // onClick={() => setMobileMenuOpen(false)}
                  >
                    <Link href="/">
                      <MoveLeft />
                      t.backToHome
                      {/* {t.backToHome} */}
                    </Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Page Title */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            t.pageTitle
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            t.pageDescription
          </p>
        </div>

        {/* form */}
        <form action="" className="space-y-6 md:space-y-8">
          <Card className="border-rose-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-rose-600 text-lg md:text-xl">
                τ.ψοθπλεΙνφο
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 md:space-y-6">
              <div className="grid gap-4 md:gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="partner1Name">t.partner1Name</Label>
                  <Input
                    id="partner1Name"
                    // value={}
                    // onChange={}
                    required
                    placeholder="t.partner1NamePlaceholder"
                    className="border-rose-200 focus:border-rose-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="partner1Name">t.partner1Name</Label>
                  <Input
                    id="partner1Name"
                    // value={}
                    // onChange={}
                    required
                    placeholder="t.partner1NamePlaceholder"
                    className="border-rose-200 focus:border-rose-400"
                  />
                </div>
              </div>
              <div className="grid gap-4 md:gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="partner1Name">t.partner1Name</Label>
                  <Input
                    id="partner1Name"
                    // value={}
                    // onChange={}
                    required
                    placeholder="t.partner1NamePlaceholder"
                    className="border-rose-200 focus:border-rose-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="partner1Name">t.partner1Name</Label>
                  <Input
                    id="partner1Name"
                    // value={}
                    // onChange={}
                    required
                    placeholder="t.partner1NamePlaceholder"
                    className="border-rose-200 focus:border-rose-400"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-rose-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-rose-600 text-lg md:text-xl">
                τ.ψοθπλεΙνφο
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 md:space-y-6">
              <div className="grid gap-4 md:gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="partner1Name">t.partner1Name</Label>
                  <Input
                    id="partner1Name"
                    // value={}
                    // onChange={}
                    required
                    placeholder="t.partner1NamePlaceholder"
                    className="border-rose-200 focus:border-rose-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="partner1Name">t.partner1Name</Label>
                  <Input
                    id="partner1Name"
                    // value={}
                    // onChange={}
                    required
                    placeholder="t.partner1NamePlaceholder"
                    className="border-rose-200 focus:border-rose-400"
                  />
                </div>
              </div>
              <div className="grid gap-4 md:gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="partner1Name">t.partner1Name</Label>
                  <Input
                    id="partner1Name"
                    // value={}
                    // onChange={}
                    required
                    placeholder="t.partner1NamePlaceholder"
                    className="border-rose-200 focus:border-rose-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="partner1Name">t.partner1Name</Label>
                  <Input
                    id="partner1Name"
                    // value={}
                    // onChange={}
                    required
                    placeholder="t.partner1NamePlaceholder"
                    className="border-rose-200 focus:border-rose-400"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-rose-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-rose-600 text-lg md:text-xl">
                τ.ψοθπλεΙνφο
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 md:space-y-6">
              <div className="grid gap-4 md:gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="partner1Name">t.partner1Name</Label>
                  <Input
                    id="partner1Name"
                    // value={}
                    // onChange={}
                    required
                    placeholder="t.partner1NamePlaceholder"
                    className="border-rose-200 focus:border-rose-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="partner1Name">t.partner1Name</Label>
                  <Input
                    id="partner1Name"
                    // value={}
                    // onChange={}
                    required
                    placeholder="t.partner1NamePlaceholder"
                    className="border-rose-200 focus:border-rose-400"
                  />
                </div>
              </div>
              <div className="grid gap-4 md:gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="partner1Name">t.partner1Name</Label>
                  <Input
                    id="partner1Name"
                    // value={}
                    // onChange={}
                    required
                    placeholder="t.partner1NamePlaceholder"
                    className="border-rose-200 focus:border-rose-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="partner1Name">t.partner1Name</Label>
                  <Input
                    id="partner1Name"
                    // value={}
                    // onChange={}
                    required
                    placeholder="t.partner1NamePlaceholder"
                    className="border-rose-200 focus:border-rose-400"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="text-center pt-6 md:pt-8">
            <Button
              type="submit"
              size={"lg"}
              className="bg-rose-500 hover:bg-rose-600 text-white px-8 md:px-12 py-3 text-base md:text-lg w-full sm:w-auto"
            >
              Πατα το!
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
}
