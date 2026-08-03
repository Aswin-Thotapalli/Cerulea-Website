"use client"
import React, { useEffect, useState } from "react"
import { motion } from "motion/react"

export default function DualChainDiagram() {
  const [drawn, setDrawn] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setDrawn(true), 300)
    return () => clearTimeout(t)
  }, [])

  return (
    <div
      data-aos="fade-up"
      className="my-10 scrollbar-none overflow-x-auto overflow-y-hidden rounded-2xl border border-border bg-sidebar-primary/5 p-8 shadow-sm"
    >
      <div className="min-w-200">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <h4 className="mb-2 text-[13px] font-bold tracking-widest text-sidebar-primary uppercase">
            The Dual-Chain Model
          </h4>
          <p className="text-xs text-muted-foreground">
            One Interface · Two Architectures · Complete Sovereignty
          </p>
        </motion.div>

        <div className="flex flex-col items-center">
          {/* Top Box */}
          <motion.div
            initial={{ opacity: 0, y: -14, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            whileHover={{ y: -2, transition: { duration: 0.2 } }}
            className="relative z-10 flex flex-col items-center justify-center rounded-xl bg-teal-800 px-16 py-4 text-center text-white shadow-md"
          >
            <span className="text-sm font-bold tracking-wide">
              Cerulea Studio
            </span>
            <span className="mt-1 text-[10px] text-white/75">
              Single Interface · No-Code Configuration
            </span>
          </motion.div>

          {/* Arrows */}
          <div className="pointer-events-none relative h-10 w-full max-w-2xl">
            <svg
              className="absolute inset-0 h-full w-full"
              style={{ zIndex: 0 }}
            >
              <motion.line
                x1="50%"
                y1="0"
                x2="25%"
                y2="100%"
                className="stroke-teal-700"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={
                  drawn
                    ? { pathLength: 1, opacity: 1 }
                    : { pathLength: 0, opacity: 0 }
                }
                transition={{ duration: 0.5, delay: 0.55, ease: "easeOut" }}
              />
              <motion.line
                x1="50%"
                y1="0"
                x2="75%"
                y2="100%"
                className="stroke-teal-700"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={
                  drawn
                    ? { pathLength: 1, opacity: 1 }
                    : { pathLength: 0, opacity: 0 }
                }
                transition={{ duration: 0.5, delay: 0.55, ease: "easeOut" }}
              />
            </svg>
          </div>

          {/* Two Pillars */}
          <div className="relative z-10 flex w-full max-w-3xl justify-between gap-6">
            {/* Public L1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.85 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="flex-1 overflow-hidden rounded-xl shadow-sm"
            >
              <div className="bg-cyan-600 py-3 text-center text-[12px] font-bold tracking-widest text-white uppercase">
                Public L1
              </div>
              <div className="flex flex-col bg-cyan-600/5 px-6 py-5 text-center">
                {[
                  {
                    label: "Consensus",
                    desc: "DCF · Fixed Policy Set · Approved Registry",
                  },
                  {
                    label: "Governance",
                    desc: "Token-weighted community voting",
                  },
                  {
                    label: "Data Visibility",
                    desc: "Public via Cerulea Explorer",
                  },
                  {
                    label: "Target Use Case",
                    desc: "dApps · Public Registries · Token Systems",
                  },
                  {
                    label: "Runtime",
                    desc: "Full EVM Compatibility · WASM · Solidity",
                  },
                ].map((row, i, arr) => (
                  <motion.div
                    key={row.label}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: 1.05 + i * 0.08 }}
                    className={
                      i === 0
                        ? "border-b border-border/60 pb-3"
                        : i === arr.length - 1
                          ? "pt-3"
                          : "border-b border-border/60 py-3"
                    }
                  >
                    <div className="text-[12px] font-bold text-cyan-700">
                      {row.label}
                    </div>
                    <div className="mt-0.5 text-[10px] text-muted-foreground">
                      {row.desc}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Cerulea Private */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.85 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="flex-1 overflow-hidden rounded-xl shadow-sm"
            >
              <div className="bg-teal-800 py-3 text-center text-[12px] font-bold tracking-widest text-white uppercase">
                Cerulea Private
              </div>
              <div className="flex flex-col bg-teal-800/5 px-6 py-5 text-center">
                {[
                  {
                    label: "Consensus",
                    desc: "DCF · Fully Configurable · Enterprise Rules",
                  },
                  {
                    label: "Governance",
                    desc: "Authority-based · Multi-signature approval",
                  },
                  {
                    label: "Data Sovereignty",
                    desc: "Enterprise-exclusive · Zero vendor access",
                  },
                  {
                    label: "Target Use Case",
                    desc: "Regulated Industries · Government · Private Data",
                  },
                  {
                    label: "Infrastructure",
                    desc: "AWS · GCP · Azure · On-Premise · Hybrid",
                  },
                ].map((row, i, arr) => (
                  <motion.div
                    key={row.label}
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: 1.05 + i * 0.08 }}
                    className={
                      i === 0
                        ? "border-b border-border/60 pb-3"
                        : i === arr.length - 1
                          ? "pt-3"
                          : "border-b border-border/60 py-3"
                    }
                  >
                    <div className="text-[12px] font-bold text-teal-800">
                      {row.label}
                    </div>
                    <div className="mt-0.5 text-[10px] text-muted-foreground">
                      {row.desc}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bridge connection */}
          <div className="relative mt-0 flex w-full max-w-2xl flex-col items-center">
            <div className="relative h-6 w-full">
              <motion.div
                initial={{ scaleY: 0, opacity: 0 }}
                animate={
                  drawn ? { scaleY: 1, opacity: 1 } : { scaleY: 0, opacity: 0 }
                }
                transition={{ duration: 0.3, delay: 1.8 }}
                style={{ originY: 0 }}
                className="absolute top-0 left-[25%] h-6 w-px border-l border-dashed border-teal-700/50"
              />
              <motion.div
                initial={{ scaleY: 0, opacity: 0 }}
                animate={
                  drawn ? { scaleY: 1, opacity: 1 } : { scaleY: 0, opacity: 0 }
                }
                transition={{ duration: 0.3, delay: 1.8 }}
                style={{ originY: 0 }}
                className="absolute top-0 right-[25%] h-6 w-px border-l border-dashed border-teal-700/50"
              />
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={
                  drawn ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }
                }
                transition={{ duration: 0.4, delay: 2.05 }}
                style={{ originX: 0.5 }}
                className="absolute top-6 left-[25%] w-[50%] border-t border-dashed border-teal-700/50"
              />
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: drawn ? 1 : 0 }}
              transition={{ duration: 0.4, delay: 2.3 }}
              className="mt-3 text-center text-[10px] text-muted-foreground"
            >
              Both chains connect optionally through the Cross-Chain Bridge
              Engine
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  )
}