import React, { useState } from 'react';
import * as ed from '@noble/ed25519';

// Define the shape of our key state
interface KeyPair {
  publicKey: string;
  privateKey: string;
}

export const KeyGenerator: React.FC = () => {
  const [keys, setKeys] = useState<KeyPair | null>(null);
  const [copied, setCopied] = useState(false);

  const generateNewKeys = async () => {
    try {
      // 1. Generate a 32-byte secure random secret key (v2.0 syntax)
      const privBytes = ed.utils.randomSecretKey();
      
      // 2. Derive the public key asynchronously
      const pubBytes = await ed.getPublicKeyAsync(privBytes);

      // 3. Convert bytes to Hex strings using noble's built-in utility
      setKeys({
        privateKey: ed.etc.bytesToHex(privBytes),
        publicKey: ed.etc.bytesToHex(pubBytes),
      });
      setCopied(false);
    } catch (error) {
      console.error("Key generation failed:", error);
      alert("Failed to generate keys. Ensure your browser supports WebCrypto.");
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ marginTop: 0 }}>Ed25519 Key Generator</h2>
      <p style={{ color: '#666' }}>Use this to generate keys for your production environment.</p>
      
      <button onClick={generateNewKeys} style={buttonStyle}>
        {keys ? "Regenerate Keys" : "Generate Keys"}
      </button>

      {keys && (
        <div style={resultsStyle}>
          <div style={sectionStyle}>
            <strong>Public Key (Safe to share):</strong>
            <div style={codeBoxStyle}>
              <code>{keys.publicKey}</code>
            </div>
          </div>

          <div style={sectionStyle}>
            <strong style={{ color: '#d32f2f' }}>Private Key (SECRET - Keep this safe!):</strong>
            <div style={{ ...codeBoxStyle, backgroundColor: '#fff5f5' }}>
              <code>{keys.privateKey}</code>
            </div>
          </div>

          <button 
            onClick={() => copyToClipboard(`Public: ${keys.publicKey}\nPrivate: ${keys.privateKey}`)}
            style={copyButtonStyle}
          >
            {copied ? "✅ Copied to Clipboard!" : "Copy Both Keys"}
          </button>
        </div>
      )}
    </div>
  );
};

// Simple inline styles (You can replace these with Tailwind or CSS modules)
const containerStyle: React.CSSProperties = {
  padding: '2rem',
  border: '1px solid #ddd',
  borderRadius: '12px',
  maxWidth: '500px',
  margin: '2rem auto',
  fontFamily: 'sans-serif',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
};

const buttonStyle = {
  backgroundColor: '#2563eb',
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  fontWeight: 'bold'
};

const resultsStyle = {
  marginTop: '20px',
  textAlign: 'left' as const
};

const sectionStyle = {
  marginBottom: '15px'
};

const codeBoxStyle = {
  padding: '10px',
  backgroundColor: '#f4f4f4',
  borderRadius: '4px',
  wordBreak: 'break-all' as const,
  fontSize: '12px',
  marginTop: '5px',
  border: '1px solid #ccc'
};

const copyButtonStyle = {
  marginTop: '10px',
  padding: '8px 16px',
  cursor: 'pointer',
  borderRadius: '4px',
  border: '1px solid #2563eb',
  backgroundColor: 'transparent',
  color: '#2563eb'
};