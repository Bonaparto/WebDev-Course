import { Component } from '@angular/core';

export interface Item {
  img: string,
  name: string,
  description: string,
  rating: string,
  category: string,
  link: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  items: Item[] = [
      {
        img: 'assets/images/categories/computercomponents/Energy.jpg',
        name: 'Goldshell KD-Box Kadena Miner 1.6TH/s 205W',
        description: 'Products with electrical plugs are designed for use in the US. Outlets and voltage differ internationally and this product may require an adapter or converter for use in your destination. Please check compatibility before purchasing.',
        rating: '3.9',
        category: 'components',
        link: 'https://twitter.com/intent/tweet?original_referer=https%253A%252F%252Fwww.amazon.com%252Fgp%252Fproduct%252FB09K6653XX%252Fref%253Dcm_sw_r_tw_dp_V1CJG9B9DY1GXQCVB7GA%253Fie%253DUTF8%2526psc%253D1&text=Goldshell%20KD-Box%20Kadena%20Miner%201.6TH%2Fs%20205W%20Goldshell&related=amazondeals%2Camazonmp3&url=https%3A%2F%2Fwww.amazon.com%2Fdp%2FB09K6653XX%2Fref%3Dcm_sw_r_tw_dp_V1CJG9B9DY1GXQCVB7GA%3F_encoding%3DUTF8%26psc%3D1&via=amazon'
      },
      {
        img: 'assets/images/categories/computercomponents/SamsungEvo.jpg',
        name: 'SAMSUNG 970 EVO Plus SSD 2TB',
        description: 'INNOVATIVE V-NAND TECHNOLOGY: Powered by Samsung V-NAND Technology, the 970 EVO Plus SSD’s NVMe interface (PCIe Gen 3.0 x4 NVMe 1.3) offers enhanced bandwidth, low latency, and power efficiency ideal for tech enthusiasts, high end gamers, and 4K & 3D content designers',
        rating: '4.9',
        category: 'components',
        link: 'https://twitter.com/intent/tweet?original_referer=https%253A%252F%252Fwww.amazon.com%252Fgp%252Fproduct%252FB07MFZXR1B%252Fref%253Dcm_sw_r_tw_dp_F6P2J0PCVRQAWZXSE5ZN&text=SAMSUNG%20970%20EVO%20Plus%20SSD%202TB%20-%20M.2%20NVMe%20Interface%20Internal%20Solid%20State%20Drive%20...&related=amazondeals%2Camazonmp3&url=https%3A%2F%2Fwww.amazon.com%2Fdp%2FB07MFZXR1B%2Fref%3Dcm_sw_r_tw_dp_F6P2J0PCVRQAWZXSE5ZN&via=amazon'
      },
      {
        img: 'assets/images/categories/computercomponents/Seagate.jpg',
        name: 'Seagate Portable 2TB',
        description: 'Easily store and access 2TB to content on the go with the Seagate Portable Drive, a USB external hard drive',
        rating: '4.7',
        category: 'components',
        link: 'https://twitter.com/intent/tweet?original_referer=https%253A%252F%252Fwww.amazon.com%252Fgp%252Fproduct%252FB07CRG94G3%252Fref%253Dcm_sw_r_tw_dp_MJ5S8G0H5RZR7SEGPE5W&text=Seagate%20Portable%202TB%20External%20Hard%20Drive%20Portable%20HDD%20%E2%80%93%20USB%203.0%20for%20PC%2C%20Mac%2C%20...&related=amazondeals%2Camazonmp3&url=https%3A%2F%2Fwww.amazon.com%2Fdp%2FB07CRG94G3%2Fref%3Dcm_sw_r_tw_dp_MJ5S8G0H5RZR7SEGPE5W&via=amazon'
      },
      {
        img: 'assets/images/categories/computercomponents/Switch.jpg',
        name: 'KVM Switch Selector,',
        description: '4 in 4 out USB Switch Box: 4 port USB sharing switch allows 4 buttons swapping between 4 computers to share 4 usb 3.0 peripherals devices without constantly swapping cables or setting up complicated network sharing software.',
        rating: '5',
        category: 'components',
        link: 'https://twitter.com/intent/tweet?original_referer=https%253A%252F%252Fwww.amazon.com%252Fgp%252Fproduct%252FB09NKMBZN8%252Fref%253Dcm_sw_r_tw_dp_7EW741DV3PYJQMM3VGXX%253Fie%253DUTF8%2526psc%253D1&text=KVM%20Switch%20Selector%2C%204%20Computer%20Sharing%204%20USB%20Devices%20USB%203.0%20Switches%20Box%20fo...&related=amazondeals%2Camazonmp3&url=https%3A%2F%2Fwww.amazon.com%2Fdp%2FB09NKMBZN8%2Fref%3Dcm_sw_r_tw_dp_7EW741DV3PYJQMM3VGXX%3F_encoding%3DUTF8%26psc%3D1&via=amazon'
      },
      {
        img: 'assets/images/categories/computercomponents/WD.jpg',
        name: 'WD 5TB Elements Portable External',
        description: 'USB 3.0 and USB 2.0 Compatibility',
        rating: '4.7',
        category: 'components',
        link: 'https://twitter.com/intent/tweet?original_referer=https%253A%252F%252Fwww.amazon.com%252Fgp%252Fproduct%252FB07X41PWTY%252Fref%253Dcm_sw_r_tw_dp_3Z6XXN91WMPNBR2K16NP&text=WD%205TB%20Elements%20Portable%20External%20Hard%20Drive%20HDD%2C%20USB%203.0%2C%20Compatible%20with%20PC...&related=amazondeals%2Camazonmp3&url=https%3A%2F%2Fwww.amazon.com%2Fdp%2FB07X41PWTY%2Fref%3Dcm_sw_r_tw_dp_3Z6XXN91WMPNBR2K16NP&via=amazon'
      },
      {
        img: 'assets/images/categories/laptops/1.jpg',
        name: 'Lenovo Thinkpad X1 Tablet (3rd Gen)',
        description: 'This pre-owned product has been professionally inspected, tested and cleaned by Amazon-qualified suppliers',
        rating: '4.5',
        category: 'laptops',
        link: 'https://twitter.com/intent/tweet?original_referer=https%253A%252F%252Fwww.amazon.com%252Fgp%252Fproduct%252FB082BKQMPW%252Fref%253Dcm_sw_r_tw_dp_AKZ8E6Z38QC5ACS4F8RE%253Fie%253DUTF8%2526psc%253D1&text=Lenovo%20Thinkpad%20X1%20Tablet%20(3rd%20Gen)%20Intel%20i5-8350u%20Quad%201.70GHz%20(Max%203.60GHz)...&related=amazondeals%2Camazonmp3&url=https%3A%2F%2Fwww.amazon.com%2Fdp%2FB082BKQMPW%2Fref%3Dcm_sw_r_tw_dp_AKZ8E6Z38QC5ACS4F8RE%3F_encoding%3DUTF8%26psc%3D1&via=amazon'
      },
      {
        img: 'assets/images/categories/laptops/2.jpg',
        name: 'Tablet with Keyboard 5G Dual',
        description: '【More practical accessories】 Extra accessories gift: Standard accessories package: 10.1-inch tablet, protective leather case, protective film (attached), charger, type-C charging cable, instruction manual Additional accessories: wireless mouse, Bluetooth keyboard, OTG adapter, With the accessories we give away, you can easily turn your tablet into a laptop for office work. Suitable for gifts.',
        rating: '4.6',
        category: 'laptops',
        link: 'https://twitter.com/intent/tweet?original_referer=https%253A%252F%252Fwww.amazon.com%252Fgp%252Fproduct%252FB092ZPTCZG%252Fref%253Dcm_sw_r_tw_dp_Y9QYDZCJX7H25SSRX1XB%253Fie%253DUTF8%2526psc%253D1&text=Tablet%20with%20Keyboard%205G%20Dual%20Wi-Fi%20Android%2010.0%2C%20AOYODKG%20Tablet%2010%20inch%201920x...&related=amazondeals%2Camazonmp3&url=https%3A%2F%2Fwww.amazon.com%2Fdp%2FB092ZPTCZG%2Fref%3Dcm_sw_r_tw_dp_Y9QYDZCJX7H25SSRX1XB%3F_encoding%3DUTF8%26psc%3D1&via=amazon'
      },
      {
        img: 'assets/images/categories/laptops/3.jpg',
        name: 'Lenovo IdeaPad 3 11',
        description: "No setup required. Log in to your Chromebook laptop with your Google account and you're ready to go. Easy access to collaborative tools on G Suite and the full library of apps on Google Play",
        rating: '4.1',
        category: 'laptops',
        link: 'https://twitter.com/intent/tweet?original_referer=https%253A%252F%252Fwww.amazon.com%252Fgp%252Fproduct%252FB092ZPTCZG%252Fref%253Dcm_sw_r_tw_dp_Y9QYDZCJX7H25SSRX1XB%253Fie%253DUTF8%2526psc%253D1&text=Tablet%20with%20Keyboard%205G%20Dual%20Wi-Fi%20Android%2010.0%2C%20AOYODKG%20Tablet%2010%20inch%201920x...&related=amazondeals%2Camazonmp3&url=https%3A%2F%2Fwww.amazon.com%2Fdp%2FB092ZPTCZG%2Fref%3Dcm_sw_r_tw_dp_Y9QYDZCJX7H25SSRX1XB%3F_encoding%3DUTF8%26psc%3D1&via=amazon'
      },
      {
        img: 'assets/images/categories/laptops/4.jpg',
        name: 'Acer Aspire 5 A515-46-R3UB',
        description: 'Powerful Productivity: AMD Ryzen 3 3350U delivers desktop-class performance and amazing battery life in a slim notebook. With Precision Boost, get up to 3.5GHz for your high-demand applications',
        rating: '4.3',
        category: 'laptops',
        link: 'https://twitter.com/intent/tweet?original_referer=https%253A%252F%252Fwww.amazon.com%252Fgp%252Fproduct%252FB092ZPTCZG%252Fref%253Dcm_sw_r_tw_dp_Y9QYDZCJX7H25SSRX1XB%253Fie%253DUTF8%2526psc%253D1&text=Tablet%20with%20Keyboard%205G%20Dual%20Wi-Fi%20Android%2010.0%2C%20AOYODKG%20Tablet%2010%20inch%201920x...&related=amazondeals%2Camazonmp3&url=https%3A%2F%2Fwww.amazon.com%2Fdp%2FB092ZPTCZG%2Fref%3Dcm_sw_r_tw_dp_Y9QYDZCJX7H25SSRX1XB%3F_encoding%3DUTF8%26psc%3D1&via=amazon'
      },
      {
        img: 'assets/images/categories/laptops/5.jpg',
        name: 'Lenovo Flex 5 Laptop',
        description: 'Powered by an AMD Ryzen 5 5500U mobile processor with Radeon graphics, this portable notebook computer has 16GB DDR4 RAM and 256GB NVMe SSD Storage',
        rating: '4.8',
        category: 'laptops',
        link: 'https://twitter.com/intent/tweet?original_referer=https%253A%252F%252Fwww.amazon.com%252Fgp%252Fproduct%252FB092ZPTCZG%252Fref%253Dcm_sw_r_tw_dp_Y9QYDZCJX7H25SSRX1XB%253Fie%253DUTF8%2526psc%253D1&text=Tablet%20with%20Keyboard%205G%20Dual%20Wi-Fi%20Android%2010.0%2C%20AOYODKG%20Tablet%2010%20inch%201920x...&related=amazondeals%2Camazonmp3&url=https%3A%2F%2Fwww.amazon.com%2Fdp%2FB092ZPTCZG%2Fref%3Dcm_sw_r_tw_dp_Y9QYDZCJX7H25SSRX1XB%3F_encoding%3DUTF8%26psc%3D1&via=amazon'
      },
      {
        img: 'assets/images/categories/',
        name: '',
        description: '',
        rating: '',
        category: '',
        link: ''
      }
  ]
}