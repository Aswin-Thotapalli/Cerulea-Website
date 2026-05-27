'use client';

interface Step {
  label: string;
  sublabel?: string;
  value: number;
  color: string;
}

export default function FunnelChart({ steps }: { steps: Step[] }) {
  const max = steps[0]?.value ?? 1;

  return (
    <div style={{ display: 'flex', gap: 0, height: 140, alignItems: 'stretch' }}>
      {steps.map((step, i) => {
        const barPct   = max ? Math.max((step.value / max) * 100, 4) : 4;
        const convPct  = i === 0 ? 100 : max ? ((step.value / max) * 100).toFixed(1) : '0';
        const dropPct  = i > 0 && steps[i - 1].value
          ? Math.round(((step.value - steps[i - 1].value) / steps[i - 1].value) * 100)
          : null;
        const isLast = i === steps.length - 1;

        return (
          <div key={step.label} style={{ flex: 1, display: 'flex', position: 'relative' }}>
            {/* Connector arrow */}
            {i > 0 && (
              <div style={{
                position: 'absolute', left: -1, top: '50%', transform: 'translateY(-50%)',
                width: 0, height: 0,
                borderTop: '8px solid transparent',
                borderBottom: '8px solid transparent',
                borderLeft: '8px solid #1C1C1E',
                zIndex: 2,
              }} />
            )}

            {/* Card */}
            <div style={{
              flex: 1,
              background: '#111113',
              border: `1px solid #1C1C1E`,
              borderLeft: i === 0 ? undefined : 'none',
              borderRadius: i === 0 ? '10px 0 0 10px' : isLast ? '0 10px 10px 0' : 0,
              padding: '16px 20px',
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              position: 'relative', overflow: 'hidden',
            }}>
              {/* Background fill bar */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                height: `${barPct}%`,
                background: `${step.color}0D`,
                borderTop: `1px solid ${step.color}22`,
                transition: 'height 0.6s ease',
              }} />

              {/* Content */}
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                  fontSize: 10, fontWeight: 700, color: step.color,
                  letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4,
                }}>
                  {step.label}
                </div>
                {step.sublabel && (
                  <div style={{ fontSize: 10, color: '#3A3A3C', marginBottom: 4 }}>{step.sublabel}</div>
                )}
              </div>

              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#FAFAFA', letterSpacing: '-0.04em', lineHeight: 1 }}>
                  {step.value.toLocaleString()}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 6 }}>
                  <span style={{ fontSize: 12, color: step.color, fontWeight: 700 }}>{convPct}%</span>
                  {dropPct !== null && (
                    <span style={{ fontSize: 11, color: dropPct < 0 ? '#EF4444' : '#22C55E', fontWeight: 600 }}>
                      {dropPct > 0 ? '+' : ''}{dropPct}% from prev
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
