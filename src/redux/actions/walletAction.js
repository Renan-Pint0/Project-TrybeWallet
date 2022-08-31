import { FAILED_REQUEST, REQUEST_DATA, SAVE_DATA } from '.';

const requestData = () => ({
  type: REQUEST_DATA,
});

const saveData = (data) => ({
  type: SAVE_DATA,
  data,
});

const failedRequest = (erro) => ({
  type: FAILED_REQUEST,
  erro,
});

const fetchWalletData = () => async (dispatch) => {
  dispatch(requestData());

  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const walletResponse = await response.json();
    const walletData = Object.keys(walletResponse).filter((c) => c !== 'USDT');
    dispatch(saveData(walletData));
  } catch (erro) {
    dispatch(failedRequest(erro));
  }
};

export default fetchWalletData;
