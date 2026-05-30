import { SignIn } from "@clerk/nextjs"
import { HeroHeader } from '@/components/header'
import FooterSection from '@/components/footer'
import { Logo } from '@/components/logo'
import Link from 'next/link'

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroHeader />
      <main className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-md">
          <div className="text-center mb-6">
            <Link href="/" className="inline-block">
              <Logo className="h-16 w-16 mx-auto mb-4" />
            </Link>
            <h1 className="text-2xl font-bold text-foreground">Welcome back</h1>
            <p className="text-muted-foreground mt-2">Sign in to continue to ZFushou</p>
          </div>
          <SignIn
            appearance={{
              elements: {
                formButtonPrimary: 'bg-primary hover:bg-primary/90 text-primary-foreground',
                card: 'shadow-none border-0 bg-transparent',
                rootBox: 'w-full flex justify-center',
                main: 'w-full',
                formField: 'w-full',
                form: 'w-full',
                formButton: 'select-none w-full',
                button: 'select-none',
                socialButtonsBlockButton: 'w-full',
              }
            }}
          />
        </div>
      </main>
      <FooterSection />
    </div>
  )
}
