"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import z from "zod";
import { WeddingSchema } from "@/schemas";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { useRouter } from "next/navigation";
import { Calendar as CalendarIcon, Gem, Users } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Calendar } from "./ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { TimePicker } from "./time-picker";

export const WeddingForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [loading, setLoading] = useState(false);

  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof WeddingSchema>>({
    resolver: zodResolver(WeddingSchema),
    defaultValues: {
      firstPartnerName: "",
      email: "",
      phone: "",
      secondPartnerName: "",
      ceremonyDateTime: undefined,
      ceremonyDuration: 0,
      description: "",
      receptionDateTime: undefined,
      receptionDuration: 0,
      venueAddress: "",
      venueCoords: { lat: 0, lng: 0 },
      venueDetails: "",
      venueName: "",
      weddingDateTime: undefined,
    },
  });

  const handleSubmit = async (values: z.infer<typeof WeddingSchema>) => {
    setLoading(true);
    try {
      const response = await fetch("/api/weddings", {
        cache: "no-cache",
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-Type": "application/json" },
      });
      const result = await response.json();
      console.log({ result });
      if (response.ok) {
        router.push(`/weddings/w/${result.data.id}`);
      } else {
        toast({
          title: result.error || "Something went wrong",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-6 md:space-y-8"
      >
        <Card className="border-rose-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-rose-600 text-lg md:text-xl">
              <Users />
              <span>Στοιχεία Ζευγαριού</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 md:space-y-6">
            <div className="grid gap-4 md:gap-6 sm:grid-cols-2">
              {/* firstPartnerName */}
              <FormField
                disabled={loading}
                control={form.control}
                name="firstPartnerName"
                render={({ field }) => (
                  <FormItem>
                    <div className="space-y-2">
                      <FormLabel>firstPartnerName</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="firstPartnerName"
                          className="border-rose-200 focus:border-rose-400"
                        />
                      </FormControl>
                    </div>
                  </FormItem>
                )}
              />
              {/* secondPartnerName */}
              <FormField
                disabled={loading}
                control={form.control}
                name="secondPartnerName"
                render={({ field }) => (
                  <FormItem>
                    <div className="space-y-2">
                      <FormLabel>secondPartnerName</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="secondPartnerName"
                          className="border-rose-200 focus:border-rose-400"
                        />
                      </FormControl>
                    </div>
                  </FormItem>
                )}
              />
            </div>
            <div className="grid gap-4 md:gap-6 sm:grid-cols-2">
              {/* phone */}
              <FormField
                disabled={loading}
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <div className="space-y-2">
                      <FormLabel>phone</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="phone"
                          className="border-rose-200 focus:border-rose-400"
                        />
                      </FormControl>
                    </div>
                  </FormItem>
                )}
              />
              {/* email */}
              <FormField
                disabled={loading}
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <div className="space-y-2">
                      <FormLabel>email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          placeholder="email"
                          className="border-rose-200 focus:border-rose-400"
                        />
                      </FormControl>
                    </div>
                  </FormItem>
                )}
              />
            </div>
            <h3 className="flex items-center gap-2 text-rose-600 font-semibold text-lg md:text-xl">
              <Gem /> <span>Λεπτομέρειες Γάμου</span>
            </h3>
            <FormField
              disabled={loading}
              control={form.control}
              name="weddingDateTime"
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
                </FormItem>
              )}
            />
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
    </Form>
  );
};
