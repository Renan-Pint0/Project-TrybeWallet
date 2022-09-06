import { FAILED_REQUEST, REQUEST_DATA, SAVE_DATA, SUBMIT_DATA } from '.';

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

const submitData = (data) => ({
  type: SUBMIT_DATA,
  data,
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

export const fetchWalletCurrencies = (data) => async (dispatch) => {
  const {
    id,
    value,
    description,
    currency,
    method,
    tag,
  } = data;
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const walletResponse = await response.json();
  delete walletResponse.USDT;
  const dataReturn = {
    id,
    value,
    description,
    currency,
    method,
    tag,
    exchangeRates: walletResponse,
  };
  dispatch(submitData(dataReturn));
};

export default fetchWalletData;
