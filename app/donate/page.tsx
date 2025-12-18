import DonationCard from "../../components/ui/DonationCard";
import styles from "./donate.module.css";

export const metadata = {
  title: "Donate",
  description: "Support the project — PayPal and crypto donations",
};

export default function DonatePage() {
  // Replace these placeholders with your real addresses / links
  const PAYPAL_LINK = "https://www.paypal.com/donate?hosted_button_id=REPLACE_WITH_YOUR_ID";
  const BTC_ADDRESS = "bc1qREPLACE_THIS_WITH_YOUR_BTC_ADDRESS";
  const ETH_ADDRESS = "0xREPLACE_THIS_WITH_YOUR_ETH_ADDRESS";
  const USDC_ADDRESS = "0xREPLACE_THIS_WITH_YOUR_USDC_CONTRACT_OR_WALLET";

  return (
    <main className={`${styles.page}`}>
      <div className={`${styles.content} max-w-5xl mx-auto`}> 

        {/* content */}
        {/* Hero */}
        <section className={`text-center mb-6 relative ${styles.heroLift}`} style={{zIndex: 3}}>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Support American Scale</h1>
          <p className="text-gray-300 mb-6">Your contribution helps keep development, data analysis, and public resources available to everyone.</p>

          <div className="flex items-center justify-center gap-4">
            <a href={PAYPAL_LINK} target="_blank" rel="noreferrer" className={`inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-semibold ${styles.ctaPrimary}`}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L15 8H9L12 2Z" fill="currentColor"/></svg>
              Donate with PayPal
            </a>

            <a href="#crypto" className="inline-flex items-center gap-2 px-5 py-3 rounded-md text-sm font-medium border border-white/10 text-white/90 hover:text-white" style={{background: "rgba(255,255,255,0.02)"}}>
              See crypto options
            </a>
          </div>
        </section>

        {/* PayPal + Unified */}
        <section className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-900/60 border border-white/6 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">PayPal</h2>
            <p className="text-sm text-gray-300 mb-4">Quick one-time donations via PayPal. Use the button below to open a secure PayPal donation flow.</p>
            <a href={PAYPAL_LINK} target="_blank" rel="noreferrer" className="inline-block px-5 py-3 rounded-md font-semibold" style={{background: "#0070ba", color: "#fff"}}>Donate with PayPal</a>
            <div className="text-xs text-gray-400 mt-3">Replace the PayPal link with your hosted button ID or PayPal.Me link.</div>
          </div>

          <div className="bg-gray-900/60 border border-white/6 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Unified checkout</h2>
            <p className="text-sm text-gray-300 mb-4">Prefer a single external processor? Add your Coinbase Commerce, Open Collective, or Buy Me a Coffee URL here.</p>
            <a href="#" className="inline-block px-5 py-3 rounded-md font-semibold" style={{background: "linear-gradient(90deg,#ffd4e6 0%,#ff8fbf 100%)", color: "#111"}}>Open unified checkout</a>
            <div className="text-xs text-gray-400 mt-3">Tell me which processor you want and I can wire it up.</div>
          </div>
        </section>

        {/* Crypto */}
        <section id="crypto" className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Cryptocurrency</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <DonationCard title="Bitcoin (BTC)" address={BTC_ADDRESS} explorer={"https://www.blockchain.com/btc/address/" + BTC_ADDRESS} />
            <DonationCard title="Ethereum (ETH)" address={ETH_ADDRESS} explorer={"https://etherscan.io/address/" + ETH_ADDRESS} />
            <DonationCard title="USDC (ERC-20)" address={USDC_ADDRESS} note={"USDC on Ethereum — paste into your wallet or use the QR."} explorer={"https://etherscan.io/address/" + USDC_ADDRESS} />
          </div>
          <div className="text-xs text-gray-400 mt-3">Replace placeholder addresses with your real wallet addresses before publishing.</div>
        </section>
      </div>

      {/* decorative blobs (positioned after content so they don't push it down) */}
      <div aria-hidden className={styles.blobPink} style={{ top: '-80px' }} />
      <div aria-hidden className={styles.blobYellow} style={{ top: '-40px' }} />
    </main>
  );
}
