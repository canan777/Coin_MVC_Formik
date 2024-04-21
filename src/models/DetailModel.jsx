import axios from 'axios';
import { SiCoinmarketcap } from 'react-icons/si';
import { MdEventAvailable, MdPriceChange } from 'react-icons/md';
import { FaPercent } from 'react-icons/fa';
import { RiStockFill } from 'react-icons/ri';

export default class DetailModel {
  constructor(coin) {
    this.coin = coin;

    // ekrana basılacak kutuların verilerini hazırla
    this.infoFields = [
      {
        icon: <SiCoinmarketcap />,
        label: 'Market Hacmi',
        value: coin?.detail.marketCapUsd,
      },
      {
        icon: <MdEventAvailable />,
        label: 'Tedarik',
        value: coin?.detail.maxSupply,
      },
      {
        icon: <MdPriceChange />,
        label: 'Fiyat',
        value: coin?.detail.priceUsd,
      },
      {
        icon: <FaPercent />,
        label: '24s Değişim (%)',
        value: coin?.detail.changePercent24Hr,
      },
      {
        icon: <RiStockFill />,
        label: '24 Hacim',
        value: coin?.detail.volumeUsd24Hr,
      },
    ];

    // fiyat geçmişini grafik kütüphanesinin istediği
    // formata çevireceğiz
    this.chartData = {
      labels: coin?.history.map((i) =>
        new Date(i.date).toLocaleDateString()
      ),
      datasets: [
        {
          id: 1,
          label: 'Fiyat',
          // borderColor: 'red',
          // backgroundColor: 'yellow',
          data: coin?.history.map((i) => i.priceUsd),
        },
      ],
    };
  }

  // api'den hem detay hem fiyat geçmişini alır
  static async getCoin(id) {
    // detay verilerini al
    const detailRes = await axios.get(
      `https://api.coincap.io/v2/assets/${id}`
    );

    // fiyat geçmişini al
    const historyRes = await axios.get(
      `https://api.coincap.io/v2/assets/${id}/history?interval=d1`
    );

    // verileri fonksiyonun çağrıldığı yere döndür
    return {
      detail: detailRes.data.data,
      history: historyRes.data.data,
    };
  }
}