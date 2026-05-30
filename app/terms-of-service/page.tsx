import { HeroHeader } from '@/components/header'
import FooterSection from '@/components/footer'

export default function TermsOfServicePage() {
    return (
        <div className="flex flex-col min-h-screen">
            <HeroHeader />
            <main className="flex-1 pt-32 pb-16">
                <div className="mx-auto max-w-3xl px-6">
                    <h1 className="text-3xl font-bold tracking-tight mb-2">Terms of Service</h1>
                    <p className="text-muted-foreground text-sm mb-2">Effective Date: May 30, 2026</p>
                    <p className="text-muted-foreground text-sm mb-10">Last Updated: May 30, 2026</p>

                    <div className="space-y-10 text-sm leading-relaxed">
                        <p className="text-muted-foreground">
                            These Terms of Service (&ldquo;Terms&rdquo;) govern your participation in the Discord server (&ldquo;the Server&rdquo;) and your use of any related services, dashboards, APIs, or tools (&ldquo;the Services&rdquo;) operated by the server administration team (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;).
                        </p>
                        <p className="text-muted-foreground">
                            By joining the Server, sending any message, interacting with any channel, or using any of the Services, you agree to be bound by these Terms in their entirety. If you do not agree, you must leave the Server immediately and refrain from using any Services.
                        </p>

                        {/* 1. Definitions */}
                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold">1. Definitions</h2>
                            <ul className="space-y-2 text-muted-foreground">
                                <li><strong className="text-foreground">&ldquo;Server&rdquo;</strong> refers to the Discord server where the analytics system is deployed.</li>
                                <li><strong className="text-foreground">&ldquo;Services&rdquo;</strong> refers to all tools, dashboards, automated systems, APIs, data processing pipelines, and analytics operated by the administration team in connection with the Server.</li>
                                <li><strong className="text-foreground">&ldquo;User&rdquo;</strong> refers to any individual who joins, participates in, views, or interacts with the Server or Services in any capacity.</li>
                                <li><strong className="text-foreground">&ldquo;System&rdquo;</strong> refers to the automated data collection and analysis layer that passively ingests and processes messages in designated channels.</li>
                                <li><strong className="text-foreground">&ldquo;Content&rdquo;</strong> refers to any text, links, files, images, attachments, reactions, or other material posted or shared within the Server.</li>
                                <li><strong className="text-foreground">&ldquo;Dashboard&rdquo;</strong> refers to any internal analytics interface, desktop application, or reporting tool that displays processed Server data.</li>
                            </ul>
                        </section>

                        {/* 2. Acceptance of Terms */}
                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold">2. Acceptance of Terms</h2>

                            <h3 className="text-base font-medium">2.1 Binding Agreement</h3>
                            <p className="text-muted-foreground">These Terms constitute a legally binding agreement between you and the administration team. By sending any message in the Server, you confirm that you have read, understood, and agree to be bound by these Terms.</p>

                            <h3 className="text-base font-medium">2.2 Changes to Terms</h3>
                            <p className="text-muted-foreground">We reserve the right to update, modify, or completely replace these Terms at any time, for any reason, without prior notice to individual users. Changes take effect immediately upon publication. Your continued participation in the Server after changes are made constitutes acceptance of the revised Terms.</p>
                            <p className="text-muted-foreground">We are not obligated to notify users individually of changes, provide a grace period for changes, allow users to opt out of changes, or maintain previous versions of Terms.</p>

                            <h3 className="text-base font-medium">2.3 Discord&apos;s Own Terms</h3>
                            <p className="text-muted-foreground">These Terms are in addition to, not a replacement for, Discord&apos;s own Terms of Service and Community Guidelines. You remain bound by Discord&apos;s rules while using their platform. In the event of a conflict between these Terms and Discord&apos;s Terms, Discord&apos;s Terms prevail regarding platform usage, but these Terms prevail regarding our Services and data practices.</p>
                        </section>

                        {/* 3. Nature of the Services */}
                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold">3. Nature of the Services</h2>

                            <h3 className="text-base font-medium">3.1 System Capabilities</h3>
                            <p className="text-muted-foreground">The Services include an automated analytics layer that collects, stores, and processes messages from designated channels. The System applies automated analysis to produce summaries, classifications, and metrics derived from the conversations that occur within the Server. All processing is non-interactive and runs without real-time feedback to users.</p>

                            <h3 className="text-base font-medium">3.2 No Warranty on Service Quality</h3>
                            <p className="text-muted-foreground">The Services are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranty of any kind, either express or implied, including but not limited to:</p>
                            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                                <li>Accuracy of automated analysis, classifications, or generated outputs</li>
                                <li>Reliability or uptime of the System</li>
                                <li>Completeness of data collection</li>
                                <li>Correctness of topic detection or grouping</li>
                                <li>Appropriateness of tone or urgency assessments</li>
                                <li>Availability of the dashboard or API endpoints</li>
                                <li>Preservation of data (data loss may occur)</li>
                                <li>Fitness for any particular purpose</li>
                            </ul>
                            <p className="text-muted-foreground">We make no guarantees that the Services will function correctly, be available at any given time, or produce accurate results. Automated analysis may be incorrect, misleading, or incomplete at any time.</p>

                            <h3 className="text-base font-medium">3.3 Operational Model</h3>
                            <p className="text-muted-foreground">The System operates non-interactively. It does not interact with or respond to users, indicate which channels are within its collection scope, provide real-time feedback or notifications to users, or display a distinguishable operational presence. Users should assume that any channel in the Server may be within the System&apos;s collection scope at any time.</p>
                        </section>

                        {/* 4. User Conduct Rules */}
                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold">4. User Conduct Rules</h2>

                            <h3 className="text-base font-medium">4.1 Acceptable Use</h3>
                            <p className="text-muted-foreground">When participating in the Server, you agree to:</p>
                            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                                <li>Be respectful to other members and administrators</li>
                                <li>Stay on topic for the relevant channel</li>
                                <li>Report bugs, issues, and feedback through designated channels</li>
                                <li>Respect intellectual property rights when sharing content</li>
                                <li>Comply with all applicable laws and regulations</li>
                                <li>Not attempt to circumvent, disable, or interfere with the System</li>
                            </ul>

                            <h3 className="text-base font-medium">4.2 Prohibited Conduct</h3>
                            <p className="text-muted-foreground">You are strictly prohibited from:</p>
                            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                                <li><strong className="text-foreground">Probing system configuration</strong> — Using any technique to determine the scope, channels, or configuration of the System&apos;s collection.</li>
                                <li><strong className="text-foreground">Interfering with system operations</strong> — Flooding channels, sending content designed to disrupt automated analysis, exploiting vulnerabilities, or any other interference.</li>
                                <li><strong className="text-foreground">Reverse engineering the services</strong> — You may not reverse engineer, decompile, disassemble, or analyze the System, dashboard, APIs, or any component of the Services.</li>
                                <li><strong className="text-foreground">Unauthorized access</strong> — You may not access the dashboard, API endpoints, data stores, or any other component of the Services without explicit authorization.</li>
                                <li><strong className="text-foreground">Harassment and abuse</strong> — Harassing, threatening, doxxing, or abusing other members, administrators, or staff.</li>
                                <li><strong className="text-foreground">Spam and flooding</strong> — Sending repetitive, meaningless, or excessive messages, including content designed to degrade analytics quality or overwhelm System infrastructure.</li>
                                <li><strong className="text-foreground">Illegal content</strong> — Sharing content that violates applicable laws.</li>
                                <li><strong className="text-foreground">Impersonation</strong> — Impersonating administrators, staff, or other users.</li>
                                <li><strong className="text-foreground">Coordinated manipulation</strong> — Coordinating with other users to distort analytics outputs, game topic detection, or otherwise compromise the integrity of the Services.</li>
                                <li><strong className="text-foreground">Distributing service outputs</strong> — You may not share, distribute, or publish any outputs from the Services without explicit written permission from the administration team.</li>
                            </ul>

                            <h3 className="text-base font-medium">4.3 Consequences of Violations</h3>
                            <p className="text-muted-foreground">Violations may result in any combination of: warning (private or public, at our discretion), temporary muting or restriction from specific channels, temporary or permanent ban from the Server, reporting to Discord&apos;s Trust &amp; Safety team, or legal action where applicable. We reserve the right to take any action we deem appropriate for any behavior we consider harmful or disruptive, even if not explicitly listed above.</p>

                            <h3 className="text-base font-medium">4.4 Appeals</h3>
                            <p className="text-muted-foreground">Any disciplinary action may be appealed by contacting the administration team. We will review appeals at our sole discretion. There is no guaranteed timeline for appeal review, and all decisions are final.</p>
                        </section>

                        {/* 5. Intellectual Property */}
                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold">5. Intellectual Property</h2>

                            <h3 className="text-base font-medium">5.1 Your Content</h3>
                            <p className="text-muted-foreground">By sending messages in the Server, you retain ownership of your original content. However, you grant us a perpetual, irrevocable, worldwide, royalty-free, non-exclusive license to store your messages and associated metadata, process them through automated analysis systems, generate derivative works (summaries, classifications, assessments) from your messages, use your messages and derived data for analytics, reporting, and operational decision-making, and retain your messages in data stores, semantic indexes, and backups. This license survives even if you leave the Server, delete your Discord account, or request removal from the Server.</p>

                            <h3 className="text-base font-medium">5.2 Derived Works</h3>
                            <p className="text-muted-foreground">All automated analysis outputs (summaries, topic labels, classifications, tone assessments, urgency ratings, activity metrics, and any other generated products) are the exclusive property of the administration team. You have no ownership interest in or control over how your messages are analyzed, categorized, or summarized.</p>

                            <h3 className="text-base font-medium">5.3 The Services</h3>
                            <p className="text-muted-foreground">All software, algorithms, configurations, dashboards, APIs, documentation, and infrastructure comprising the Services are the exclusive property of the administration team. You have no right to access, use, copy, modify, or distribute any component of the Services beyond what is explicitly permitted by these Terms.</p>
                        </section>

                        {/* 6. Limitation of Liability */}
                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold">6. Limitation of Liability</h2>

                            <h3 className="text-base font-medium">6.1 No Liability for Data Operations</h3>
                            <p className="text-muted-foreground">We are not liable for any consequences arising from the collection, storage, processing, or analysis of your messages. This includes but is not limited to consequences arising from awareness of data collection practices, outcomes resulting from automated analysis or classifications, professional or personal consequences from data retention, privacy-related outcomes from downstream data processing, or effects of inaccurate automated characterizations of your statements.</p>

                            <h3 className="text-base font-medium">6.2 No Liability for Service Failures</h3>
                            <p className="text-muted-foreground">We are not liable for any loss of data, messages, or analysis results; downtime, outages, or unavailability of the Services; incorrect automated analysis or inaccurate outputs; gaps in data collection during service interruptions; data corruption, loss, or unauthorized access; any bugs, errors, or defects in the System; downstream processor failures; or loss of access to the Server for any reason.</p>

                            <h3 className="text-base font-medium">6.3 No Liability for User Actions</h3>
                            <p className="text-muted-foreground">We are not responsible for what other users say or share in the Server, how users interpret automated analysis outputs, actions taken by users based on information in the Server, Discord&apos;s own enforcement actions or platform issues, or any disputes between users.</p>

                            <h3 className="text-base font-medium">6.4 Maximum Liability</h3>
                            <p className="text-muted-foreground">In no event shall our total aggregate liability to you exceed zero dollars ($0.00). This means we are not financially liable to you under any circumstance, including but not limited to direct, indirect, consequential, incidental, punitive, or special damages, or loss of profits, data, goodwill, or reputation. This limitation applies regardless of the legal theory pursued, whether we were advised of the possibility of damages, or whether damages were foreseeable.</p>

                            <h3 className="text-base font-medium">6.5 Assumption of Risk</h3>
                            <p className="text-muted-foreground">By participating in the Server, you assume all risks associated with having your messages collected and analyzed, having your statements interpreted by automated systems, having your data retained across distributed infrastructure, having your data transmitted to downstream processors, and the possibility of data breaches or unauthorized access.</p>
                        </section>

                        {/* 7. Indemnification */}
                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold">7. Indemnification</h2>
                            <p className="text-muted-foreground">You agree to indemnify, defend, and hold harmless the administration team and any affiliated parties from and against any and all claims, damages, losses, costs, expenses (including reasonable legal fees), and liabilities arising from or related to your use of the Server or Services, your violation of these Terms, your violation of any applicable law or regulation, content you post or share in the Server, your interaction with other users, any attempt to disrupt or gain unauthorized access to the Services, or any claim that your content infringes on third-party rights. This indemnification obligation survives the termination of these Terms and your departure from the Server.</p>
                        </section>

                        {/* 8. Data and Privacy */}
                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold">8. Data and Privacy</h2>

                            <h3 className="text-base font-medium">8.1 Privacy Policy</h3>
                            <p className="text-muted-foreground">Your data collection, processing, and storage practices are described in our separate <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>, which is incorporated into these Terms by reference. You acknowledge that you have read and understood the Privacy Policy.</p>

                            <h3 className="text-base font-medium">8.2 Key Acknowledgments</h3>
                            <p className="text-muted-foreground">By using the Server, you acknowledge:</p>
                            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                                <li>Messages in designated channels are collected by the System</li>
                                <li>Messages are processed through automated analysis systems</li>
                                <li>Data is stored across distributed infrastructure and downstream processing services</li>
                                <li>Data is transmitted to downstream processors</li>
                                <li>You may request removal of your raw message records by contacting hasinraiyan on Discord with your Discord User ID</li>
                                <li>Analysis outputs derived from your messages cannot be removed once generated by the nightly analysis cycle</li>
                                <li>There is no mechanism to opt out of collection within covered channels</li>
                                <li>Automated analysis of your messages may be inaccurate</li>
                                <li>The System operates continuously across designated channels</li>
                            </ul>
                        </section>

                        {/* 9. Dispute Resolution */}
                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold">9. Dispute Resolution</h2>

                            <h3 className="text-base font-medium">9.1 Informal Resolution</h3>
                            <p className="text-muted-foreground">In the event of any dispute, claim, or controversy arising from or related to these Terms, the Server, or the Services, you agree to first attempt to resolve the matter by contacting the administration team through Discord. We will attempt to resolve the dispute informally within 30 days.</p>

                            <h3 className="text-base font-medium">9.2 Binding Arbitration</h3>
                            <p className="text-muted-foreground">If the dispute cannot be resolved informally within 30 days, you agree that the dispute shall be resolved through binding arbitration administered by a mutually agreed-upon arbitrator. The arbitration shall be conducted in English, take place remotely, and the arbitrator&apos;s decision shall be final and binding. Judgment on the arbitration award may be entered in any court of competent jurisdiction.</p>

                            <h3 className="text-base font-medium">9.3 Waiver of Class Actions</h3>
                            <p className="text-muted-foreground">You agree that any dispute resolution proceedings will be conducted only on an individual basis and not in a class, consolidated, or representative action. You waive any right to participate in a class action lawsuit, class-wide arbitration, or consolidate your claims with those of other users.</p>

                            <h3 className="text-base font-medium">9.4 Waiver of Jury Trial</h3>
                            <p className="text-muted-foreground">You hereby waive any right to a jury trial in connection with any action or litigation arising from or related to these Terms, the Server, or the Services.</p>

                            <h3 className="text-base font-medium">9.5 Governing Law</h3>
                            <p className="text-muted-foreground">These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which the administration team is based, without regard to its conflict of law principles.</p>

                            <h3 className="text-base font-medium">9.6 Survival</h3>
                            <p className="text-muted-foreground">Sections 5 (Intellectual Property), 6 (Limitation of Liability), 7 (Indemnification), 8 (Data and Privacy), and 9 (Dispute Resolution) survive the termination of these Terms or your departure from the Server.</p>

                            <h3 className="text-base font-medium">9.7 Attorney Fees</h3>
                            <p className="text-muted-foreground">In any dispute arising from these Terms, each party shall bear its own attorney fees, costs, and expenses, regardless of the outcome, unless the arbitrator or court determines that one party acted in bad faith.</p>
                        </section>

                        {/* 10. Termination */}
                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold">10. Termination</h2>

                            <h3 className="text-base font-medium">10.1 Termination by Us</h3>
                            <p className="text-muted-foreground">We may terminate or restrict your access to the Server at any time, for any reason or no reason, without prior notice or explanation.</p>

                            <h3 className="text-base font-medium">10.2 Termination by You</h3>
                            <p className="text-muted-foreground">You may terminate these Terms at any time by leaving the Server and ceasing all use of the Services. However, termination does not automatically delete any data already collected, does not revoke the license granted in Section 5, and you may request deletion of your messages as described in the Privacy Policy.</p>

                            <h3 className="text-base font-medium">10.3 Effect of Termination</h3>
                            <p className="text-muted-foreground">Upon termination, all rights granted to you under these Terms immediately cease, our obligations under these Terms cease (except surviving sections), any data collected remains in our systems subject to the Privacy Policy, and you must stop using the Services immediately.</p>
                        </section>

                        {/* 11. General Provisions */}
                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold">11. General Provisions</h2>

                            <h3 className="text-base font-medium">11.1 Entire Agreement</h3>
                            <p className="text-muted-foreground">These Terms, together with the Privacy Policy, constitute the entire agreement between you and the administration team regarding the use of the Server and Services.</p>

                            <h3 className="text-base font-medium">11.2 Severability</h3>
                            <p className="text-muted-foreground">If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.</p>

                            <h3 className="text-base font-medium">11.3 Waiver</h3>
                            <p className="text-muted-foreground">Our failure to enforce any right or provision of these Terms shall not constitute a waiver of that right or provision.</p>

                            <h3 className="text-base font-medium">11.4 Assignment</h3>
                            <p className="text-muted-foreground">You may not assign or transfer these Terms or your rights or obligations hereunder without our prior written consent. We may assign our rights and obligations under these Terms without your consent or notice.</p>

                            <h3 className="text-base font-medium">11.5 No Agency</h3>
                            <p className="text-muted-foreground">Nothing in these Terms creates an agency, partnership, joint venture, employment, or fiduciary relationship between you and the administration team.</p>

                            <h3 className="text-base font-medium">11.6 No Third-Party Beneficiaries</h3>
                            <p className="text-muted-foreground">These Terms are for the sole benefit of you and the administration team. No third party has any rights under these Terms.</p>

                            <h3 className="text-base font-medium">11.7 Force Majeure</h3>
                            <p className="text-muted-foreground">We shall not be liable for any failure or delay in performing our obligations due to circumstances beyond our reasonable control, including but not limited to natural disasters, wars, terrorism, riots, embargoes, acts of civil or military authorities, fire, floods, accidents, strikes, pandemics, telecommunication failures, internet outages, or failures of downstream service providers.</p>

                            <h3 className="text-base font-medium">11.8 Electronic Communications</h3>
                            <p className="text-muted-foreground">By using the Server, you consent to receive communications from us electronically. We may communicate with you via Discord direct messages, channel messages, or any other electronic means we deem appropriate.</p>

                            <h3 className="text-base font-medium">11.9 Independent Rights</h3>
                            <p className="text-muted-foreground">The rights and remedies provided in these Terms are in addition to, not in lieu of, any other rights or remedies available to us under applicable law.</p>
                        </section>

                        {/* 12. Acknowledgment */}
                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold">12. Acknowledgment</h2>
                            <p className="text-muted-foreground">By joining the Server, sending any message, or using any Service, you explicitly acknowledge that:</p>
                            <ol className="list-decimal pl-5 space-y-1 text-muted-foreground">
                                <li>You have read and understood these Terms of Service</li>
                                <li>You have read and understood the Privacy Policy</li>
                                <li>You understand that your messages are being collected and processed by the System</li>
                                <li>You understand that your messages are being analyzed by automated systems</li>
                                <li>You may request removal of your raw message records by contacting hasinraiyan on Discord; generated analysis cannot be removed</li>
                                <li>You waive your right to a jury trial and class action participation</li>
                                <li>You agree to binding arbitration for dispute resolution</li>
                                <li>Our total financial liability to you is zero ($0.00)</li>
                                <li>You assume all risks associated with participating in a server served by the System</li>
                                <li>You grant us a perpetual license to store and analyze your messages</li>
                                <li>These Terms may change at any time without notice</li>
                                <li>You may be removed from the Server at any time for any reason</li>
                            </ol>
                        </section>
                    </div>
                </div>
            </main>
            <FooterSection />
        </div>
    )
}
