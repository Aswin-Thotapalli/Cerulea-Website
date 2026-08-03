"use client"
import React, { useEffect, useState } from "react"
import { motion } from "motion/react"

// Fixed pixel canvas the whole radial layout is authored against, keeps
// every box/line position and the SVG viewBox in exact agreement without
// needing runtime measurement.
const W = 900
const H = 560
const CENTER = { x: 450, y: 280 }
const CIRCLE_R = 70

type Node = {
  id: string
  label: string
  desc: string
  x: number
  y: number
  color: string
  align: "left" | "right" | "center"
}

const NODES: Node[] = [
  {
    id: "registry",
    label: "Approved Validator Registry",
    desc: "Only registered nodes may validate",
    x: 450,
    y: 84,
    color: "bg-teal-700",
    align: "center",
  },
  {
    id: "identity",
    label: "Identity-Verified Operators",
    desc: "Companies, institutions, approved orgs",
    x: 702,
    y: 151,
    color: "bg-cyan-700",
    align: "left",
  },
  {
    id: "uptime",
    label: "Uptime + Performance",
    desc: "Thresholds, sync health, latency",
    x: 756,
    y: 280,
    color: "bg-teal-800",
    align: "left",
  },
  {
    id: "reputation",
    label: "Reputation + Behaviour",
    desc: "Missed blocks, misbehaviour score",
    x: 702,
    y: 409,
    color: "bg-teal-700",
    align: "left",
  },
  {
    id: "rotation",
    label: "Policy-Based Rotation",
    desc: "Eligibility, fairness, availability",
    x: 450,
    y: 476,
    color: "bg-blue-600",
    align: "center",
  },
  {
    id: "governance",
    label: "Governance-Permissioned",
    desc: "Admission, suspension, reinstate",
    x: 198,
    y: 409,
    color: "bg-blue-800",
    align: "right",
  },
  {
    id: "security",
    label: "Security Compliance",
    desc: "Key mgmt, patched systems",
    x: 144,
    y: 280,
    color: "bg-cyan-500",
    align: "right",
  },
  {
    id: "infra",
    label: "Infrastructure Requirements",
    desc: "Hardware, network, node config",
    x: 198,
    y: 151,
    color: "bg-cyan-600",
    align: "right",
  },
]

const BOX_W = 230
const BOX_H = 60

export default function DCFDiagram() {
  const [drawn, setDrawn] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setDrawn(true), 250)
    return () => clearTimeout(t)
  }, [])

  return (
    <div
      data-aos="fade-up"
      className="my-10 scrollbar-none overflow-x-auto overflow-y-hidden rounded-2xl border border-border bg-sidebar-primary/5 p-8 shadow-sm"
    >
      <div style={{ minWidth: W }}>
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-2 text-center"
        >
          <h4 className="mb-2 text-[13px] font-bold tracking-widest text-sidebar-primary uppercase">
            Dynamic Consensus Framework (DCF)
          </h4>
          <p className="text-xs text-muted-foreground">
            Policy-Based Validator Coordination · Not Token-Weighted
          </p>
        </motion.div>

        <div className="relative mx-auto" style={{ width: W, height: H }}>
          {/* Connector lines, drawn behind everything, each terminates
              visually at the box/circle edge since both sit on top with
              opaque backgrounds (z-10) */}
          <svg
            className="pointer-events-none absolute inset-0"
            width={W}
            height={H}
            viewBox={`0 0 ${W} ${H}`}
            style={{ zIndex: 0 }}
          >
            {NODES.map((n, i) => (
              <motion.line
                key={n.id}
                x1={CENTER.x}
                y1={CENTER.y}
                x2={n.x}
                y2={n.y}
                className="stroke-sidebar-primary/50"
                strokeWidth={2}
                strokeDasharray="5 5"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={
                  drawn
                    ? { pathLength: 1, opacity: 1 }
                    : { pathLength: 0, opacity: 0 }
                }
                transition={{
                  duration: 0.5,
                  delay: 0.5 + i * 0.08,
                  ease: "easeOut",
                }}
              />
            ))}
          </svg>

          {/* Center hub */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="absolute z-10 flex flex-col items-center justify-center rounded-full border-4 border-background bg-teal-900 text-center text-white shadow-lg"
            style={{
              width: CIRCLE_R * 2,
              height: CIRCLE_R * 2,
              left: CENTER.x - CIRCLE_R,
              top: CENTER.y - CIRCLE_R,
            }}
          >
            <span className="text-base font-bold tracking-wide">DCF</span>
            <span className="mt-1 text-[9px] leading-tight text-white/75">
              Validator
              <br />
              Coordination
            </span>
          </motion.div>

          {/* Radial boxes */}
          {NODES.map((n, i) => (
            <motion.div
              key={n.id}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
              whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
              className={`absolute z-10 flex flex-col justify-center rounded-lg px-4 py-2.5 text-white shadow-md ${n.color} ${
                n.align === "left"
                  ? "text-left"
                  : n.align === "right"
                    ? "text-right"
                    : "text-center"
              }`}
              style={{
                width: BOX_W,
                minHeight: BOX_H,
                left: n.x - BOX_W / 2,
                top: n.y - BOX_H / 2,
              }}
            >
              <div className="text-[11px] leading-snug font-bold">
                {n.label}
              </div>
              <div className="mt-0.5 text-[9.5px] leading-snug text-white/75">
                {n.desc}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 1.3 }}
          className="mx-auto mt-4 w-fit rounded-full border border-cyan-700/40 bg-cyan-700/5 px-5 py-2"
        >
          <p className="text-center text-[11px] font-semibold text-cyan-800">
            Cerulea Private: All 8 policies are fully configurable by the
            enterprise
          </p>
        </motion.div>
      </div>
    </div>
  )
}