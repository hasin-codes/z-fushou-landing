import Image from 'next/image'

const cards = [
    {
        src: '/icons/mail2.png',
        alt: 'Sweesh app overview',
        title: 'Voice to Text',
        description: 'Speak naturally and get instant, accurate transcriptions.',
    },
    {
        src: '/icons/mail2.png',
        alt: 'Sweesh in action',
        title: 'Desktop Ready',
        description: 'Runs natively on your machine — fast, private, offline-capable.',
    },
    {
        src: '/icons/mail2.png',
        alt: 'Sweesh workflow',
        title: 'One Click Send',
        description: 'Copy or send your transcription anywhere in a single step.',
    },
]

export default function ShowcaseCards() {
    return (
        <section className="py-16 md:py-24">
            <div className="mx-auto max-w-6xl px-6">
                <h2 className="text-foreground text-center text-3xl font-semibold tracking-tight md:text-4xl">
                    See it in Action
                </h2>
                <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-center text-lg">
                    Everything you need to turn voice into text — simple, fast, and built for your desktop.
                </p>

                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {cards.map((card, i) => (
                        <div
                            key={i}
                            className="bg-card border-border group overflow-hidden rounded-2xl border shadow-lg shadow-zinc-950/15 transition-transform duration-300 hover:-translate-y-1"
                        >
                            <div className="relative aspect-[5/6] overflow-hidden">
                                <Image
                                    src={card.src}
                                    alt={card.alt}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-5">
                                <h3 className="text-foreground text-lg font-semibold">
                                    {card.title}
                                </h3>
                                <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
