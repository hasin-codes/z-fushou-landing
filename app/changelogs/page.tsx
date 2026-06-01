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
                        {/* v0.70.0 */}
                        <article className="rounded-2xl border bg-card p-6 md:p-8">
                            <div className="flex flex-wrap items-center gap-3 mb-4">
                                <h2 className="text-xl font-semibold">v0.70.0</h2>
                                <span className="rounded-full bg-primary/10 px-3 py-0.5 text-xs font-medium text-primary">Beta</span>
                                <span className="text-muted-foreground text-sm">2 Jun 2026</span>
                            </div>

                            <p className="text-muted-foreground leading-relaxed mb-6">
                                New Mentioned page, smart data caching so switching between pages is instant, KPI card restyle, and some navigation cleanup. Date selections are preserved across page switches too.
                            </p>

                            <div className="space-y-4">
                                <div>
                                    <span className="text-xs font-medium uppercase tracking-wider text-green-500">New</span>
                                    <ul className="mt-2 space-y-2 text-sm">
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 size-1.5 rounded-full bg-green-500 shrink-0" />
                                            <span>New Mentioned page accessible via the @ icon in the sidebar. Shows author, summary, date, mention count, and channel for every monitored mention. Clicking a row opens the original Discord message.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 size-1.5 rounded-full bg-green-500 shrink-0" />
                                            <span>Dashboard data is now cached in memory. Switching between pages is instant with no refetch or loading screen. Data still refreshes in the background automatically.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 size-1.5 rounded-full bg-green-500 shrink-0" />
                                            <span>Mentions data is loaded at startup so the Mentioned page is ready the moment you click it.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 size-1.5 rounded-full bg-green-500 shrink-0" />
                                            <span>KPI cards got a cleaner restyle with a white surface and subtle colored accent shadow instead of the old patterned backgrounds.</span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <span className="text-xs font-medium uppercase tracking-wider text-yellow-500">Fixed</span>
                                    <ul className="mt-2 space-y-2 text-sm">
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 size-1.5 rounded-full bg-yellow-500 shrink-0" />
                                            <span>Retention cleanup was nuking monitored mentions after 7 days. These are now excluded from the sweep and kept indefinitely.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 size-1.5 rounded-full bg-yellow-500 shrink-0" />
                                            <span>Switching between pages no longer causes empty data flashes or unnecessary loading screens.</span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <span className="text-xs font-medium uppercase tracking-wider text-blue-500">Changed</span>
                                    <ul className="mt-2 space-y-2 text-sm">
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 size-1.5 rounded-full bg-blue-500 shrink-0" />
                                            <span>Added @ Mentioned icon to the sidebar.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 size-1.5 rounded-full bg-blue-500 shrink-0" />
                                            <span>Replaced Inbox with a Changelog link that opens the changelog site in a new tab.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 size-1.5 rounded-full bg-blue-500 shrink-0" />
                                            <span>External links now open in a separate browser window.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </article>

                        {/* v0.69.0 */}
                        <article className="rounded-2xl border bg-card p-6 md:p-8">
                            <div className="flex flex-wrap items-center gap-3 mb-4">
                                <h2 className="text-xl font-semibold">v0.69.0</h2>
                                <span className="rounded-full bg-primary/10 px-3 py-0.5 text-xs font-medium text-primary">Beta</span>
                                <span className="text-muted-foreground text-sm">31 May 2026</span>
                            </div>

                            <p className="text-muted-foreground leading-relaxed mb-6">
                                Big one this time. Added a weekly heatmap to the activity card, fixed a bunch of data accuracy issues that were making the charts unreliable, and cleaned up error messages so they actually tell you what went wrong.
                            </p>

                            <div className="space-y-4">
                                <div>
                                    <span className="text-xs font-medium uppercase tracking-wider text-green-500">New</span>
                                    <ul className="mt-2 space-y-2 text-sm">
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 size-1.5 rounded-full bg-green-500 shrink-0" />
                                            <span>You can now toggle the Community Activity card between 24 hours and a full week. The weekly view is a heatmap showing message volume per hour across the whole week. Data is already loaded so switching is instant.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 size-1.5 rounded-full bg-green-500 shrink-0" />
                                            <span>The line chart now has a smooth draw animation instead of just popping up.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 size-1.5 rounded-full bg-green-500 shrink-0" />
                                            <span>Login errors now tell you what actually happened instead of a generic &ldquo;something went wrong&rdquo;. Session expired, no permission, server down, or offline, each gets its own message.</span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <span className="text-xs font-medium uppercase tracking-wider text-yellow-500">Fixed</span>
                                    <ul className="mt-2 space-y-2 text-sm">
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 size-1.5 rounded-full bg-yellow-500 shrink-0" />
                                            <span>Speaker counts were way too high. A user active in 5 hours was counted 5 times instead of once. Now properly deduplicated.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 size-1.5 rounded-full bg-yellow-500 shrink-0" />
                                            <span>The activity chart was showing data in future hours by silently reusing stale numbers from yesterday. Now it stops at the current hour and the heatmap zeroes out anything that hasn&apos;t happened yet today.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 size-1.5 rounded-full bg-yellow-500 shrink-0" />
                                            <span>Weekly heatmap had activity bleeding between days because timezone offsets were not handled right. Each day is now correctly isolated.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 size-1.5 rounded-full bg-yellow-500 shrink-0" />
                                            <span>The heatmap was showing tons of zeros because the backend was returning hour values as integers sometimes and the client was dropping them. Both sides are now fixed, single day queries return full data, and the line chart no longer plots UTC hours under wrong local labels.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </article>

                        {/* v0.68.0 */}
                        <article className="rounded-2xl border bg-card p-6 md:p-8">
                            <div className="flex flex-wrap items-center gap-3 mb-4">
                                <h2 className="text-xl font-semibold">v0.68.0</h2>
                                <span className="rounded-full bg-primary/10 px-3 py-0.5 text-xs font-medium text-primary">Beta</span>
                                <span className="text-muted-foreground text-sm">30 May 2026</span>
                            </div>

                            <p className="text-muted-foreground leading-relaxed mb-6">
                                Mostly visual this round. New loading screen, swapped all the blue accents for brand green, fixed a bunch of contrast issues, and renamed everything to ZFushou.
                            </p>

                            <div className="space-y-4">
                                <div>
                                    <span className="text-xs font-medium uppercase tracking-wider text-green-500">New</span>
                                    <ul className="mt-2 space-y-2 text-sm">
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 size-1.5 rounded-full bg-green-500 shrink-0" />
                                            <span>Dashboard now has a shimmer loading overlay with the logo that fades out once data loads in.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 size-1.5 rounded-full bg-green-500 shrink-0" />
                                            <span>Swapped every blue accent to brand green across the whole dashboard.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 size-1.5 rounded-full bg-green-500 shrink-0" />
                                            <span>Renamed to <strong>ZFushou</strong> everywhere.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 size-1.5 rounded-full bg-green-500 shrink-0" />
                                            <span>Dashboard cards now have an inner surface layer for better visual separation.</span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <span className="text-xs font-medium uppercase tracking-wider text-yellow-500">Fixed</span>
                                    <ul className="mt-2 space-y-2 text-sm">
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 size-1.5 rounded-full bg-yellow-500 shrink-0" />
                                            <span>Hot topics detail view had poor contrast, text and card backgrounds are now much more readable.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 size-1.5 rounded-full bg-yellow-500 shrink-0" />
                                            <span>Dark mode pill and tab contrast was too low, fixed that.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 size-1.5 rounded-full bg-yellow-500 shrink-0" />
                                            <span>Activity chart was showing inflated numbers, same dedup fix as above.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 size-1.5 rounded-full bg-yellow-500 shrink-0" />
                                            <span>On first load the dashboard would flash wrong data for a second before the real numbers came in. Now it waits for proper date params before fetching anything.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 size-1.5 rounded-full bg-yellow-500 shrink-0" />
                                            <span>Electron was crashing on Windows because path.txt had a trailing line ending that broke the binary path resolution.</span>
                                        </li>
                                    </ul>
                                </div>
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
                                First beta. Available on Windows x64 and macOS Apple Silicon. Core conversation intelligence and issue detection are in. More coming soon.
                            </p>
                        </article>

                        {/* End of history */}
                        <div className="rounded-2xl border border-dashed bg-card p-6 text-center">
                            <p className="text-muted-foreground text-sm">
                                That&apos;s all the releases so far.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <FooterSection />
        </div>
    )
}
