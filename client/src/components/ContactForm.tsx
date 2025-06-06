import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().optional(),
  service: z.string().min(1, { message: "Please select a service." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." })
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      service: '',
      message: ''
    }
  });
  
  const onSubmit = async (data: FormValues) => {
    try {
      await apiRequest('POST', '/api/contact', data);
      
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Your message couldn't be sent. Please try again later.",
        variant: "destructive"
      });
    }
  };
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="bg-ghost-white rounded-lg p-6 md:p-8 shadow-md">
        <h3 className="font-space font-bold text-xl text-gunmetal mb-6">Get in Touch</h3>
        
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormLabel className="text-davys-gray text-sm">Your Name</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="w-full px-4 py-2 rounded-md border border-davys-gray border-opacity-20 focus:border-emerald focus:outline-none transition"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormLabel className="text-davys-gray text-sm">Email Address</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="email"
                  className="w-full px-4 py-2 rounded-md border border-davys-gray border-opacity-20 focus:border-emerald focus:outline-none transition"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormLabel className="text-davys-gray text-sm">Company</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="w-full px-4 py-2 rounded-md border border-davys-gray border-opacity-20 focus:border-emerald focus:outline-none transition"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="service"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormLabel className="text-davys-gray text-sm">Service You're Interested In</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full px-4 py-2 rounded-md border border-davys-gray border-opacity-20 focus:border-emerald focus:outline-none transition">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="custom-software">Custom Software Development</SelectItem>
                  <SelectItem value="data-integration">Data Integration & Analytics</SelectItem>
                  <SelectItem value="cloud">Cloud Transformation</SelectItem>
                  <SelectItem value="mobile-web">Mobile & Web Applications</SelectItem>
                  <SelectItem value="security">Cybersecurity Solutions</SelectItem>
                  <SelectItem value="consultation">Technical Consultation</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="mb-6">
              <FormLabel className="text-davys-gray text-sm">Your Message</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  rows={4}
                  className="w-full px-4 py-2 rounded-md border border-davys-gray border-opacity-20 focus:border-emerald focus:outline-none transition"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button 
          type="submit" 
          className="w-full bg-emerald hover:bg-opacity-90 transition text-ghost-white py-3 px-4 rounded-md font-medium text-center"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
