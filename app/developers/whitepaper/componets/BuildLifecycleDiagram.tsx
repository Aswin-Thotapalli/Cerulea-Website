"use client"
import React, { useEffect, useLayoutEffect, useRef, useState } from "react"

interface BoxDef {
  step: string
  title: string
  desc: string
}

export default function BuildLifecycleDiagram() {
  const topBoxes: BoxDef[] = [
    { step: "01", title: "CREATE", desc: "Scope, access, architecture" },
    { step: "02", title: "CONFIGURE", desc: "Module canvas, blueprints" },
    {
      step: "03",
      title: "DEPLOY",
      desc: "Atomic activation, compile + launch",
    },
    { step: "04", title: "OPERATE", desc: "Validators live, APIs active" },
    { step: "05", title: "GOVERN", desc: "All changes via governance" },
  ]

  const bottomBoxes: BoxDef[] = [
    { step: "09", title: "RETIRE", desc: "Governed decommissioning" },
    {
      step: "08",
      title: "MONITOR",
      desc: "Validators, logs, governance, infra",
    },
    { step: "07", title: "EXPAND", desc: "Add validators, modules, bridges" },
    { step: "06", title: "UPGRADE", desc: "Rolling / Canary / Blue-Green" },
  ]

  const STEP_COLOR: Record<string, string> = {
    "01": "bg-slate-800",
    "02": "bg-cyan-800",
    "03": "bg-teal-800",
    "04": "bg-cyan-700",
    "05": "bg-cyan-500",
    "06": "bg-slate-800",
    "07": "bg-cyan-700",
    "08": "bg-teal-800",
    "09": "bg-cyan-600",
  }

  const containerRef = useRef<HTMLDivElement>(null)
  const topRefs = useRef<(HTMLDivElement | null)[]>([])
  const bottomRefs = useRef<(HTMLDivElement | null)[]>([])

  const [rects, setRects] = useState<{
    top: { x: number; y: number; w: number; h: number }[]
    bottom: { x: number; y: number; w: number; h: number }[]
    container: { w: number; h: number }
  } | null>(null)

  const [drawn, setDrawn] = useState(false)

  useLayoutEffect(() => {
    function measure() {
      const containerEl = containerRef.current
      if (!containerEl) return
      const cRect = containerEl.getBoundingClientRect()

      const toLocal = (el: HTMLDivElement | null) => {
        if (!el) return { x: 0, y: 0, w: 0, h: 0 }
        const r = el.getBoundingClientRect()
        return {
          x: r.left - cRect.left,
          y: r.top - cRect.top,
          w: r.width,
          h: r.height,
        }
      }

      setRects({
        top: topRefs.current.map(toLocal),
        bottom: bottomRefs.current.map(toLocal),
        container: { w: cRect.width, h: cRect.height },
      })
    }

    measure()
    // Re-measure shortly after mount too, guards against AOS still mid-
    // transition (translateY) on the row containers at the moment of the
    // first layout pass, which could otherwise bake a stale offset into
    // the connector coordinates.
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

  return (
    <div
      data-aos="fade-up"
      className="my-10 rounded-2xl border border-border/60 bg-muted/20 p-10 shadow-sm"
    >
      <div className="mb-12 text-center">
        <h4 className="mb-2 text-sm font-bold tracking-widest text-sidebar-primary uppercase">
          Cerulea Studio · Build Lifecycle
        </h4>
        <p className="text-xs text-muted-foreground">
          Nine stages from configuration to governance-led retirement, all
          handled inside Studio
        </p>
      </div>

      <div className="relative mx-auto w-full scrollbar-none overflow-x-auto pb-4">
        <div ref={containerRef} className="relative min-w-190 px-8 py-6">
          {rects && (
            <svg
              className="pointer-events-none absolute inset-0"
              width={rects.container.w}
              height={rects.container.h}
              style={{ zIndex: 0 }}
            >
              <Connectors rects={rects} drawn={drawn} />
            </svg>
          )}

          {/* Top Row */}
          <div
            data-aos="fade-up"
            className="relative z-10 mb-20 flex justify-between gap-4"
          >
            {topBoxes.map((box, i) => (
              <div
                key={box.step}
                ref={(el) => {
                  topRefs.current[i] = el
                }}
                className={`group flex h-24 w-33 flex-col items-center justify-center rounded-lg px-2.5 text-center text-white shadow-md transition-all duration-300 ease-out hover:z-20 hover:-translate-y-1.5 hover:scale-110 hover:shadow-xl ${STEP_COLOR[box.step]}`}
              >
                <span className="text-[10px] font-medium opacity-70">
                  {box.step}
                </span>
                <span className="mt-0.5 text-xs font-bold tracking-wider">
                  {box.title}
                </span>
                <span className="mt-1 text-[9px] leading-[1.3] opacity-85">
                  {box.desc}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom Row */}
          <div
            data-aos="fade-up"
            className="relative z-10 flex justify-between gap-4"
          >
            <div className="h-24 w-33" />
            {bottomBoxes.map((box, i) => (
              <div
                key={box.step}
                ref={(el) => {
                  bottomRefs.current[i] = el
                }}
                className={`group flex h-24 w-33 flex-col items-center justify-center rounded-lg px-2.5 text-center text-white shadow-md transition-all duration-300 ease-out hover:z-20 hover:-translate-y-1.5 hover:scale-110 hover:shadow-xl ${STEP_COLOR[box.step]}`}
              >
                <span className="text-[10px] font-medium opacity-70">
                  {box.step}
                </span>
                <span className="mt-0.5 text-xs font-bold tracking-wider">
                  {box.title}
                </span>
                <span className="mt-1 text-[9px] leading-[1.3] opacity-85">
                  {box.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        data-aos="fade-up"
        className="mt-10 text-center text-[11px] text-muted-foreground/70"
      >
        <p className="mb-1">
          Every stage is handled inside Cerulea Studio. No external tooling
          required at any point.
        </p>
        <p>
          Every post-deployment change passes through on-chain governance. No
          administrative bypasses.
        </p>
      </div>
    </div>
  )
}

function Connectors({
  rects,
  drawn,
}: {
  rects: {
    top: { x: number; y: number; w: number; h: number }[]
    bottom: { x: number; y: number; w: number; h: number }[]
    container: { w: number; h: number }
  }
  drawn: boolean
}) {
  const { top, bottom } = rects
  if (top.length < 5 || bottom.length < 4) return null

  const midY = (r: { y: number; h: number }) => r.y + r.h / 2
  const rightEdge = (r: { x: number; w: number }) => r.x + r.w
  const leftEdge = (r: { x: number }) => r.x

  const STROKE_WIDTH = 2.5
  const ARROW_SIZE = 7

  const lines: {
    key: string
    x1: number
    y1: number
    x2: number
    y2: number
    delay: number
  }[] = []
  const arrows: { key: string; points: string; delay: number }[] = []

  // Top row: CREATE → CONFIGURE → DEPLOY → OPERATE → GOVERN
  for (let i = 0; i < top.length - 1; i++) {
    const a = top[i]
    const b = top[i + 1]
    const y = midY(a)
    const x1 = rightEdge(a)
    const x2 = leftEdge(b)
    lines.push({
      key: `top-${i}`,
      x1,
      y1: y,
      x2,
      y2: y,
      delay: 0.15 + i * 0.12,
    })
    const midX = x1 + (x2 - x1) / 2
    arrows.push({
      key: `top-arrow-${i}`,
      points: `${midX - ARROW_SIZE},${y - ARROW_SIZE * 0.7} ${midX - ARROW_SIZE},${y + ARROW_SIZE * 0.7} ${midX + ARROW_SIZE},${y}`,
      delay: 0.35 + i * 0.12,
    })
  }

  // Bottom row: UPGRADE → EXPAND → MONITOR → RETIRE (right to left)
  for (let i = 0; i < bottom.length - 1; i++) {
    const a = bottom[i + 1]
    const b = bottom[i]
    const y = midY(a)
    const x1 = leftEdge(a)
    const x2 = rightEdge(b)
    lines.push({
      key: `bottom-${i}`,
      x1,
      y1: y,
      x2,
      y2: y,
      delay: 0.6 + i * 0.12,
    })
    const midX = x2 + (x1 - x2) / 2
    arrows.push({
      key: `bottom-arrow-${i}`,
      points: `${midX + ARROW_SIZE},${y - ARROW_SIZE * 0.7} ${midX + ARROW_SIZE},${y + ARROW_SIZE * 0.7} ${midX - ARROW_SIZE},${y}`,
      delay: 0.8 + i * 0.12,
    })
  }

  // Right vertical: GOVERN → UPGRADE
  const govern = top[top.length - 1]
  const upgrade = bottom[bottom.length - 1]
  const rightX = Math.max(rightEdge(govern), rightEdge(upgrade)) + 24
  const govY = midY(govern)
  const upgY = midY(upgrade)

  lines.push({
    key: "gov-to-vert",
    x1: rightEdge(govern),
    y1: govY,
    x2: rightX,
    y2: govY,
    delay: 1.1,
  })
  lines.push({
    key: "vert-right",
    x1: rightX,
    y1: govY,
    x2: rightX,
    y2: upgY,
    delay: 1.25,
  })
  lines.push({
    key: "vert-to-upg",
    x1: rightX,
    y1: upgY,
    x2: rightEdge(upgrade),
    y2: upgY,
    delay: 1.45,
  })
  arrows.push({
    key: "arrow-down-upgrade",
    points: `${rightEdge(upgrade) + ARROW_SIZE},${upgY - ARROW_SIZE * 0.7} ${rightEdge(upgrade) + ARROW_SIZE},${upgY + ARROW_SIZE * 0.7} ${rightEdge(upgrade) - 2},${upgY}`,
    delay: 1.55,
  })

  // Left vertical governance loop: RETIRE → CREATE (closes the 9-step cycle)
  const create = top[0]
  const retire = bottom[0]
  const leftX = Math.min(leftEdge(create), leftEdge(retire)) - 24
  const creY = midY(create)
  const retY = midY(retire)

  lines.push({
    key: "retire-to-vert",
    x1: leftEdge(retire),
    y1: retY,
    x2: leftX,
    y2: retY,
    delay: 1.6,
  })
  lines.push({
    key: "vert-left",
    x1: leftX,
    y1: retY,
    x2: leftX,
    y2: creY,
    delay: 1.75,
  })
  lines.push({
    key: "vert-to-create",
    x1: leftX,
    y1: creY,
    x2: leftEdge(create),
    y2: creY,
    delay: 1.95,
  })
  arrows.push({
    key: "arrow-to-create",
    points: `${leftEdge(create) - ARROW_SIZE},${creY - ARROW_SIZE * 0.7} ${leftEdge(create) - ARROW_SIZE},${creY + ARROW_SIZE * 0.7} ${leftEdge(create) + 2},${creY}`,
    delay: 2.05,
  })

  const labelX = Math.min(...top.map(leftEdge), ...bottom.map(leftEdge)) - 34
  const labelY = (midY(top[0]) + midY(bottom[0])) / 2

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
      <text
        x={labelX}
        y={labelY}
        transform={`rotate(-90 ${labelX} ${labelY})`}
        className="fill-sidebar-primary/70"
        fontSize="9"
        fontWeight="600"
        textAnchor="middle"
        letterSpacing="0.05em"
        style={{
          opacity: drawn ? 1 : 0,
          transition: "opacity 0.5s ease-out 2.2s",
        }}
      >
        Governance Controlled
      </text>
    </>
  )
}