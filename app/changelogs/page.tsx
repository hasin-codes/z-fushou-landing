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
                        {/* v0.69.0 */}
                        <article className="rounded-2xl border bg-card p-6 md:p-8">
                            <div className="flex flex-wrap items-center gap-3 mb-4">
                                <h2 className="text-xl font-semibold">v0.69.0</h2>
                                <span className="rounded-full bg-primary/10 px-3 py-0.5 text-xs font-medium text-primary">Beta</span>
                                <span className="text-muted-foreground text-sm">31 May 2026</span>
                            </div>

                            <p className="text-muted-foreground leading-relaxed mb-4">
                                7-day activity heatmap, data accuracy fixes, and improved auth error messages.
                            </p>

                            <div className="space-y-3">
                                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">What&apos;s New</h3>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1.5 size-1.5 rounded-full bg-green-500 shrink-0" />
                                        <span><strong>7-day activity heatmap</strong> — toggle between 24-hour and weekly views to spot activity patterns across the week, with data pre-loaded for instant switching</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1.5 size-1.5 rounded-full bg-green-500 shrink-0" />
                                        <span>Line chart now draws in with a smooth animation on load</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1.5 size-1.5 rounded-full bg-green-500 shrink-0" />
                                        <span>Auth error messages now show specific reasons — session expired, no permission, server down, or network offline</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="space-y-3 mt-5">
                                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Fixes</h3>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1.5 size-1.5 rounded-full bg-yellow-500 shrink-0" />
                                        <span>Fixed inflated speaker counts — users active across multiple hours were counted once per hour instead of once total</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1.5 size-1.5 rounded-full bg-yellow-500 shrink-0" />
                                        <span>Fixed false data in future hours — activity chart no longer shows stale numbers for hours that haven&apos;t happened yet</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1.5 size-1.5 rounded-full bg-yellow-500 shrink-0" />
                                        <span>Fixed cross-day data bleeding in the weekly heatmap from timezone offset handling</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1.5 size-1.5 rounded-full bg-yellow-500 shrink-0" />
                                        <span>Fixed heatmap showing excessive zeros — integer-typed hour entries were being dropped by the date-filter logic, zeroing out entire days</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1.5 size-1.5 rounded-full bg-yellow-500 shrink-0" />
                                        <span>Fixed heatmap and activity chart data accuracy — backend now returns consistent ISO timestamps instead of mixed integer/string hours, and single-day queries return full data without needing overlap hacks; line chart no longer plots UTC hours under wrong local labels</span>
                                    </li>
                                </ul>
                            </div>
                        </article>

                        {/* v0.68.0 */}
                        <article className="rounded-2xl border bg-card p-6 md:p-8">
                            <div className="flex flex-wrap items-center gap-3 mb-4">
                                <h2 className="text-xl font-semibold">v0.68.0</h2>
                                <span className="rounded-full bg-primary/10 px-3 py-0.5 text-xs font-medium text-primary">Beta</span>
                                <span className="text-muted-foreground text-sm">30 May 2026</span>
                            </div>

                            <p className="text-muted-foreground leading-relaxed mb-4">
                                Dashboard loading screen, UI contrast fixes, brand color update, and rename to ZFushou.
                            </p>

                            <div className="space-y-3">
                                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">What&apos;s New</h3>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1.5 size-1.5 rounded-full bg-green-500 shrink-0" />
                                        <span>Dashboard loading overlay with logo animation</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1.5 size-1.5 rounded-full bg-green-500 shrink-0" />
                                        <span>Rebranded accent color from blue to brand green across the entire dashboard</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1.5 size-1.5 rounded-full bg-green-500 shrink-0" />
                                        <span>Renamed to <strong>ZFushou</strong> across all surfaces</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1.5 size-1.5 rounded-full bg-green-500 shrink-0" />
                                        <span>Added inner content surface layer to dashboard cards for better visual hierarchy</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="space-y-3 mt-5">
                                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Fixes</h3>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1.5 size-1.5 rounded-full bg-yellow-500 shrink-0" />
                                        <span>Improved text contrast in hot topics detail view</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1.5 size-1.5 rounded-full bg-yellow-500 shrink-0" />
                                        <span>Fixed pill and tab contrast in dark mode</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1.5 size-1.5 rounded-full bg-yellow-500 shrink-0" />
                                        <span>Fixed inflated numbers in the activity chart</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1.5 size-1.5 rounded-full bg-yellow-500 shrink-0" />
                                        <span>Fixed flash of wrong data on initial load</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1.5 size-1.5 rounded-full bg-yellow-500 shrink-0" />
                                        <span>Fixed Electron crash on Windows from corrupted binary path</span>
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
