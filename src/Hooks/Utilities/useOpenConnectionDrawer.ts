import { useGlobal } from '@Contexts/Global';
import { useUserAccount } from '@Hooks/useUserAccount';
import { useAtom } from 'jotai';
import { isDrawerOpen } from 'src/globalStore';
import { openDrawer } from '@Utils/appControls/mobileDrawerHandlers';
import { useNetwork } from 'wagmi';
import { useActiveChain } from '@Hooks/useActiveChain';
import { useAccountModal, useConnectModal } from '@rainbow-me/rainbowkit';

const useOpenConnectionDrawer = () => {
  const [, setIsConnectionDrawerOpen] = useAtom(isDrawerOpen);
  const { dispatch } = useGlobal();
  const { address: account } = useUserAccount();
  const { chain, chains } = useNetwork();
  const { activeChain } = useActiveChain();
  const activeChainName = activeChain?.name;
  const { openConnectModal } = useConnectModal();

  let shouldConnectWallet = false;
  if (
    !account ||
    (activeChainName &&
      chain &&
      chain.id !== chains.find((chain) => chain.name === activeChainName)?.id)
  ) {
    shouldConnectWallet = true;
  }

  function openWalletDrawer() {
    setIsConnectionDrawerOpen(true);
    dispatch({ type: 'SET_DRAWER', payload: true });
    openDrawer();
  }
  return { openWalletDrawer: openConnectModal, shouldConnectWallet };
};

export default useOpenConnectionDrawer;
