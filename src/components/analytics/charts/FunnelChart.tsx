'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Step {
  label: string;
  sublabel?: string;
  value: number;
  color: string;
}

const EASE: [number, number, number, number] = [0.23, 1, 0.32, 1];

export default function FunnelChart({ steps }: { steps: Step[] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-30px' });
  const max = steps[0]?.value ?? 1;

  return (
    <div ref={ref} style={{ display: 'flex', gap: 8, alignItems: 'stretch', minHeight: 160 }}>
      {steps.map((step, i) => {
        const fillPct   = max ? Math.max((step.value / max) * 100, step.value ? 6 : 0) : 0;
        const convPct   = i === 0 ? 100 : max ? +((step.value / max) * 100).toFixed(1) : 0;
        const dropPct   = i > 0 && steps[i - 1].value
          ? Math.round(((step.value - steps[i - 1].value) / steps[i - 1].value) * 100)
          : null;

        return (
          <div key={step.label} style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div style={{
              flex: 1,
              background: '#FFFFFF',
              border: `1px solid rgba(0,0,0,0.08)`,
              borderRadius: 12,
              padding: '16px 18px',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
            }}>
              {/* Animated fill from bottom */}
              <motion.div
                initial={{ height: 0 }}
                animate={isInView ? { height: `${fillPct}%` } : {}}
                transition={{ duration: 1, ease: EASE, delay: i * 0.12 }}
                style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  background: `linear-gradient(to top, ${step.color}22, ${step.color}06)`,
                  borderTop: `1px solid ${step.color}28`,
                }}
              />

              {/* Top accent line */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 2, borderRadius: '12px 12px 0 0',
                background: `linear-gradient(90deg, transparent, ${step.color}70, transparent)`,
                opacity: fillPct > 0 ? 1 : 0.3,
              }} />

              {/* Content */}
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                  fontSize: 9, fontWeight: 700, color: step.color,
                  letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 5,
                }}>
                  {step.label}
                </div>
                {step.sublabel && (
                  <div style={{ fontSize: 10, color: 'rgba(0,0,0,0.3)', marginBottom: 14 }}>{step.sublabel}</div>
                )}

                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, ease: EASE, delay: i * 0.12 + 0.25 }}
                  style={{
                    fontSize: '1.85rem', fontWeight: 800, color: '#111118',
                    letterSpacing: '-0.04em', lineHeight: 1,
                    fontVariantNumeric: 'tabular-nums',
                  }}
                >
                  {step.value.toLocaleString()}
                </motion.div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 8, flexWrap: 'wrap' }}>
                  <span style={{ fontSize: 12, color: step.color, fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>
                    {convPct}%
                  </span>
                  {dropPct !== null && (
                    <span style={{ fontSize: 10, fontWeight: 600, color: dropPct < 0 ? '#E11D48' : '#059669' }}>
                      {dropPct > 0 ? '+' : ''}{dropPct}%
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
