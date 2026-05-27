'use client'
import React from 'react'
import { ArrowDown, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { HeroHeader } from './header'
import { Logo } from '@/components/logo'

const WINDOWS_URL = 'https://github.com/hasin-codes/Z-Fushou/releases/download/v0.67.0/Z-Fushou-0.67.0-x64.exe'
const MACOS_URL = 'https://github.com/hasin-codes/Z-Fushou/releases/download/v0.67.0/Z-Fushou-0.67.0-arm64.dmg'

// Windows Icon
const WindowsIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M3 5.5L11 4.5V11.5H3V5.5ZM11 12.5V19.5L3 18.5V12.5H11ZM12 19.7L21 21V12.5H12V19.7ZM21 11.5V3L12 4.3V11.5H21Z" />
    </svg>
)

// Apple Icon
const AppleIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 16.56 2.93 11.3 4.7 7.72C5.57 5.94 7.36 4.86 9.28 4.84C10.56 4.81 11.78 5.72 12.58 5.72C13.38 5.72 14.86 4.62 16.4 4.8C17.07 4.83 18.89 5.08 20.05 6.79C19.93 6.87 17.58 8.26 17.61 11.18C17.64 14.64 20.6 15.76 20.63 15.77C20.6 15.84 20.14 17.43 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
    </svg>
)


const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring' as const,
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export default function HeroSection() {
    const [dropdownOpen, setDropdownOpen] = React.useState(false)
    const closeTimeout = React.useRef<ReturnType<typeof setTimeout> | null>(null)

    const openDropdown = () => {
        if (closeTimeout.current) clearTimeout(closeTimeout.current)
        setDropdownOpen(true)
    }
    const closeDropdown = () => {
        closeTimeout.current = setTimeout(() => setDropdownOpen(false), 150)
    }

    return (
        <>
            <HeroHeader />
            <main>
                <div
                    aria-hidden
                    className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block">
                    <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                    <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                    <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
                </div>
                <section>
                    <div className="relative pt-24 md:pt-36">
                        

                        <div
                            aria-hidden
                            className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"
                        />

                        <div className="mx-auto max-w-7xl px-6">
                            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0 relative z-20">
                               
                                

                                <TextEffect
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    as="h1"
                                    className="mx-auto mt-8 text-4xl max-md:font-semibold md:text-6xl lg:mt-16 xl:text-7xl">
                                    Detect Problems Before Escalation
                                </TextEffect>
                                
                                <TextEffect
                                    per="line"
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    delay={0.5}
                                    as="p"
                                    className="mx-auto mt-8 max-w-3xl whitespace-nowrap text-lg">
                                    Understands product pain, feature demand, and support pressure automatically.
                                </TextEffect>

                                <AnimatedGroup
                                    variants={{
                                        container: {
                                            visible: {
                                            transition: {
                                                staggerChildren: 0.05,
                                                delayChildren: 0.75,
                                            },
                                            },
                                        },
                                        ...transitionVariants,
                                    }}
                                    className="mt-12 flex items-center justify-center">
                                    <AnimatedGroup variants={transitionVariants}>
                                        <div className="relative" onMouseLeave={closeDropdown}>
                                            <a
                                                href={WINDOWS_URL}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:bg-primary/90 bg-primary group mx-auto flex w-fit items-center gap-3 rounded-2xl border border-primary p-1.5 pl-2 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950 cursor-pointer">
                                                <div className="flex size-10 items-center justify-center rounded-xl bg-black">
                                                    <Logo className="size-7" />
                                                </div>
                                                <div className="flex flex-col items-start">
                                                    <span className="text-primary-foreground text-sm font-semibold leading-tight">Z Fushou</span>
                                                    <span className="text-primary-foreground/70 text-xs leading-tight">Download for Windows · x64</span>
                                                </div>
                                                <span className="dark:border-background mx-1 block h-8 w-px bg-white/20" />
                                                <span
                                                    onMouseEnter={openDropdown}
                                                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); setDropdownOpen(prev => !prev) }}
                                                    className="flex cursor-pointer items-center justify-center px-1">
                                                    <ChevronDown className={`text-primary-foreground/70 size-5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                                                </span>
                                            </a>

                                            {dropdownOpen && (
                                                <div className="absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2 min-w-[300px] rounded-xl border bg-background p-1.5 shadow-xl shadow-zinc-950/10 dark:border-white/10">
                                                    <a
                                                        href={WINDOWS_URL}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-muted">
                                                        <WindowsIcon className="size-5 shrink-0" />
                                                        <span className="text-sm font-medium leading-tight">Windows</span>
                                                        <span className="text-xs text-muted-foreground ml-auto leading-tight">x64</span>
                                                    </a>
                                                    <a
                                                        href={MACOS_URL}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-muted">
                                                        <AppleIcon className="size-5 shrink-0" />
                                                        <span className="text-sm font-medium leading-tight">macOS</span>
                                                        <span className="text-xs text-muted-foreground ml-auto leading-tight">arm64 (Apple Silicon)</span>
                                                    </a>
                                                </div>
                                            )}
                                        </div>
                                    </AnimatedGroup>
                                </AnimatedGroup>
                            </div>
                        </div>

                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.05,
                                            delayChildren: 0.75,
                                        },
                                    },
                                },
                                ...transitionVariants,
                            }}>
                            <div className="mask-b-from-55% relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
                                
                                 
                                <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
                                    <Image
                                        className="bg-background aspect-15/8 relative hidden rounded-2xl dark:block"
                                        src="/icons/mail2.png"
                                        alt="app screen"
                                        width="2700"
                                        height="1440"
                                    />
                                    <Image
                                        className="z-2 border-border/25 aspect-15/8 relative rounded-2xl border dark:hidden"
                                        src="/icons/mail2.png"
                                        alt="app screen"
                                        width="2700"
                                        height="1440"
                                    />
                                </div>
                                
                            </div>
                        </AnimatedGroup>
                    </div>
                </section>
                
            </main>
        </>
    )
}
