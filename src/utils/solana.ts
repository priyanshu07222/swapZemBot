import * as web3 from '@solana/web3.js'

export const generateSolanaWallaet = () => {
    const wallet = web3.Keypair.generate();
    return wallet
}