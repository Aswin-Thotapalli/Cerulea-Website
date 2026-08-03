"use client"
import React, { useEffect, useLayoutEffect, useRef, useState } from "react"

type Rect = { x: number; y: number; w: number; h: number }
type Rects = Record<string, Rect>

const NODE_IDS = [
  "studio",
  "dashboard",
  "explorer",
  "intelligence",
  "compilation",
  "wasm",
  "evm",
  "publicL1",
  "privateChain",
  "integration",
] as const
type NodeId = (typeof NODE_IDS)[number]

export default function ArchitectureDiagram() {
  const containerRef = useRef<HTMLDivElement>(null)
  const nodeRefs = useRef<Partial<Record<NodeId, HTMLDivElement | null>>>({})

  const [rects, setRects] = useState<{
    nodes: Rects
    container: { w: number; h: number }
  } | null>(null)
  const [drawn, setDrawn] = useState(false)

  useLayoutEffect(() => {
    function measure() {
      const containerEl = containerRef.current
      if (!containerEl) return
      const cRect = containerEl.getBoundingClientRect()

      const nodes: Rects = {}
      for (const id of NODE_IDS) {
        const el = nodeRefs.current[id]
        if (!el) continue
        const r = el.getBoundingClientRect()
        nodes[id] = {
          x: r.left - cRect.left,
          y: r.top - cRect.top,
          w: r.width,
          h: r.height,
        }
      }

      setRects({ nodes, container: { w: cRect.width, h: cRect.height } })
    }

    measure()
    const settleTimer = setTimeout(measure, 700)
    const ro = new ResizeObserver(measure)
    if (containerRef.current) ro.observe(containerRef.current)
    window.addEventListener("resize", measure)
    return () => {
      clearTimeout(settleTimer)
      ro.disconnect()
      window.removeEventListener("resize", measure)
    }
  }, [])

  useEffect(() => {
    const t = setTimeout(() => setDrawn(true), 300)
    return () => clearTimeout(t)
  }, [])

  const boxClass =
    "group relative rounded-xl p-4 text-sidebar-primary-foreground shadow-md transition-all duration-300 ease-out hover:z-20 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-xl"

  return (
    <div
      data-aos="fade-up"
      className="my-10 scrollbar-none overflow-x-auto overflow-y-hidden rounded-2xl border border-border bg-sidebar-primary/5 p-8 shadow-sm"
    >
      <div className="min-w-200">
        <div className="mb-10 text-center">
          <h4 className="mb-2 text-[13px] font-bold tracking-widest text-sidebar-primary uppercase">
            Cerulea Platform Architecture
          </h4>
          <p className="text-xs text-muted-foreground">
            Eight Modular Layers · Unified Interfaces · Dual-Chain
            Infrastructure
          </p>
        </div>

        <div ref={containerRef} className="relative">
          {rects && (
            <svg
              className="pointer-events-none absolute inset-0"
              width={rects.container.w}
              height={rects.container.h}
              style={{ zIndex: 0 }}
            >
              <Connectors nodes={rects.nodes} drawn={drawn} />
            </svg>
          )}

          <div className="relative z-10 flex flex-col items-center gap-14 text-center">
            {/* Top Row - UI Layer */}
            <div
              data-aos="fade-up"
              className="flex w-full max-w-4xl justify-between gap-4"
            >
              <div
                ref={(el) => {
                  nodeRefs.current.studio = el
                }}
                className={`flex-1 bg-slate-800 ${boxClass}`}
              >
                <div className="text-sm font-bold">Cerulea Studio</div>
                <div className="mt-1 text-[10px] text-sidebar-primary-foreground/75">
                  No-Code Visual Builder
                </div>
              </div>
              <div
                ref={(el) => {
                  nodeRefs.current.dashboard = el
                }}
                className={`flex-1 bg-slate-800 ${boxClass}`}
              >
                <div className="text-sm font-bold">Cerulea Dashboard</div>
                <div className="mt-1 text-[10px] text-sidebar-primary-foreground/75">
                  Operational Monitoring
                </div>
              </div>
              <div
                ref={(el) => {
                  nodeRefs.current.explorer = el
                }}
                className={`flex-1 bg-slate-800 ${boxClass}`}
              >
                <div className="text-sm font-bold">Cerulea Explorer</div>
                <div className="mt-1 text-[10px] text-sidebar-primary-foreground/75">
                  On-Chain Activity Viewer
                </div>
              </div>
            </div>

            {/* Intelligence Layer */}
            <div
              ref={(el) => {
                nodeRefs.current.intelligence = el
              }}
              className={`w-full max-w-4xl bg-cyan-500 ${boxClass}`}
            >
              <div className="text-sm font-bold">Cerulea Intelligence</div>
              <div className="mt-1 text-[10px] text-sidebar-primary-foreground/75">
                Configuration Guidance · Risk Signals · Structural
                Recommendations · Compliance Alignment
              </div>
            </div>

            {/* Compilation Layer */}
            <div
              ref={(el) => {
                nodeRefs.current.compilation = el
              }}

              className={`w-full max-w-4xl bg-slate-800 ${boxClass}`}
            >
              <div className="text-sm font-bold">
                Compilation Engine / Platform Orchestration
              </div>
              <div className="mt-1 text-[10px] text-sidebar-primary-foreground/75">
                Module Assembly · Deterministic Compilation · Deployment
                Pipeline · Lifecycle Management
              </div>
            </div>

            {/* Runtime Layer */}
            <div data-aos="fade-up" className="flex w-full max-w-4xl gap-4">
              <div
                ref={(el) => {
                  nodeRefs.current.wasm = el
                }}
                className={`flex-1 bg-teal-800 ${boxClass}`}
              >
                <div className="text-sm font-bold">WASM Runtime</div>
                <div className="mt-1 text-[10px] text-sidebar-primary-foreground/75">
                  WebAssembly · Studio-Generated Contracts
                </div>
              </div>
              <div
                ref={(el) => {
                  nodeRefs.current.evm = el
                }}
                className={`flex-1 bg-teal-800 ${boxClass}`}
              >
                <div className="text-sm font-bold">EVM Runtime</div>
                <div className="mt-1 text-[10px] text-sidebar-primary-foreground/75">
                  Ethereum Virtual Machine · Solidity Contracts
                </div>
              </div>
            </div>

            {/* Split into two large, visually symmetric blocks */}
            <div data-aos="fade-up" className="flex w-full max-w-4xl gap-4">
              {/* Public L1 */}
              <div
                ref={(el) => {
                  nodeRefs.current.publicL1 = el
                }}
                className="flex-1 overflow-hidden rounded-xl border-2 border-cyan-700 bg-cyan-700/5 shadow-sm transition-all duration-300 ease-out hover:z-20 hover:-translate-y-1 hover:scale-[1.015] hover:shadow-xl"
              >
                <div className="bg-cyan-700 py-2 text-xs font-bold tracking-wider text-sidebar-primary-foreground uppercase">
                  Public L1 · cerulea-public-1
                </div>
                <div className="flex flex-col gap-2 p-3">
                  <div className="rounded-lg border border-cyan-700/25 bg-card p-2.5 text-left">
                    <div className="text-xs font-bold text-cyan-700">
                      DCF Consensus · Fixed Policy Set
                    </div>
                    <div className="mt-0.5 text-[9.5px] leading-relaxed text-muted-foreground">
                      Approved Registry · Identity Verified · Uptime ·
                      Governance
                    </div>
                  </div>
                  <div className="rounded-lg border border-cyan-700/25 bg-card p-2.5 text-left">
                    <div className="text-xs font-bold text-cyan-700">
                      Public Chain State
                    </div>
                    <div className="mt-0.5 text-[9.5px] leading-relaxed text-muted-foreground">
                      Immutable Ledger · Smart Contract State · Governance
                      Records
                    </div>
                  </div>
                  <div className="rounded-lg border border-cyan-700/25 bg-card p-2.5 text-left">
                    <div className="text-xs font-bold text-cyan-700">
                      5 Active Validators
                    </div>
                    <div className="mt-0.5 text-[9.5px] leading-relaxed text-muted-foreground">
                      Policy-Approved Nodes · Distributed Infrastructure
                    </div>
                  </div>
                </div>
              </div>

              {/* Private Chain */}
              <div
                ref={(el) => {
                  nodeRefs.current.privateChain = el
                }}
                className="flex-1 overflow-hidden rounded-xl border-2 border-slate-800 bg-slate-800/5 shadow-sm transition-all duration-300 ease-out hover:z-20 hover:-translate-y-1 hover:scale-[1.015] hover:shadow-xl"
              >
                <div className="bg-slate-800 py-2 text-xs font-bold tracking-wider text-sidebar-primary-foreground uppercase">
                  Cerulea Private · Sovereign Enterprise
                </div>
                <div className="flex flex-col gap-2 p-3">
                  <div className="rounded-lg border border-slate-800/25 bg-card p-2.5 text-left">
                    <div className="text-xs font-bold text-slate-800">
                      DCF Consensus · Configurable Policy
                    </div>
                    <div className="mt-0.5 text-[9.5px] leading-relaxed text-muted-foreground">
                      Enterprise Defines Rules · Utility · Compliance · Custom
                    </div>
                  </div>
                  <div className="rounded-lg border border-slate-800/25 bg-card p-2.5 text-left">
                    <div className="text-xs font-bold text-slate-800">
                      Sovereign Private Chain State
                    </div>
                    <div className="mt-0.5 text-[9.5px] leading-relaxed text-muted-foreground">
                      Enterprise-Exclusive Data · Zero Vendor Access
                    </div>
                  </div>
                  <div className="rounded-lg border border-slate-800/25 bg-card p-2.5 text-left">
                    <div className="text-xs font-bold text-slate-800">
                      Enterprise Infrastructure
                    </div>
                    <div className="mt-0.5 text-[9.5px] leading-relaxed text-muted-foreground">
                      AWS · GCP · Azure · On-Premise · Hybrid
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Integration Layer */}
            <div
              ref={(el) => {
                nodeRefs.current.integration = el
              }}
              className={`w-full max-w-4xl bg-slate-800 ${boxClass}`}
            >
              <div className="text-sm font-bold">
                Cross-Chain Bridge Engine · REST APIs · RPC Endpoints · Webhooks
              </div>
              <div className="mt-1 text-[10px] text-sidebar-primary-foreground/70">
                Ethereum · BNB · Polygon · Cosmos (IBC) · Solana · Polkadot
                (XCM) · Avalanche · Bitcoin (HTLC) · L2 Rollups
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Connectors, computes every line/arrow from measured node rects, animates
// them in with a staggered stroke-draw.
// ---------------------------------------------------------------------------

function Connectors({ nodes, drawn }: { nodes: Rects; drawn: boolean }) {
  const required: NodeId[] = [
    "studio",
    "dashboard",
    "explorer",
    "intelligence",
    "compilation",
    "wasm",
    "evm",
    "publicL1",
    "privateChain",
    "integration",
  ]
  if (required.some((id) => !nodes[id])) return null

  const STROKE_WIDTH = 2.5
  const ARROW_SIZE = 7
  const GAP = 26

  const centerX = (r: Rect) => r.x + r.w / 2
  const topY = (r: Rect) => r.y
  const bottomY = (r: Rect) => r.y + r.h

  const lines: {
    key: string
    x1: number
    y1: number
    x2: number
    y2: number
    delay: number
  }[] = []
  const arrows: { key: string; points: string; delay: number }[] = []
  const labels: {
    key: string
    x: number
    y: number
    text: string
    delay: number
  }[] = []

  let delayCursor = 0.15
  const STEP = 0.18
  // Approximate label pill sizing, used so the pill background is wide
  // enough to fully cover the connector line running behind the text.
  const LABEL_CHAR_W = 5.4
  const LABEL_PAD_X = 14
  const LABEL_H = 20

  function arrowInto(
    targetTopX: number,
    targetTopY: number,
    key: string,
    delay: number
  ) {
    arrows.push({
      key,
      points: `${targetTopX - ARROW_SIZE * 0.7},${targetTopY - ARROW_SIZE} ${targetTopX + ARROW_SIZE * 0.7},${targetTopY - ARROW_SIZE} ${targetTopX},${targetTopY + 1}`,
      delay,
    })
  }

  function converge(sourceIds: NodeId[], targetId: NodeId, label?: string) {
    const sources = sourceIds.map((id) => nodes[id])
    const target = nodes[targetId]
    const barY = Math.max(...sources.map(bottomY)) + GAP

    sources.forEach((s, i) => {
      const cx = centerX(s)
      lines.push({
        key: `${targetId}-tick-${i}`,
        x1: cx,
        y1: bottomY(s),
        x2: cx,
        y2: barY,
        delay: delayCursor + i * 0.06,
      })
    })
    delayCursor += STEP

    const centers = sources.map(centerX)
    const minC = Math.min(...centers)
    const maxC = Math.max(...centers)
    lines.push({
      key: `${targetId}-bar`,
      x1: minC,
      y1: barY,
      x2: maxC,
      y2: barY,
      delay: delayCursor,
    })
    delayCursor += STEP

    const dropX = (minC + maxC) / 2
    lines.push({
      key: `${targetId}-drop`,
      x1: dropX,
      y1: barY,
      x2: dropX,
      y2: topY(target),
      delay: delayCursor,
    })
    arrowInto(dropX, topY(target), `${targetId}-arrow`, delayCursor + 0.15)
    if (label) {
      labels.push({
        key: `${targetId}-label`,
        x: dropX,
        y: barY + (topY(target) - barY) / 2,
        text: label,
        delay: delayCursor + 0.3,
      })
    }
    delayCursor += STEP + 0.15
  }

  function diverge(sourceId: NodeId, targetIds: NodeId[], label?: string) {
    const source = nodes[sourceId]
    const targets = targetIds.map((id) => nodes[id])
    const sx = centerX(source)
    const barY = bottomY(source) + GAP

    lines.push({
      key: `${sourceId}-drop`,
      x1: sx,
      y1: bottomY(source),
      x2: sx,
      y2: barY,
      delay: delayCursor,
    })
    if (label) {
      labels.push({
        key: `${sourceId}-label`,
        x: sx,
        y: bottomY(source) + (barY - bottomY(source)) / 2,
        text: label,
        delay: delayCursor + 0.2,
      })
    }
    delayCursor += STEP

    const centers = targets.map(centerX)
    const minC = Math.min(...centers)
    const maxC = Math.max(...centers)
    lines.push({
      key: `${sourceId}-bar`,
      x1: minC,
      y1: barY,
      x2: maxC,
      y2: barY,
      delay: delayCursor,
    })
    delayCursor += STEP

    targets.forEach((t, i) => {
      const cx = centerX(t)
      lines.push({
        key: `${sourceId}-tick-${i}`,
        x1: cx,
        y1: barY,
        x2: cx,
        y2: topY(t),
        delay: delayCursor + i * 0.06,
      })
      arrowInto(
        cx,
        topY(t),
        `${sourceId}-arrow-${i}`,
        delayCursor + 0.15 + i * 0.06
      )
    })
    delayCursor += STEP + 0.15
  }

  function straight(sourceId: NodeId, targetId: NodeId) {
    const source = nodes[sourceId]
    const target = nodes[targetId]
    const x = centerX(source)
    lines.push({
      key: `${sourceId}-${targetId}`,
      x1: x,
      y1: bottomY(source),
      x2: x,
      y2: topY(target),
      delay: delayCursor,
    })
    arrowInto(
      x,
      topY(target),
      `${sourceId}-${targetId}-arrow`,
      delayCursor + 0.15
    )
    delayCursor += STEP
  }

  converge(
    ["studio", "dashboard", "explorer"],
    "intelligence",
    "AI CONFIGURATION LAYER"
  )
  straight("intelligence", "compilation")
  delayCursor += 0.1
  diverge("compilation", ["wasm", "evm"], "EXECUTION RUNTIME")
  straight("wasm", "publicL1")
  straight("evm", "privateChain")
  delayCursor += 0.1
  converge(
    ["publicL1", "privateChain"],
    "integration",
    "BRIDGE ENGINE + INTEGRATION LAYER"
  )

  return (
    <>
      {lines.map((l) => {
        const length = Math.hypot(l.x2 - l.x1, l.y2 - l.y1) || 1
        return (
          <line
            key={l.key}
            x1={l.x1}
            y1={l.y1}
            x2={l.x2}
            y2={l.y2}
            className="stroke-sidebar-primary"
            strokeWidth={STROKE_WIDTH}
            strokeLinecap="round"
            strokeDasharray={length}
            strokeDashoffset={drawn ? 0 : length}
            style={{
              transition: `stroke-dashoffset 0.6s ease-out ${l.delay}s`,
            }}
          />
        )
      })}
      {arrows.map((a) => (
        <polygon
          key={a.key}
          points={a.points}
          className="fill-sidebar-primary"
          style={{
            opacity: drawn ? 1 : 0,
            transition: `opacity 0.3s ease-out ${a.delay}s`,
          }}
        />
      ))}
      {/* Label pills, rendered last so they always sit in front of every
          line/arrow/box, with a fully opaque background (not translucent)
          so nothing behind them (box corners, shadows, connectors) can
          show through. A drop-shadow keeps them legible against any
          backdrop. */}
      {labels.map((l) => {
        const w = l.text.length * LABEL_CHAR_W + LABEL_PAD_X * 2
        return (
          <g
            key={l.key}
            style={{
              opacity: drawn ? 1 : 0,
              transition: `opacity 0.4s ease-out ${l.delay}s`,
              filter: "drop-shadow(0 1px 3px rgb(0 0 0 / 0.12))",
            }}
          >
            <rect
              x={l.x - w / 2}
              y={l.y - LABEL_H / 2}
              width={w}
              height={LABEL_H}
              rx={LABEL_H / 2}
              className="fill-background stroke-sidebar-primary/25"
              strokeWidth={1}
            />
            <text
              x={l.x}
              y={l.y}
              className="fill-sidebar-primary"
              fontSize="9"
              fontWeight="700"
              textAnchor="middle"
              dominantBaseline="central"
              letterSpacing="0.08em"
            >
              {l.text}
            </text>
          </g>
        )
      })}
    </>
  )
}