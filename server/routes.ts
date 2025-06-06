import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission route
  app.post('/api/contact', async (req, res) => {
    try {
      // Validate the request body using the schema
      const contactData = contactSchema.parse(req.body);
      
      // Store the contact submission
      const submission = await storage.createContactSubmission(contactData);
      
      // Here you would typically send an email notification
      // but we'll just return success for now
      
      res.status(200).json({ 
        message: 'Contact form submitted successfully',
        id: submission.id
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ message: validationError.message });
      } else {
        console.error('Contact form error:', error);
        res.status(500).json({ message: 'An unexpected error occurred' });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
