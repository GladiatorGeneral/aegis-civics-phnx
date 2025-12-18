"use client";
import React, {useState} from "react";

type Props = {
  title: string;
  address: string;
  uri?: string;
  explorer?: string;
  note?: string;
};

export default function DonationCard({title, address, uri, explorer, note}: Props) {
  const [copied, setCopied] = useState(false);
  const toCopy = uri ?? address;

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(toCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      // ignore
    }
  }

  const qr = `https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=${encodeURIComponent(toCopy)}`;

  return (
    <div className="bg-gray-900/60 border border-white/6 rounded-lg p-4">
      <h3 className="font-semibold mb-2">{title}</h3>
      {note && <div className="text-sm text-gray-300 mb-3">{note}</div>}

      <div className="flex gap-4 items-start">
        <img src={qr} alt="qr" width={140} height={140} className="rounded-md" />

        <div className="flex-1">
          <div className="bg-gray-800 p-3 rounded font-mono text-sm break-all">{toCopy}</div>
          <div className="mt-3 flex gap-2">
            <button onClick={handleCopy} className="px-3 py-2 rounded-md bg-white/6 hover:bg-white/10">
              {copied ? "Copied" : "Copy address"}
            </button>
            {explorer && (
              <a href={explorer} target="_blank" rel="noreferrer" className="px-3 py-2 rounded-md bg-white/6 hover:bg-white/10">View on explorer</a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
