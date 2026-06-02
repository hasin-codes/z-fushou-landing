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
                        {/* v0.93.0 */}
                        <article className="rounded-2xl border bg-card p-6 md:p-8">
                            <div className="flex flex-wrap items-center gap-3 mb-4">
                                <h2 className="text-xl font-semibold">v0.93.0</h2>
                                <span className="rounded-full bg-orange-500/10 px-3 py-0.5 text-xs font-medium text-orange-500">In Development Preview</span>
                                <span className="text-muted-foreground text-sm">Upcoming</span>
                            </div>

                            <p className="text-muted-foreground leading-relaxed mb-6">
                                Live engine v2. Smarter conversation matching, case lifecycle improvements, daily reset, and credential isolation between the live engine and nightly pipeline.
                            </p>

                            <div className="space-y-4">
                                <div>
                                    <span className="text-xs font-medium uppercase tracking-wider text-green-500">What&apos;s Changing</span>
                                    <ul className="mt-2 space-y-2 text-sm">
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 size-1.5 rounded-full bg-green-500 shrink-0" />
                                            <span>The live engine now searches across the whole server for matching conversations, not just the same channel. It uses a two tier matching system where messages in the same channel can match more loosely, while cross channel matches need to be more similar to count.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 size-1.5 rounded-full bg-green-500 shrink-0" />
                                            <span>Cases that were recently closed can now be reopened if a related message comes in within a few hours. This preserves context instead of starting a brand new case for the same topic.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 size-1.5 rounded-full bg-green-500 shrink-0" />
                                            <span>All open cases close automatically at 2 AM Beijing time and the vector index gets wiped clean for a fresh start each day.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 size-1.5 rounded-full bg-green-500 shrink-0" />
                                            <span>The nightly pipeline and the live engine now run on completely separate credentials so a change or issue in one cannot affect the other.</span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <span className="text-xs font-medium uppercase tracking-wider text-yellow-500">Fixed</span>
                                    <ul className="mt-2 space-y-2 text-sm">
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 size-1.5 rounded-full bg-yellow-500 shrink-0" />
                                            <span>Unknown status values now throw an error immediately instead of silently falling back to something wrong.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 size-1.5 rounded-full bg-yellow-500 shrink-0" />
                                            <span>Closed case lookups are now batched once per cycle instead of querying per message, which cuts down unnecessary database calls.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 size-1.5 rounded-full bg-yellow-500 shrink-0" />
                                            <span>Lock timeout is longer now and gets refreshed mid batch so large batches cannot lose the lock halfway through.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 size-1.5 rounded-full bg-yellow-500 shrink-0" />
                                            <span>The engine retries lock acquisition on startup so rolling deploys do not leave it locked out.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </article>

                        {/* v0.90.0 */}
                        <article className="rounded-2xl border bg-card p-6 md:p-8">
                            <div className="flex flex-wrap items-center gap-3 mb-4">
                                <h2 className="text-xl font-semibold">v0.90.0</h2>
                                <span className="rounded-full bg-primary/10 px-3 py-0.5 text-xs font-medium text-primary">Beta</span>
                            </div>

                            <p className="text-muted-foreground leading-relaxed mb-6">
                                Biggest update yet. ZFushou now has a live discussion engine that processes messages within seconds of them arriving, groups them into coherent conversations, and keeps AI generated summaries and timelines updated in real time. This runs alongside the existing nightly pipeline so nothing about how things work today has changed.
                            </p>

                            <div className="space-y-4">
                                <div>
                                    <span className="text-xs font-medium uppercase tracking-wider text-green-500">New</span>
                                    <ul className="mt-2 space-y-2 text-sm">
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 size-1.5 rounded-full bg-green-500 shrink-0" />
                                            <span>A live engine that picks up new messages every few seconds, figures out which ongoing conversation they belong to, and attaches them to the right case automatically.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 size-1.5 rounded-full bg-green-500 shrink-0" />
                                            <span>Each conversation gets a running summary, a status (active, being looked into, resolved, or gone quiet), a routing label (product side, user side, or mixed), and an attention score so you can immediately see what needs eyes on it.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 size-1.5 rounded-full bg-green-500 shrink-0" />
                                            <span>Live timelines that capture the important moments of each conversation as it evolves, not just at the end.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 size-1.5 rounded-full bg-green-500 shrink-0" />
                                            <span>Conversations that go quiet for a while close themselves automatically with a final summary. If the topic shifts mid conversation, the engine detects the shift and opens a fresh case so summaries stay focused.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 size-1.5 rounded-full bg-green-500 shrink-0" />
                                            <span>Unanswered questions inside each conversation are tracked and surfaced separately so nothing gets lost in the noise.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 size-1.5 rounded-full bg-green-500 shrink-0" />
                                            <span>Internal safety guards: the engine validates every vector before using it, runs health checks on startup before going live, and uses a distributed lock so multiple workers never step on each other.</span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <span className="text-xs font-medium uppercase tracking-wider text-blue-500">Also Changing</span>
                                    <ul className="mt-2 space-y-2 text-sm">
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 size-1.5 rounded-full bg-blue-500 shrink-0" />
                                            <span>The nightly pipeline runs earlier so results are ready by the time you wake up instead of late morning.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 size-1.5 rounded-full bg-blue-500 shrink-0" />
                                            <span>When the AI fails to parse a response internally, the raw output now gets logged so debugging is much faster.</span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <span className="text-xs font-medium uppercase tracking-wider text-yellow-500">Fixed</span>
                                    <ul className="mt-2 space-y-2 text-sm">
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 size-1.5 rounded-full bg-yellow-500 shrink-0" />
                                            <span>Monitored mentions are now protected from the weekly retention sweep so they stick around permanently for the mentions system.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </article>

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
