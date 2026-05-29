import { HeroHeader } from '@/components/header'
import FooterSection from '@/components/footer'

export default function ChangelogsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <HeroHeader />
            <main className="flex-1 pt-32 pb-16">
                <div className="mx-auto max-w-3xl px-6">
                    <h1 className="text-3xl font-bold tracking-tight mb-8">Changelogs</h1>

                    <div className="space-y-6">
                        {/* v0.68.0 */}
                        <article className="rounded-2xl border bg-card p-6 md:p-8">
                            <div className="flex flex-wrap items-center gap-3 mb-4">
                                <h2 className="text-xl font-semibold">v0.68.0</h2>
                                <span className="rounded-full bg-primary/10 px-3 py-0.5 text-xs font-medium text-primary">Beta</span>
                                <span className="text-muted-foreground text-sm">30 May 2026</span>
                            </div>

                            <p className="text-muted-foreground leading-relaxed mb-4">
                                Bug fixes and polish — removed dead code, fixed inaccurate metrics, and smoothed out the initial load experience.
                            </p>

                            <div className="space-y-3">
                                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Improvements &amp; Fixes</h3>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1.5 size-1.5 rounded-full bg-red-500 shrink-0" />
                                        <span>Removed <strong>Today&apos;s Highlights</strong> component — it displayed entirely static, hard-coded content including a fake &ldquo;+24% compared to last Wednesday&rdquo; metric with no real data source behind it</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1.5 size-1.5 rounded-full bg-blue-500 shrink-0" />
                                        <span>Renamed <strong>&ldquo;Total Volume&rdquo;</strong> KPI label to <strong>&ldquo;Total Message&rdquo;</strong> for clearer semantics</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1.5 size-1.5 rounded-full bg-blue-500 shrink-0" />
                                        <span>Connected the document icon button in the window control topbar — it now opens the documentation page</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1.5 size-1.5 rounded-full bg-yellow-500 shrink-0" />
                                        <span>Fixed <strong>community activity chart inflated numbers</strong> — speaker counts were summed across hourly buckets causing the same user to be counted multiple times; now uses authoritative KPI counts directly</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1.5 size-1.5 rounded-full bg-yellow-500 shrink-0" />
                                        <span>Fixed <strong>initial load flash of default data</strong> — overview data now waits for the topbar to set proper date range params instead of firing requests with empty dates that returned wrong defaults</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1.5 size-1.5 rounded-full bg-yellow-500 shrink-0" />
                                        <span>Fixed <strong>Electron binary resolution crash</strong> — <code className="rounded bg-muted px-1 text-xs">path.txt</code> had a trailing <code className="rounded bg-muted px-1 text-xs">\r\n</code> causing the wrong executable path on Windows</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1.5 size-1.5 rounded-full bg-green-500 shrink-0" />
                                        <span>Version bump 0.67.0 → 0.68.0</span>
                                    </li>
                                </ul>
                            </div>
                        </article>

                        {/* v0.67.0 */}
                        <article className="rounded-2xl border bg-card p-6 md:p-8">
                            <div className="flex flex-wrap items-center gap-3 mb-4">
                                <h2 className="text-xl font-semibold">v0.67.0</h2>
                                <span className="rounded-full bg-primary/10 px-3 py-0.5 text-xs font-medium text-primary">Beta</span>
                                <span className="text-muted-foreground text-sm">28 May 2026</span>
                            </div>

                            <p className="text-muted-foreground leading-relaxed mb-4">
                                This is the first beta release of ZFushou. More updates and bug fixes will come.
                            </p>

                            <div className="space-y-3">
                                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">What&apos;s New</h3>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1.5 size-1.5 rounded-full bg-green-500 shrink-0" />
                                        <span>Initial beta release of ZFushou desktop app</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1.5 size-1.5 rounded-full bg-green-500 shrink-0" />
                                        <span>Available for Windows (x64) and macOS (Apple Silicon)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1.5 size-1.5 rounded-full bg-green-500 shrink-0" />
                                        <span>Core conversation intelligence and issue detection</span>
                                    </li>
                                </ul>
                            </div>
                        </article>

                        {/* End of history */}
                        <div className="rounded-2xl border border-dashed bg-card p-6 text-center">
                            <p className="text-muted-foreground text-sm">
                                You&apos;ve reached the end of the release history.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <FooterSection />
        </div>
    )
}
