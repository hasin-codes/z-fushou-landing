import { HeroHeader } from '@/components/header'
import FooterSection from '@/components/footer'

export default function DocsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <HeroHeader />
            <main className="flex-1 pt-32 pb-16">
                <div className="mx-auto max-w-3xl px-6">
                    <h1 className="text-3xl font-bold tracking-tight mb-8">Documentation</h1>

                    <div className="rounded-2xl border bg-card p-8 md:p-12 text-center">
                        <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-muted">
                            <svg className="size-8 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                            </svg>
                        </div>
                        <h2 className="text-xl font-semibold mb-2">Coming Soon</h2>
                        <p className="text-muted-foreground max-w-md mx-auto">
                            I&apos;m working on comprehensive documentation for Z Fushou. Check back soon for setup guides, API references, and integration docs.
                        </p>
                    </div>
                </div>
            </main>
            <FooterSection />
        </div>
    )
}
