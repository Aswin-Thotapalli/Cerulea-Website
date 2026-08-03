'use client';

import Link from 'next/link';
import { ArrowLeft, Blocks, Hash, Activity, Radio } from 'lucide-react';
import { useEffect, useState } from 'react';

const HASH_CHARS = '0123456789abcdef';

function generateHash(length = 40) {
  return Array.from({ length }, () => HASH_CHARS[Math.floor(Math.random() * 16)]).join('');
}

export default function NotFound() {
  const [hash, setHash] = useState(generateHash());
  const [blockHeight, setBlockHeight] = useState(18204551);

  useEffect(() => {
    const hashInterval = setInterval(() => setHash(generateHash()), 120);
    const hashTimeout = setTimeout(() => clearInterval(hashInterval), 900);

    // simulate block height ticking up like a live chain
    const heightInterval = setInterval(() => {
      setBlockHeight((h) => h + 1);
    }, 2500);

    return () => {
      clearInterval(hashInterval);
      clearTimeout(hashTimeout);
      clearInterval(heightInterval);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Grid pattern background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Dynamic Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 h-75 sm:w-125 sm:h-125 bg-primary/10 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none" />

      <div className="w-full max-w-2xl text-center space-y-8 relative z-10">

        {/* Live node status bar */}
        <div className="flex items-center justify-center gap-2 animate-in fade-in duration-500">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="font-mono text-xs text-muted-foreground tracking-wide">
            NODE SYNCED, BLOCK #{blockHeight.toLocaleString()}
          </span>
        </div>

        <div className="relative z-10 flex flex-col items-center">

          {/* Icon with orbit ring */}
          <div className="relative mb-6 animate-in zoom-in duration-500">
            <div className="absolute inset-0 rounded-full border border-dashed border-primary/30 w-28 h-28 sm:w-32 sm:h-32 -m-4 animate-spin animation-duration-[20s]" />
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-primary/10 rounded-full flex items-center justify-center relative">
              <Blocks className="w-10 h-10 sm:w-12 sm:h-12 text-primary" />
            </div>
          </div>

          <h1 className="text-[80px] sm:text-[120px] leading-none font-bold tracking-tighter text-foreground mb-4 animate-in slide-in-from-bottom-8 duration-700 delay-75 fill-mode-both">
            404
          </h1>

          <div className="animate-in slide-in-from-bottom-6 duration-700 delay-150 fill-mode-both">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Block Not Found
            </h2>

            {/* Explorer-style status card */}
            <div className="inline-flex flex-col gap-2 bg-muted/40 border border-border rounded-2xl px-5 py-4 mb-6 text-left w-full max-w-sm">
              <div className="flex items-center justify-between gap-2 text-xs">
                <span className="flex items-center gap-1.5 text-muted-foreground">
                  <Hash className="w-3.5 h-3.5 text-primary shrink-0" />
                  Tx Hash
                </span>
                <span className="font-mono text-foreground/80 truncate max-w-45">
                  0x{hash.slice(0, 16)}...
                </span>
              </div>
              <div className="flex items-center justify-between gap-2 text-xs">
                <span className="flex items-center gap-1.5 text-muted-foreground">
                  <Radio className="w-3.5 h-3.5 text-primary shrink-0" />
                  Network
                </span>
                <span className="font-mono text-foreground/80">Cerulea Public L1</span>
              </div>
              <div className="flex items-center justify-between gap-2 text-xs">
                <span className="flex items-center gap-1.5 text-destructive/80">
                  <Activity className="w-3.5 h-3.5 shrink-0" />
                  Status
                </span>
                <span className="font-mono text-destructive/80">unconfirmed, 0/6 confs</span>
              </div>
            </div>

            <p className="text-muted-foreground mb-10 max-w-md mx-auto text-base sm:text-lg leading-relaxed">
              We couldn&apos;t find the block or transaction you&apos;re looking for. It might have been orphaned, dropped from the mempool, or the URL is incorrect.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center animate-in slide-in-from-bottom-4 duration-700 delay-300 fill-mode-both">
            <Link
              href="/"
              className="flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 active:scale-95"
            >
              <ArrowLeft className="w-4 h-4" />
              Return to Node
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}