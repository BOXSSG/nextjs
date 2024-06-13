/**
 * v0 by Vercel.
 * @see https://v0.dev/t/dnAu15ix4v0
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between h-16 px-4 md:px-6 border-b">
        <Link href="#" className="flex items-center gap-2 text-lg font-semibold" prefetch={false}>
          <MountainIcon className="w-6 h-6" />
          <span>Cash Rebate</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
            Features
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
            Testimonials
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
            FAQ
          </Link>
          <Link
            href="#"
            className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            prefetch={false}
          >
            Sign Up
          </Link>
        </nav>
        <Button variant="outline" size="icon" className="md:hidden">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle navigation</span>
        </Button>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Get Cash Back on Your Purchases</h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our cash rebate program makes it easy to earn money back on the things you buy every day. Sign up and
                start saving today.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  prefetch={false}
                >
                  Sign Up
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  prefetch={false}
                >
                  Learn More
                </Link>
              </div>
            </div>
            <img
              src="/placeholder.svg"
              width="550"
              height="310"
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <img
              src="/placeholder.svg"
              width="550"
              height="310"
              alt="Features"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700">
                Cash Rebate Features
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Earn Cash Back on Everyday Purchases
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our cash rebate program makes it easy to earn money back on the things you buy every day. Sign up and
                start saving today.
              </p>
              <ul className="grid gap-2">
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Earn cash back on eligible purchases
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Track your rebate status and history
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Easy online claim submission
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Fast and reliable payouts
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700">
                Customer Testimonials
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Customers Say</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Hear from real customers who have used our cash rebate program and loved the experience.
              </p>
            </div>
            <div className="grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-col items-center">
                  <img src="/placeholder.svg" width="48" height="48" alt="Avatar" className="rounded-full" />
                  <div className="mt-2 text-center">
                    <div className="font-semibold">Jane Doe</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Acme Inc</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-lg font-semibold leading-snug">
                    &ldquo;I love using the cash rebate program. It's so easy to earn money back on the things I buy
                    every day.&rdquo;
                  </blockquote>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-col items-center">
                  <img src="/placeholder.svg" width="48" height="48" alt="Avatar" className="rounded-full" />
                  <div className="mt-2 text-center">
                    <div className="font-semibold">John Smith</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Acme Corp</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-lg font-semibold leading-snug">
                    &ldquo;The cash rebate program has saved me so much money. I highly recommend it to anyone looking
                    to earn cash back.&rdquo;
                  </blockquote>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-col items-center">
                  <img src="/placeholder.svg" width="48" height="48" alt="Avatar" className="rounded-full" />
                  <div className="mt-2 text-center">
                    <div className="font-semibold">Sarah Johnson</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Acme LLC</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-lg font-semibold leading-snug">
                    &ldquo;The cash rebate program is a game-changer. I\'ve been able to save so much money on my
                    everyday purchases.&rdquo;
                  </blockquote>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700">
                Frequently Asked Questions
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Got Questions? We\'ve Got Answers.
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Check out our FAQ section to learn more about our cash rebate program and how it works.
              </p>
            </div>
            <div className="w-full max-w-4xl">
              <Accordion>
                <AccordionItem>
                  <AccordionTrigger>How does the cash rebate program work?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-500 dark:text-gray-400">
                      Our cash rebate program allows you to earn money back on eligible purchases you make. Simply sign
                      up, link your payment cards, and start earning cash back. When you make a qualifying purchase, the
                      rebate amount will be automatically credited to your account.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem>
                  <AccordionTrigger>What types of purchases are eligible for cash back?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-500 dark:text-gray-400">
                      We offer cash back on a wide range of everyday purchases, including groceries, gas, dining, and
                      online shopping. You can view the full list of eligible merchants and categories in your account
                      dashboard.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem>
                  <AccordionTrigger>How do I submit a cash rebate claim?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-500 dark:text-gray-400">
                      Submitting a cash rebate claim is easy. Simply log in to your account, navigate to the "Submit
                      Claim" section, and follow the prompts to provide the necessary information. We\'ll review your
                      claim and process the rebate payment within a few business days.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem>
                  <AccordionTrigger>How long does it take to receive my cash rebate?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-500 dark:text-gray-400">
                      We strive to process cash rebate claims as quickly as possible. Once your claim is approved, you
                      can expect to receive your rebate payment within 5-7 business days. We offer a variety of payout
                      options, including direct deposit, PayPal, and check.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
        <section id="signup" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700">Sign Up Now</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Start Earning Cash Back Today
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Sign up for our cash rebate program and start saving money on the things you buy every day.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1" />
                <Button type="submit">Sign Up</Button>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                By signing up, you agree to our{" "}
                <Link href="#" className="underline underline-offset-2" prefetch={false}>
                  Terms of Service
                </Link>
                and{" "}
                <Link href="#" className="underline underline-offset-2" prefetch={false}>
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-100 p-6 m" />
    </div>
  )
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}