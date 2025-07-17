"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CalendarIcon, Gem, Heart, MoveLeft, User, Users } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { useState } from "react";
import { TimePicker } from "@/components/time-picker";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { formSchema } from "@/schemas";
import { useRouter } from "next/navigation";

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      firstPartnerName: "",
      secondPartnerName: "",
      email: "",
      phone: "",
      date: undefined,
    },
  });
  const router = useRouter();
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setError("");
    setSuccess("");
    setLoading(true);
    try {
      const res = await fetch("/api/weddings", {
        method: "POST",
        // cache: "no-store",
        body: JSON.stringify(values),
        headers: { "Content-Type": "application/json" },
      });
      const result = await res.json();
      console.log({ result });
      if (result.error) {
        console.log({ error: result.error });
        setError("Everything is ok!");
      }
      if (result.success) {
        router.push(`/weddings/w/${result.data.id}`);
      }
    } catch (error) {
      setError("Something went wrong.");
      console.log({ error });
    } finally {
      form.reset();
      setLoading(false);
    }
  }

  return (
    <div className="bg-gradient-to-b from-rose-50 to-amber-50 min-h-screen backdrop-blur-md">
      {/* header */}
      <header className="border-rose-100 bg-white/80 sticky top-0 z-50 p-4 mx-auto flex justify-between">
        <div className="flex space-x-2 font-medium text-xl items-center">
          <Heart className="text-rose-500 font-bold" />
          <h1 className="text-neutral-800">Wedding Invites</h1>
        </div>
        <div>
          <Button
            variant={"outline"}
            className="text-center border-amber-50 border-2 hover:bg-rose-50 text-rose-500"
          >
            <MoveLeft />
            Πίσω στην αρχική
          </Button>
        </div>
      </header>
      {/* main */}
      <div className="max-w-4xl mx-auto p-8">
        <Card className="p-4 ">
          <CardContent>
            <div className="">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
                >
                  <h3 className="mt-4 flex items-center gap-2 text-rose-500 font-semibold text-lg md:text-xl">
                    <Users /> <span>Στοιχεία Ζευγαριού</span>
                  </h3>
                  <div className="grid gap-4 md:gap-6 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="firstPartnerName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Όνομα Πρώτου Νεόνυμφου</FormLabel>
                          <FormControl>
                            <Input placeholder="Μιχάλης Στεργίου" {...field} />
                          </FormControl>
                          {/* <FormDescription>
                            This is your public display name.
                          </FormDescription> */}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="secondPartnerName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Όνομα Δεύτερου Νεόνυμφου</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Ελευθερία Κυριάκου"
                              {...field}
                            />
                          </FormControl>
                          {/* <FormDescription>
                            This is your public display name.
                          </FormDescription> */}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid gap-4 md:gap-6 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="john@doe.com" {...field} />
                          </FormControl>
                          {/* <FormDescription>
                            This is your public display name.
                          </FormDescription> */}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Τηλέφωνο</FormLabel>
                          <FormControl>
                            <Input placeholder="6999999996" {...field} />
                          </FormControl>
                          {/* <FormDescription>
                            This is your public display name.
                          </FormDescription> */}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <h3 className="mt-4 flex items-center gap-2 text-rose-500 font-semibold text-lg md:text-xl">
                    <Gem /> <span>Λεπτομέρειες Γάμου</span>
                  </h3>

                  <div className="grid gap-4 md:gap-6 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="username"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Username</FormLabel>
                          <FormControl>
                            <Input placeholder="my_username" {...field} />
                          </FormControl>
                          {/* <FormDescription>
                            This is your public display name.
                          </FormDescription> */}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      disabled={loading}
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem>
                          <div className="space-y-2">
                            <FormLabel>Ημερομηνία Γάμου</FormLabel>
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "w-[280px] flex justify-start text-left font-normals",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  <CalendarIcon />
                                  {field.value
                                    ? format(field.value, "PPP")
                                    : "Διάλεξε Ημερομηνία"}
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent>
                                <Calendar
                                  mode="single"
                                  selected={field.value}
                                  onSelect={field.onChange}
                                  disabled={(date) => date < new Date()}
                                />
                                <div className="p-3 border-t-2">
                                  <TimePicker
                                    setDate={field.onChange}
                                    date={field.value}
                                  />
                                </div>
                              </PopoverContent>
                            </Popover>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormError message={error} />
                  <FormSuccess message={success} />
                  <CardFooter className="flex justify-end">
                    <Button type="submit" className="bg-rose-500" size={"lg"}>
                      Δημιουργία
                    </Button>
                  </CardFooter>
                </form>
              </Form>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
