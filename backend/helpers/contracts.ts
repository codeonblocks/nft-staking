import { getDefaultProvider } from "@ethersproject/providers";
import { Marketplace__factory } from "../typechain-types/index";

export const provider = getDefaultProvider(
	"http://localhost:8545"
	// `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`
);

export const marketplaceContract = Marketplace__factory.connect(
	"0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
	provider
);

// export const stakeContract =
