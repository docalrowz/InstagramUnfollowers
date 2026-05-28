import React from 'react';

interface NotSearchingProps {
  onScan?: () => void;
}

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

export const NotSearching = ({ onScan }: NotSearchingProps) => (
  <section className="launch-screen">
    <div className="launch-copy">
      <span className="eyebrow">Local account audit</span>
      <h1>Find the follows that do not follow back.</h1>
      <p>
        Scan your Instagram follows, surface risk signals, protect whitelisted accounts,
        and act only on the users you select. Everything runs in this browser session.
      </p>
      <div className="launch-actions">
        <button className="run-scan" onClick={onScan} type="button">
          Run scan
          <ArrowIcon />
        </button>
        <span className="launch-note">No servers · no auth · no exfiltration</span>
      </div>
    </div>
    <div className="launch-panel" aria-hidden="true">
      <div className="scan-orbit">
        <span />
        <span />
        <span />
      </div>
      <div className="signal-card primary">
        <span>Status</span>
        <strong>Idle</strong>
      </div>
      <div className="signal-card">
        <span>Whitelist</span>
        <strong>Protected</strong>
      </div>
      <div className="signal-card accent">
        <span>Next step</span>
        <strong>Run scan</strong>
      </div>
    </div>
  </section>
);
