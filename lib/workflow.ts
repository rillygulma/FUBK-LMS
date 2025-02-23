import nodemailer from "nodemailer";
import { Client as WorkflowClient } from "@upstash/workflow";
import config from "@/lib/config";

// Initialize Upstash Workflow and QStash Clients
export const workflowClient = new WorkflowClient({
  baseUrl: config.env.upstash.qstashUrl,
  token: config.env.upstash.qstashToken,
});


// Create Nodemailer Transporter
const transporter = nodemailer.createTransport({
  host: config.env.nodemailer.smtpHost,
  port: Number(config.env.nodemailer.smtpPort),
  secure: config.env.nodemailer.smtpSecure,
  auth: {
    user: config.env.nodemailer.smtpUser,
    pass: config.env.nodemailer.smtpPassword,
  },
});

// Function to send Email
export const sendEmail = async ({
  toEmail,
  subject,
  message,
}: {
  toEmail: string;
  subject: string;
  message: string;
}) => {
  await transporter.sendMail({
    from: config.env.nodemailer.smtpUser, // Sender email
    to: toEmail,
    subject,
    text: message,
  });

  // Optionally log success
  console.log(`Email sent to ${toEmail}`);
};
