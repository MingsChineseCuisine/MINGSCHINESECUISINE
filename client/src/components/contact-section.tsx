import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from '@emailjs/browser';
import {
  insertReservationSchema,
  type InsertReservation,
} from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_dtedoeb';
const EMAILJS_TEMPLATE_ID = 'template_yg9gdth';
const EMAILJS_PUBLIC_KEY = 'iTnrkG0kUSWj67DeT';

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<InsertReservation>({
    resolver: zodResolver(insertReservationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: 1,
      message: "",
    },
  });

  const formatTimeSlot = (time: string) => {
    const [hours, minutes] = time.split(":");
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? "PM" : "AM";
    const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  const formatDateForEmail = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const onSubmit = async (data: InsertReservation) => {
    setIsSubmitting(true);

    try {
      // Prepare template parameters for EmailJS
      const templateParams = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        date: formatDateForEmail(data.date),
        time: formatTimeSlot(data.time),
        guests: data.guests === 1 ? '1 Guest' : `${data.guests} Guests`,
        message: data.message || 'No special requests'
      };

      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        toast({
          title: "Reservation Submitted Successfully! 🎉",
          description: "Thank you for your reservation. We will contact you shortly to confirm the details.",
        });
        
        // Reset the form
        form.reset();
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Reservation Failed",
        description: "There was an error processing your reservation. Please try calling us directly at 075069 69333.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const timeSlots = [
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
  ];

  return (
    <section
      id="contact"
      className="py-12 lg:py-16 bg-ming-gray min-h-screen flex items-center"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 lg:mb-12">
          <h2
            data-testid="text-contact-title"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-4 lg:mb-6"
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
          >
            <span className="bg-gradient-to-r from-orange-600 to-orange-600 bg-clip-text text-transparent">
              Visit
            </span>
            <span className="text-gray-800 ml-2 sm:ml-4">Us</span>
          </h2>

          <div className="mt-4 lg:mt-6">
            <p
              data-testid="text-contact-description"
              className="text-base sm:text-lg lg:text-xl xl:text-xl text-gray-600 max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto leading-relaxed font-medium"
              style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500 }}
            >
              Come experience authentic Chinese cuisine in our warm and
              welcoming atmosphere. We look forward to serving you.
            </p>
          </div>
        </div>

        {/* Contact Info + Reservation Form */}
        <div className="flex flex-col lg:flex-row lg:space-x-8 xl:space-x-12 lg:items-start lg:h-auto">
          {/* Contact Information */}
          <div className="w-full lg:w-1/2">
            <h3
              data-testid="text-contact-info-title"
              className="text-xl lg:text-2xl font-display font-bold text-ming-dark-gray mb-6 lg:mb-8"
              style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
            >
              Get in Touch
            </h3>

            <div className="space-y-4 lg:space-y-6 mb-6 lg:mb-8">
              <div className="flex items-center space-x-4">
                <div className="bg-ming-orange text-white w-12 h-12 rounded-full flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-ming-dark-gray">Address</h4>
                  <p data-testid="text-address" className="text-gray-600">
                    Shop no 2&3, Ganga Godavari Apartment, <br />
                    Katemanivali Naka, Prabhuram Nagar, <br />
                    Kalyan East, Thane, Kalyan, Maharashtra 421306
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-ming-orange text-white w-12 h-12 rounded-full flex items-center justify-center">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-ming-dark-gray">Phone</h4>
                  <p data-testid="text-phone" className="text-gray-600">
                    075069 69333
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-ming-orange text-white w-12 h-12 rounded-full flex items-center justify-center">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-ming-dark-gray">Hours</h4>
                  <p data-testid="text-hours" className="text-gray-600">
                    Mon-Thu: 11:30 AM - 9:30 PM
                    <br />
                    Fri-Sat: 11:30 AM - 10:30 PM
                    <br />
                    Sunday: 12:00 PM - 9:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-ming-orange text-white w-12 h-12 rounded-full flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-ming-dark-gray">Email</h4>
                  <p data-testid="text-email" className="text-gray-600">
                    info@mingscuisine.com
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold text-ming-dark-gray mb-4">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  data-testid="link-social-facebook"
                  className="bg-ming-orange text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors duration-300"
                >
                  <Facebook size={16} />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  data-testid="link-social-instagram"
                  className="bg-ming-orange text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors duration-300"
                >
                  <Instagram size={16} />
                </a>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  data-testid="link-social-youtube"
                  className="bg-ming-orange text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors duration-300"
                >
                  <Youtube size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Reservation Form */}
          <div className="w-full lg:w-1/2 mt-4 lg:mt-8">
            <div className="bg-white rounded-xl p-4 lg:p-8 shadow-lg h-fit">
              <h3
                data-testid="text-reservation-title"
                className="text-lg lg:text-2xl font-display font-bold text-ming-dark-gray mb-3 lg:mb-6"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
              >
                Make a Reservation
              </h3>

              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-3 lg:space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-sm">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      data-testid="input-first-name"
                      {...form.register("firstName")}
                      className="focus:ring-ming-orange focus:border-ming-orange h-9 lg:h-10"
                    />
                    {form.formState.errors.firstName && (
                      <p className="text-red-500 text-xs mt-1">
                        {form.formState.errors.firstName.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-sm">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      data-testid="input-last-name"
                      {...form.register("lastName")}
                      className="focus:ring-ming-orange focus:border-ming-orange h-9 lg:h-10"
                    />
                    {form.formState.errors.lastName && (
                      <p className="text-red-500 text-xs mt-1">
                        {form.formState.errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-4">
                  <div>
                    <Label htmlFor="email" className="text-sm">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      data-testid="input-email"
                      {...form.register("email")}
                      className="focus:ring-ming-orange focus:border-ming-orange h-9 lg:h-10"
                    />
                    {form.formState.errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {form.formState.errors.email.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-sm">
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      data-testid="input-phone"
                      {...form.register("phone")}
                      className="focus:ring-ming-orange focus:border-ming-orange h-9 lg:h-10"
                    />
                    {form.formState.errors.phone && (
                      <p className="text-red-500 text-xs mt-1">
                        {form.formState.errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 lg:gap-4">
                  <div>
                    <Label htmlFor="date" className="text-sm">
                      Date
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      data-testid="input-date"
                      {...form.register("date")}
                      className="focus:ring-ming-orange focus:border-ming-orange h-9 lg:h-10"
                      min={new Date().toISOString().split("T")[0]}
                    />
                    {form.formState.errors.date && (
                      <p className="text-red-500 text-xs mt-1">
                        {form.formState.errors.date.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="time" className="text-sm">
                      Time
                    </Label>
                    <Select
                      onValueChange={(value) => form.setValue("time", value)}
                    >
                      <SelectTrigger
                        data-testid="select-time"
                        className="h-9 lg:h-10"
                      >
                        <SelectValue placeholder="Select Time" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {formatTimeSlot(time)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {form.formState.errors.time && (
                      <p className="text-red-500 text-xs mt-1">
                        {form.formState.errors.time.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="guests" className="text-sm">
                      Guests
                    </Label>
                    <Select
                      onValueChange={(value) =>
                        form.setValue("guests", parseInt(value))
                      }
                    >
                      <SelectTrigger
                        data-testid="select-guests"
                        className="h-9 lg:h-10"
                      >
                        <SelectValue placeholder="Guests" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Guest</SelectItem>
                        <SelectItem value="2">2 Guests</SelectItem>
                        <SelectItem value="3">3 Guests</SelectItem>
                        <SelectItem value="4">4 Guests</SelectItem>
                        <SelectItem value="5">5 Guests</SelectItem>
                        <SelectItem value="6">6+ Guests</SelectItem>
                      </SelectContent>
                    </Select>
                    {form.formState.errors.guests && (
                      <p className="text-red-500 text-xs mt-1">
                        {form.formState.errors.guests.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm">
                    Special Requests
                  </Label>
                  <Textarea
                    id="message"
                    data-testid="textarea-message"
                    placeholder="Any special dietary requirements or requests..."
                    {...form.register("message")}
                    className="focus:ring-ming-orange focus:border-ming-orange min-h-[60px] lg:min-h-[80px]"
                  />
                </div>

                <Button
                  type="submit"
                  data-testid="button-submit-reservation"
                  disabled={isSubmitting}
                  className="w-full bg-ming-orange hover:bg-orange-600 text-white py-2.5 lg:py-4 rounded-lg transition-colors duration-300 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting
                    ? "Sending Reservation..."
                    : "Make Reservation"}
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Integration */}
        <div className="mt-8 lg:mt-12">
          <div className="bg-white rounded-xl p-3 lg:p-4 shadow-lg">
            <div className="h-64 lg:h-80 rounded-lg overflow-hidden">
              <iframe
                title="Restaurant Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1882.339109746589!2d73.1380003!3d19.2268893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7944825555555%3A0xcd12c88bf6cccbe3!2sShop%20no%202%263%2C%20Ganga%20Godavari%20Apartment%2C%20Katemanivali%20Naka%2C%20Prabhuram%20Nagar%2C%20Kalyan%20East%2C%20Thane%2C%20Maharashtra%20421306!5e0!3m2!1sen!2sin!4v1692096245098!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
