import React, { ReactNode } from 'react'
import Image from 'next/image';
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const layout = async ( { children }: { children: ReactNode }) => {
  const session = await auth();

  if (session) redirect("/");
  return (
       <main className="auth-container">
        <section className="auth-form">
          <div className="auth-box">
            <div className="flex flex-row gap-3">
              <Image className='rounded-lg' src="/images/logo.jpeg" alt="logo" width={70} height={70} />
              <h1 className=" mt-2 text-2xl font-semibold text-white">FUBK LMS</h1>
            </div>
  
            <div>{children}</div>
          </div>
        </section>
  
        <section className="auth-illustration">
          <Image
            src="/images/auth-illustration.png"
            alt="auth illustration"
            height={1000}
            width={1000}
            className="size-full object-cover"
          />
        </section>
      </main>
    );
  };

export default layout;