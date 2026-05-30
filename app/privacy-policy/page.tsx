import { HeroHeader } from '@/components/header'
import FooterSection from '@/components/footer'

export default function PrivacyPolicyPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <HeroHeader />
            <main className="flex-1 pt-32 pb-16">
                <div className="mx-auto max-w-3xl px-6">
                    <h1 className="text-3xl font-bold tracking-tight mb-2">Privacy Policy</h1>
                    <p className="text-muted-foreground text-sm mb-2">Effective Date: May 30, 2026</p>
                    <p className="text-muted-foreground text-sm mb-10">Last Updated: May 30, 2026</p>

                    <div className="space-y-10 text-sm leading-relaxed">
                        <p className="text-muted-foreground">
                            This Privacy Policy describes the data collection, storage, processing, and usage practices of the analytics system (&ldquo;the System&rdquo;) operated by the server administrators (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) across designated Discord channels.
                        </p>
                        <p className="text-muted-foreground">
                            By sending any message in a channel covered by the System, you acknowledge and consent to all practices described in this document. If you do not agree with any part of this policy, do not send messages in covered channels.
                        </p>

                        {/* 1. Overview */}
                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold">1. Overview</h2>
                            <p className="text-muted-foreground">The System is an automated analytics layer running across designated channels in this Discord server. It ingests conversations, applies automated analysis, and produces structured outputs for the administration team — topic summaries, recurring issue tracking, tone and urgency assessments, and activity metrics.</p>
                            <p className="text-muted-foreground">The System operates non-interactively. It does not respond to messages, send direct messages, or display any visible presence. It runs as a background process that continuously ingests and processes conversations from covered channels and their threads.</p>
                            <p className="text-muted-foreground">Collection is comprehensive within designated channels. Every non-bot, non-system message in a covered channel or its threads is ingested. Participation in covered channels constitutes acceptance of this collection.</p>
                        </section>

                        {/* 2. What Data We Collect */}
                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold">2. What Data We Collect</h2>
                            <p className="text-muted-foreground">We collect the following data elements for each message sent in a covered channel or thread within a covered channel:</p>

                            <h3 className="text-base font-medium">2.1 Message Content</h3>
                            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                                <li>The full text content of every message, including questions, feedback, opinions, code snippets, links, personal experiences, troubleshooting details, and any other text</li>
                                <li>If you edit a message after sending, we may capture both the original and edited versions</li>
                                <li>Discord message links and URLs included in messages</li>
                            </ul>

                            <h3 className="text-base font-medium">2.2 Message Metadata</h3>
                            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                                <li>Discord Message ID, Channel ID, Server/Guild ID, Thread ID (if applicable)</li>
                                <li>Timestamp (UTC)</li>
                                <li>Reply references (Message ID, Channel ID, Server ID of parent message)</li>
                            </ul>

                            <h3 className="text-base font-medium">2.3 User Identity Data</h3>
                            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                                <li>Discord User ID (permanent account identifier)</li>
                                <li>Discord Username (display name at time of message)</li>
                            </ul>

                            <h3 className="text-base font-medium">2.4 Attachment Metadata</h3>
                            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                                <li>Discord Attachment ID, filename, CDN URL, file size in bytes, content type (MIME type)</li>
                                <li>We store metadata only. We do not download, re-host, or store copies of actual file contents.</li>
                            </ul>

                            <h3 className="text-base font-medium">2.5 Mention Data</h3>
                            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                                <li>Every Discord user mention is extracted and resolved</li>
                                <li>User IDs of all mentioned parties are recorded</li>
                                <li>Messages mentioning designated personnel are flagged for priority analysis</li>
                                <li>Mentioned usernames are resolved and embedded into message content during processing</li>
                            </ul>

                            <h3 className="text-base font-medium">2.6 Continuity Collection</h3>
                            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                                <li>When the System initializes or resumes, it automatically retrieves up to 100 recent messages from each covered channel that were sent during any interruption period to ensure continuity of the data record</li>
                            </ul>
                        </section>

                        {/* 3. How Your Data is Processed */}
                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold">3. How Your Data is Processed</h2>
                            <p className="text-muted-foreground">Your data is processed through automated, machine-driven stages. No human review is involved. The System applies filtering, normalization, and automated analysis to produce structured outputs including:</p>
                            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                                <li>Messages are filtered and standardized for analysis</li>
                                <li>Automated systems identify conversation topics and group related messages</li>
                                <li>Summaries are generated that may quote or paraphrase your statements</li>
                                <li>Tone assessments are applied (frustrated, confused, neutral, satisfied)</li>
                                <li>Urgency assessments are applied (critical, high, medium, low)</li>
                                <li>Issues and unanswered questions are extracted from conversations</li>
                                <li>Messages referencing designated personnel are prioritized and summarized with surrounding context</li>
                                <li>Activity metrics are computed (volume, participation, frequency patterns)</li>
                            </ul>
                            <p className="text-muted-foreground">The analysis cycle runs automatically on a recurring basis.</p>
                        </section>

                        {/* 4. Where Your Data is Stored */}
                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold">4. Where Your Data is Stored</h2>
                            <p className="text-muted-foreground">Your data is stored across cloud-hosted infrastructure including:</p>
                            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                                <li>A primary relational database storing raw messages, processed data, generated analysis, and operational state</li>
                                <li>A vector database for semantic indexing and retrieval</li>
                                <li>An AI processing service used for classification, summarization, and indexing (operated by a third party whose data retention practices are outside our control)</li>
                                <li>Operational infrastructure for processing coordination and task management</li>
                            </ul>
                        </section>

                        {/* 5. Data Retention */}
                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold">5. Data Retention</h2>
                            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                                <li>Raw message records are retained for a minimum of 7 days. After this period, successfully processed records are eligible for automated pruning. Unprocessed records are retained until processing completes.</li>
                                <li>Processed data is retained as the long-term analytical dataset with no automated expiration.</li>
                                <li>Generated analysis (summaries, topic groupings, tone and urgency assessments, activity metrics) is retained permanently. When the analysis cycle re-runs for a specific date, that date&apos;s outputs are regenerated.</li>
                                <li>Semantic index entries are retained permanently.</li>
                                <li>Operational state is ephemeral.</li>
                            </ul>
                        </section>

                        {/* 6. Data Access and Governance */}
                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold">6. Data Access and Governance</h2>

                            <h3 className="text-base font-medium">6.1 Access Controls</h3>
                            <p className="text-muted-foreground">Access to System data is restricted to server administrators who operate the System and authorized dashboard users (authenticated via secure token-based verification). The dashboard surfaces processed data, generated summaries, activity metrics, and priority mention reports through authenticated API endpoints.</p>

                            <h3 className="text-base font-medium">6.2 Downstream Processors</h3>
                            <p className="text-muted-foreground">Data is transmitted to and processed by third-party service providers for data storage, automated analysis, semantic indexing, operational state management, and application hosting. Each provider operates under their own data handling terms, which are outside our control.</p>

                            <h3 className="text-base font-medium">6.3 Disclosure Policy</h3>
                            <p className="text-muted-foreground">Individual messages, usernames, and user identifiers are not published publicly. Aggregated outputs (topic trends, analytical summaries, activity patterns) may be shared internally or with designated stakeholders at our discretion.</p>
                        </section>

                        {/* 7. Your Rights */}
                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold">7. Your Rights</h2>

                            <h3 className="text-base font-medium">7.1 Right to Data Deletion</h3>
                            <p className="text-muted-foreground">You may request deletion of your personal data from our data stores by contacting hasinraiyan on Discord. You must include your Discord User ID in the request so we can locate and process your records.</p>
                            <p className="text-muted-foreground"><strong className="text-foreground">What will be removed:</strong> Your raw message records, conditioned/normalized message records, user ID and username references linked to those messages, and message-to-topic association records.</p>
                            <p className="text-muted-foreground"><strong className="text-foreground">What cannot be removed:</strong> Summaries and analysis derived from your messages — once the nightly analysis cycle processes your messages, it produces summaries, topic classifications, tone assessments, and urgency ratings stored as aggregate records organized by topic, not by individual contributor. Your contributions may be reflected in quoted, paraphrased, or synthesized form within these outputs. They cannot be selectively extracted without regenerating the entire date&apos;s analysis. Semantic index entries also cannot be selectively removed.</p>
                            <p className="text-muted-foreground"><strong className="text-foreground">Deletion process:</strong> Send a direct message to hasinraiyan on Discord, include your Discord User ID (numeric ID, not username), state that you are requesting data removal. We will process the request within 30 days and send confirmation via Discord direct message. We reserve the right to verify identity before processing. Deletion is final and cannot be reversed.</p>

                            <h3 className="text-base font-medium">7.2 Right to Access</h3>
                            <p className="text-muted-foreground">You may request a summary of the data we hold about you by contacting hasinraiyan on Discord with your Discord User ID. We will provide the volume of records associated with your account, the date range of your stored records, and the channels in which your data was collected. We do not provide full text exports of your messages, copies of generated analysis referencing your conversations, or raw database exports. Access requests will be processed within 30 days.</p>

                            <h3 className="text-base font-medium">7.3 Right to Correction</h3>
                            <p className="text-muted-foreground">The System does not support post-capture modification of message content after ingestion, username or user ID in historical records, or generated analysis or classifications. Records reflect the state at time of capture.</p>

                            <h3 className="text-base font-medium">7.4 Collection Scope</h3>
                            <p className="text-muted-foreground">The System applies to designated channels only. There is no opt-out mechanism within covered channels — collection is a function of channel configuration, not individual preference. The only way to avoid data collection is to not send messages in covered channels.</p>

                            <h3 className="text-base font-medium">7.5 GDPR and Regional Privacy Frameworks</h3>
                            <p className="text-muted-foreground">For individuals covered by the General Data Protection Regulation (GDPR) or comparable regional frameworks: you have the right to request deletion and access as described above; processing is conducted on the basis of legitimate interest (server operations, issue management, and product improvement); we process deletion requests within 30 days per GDPR Article 17; analysis outputs already generated cannot be fully removed; no automated decision-making is performed that produces legal or similarly significant effects on individuals; and data is processed via infrastructure outside the EU/EEA — by participating in covered channels, you consent to international data transfer.</p>
                        </section>

                        {/* 8. Data Security */}
                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold">8. Data Security</h2>

                            <h3 className="text-base font-medium">8.1 Security Controls</h3>
                            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                                <li>Database access requires service-level API keys</li>
                                <li>Dashboard API endpoints require JWT-based authentication</li>
                                <li>Credentials and secrets are stored as environment variables, not in source code or version control</li>
                                <li>All data transmission to downstream processors uses encrypted connections (HTTPS/TLS)</li>
                                <li>Database operations use parameterized queries to prevent injection</li>
                            </ul>

                            <h3 className="text-base font-medium">8.2 Security Posture</h3>
                            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                                <li>Message data is stored in plaintext within the primary data store</li>
                                <li>User identifiers are stored as-is (not pseudonymized or hashed)</li>
                                <li>Data transmitted to analysis services is subject to those providers&apos; handling practices, which are outside our visibility</li>
                                <li>The semantic index stores full segment text alongside representations</li>
                                <li>Infrastructure security is jointly maintained with hosting providers</li>
                            </ul>
                        </section>

                        {/* 9. Collection Scope */}
                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold">9. Collection Scope</h2>

                            <h3 className="text-base font-medium">9.1 Channel Coverage</h3>
                            <p className="text-muted-foreground">The System applies only to channels designated by administrators. Not all channels in the server are covered. Threads within covered channels are included. Direct messages and voice channels are not within scope.</p>

                            <h3 className="text-base font-medium">9.2 Within Scope</h3>
                            <p className="text-muted-foreground">All non-bot, non-system messages containing text or attachments, from all participants irrespective of role, membership tier, or awareness of the System. Messages sent during System interruptions are retrieved upon resumption (up to 100 per channel).</p>

                            <h3 className="text-base font-medium">9.3 Outside Scope</h3>
                            <p className="text-muted-foreground">Bot-generated messages, Discord system notifications (joins, pins), empty messages with no content and no attachments, messages preceding the configured collection start date, and messages in channels outside the System configuration.</p>
                        </section>

                        {/* 10. Automated Analysis Details */}
                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold">10. Automated Analysis Details</h2>

                            <h3 className="text-base font-medium">10.1 How Your Messages Are Analyzed</h3>
                            <p className="text-muted-foreground">Content is read to determine conversational topic areas. Summaries are generated that may quote or paraphrase your statements. Tone assessments are applied (frustrated, confused, neutral, satisfied). Urgency assessments are applied (critical, high, medium, low). Issues and unanswered questions are extracted from conversations. Mathematical representations are created for similarity retrieval.</p>

                            <h3 className="text-base font-medium">10.2 Analysis Infrastructure</h3>
                            <p className="text-muted-foreground">Language models for classification and summarization are hosted on Cloudflare. Indexing models for semantic representation are hosted on Cloudflare. Post-processing retention by Cloudflare is outside our control.</p>

                            <h3 className="text-base font-medium">10.3 Analysis Accuracy</h3>
                            <p className="text-muted-foreground">Automated analysis may be inaccurate, incomplete, or misleading. No guarantees are made regarding accuracy of interpretations. Summaries may not accurately reflect your intent, tone, or meaning.</p>
                        </section>

                        {/* 11. Changes to This Policy */}
                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold">11. Changes to This Policy</h2>
                            <p className="text-muted-foreground">We reserve the right to modify this Privacy Policy at any time without individual notice. Changes take effect immediately upon publication. Continued participation in covered channels constitutes acceptance of the revised policy. We may expand the scope of data collection, introduce new processing capabilities, adjust data retention practices, engage additional downstream processors, or modify user rights as described herein.</p>
                        </section>

                        {/* 12. Contact */}
                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold">12. Contact</h2>
                            <p className="text-muted-foreground">For data deletion requests, access requests, or questions about this Privacy Policy, contact hasinraiyan on Discord. For deletion and access requests, you must include your Discord User ID. We will respond to data requests within 30 days. General inquiries will be responded to at our discretion.</p>
                        </section>

                        {/* 13. Acknowledgment */}
                        <section className="space-y-3">
                            <h2 className="text-xl font-semibold">13. Acknowledgment</h2>
                            <p className="text-muted-foreground">By sending any message in a covered Discord channel, you explicitly acknowledge that:</p>
                            <ol className="list-decimal pl-5 space-y-1 text-muted-foreground">
                                <li>Your messages, username, user ID, and message metadata are being collected and stored</li>
                                <li>Your messages are being processed through automated analysis systems that produce summaries, classifications, and assessments</li>
                                <li>Your data is transmitted to downstream processing services</li>
                                <li>You may request removal of your raw message records by contacting hasinraiyan on Discord with your Discord User ID</li>
                                <li>Analysis outputs derived from your messages cannot be removed once generated by the analysis cycle</li>
                                <li>The System operates continuously across designated channels</li>
                                <li>The only way to fully avoid data collection is to not send messages in covered channels</li>
                            </ol>
                        </section>
                    </div>
                </div>
            </main>
            <FooterSection />
        </div>
    )
}
