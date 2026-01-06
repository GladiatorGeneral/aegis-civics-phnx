import DonationCard from "../../components/ui/DonationCard";
import styles from "./donate.module.css";
import Image from "next/image";

export const metadata = {
  title: "Donate",
  description: "Support the project — PayPal and crypto donations",
};

export default function DonatePage() {
  // Replace these placeholders with your real addresses / links
  const PAYPAL_LINK = "https://www.paypal.com/ncp/payment/BUS97EF56K3FJ";
  const OPEN_COLLECTIVE_LINK = "https://opencollective.com/phnxcore";
  const BTC_ADDRESS = "bc1qewx9w4t8r2dfm3lk0ff5luc2d5wuq7566k9zch";
  const ETH_ADDRESS = "0xEB8218487dEb5FD9A5acA3E959EBb098b90c1A67";
  const USDC_ADDRESS = "0xEB8218487dEb5FD9A5acA3E959EBb098b90c1A67";

  return (
    <main className={`${styles.page}`}>
      <div className={`${styles.content} max-w-5xl mx-auto`}> 

        {/* content */}
        {/* Hero */}
        <section className={`text-center mb-6 relative ${styles.heroLift}`} style={{zIndex: 3}}>
          <div className="flex justify-center mb-6">
            <Image 
              src="/logo.png" 
              alt="PhnxAI Logo" 
              width={120} 
              height={120} 
              className="rounded-full shadow-lg"
            />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Support PhnxAI</h1>
          <p className="text-gray-300 mb-6">Your contribution helps keep development, data analysis, and public resources available to everyone.</p>

          <div className="flex items-center justify-center gap-4">
            <a href={PAYPAL_LINK} target="_blank" rel="noreferrer" className={`inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-semibold ${styles.ctaPrimary}`}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L15 8H9L12 2Z" fill="currentColor"/></svg>
              Donate with PayPal
            </a>

            <a href="#crypto" className="inline-flex items-center gap-2 px-5 py-3 rounded-md text-sm font-medium text-white shadow-lg hover:opacity-90 transition-opacity" style={{background: "linear-gradient(90deg, #ec4899 0%, #8b5cf6 100%)"}}>
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
            <h2 className="text-xl font-semibold mb-2">Open Collective</h2>
            <p className="text-sm text-gray-300 mb-4">Support us transparently through Open Collective. See exactly how your funds are used to drive the project forward.</p>
            <a href={OPEN_COLLECTIVE_LINK} target="_blank" rel="noreferrer" className="inline-block px-5 py-3 rounded-md font-semibold" style={{background: "linear-gradient(90deg,#ffd4e6 0%,#ff8fbf 100%)", color: "#111"}}>Donate on Open Collective</a>
            <div className="text-xs text-gray-400 mt-3">Transparent funding for open source projects.</div>
          </div>
        </section>

        {/* Crypto */}
        <section id="crypto" className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Cryptocurrency</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <DonationCard title="Bitcoin (BTC)" address={BTC_ADDRESS} /* explorer={"https://www.blockchain.com/btc/address/" + BTC_ADDRESS} */ />
            <DonationCard title="Ethereum (ETH)" address={ETH_ADDRESS} /* explorer={"https://etherscan.io/address/" + ETH_ADDRESS} */ />
            <DonationCard title="USDC (ERC-20)" address={USDC_ADDRESS} note={"USDC on Ethereum — paste into your wallet or use the QR."} /* explorer={"https://etherscan.io/address/" + USDC_ADDRESS} */ />
          </div>
          <div className="text-xs text-gray-400 mt-3">Replace placeholder addresses with your real wallet addresses before publishing.</div>
        </section>
      </div>
    </main>
  );
}
