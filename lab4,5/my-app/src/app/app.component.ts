import { Component } from '@angular/core';

export interface Item {
  img: string,
  name: string,
  description: string,
  rating: string,
  category: string,
  shareLink: string,
  link: string,
  likes: number,
  isShown: Boolean
}

export interface Category {
  name: string,
  img: string,
  isActive: Boolean,
  isChoosen: Boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  activeCategory: string = ''

  makeActive(val: string) {
    this.activeCategory = val;
    this.categories.forEach(category => {
      category.isChoosen = (category.name == val);
    })
  }

  getItems(val: string) {
    var items: Item[] = []
    console.log(this.items);
    
    this.items.forEach(item => {
      if(item.category === val) {
        items.push(item);
      }
    })
    return items
  }

  categories: Category[] = [
    {
      name: 'Computer Compnonets',
      img: 'assets/images/categories/computercomponents/Energy.jpg',
      isActive: true,
      isChoosen: false
    },
    {
      name: 'Laptops and Tablets',
      img: 'assets/images/categories/laptops/2.jpg',
      isActive: true,
      isChoosen: false
    },
    {
      name: 'Monitors',
      img: 'assets/images/categories/monitors/Sceptre1.jpg',
      isActive: true,
      isChoosen: false
    },
    {
      name: 'Scanners',
      img: 'assets/images/categories/scanners/Fujitsu.jpg',
      isActive: true,
      isChoosen: false
    }
  ]

  items: Item[] = [
      {
        img: 'assets/images/categories/computercomponents/Energy.jpg',
        name: 'Goldshell KD-Box Kadena Miner 1.6TH/s 205W',
        description: 'Products with electrical plugs are designed for use in the US. Outlets and voltage differ internationally and this product may require an adapter or converter for use in your destination. Please check compatibility before purchasing.',
        rating: '3.9',
        category: 'Computer Compnonets',
        link: 'https://www.amazon.com/Goldshell-KD-Box-Kadena-Miner-1-6TH/dp/B09K6653XX/ref=sr_1_1_sspa?qid=1647183854&rnid=16225007011&s=computers-intl-ship&sr=1-1-spons&psc=1&smid=A242WF346A877W&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExNzlLOVUwQTZYNFRHJmVuY3J5cHRlZElkPUExMDEwNzczMkhEVkJPSzg4NllGRCZlbmNyeXB0ZWRBZElkPUEwMzQ4MDUzVklXREg4N1lST0NWJndpZGdldE5hbWU9c3BfYXRmX2Jyb3dzZSZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=',
        shareLink: 'https://twitter.com/intent/tweet?original_referer=https%253A%252F%252Fwww.amazon.com%252Fgp%252Fproduct%252FB09K6653XX%252Fref%253Dcm_sw_r_tw_dp_V1CJG9B9DY1GXQCVB7GA%253Fie%253DUTF8%2526psc%253D1&text=Goldshell%20KD-Box%20Kadena%20Miner%201.6TH%2Fs%20205W%20Goldshell&related=amazondeals%2Camazonmp3&url=https%3A%2F%2Fwww.amazon.com%2Fdp%2FB09K6653XX%2Fref%3Dcm_sw_r_tw_dp_V1CJG9B9DY1GXQCVB7GA%3F_encoding%3DUTF8%26psc%3D1&via=amazon',
        likes: 123,
        isShown: true

      },
      {
        img: 'assets/images/categories/computercomponents/SamsungEvo.jpg',
        name: 'SAMSUNG 970 EVO Plus SSD 2TB',
        description: 'INNOVATIVE V-NAND TECHNOLOGY: Powered by Samsung V-NAND Technology, the 970 EVO Plus SSD’s NVMe interface (PCIe Gen 3.0 x4 NVMe 1.3) offers enhanced bandwidth, low latency, and power efficiency ideal for tech enthusiasts, high end gamers, and 4K & 3D content designers',
        rating: '4.9',
        category: 'Computer Compnonets',
        link: 'https://www.amazon.com/Samsung-970-EVO-Plus-MZ-V7S2T0B/dp/B07MFZXR1B/ref=sr_1_4?qid=1647183854&rnid=16225007011&s=computers-intl-ship&sr=1-4',
        shareLink: 'https://twitter.com/intent/tweet?original_referer=https%253A%252F%252Fwww.amazon.com%252Fgp%252Fproduct%252FB07MFZXR1B%252Fref%253Dcm_sw_r_tw_dp_F6P2J0PCVRQAWZXSE5ZN&text=SAMSUNG%20970%20EVO%20Plus%20SSD%202TB%20-%20M.2%20NVMe%20Interface%20Internal%20Solid%20State%20Drive%20...&related=amazondeals%2Camazonmp3&url=https%3A%2F%2Fwww.amazon.com%2Fdp%2FB07MFZXR1B%2Fref%3Dcm_sw_r_tw_dp_F6P2J0PCVRQAWZXSE5ZN&via=amazon',
        likes: 321,
        isShown: true

      },
      {
        img: 'assets/images/categories/computercomponents/Seagate.jpg',
        name: 'Seagate Portable 2TB',
        description: 'Easily store and access 2TB to content on the go with the Seagate Portable Drive, a USB external hard drive',
        rating: '4.7',
        category: 'Computer Compnonets',
        link: 'https://www.amazon.com/Seagate-Portable-External-Hard-Drive/dp/B07CRG94G3/ref=sr_1_3?qid=1647183854&rnid=16225007011&s=computers-intl-ship&sr=1-3',
        shareLink: 'https://twitter.com/intent/tweet?original_referer=https%253A%252F%252Fwww.amazon.com%252Fgp%252Fproduct%252FB07CRG94G3%252Fref%253Dcm_sw_r_tw_dp_MJ5S8G0H5RZR7SEGPE5W&text=Seagate%20Portable%202TB%20External%20Hard%20Drive%20Portable%20HDD%20%E2%80%93%20USB%203.0%20for%20PC%2C%20Mac%2C%20...&related=amazondeals%2Camazonmp3&url=https%3A%2F%2Fwww.amazon.com%2Fdp%2FB07CRG94G3%2Fref%3Dcm_sw_r_tw_dp_MJ5S8G0H5RZR7SEGPE5W&via=amazon',
        likes: 5431,
        isShown: true

      },
      {
        img: 'assets/images/categories/computercomponents/Switch.jpg',
        name: 'KVM Switch Selector,',
        description: '4 in 4 out USB Switch Box: 4 port USB sharing switch allows 4 buttons swapping between 4 computers to share 4 usb 3.0 peripherals devices without constantly swapping cables or setting up complicated network sharing software.',
        rating: '5',
        category: 'Computer Compnonets',
        link: 'https://www.amazon.com/Selector-Computer-Switches-Keyboard-Individual/dp/B09NKMBZN8/ref=sr_1_2_sspa?qid=1647183854&rnid=16225007011&s=computers-intl-ship&sr=1-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExNzlLOVUwQTZYNFRHJmVuY3J5cHRlZElkPUExMDEwNzczMkhEVkJPSzg4NllGRCZlbmNyeXB0ZWRBZElkPUEwMTUzOTQwWDNGQ0NOWFlVR1JQJndpZGdldE5hbWU9c3BfYXRmX2Jyb3dzZSZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=',
        shareLink: 'https://twitter.com/intent/tweet?original_referer=https%253A%252F%252Fwww.amazon.com%252Fgp%252Fproduct%252FB09NKMBZN8%252Fref%253Dcm_sw_r_tw_dp_7EW741DV3PYJQMM3VGXX%253Fie%253DUTF8%2526psc%253D1&text=KVM%20Switch%20Selector%2C%204%20Computer%20Sharing%204%20USB%20Devices%20USB%203.0%20Switches%20Box%20fo...&related=amazondeals%2Camazonmp3&url=https%3A%2F%2Fwww.amazon.com%2Fdp%2FB09NKMBZN8%2Fref%3Dcm_sw_r_tw_dp_7EW741DV3PYJQMM3VGXX%3F_encoding%3DUTF8%26psc%3D1&via=amazon',
        likes: 1123,
        isShown: true

      },
      {
        img: 'assets/images/categories/computercomponents/WD.jpg',
        name: 'WD 5TB Elements Portable External',
        description: 'USB 3.0 and USB 2.0 Compatibility',
        rating: '4.7',
        category: 'Computer Compnonets',
        link: 'https://www.amazon.com/Elements-Portable-External-Drive-WDBU6Y0050BBK-WESN/dp/B07X41PWTY/ref=sr_1_5?qid=1647183854&rnid=16225007011&s=computers-intl-ship&sr=1-5',
        shareLink: 'https://twitter.com/intent/tweet?original_referer=https%253A%252F%252Fwww.amazon.com%252Fgp%252Fproduct%252FB07X41PWTY%252Fref%253Dcm_sw_r_tw_dp_3Z6XXN91WMPNBR2K16NP&text=WD%205TB%20Elements%20Portable%20External%20Hard%20Drive%20HDD%2C%20USB%203.0%2C%20Compatible%20with%20PC...&related=amazondeals%2Camazonmp3&url=https%3A%2F%2Fwww.amazon.com%2Fdp%2FB07X41PWTY%2Fref%3Dcm_sw_r_tw_dp_3Z6XXN91WMPNBR2K16NP&via=amazon',
        likes: 1111,
        isShown: true

      },
      {
        img: 'assets/images/categories/laptops/1.jpg',
        name: 'Lenovo Thinkpad X1 Tablet (3rd Gen)',
        description: 'This pre-owned product has been professionally inspected, tested and cleaned by Amazon-qualified suppliers',
        rating: '4.5',
        category: 'Laptops and Tablets',
        link: 'https://www.amazon.com/Lenovo-Thinkpad-i5-8350u-3000x2000-Keyboard/dp/B082BKQMPW/ref=sr_1_1_sspa?qid=1647183857&rnid=16225007011&s=computers-intl-ship&sr=1-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFQUjFVMFdHUTg0NkQmZW5jcnlwdGVkSWQ9QTA2MzYzMDExUTJRWFdKUEMwSlVEJmVuY3J5cHRlZEFkSWQ9QTA1NTU0MjIzTEFGQlhINThNMThTJndpZGdldE5hbWU9c3BfYXRmX2Jyb3dzZSZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=',
        shareLink: 'https://twitter.com/intent/tweet?original_referer=https%253A%252F%252Fwww.amazon.com%252Fgp%252Fproduct%252FB082BKQMPW%252Fref%253Dcm_sw_r_tw_dp_AKZ8E6Z38QC5ACS4F8RE%253Fie%253DUTF8%2526psc%253D1&text=Lenovo%20Thinkpad%20X1%20Tablet%20(3rd%20Gen)%20Intel%20i5-8350u%20Quad%201.70GHz%20(Max%203.60GHz)...&related=amazondeals%2Camazonmp3&url=https%3A%2F%2Fwww.amazon.com%2Fdp%2FB082BKQMPW%2Fref%3Dcm_sw_r_tw_dp_AKZ8E6Z38QC5ACS4F8RE%3F_encoding%3DUTF8%26psc%3D1&via=amazon',
        likes: 2222,
        isShown: true

      },
      {
        img: 'assets/images/categories/laptops/2.jpg',
        name: 'Tablet with Keyboard 5G Dual',
        description: '【More practical accessories】 Extra accessories gift: Standard accessories package: 10.1-inch tablet, protective leather case, protective film (attached), charger, type-C charging cable, instruction manual Additional accessories: wireless mouse, Bluetooth keyboard, OTG adapter, With the accessories we give away, you can easily turn your tablet into a laptop for office work. Suitable for gifts.',
        rating: '4.6',
        category: 'Laptops and Tablets',
        link: 'https://www.amazon.com/Android-Keyboard-Quad-Core-Bluetooth-Certified/dp/B092ZPTCZG/ref=sr_1_2_sspa?qid=1647183857&rnid=16225007011&s=computers-intl-ship&sr=1-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFQUjFVMFdHUTg0NkQmZW5jcnlwdGVkSWQ9QTA2MzYzMDExUTJRWFdKUEMwSlVEJmVuY3J5cHRlZEFkSWQ9QTA0ODI4MTUzNjFaMTZRMlU5VjhZJndpZGdldE5hbWU9c3BfYXRmX2Jyb3dzZSZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=',
        shareLink: 'https://twitter.com/intent/tweet?original_referer=https%253A%252F%252Fwww.amazon.com%252Fgp%252Fproduct%252FB092ZPTCZG%252Fref%253Dcm_sw_r_tw_dp_Y9QYDZCJX7H25SSRX1XB%253Fie%253DUTF8%2526psc%253D1&text=Tablet%20with%20Keyboard%205G%20Dual%20Wi-Fi%20Android%2010.0%2C%20AOYODKG%20Tablet%2010%20inch%201920x...&related=amazondeals%2Camazonmp3&url=https%3A%2F%2Fwww.amazon.com%2Fdp%2FB092ZPTCZG%2Fref%3Dcm_sw_r_tw_dp_Y9QYDZCJX7H25SSRX1XB%3F_encoding%3DUTF8%26psc%3D1&via=amazon',
        likes: 3333,
        isShown: true

      },
      {
        img: 'assets/images/categories/laptops/3.jpg',
        name: 'Lenovo IdeaPad 3 11',
        description: "No setup required. Log in to your Chromebook laptop with your Google account and you're ready to go. Easy access to collaborative tools on G Suite and the full library of apps on Google Play",
        rating: '4.1',
        category: 'Laptops and Tablets',
        link: 'https://www.amazon.com/Lenovo-Chromebook-Processor-Graphics-82BA0003US/dp/B087YW8FQB/ref=sr_1_3?qid=1647183857&rnid=16225007011&s=computers-intl-ship&sr=1-3',
        shareLink: 'https://twitter.com/intent/tweet?original_referer=https%253A%252F%252Fwww.amazon.com%252Fgp%252Fproduct%252FB092ZPTCZG%252Fref%253Dcm_sw_r_tw_dp_Y9QYDZCJX7H25SSRX1XB%253Fie%253DUTF8%2526psc%253D1&text=Tablet%20with%20Keyboard%205G%20Dual%20Wi-Fi%20Android%2010.0%2C%20AOYODKG%20Tablet%2010%20inch%201920x...&related=amazondeals%2Camazonmp3&url=https%3A%2F%2Fwww.amazon.com%2Fdp%2FB092ZPTCZG%2Fref%3Dcm_sw_r_tw_dp_Y9QYDZCJX7H25SSRX1XB%3F_encoding%3DUTF8%26psc%3D1&via=amazon',
        likes: 4444,
        isShown: true

      },
      {
        img: 'assets/images/categories/laptops/4.jpg',
        name: 'Acer Aspire 5 A515-46-R3UB',
        description: 'Powerful Productivity: AMD Ryzen 3 3350U delivers desktop-class performance and amazing battery life in a slim notebook. With Precision Boost, get up to 3.5GHz for your high-demand applications',
        rating: '4.3',
        category: 'Laptops and Tablets',
        link: 'https://www.amazon.com/Acer-A515-46-R3UB-Display-Quad-Core-Processor/dp/B09HVC79PC/ref=sr_1_4?qid=1647183857&rnid=16225007011&s=computers-intl-ship&sr=1-4',
        shareLink: 'https://twitter.com/intent/tweet?original_referer=https%253A%252F%252Fwww.amazon.com%252Fgp%252Fproduct%252FB092ZPTCZG%252Fref%253Dcm_sw_r_tw_dp_Y9QYDZCJX7H25SSRX1XB%253Fie%253DUTF8%2526psc%253D1&text=Tablet%20with%20Keyboard%205G%20Dual%20Wi-Fi%20Android%2010.0%2C%20AOYODKG%20Tablet%2010%20inch%201920x...&related=amazondeals%2Camazonmp3&url=https%3A%2F%2Fwww.amazon.com%2Fdp%2FB092ZPTCZG%2Fref%3Dcm_sw_r_tw_dp_Y9QYDZCJX7H25SSRX1XB%3F_encoding%3DUTF8%26psc%3D1&via=amazon',
        likes: 5555,
        isShown: true

      },
      {
        img: 'assets/images/categories/laptops/5.jpg',
        name: 'Lenovo Flex 5 Laptop',
        description: 'Powered by an AMD Ryzen 5 5500U mobile processor with Radeon graphics, this portable notebook computer has 16GB DDR4 RAM and 256GB NVMe SSD Storage',
        rating: '4.8',
        category: 'Laptops and Tablets',
        link: 'https://www.amazon.com/Lenovo-Processor-Graphics-82HU00JWUS-Graphite/dp/B09BG96KFJ/ref=sr_1_5?qid=1647183857&rnid=16225007011&s=computers-intl-ship&sr=1-5&th=1',
        shareLink: 'https://twitter.com/intent/tweet?original_referer=https%253A%252F%252Fwww.amazon.com%252Fgp%252Fproduct%252FB092ZPTCZG%252Fref%253Dcm_sw_r_tw_dp_Y9QYDZCJX7H25SSRX1XB%253Fie%253DUTF8%2526psc%253D1&text=Tablet%20with%20Keyboard%205G%20Dual%20Wi-Fi%20Android%2010.0%2C%20AOYODKG%20Tablet%2010%20inch%201920x...&related=amazondeals%2Camazonmp3&url=https%3A%2F%2Fwww.amazon.com%2Fdp%2FB092ZPTCZG%2Fref%3Dcm_sw_r_tw_dp_Y9QYDZCJX7H25SSRX1XB%3F_encoding%3DUTF8%26psc%3D1&via=amazon',
        likes: 312321,
        isShown: true

      },
      {
        img: 'assets/images/categories/monitors/Sceptre1.jpg',
        name: 'Sceptre IPS 27" LED',
        description: 'Built-in Speakers: Perfectly suited to work & gaming settings, built-in speakers deliver robust & smooth audio while saving space on your desk.',
        rating: '3.2',
        category: 'Monitors',
        link: 'https://www.amazon.com/Sceptre-Monitor-Speakers-Edgeless-E278W-FPT/dp/B098YKNVWR/ref=sr_1_1_sspa?qid=1647183858&rnid=16225007011&s=computers-intl-ship&sr=1-1-spons&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyWjdIVjZBVDFQUDVNJmVuY3J5cHRlZElkPUEwMjQxNDY5MVlQNU1aWkNMT0RJQiZlbmNyeXB0ZWRBZElkPUEwMDc1MTQyM0FSSlZCQzRQMFdSUSZ3aWRnZXROYW1lPXNwX2F0Zl9icm93c2UmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl&th=1',
        shareLink: 'https://twitter.com/intent/tweet?original_referer=https%253A%252F%252Fwww.amazon.com%252Fgp%252Fproduct%252FB098YKNVWR%252Fref%253Dcm_sw_r_tw_dp_0TKB10JC580AJKMS1WM1%253Fie%253DUTF8%2526psc%253D1&text=Sceptre%20IPS%2027%22%20LED%20Gaming%20Monitor%201920%20x%201080p%2075Hz%2099%25%20sRGB%20320%20Lux%20HDMI%20x2...&related=amazondeals%2Camazonmp3&url=https%3A%2F%2Fwww.amazon.com%2Fdp%2FB098YKNVWR%2Fref%3Dcm_sw_r_tw_dp_0TKB10JC580AJKMS1WM1%3F_encoding%3DUTF8%26psc%3D1&via=amazon',
        likes: 55555,
        isShown: true
      },
      {
        img: 'assets/images/categories/monitors/Sceptre2.jpg',
        name: 'Sceptre 24" Professional ',
        description: '24" Ultra slim profile',
        rating: '4.5',
        category: 'Monitors',
        link: 'https://www.amazon.com/Sceptre-E248W-19203R-Monitor-Speakers-Metallic/dp/B0773ZY26F/ref=sr_1_2?qid=1647183858&rnid=16225007011&s=computers-intl-ship&sr=1-2&th=1',
        shareLink: 'https://twitter.com/intent/tweet?original_referer=https%253A%252F%252Fwww.amazon.com%252Fgp%252Fproduct%252FB0773ZY26F%252Fref%253Dcm_sw_r_tw_dp_A4V5F8AM6835QW4YG9D0&text=Sceptre%2024%22%20Professional%20Thin%2075Hz%201080p%20LED%20Monitor%202x%20HDMI%20VGA%20Build-in%20Spe...&related=amazondeals%2Camazonmp3&url=https%3A%2F%2Fwww.amazon.com%2Fdp%2FB0773ZY26F%2Fref%3Dcm_sw_r_tw_dp_A4V5F8AM6835QW4YG9D0&via=amazon',
        likes: 555,
        isShown: true
      },
      {
        img: 'assets/images/categories/monitors/HP.jpg',
        name: 'HP 24mh FHD Monitor',
        description: 'OUTSTANDING VISUALS – This FHD display with IPS technology gives you brilliant visuals and unforgettable quality; with a maximum resolution of 1920 x 1080 at 75 Hz, you’ll experience the image accuracy and wide-viewing spectrums of premium tablets and mobile devices',
        rating: '4.8',
        category: 'Monitors',
        link: 'https://www.amazon.com/HP-24mh-FHD-Monitor-Built/dp/B08BF4CZSV/ref=sr_1_3?qid=1647183858&rnid=16225007011&s=computers-intl-ship&sr=1-3',
        shareLink: 'https://twitter.com/intent/tweet?original_referer=https%253A%252F%252Fwww.amazon.com%252Fgp%252Fproduct%252FB08BF4CZSV%252Fref%253Dcm_sw_r_tw_dp_69WB95GC5PKCMH09YJ66&text=HP%2024mh%20FHD%20Monitor%20-%20Computer%20Monitor%20with%2023.8-Inch%20IPS%20Display%20(1080p)%20-%20B...&related=amazondeals%2Camazonmp3&url=https%3A%2F%2Fwww.amazon.com%2Fdp%2FB08BF4CZSV%2Fref%3Dcm_sw_r_tw_dp_69WB95GC5PKCMH09YJ66&via=amazon',
        likes: 555,
        isShown: true
      },
      {
        img: 'assets/images/categories/monitors/M27.jpg',
        name: 'HP M27ha FHD Monitor',
        description: 'OPTIMIZED SCREEN – Get high-quality pictures on a full HD display with an IPS panel and 27-inches of ultra-wide viewing angles (1920 x 1080 resolution)',
        rating: '4.1',
        category: 'Monitors',
        link: 'https://www.amazon.com/HP-M27ha-FHD-Monitor-Built/dp/B08DJB7VVY/ref=sr_1_4?qid=1647183858&rnid=16225007011&s=computers-intl-ship&sr=1-4',
        shareLink: 'https://twitter.com/intent/tweet?original_referer=https%253A%252F%252Fwww.amazon.com%252Fgp%252Fproduct%252FB08DJB7VVY%252Fref%253Dcm_sw_r_tw_dp_5J0MFSSW5HEQDH3H0X97&text=HP%20M27ha%20FHD%20Monitor%20-%20Full%20HD%20Monitor%20(1920%20x%201080p)%20-%20IPS%20Panel%20and%20Built-i...&related=amazondeals%2Camazonmp3&url=https%3A%2F%2Fwww.amazon.com%2Fdp%2FB08DJB7VVY%2Fref%3Dcm_sw_r_tw_dp_5J0MFSSW5HEQDH3H0X97&via=amazon',
        likes: 555,
        isShown: true
      },
      {
        img: 'assets/images/categories/monitors/Sceptre3.jpg',
        name: 'Sceptre 20" 1600x900',
        description: '20" Led HD+ monitor high resolution 1600 x 900',
        rating: '5',
        category: 'Monitors',
        link: 'https://www.amazon.com/Sceptre-E205W-16003R-Frameless-Speakers-Metallic/dp/B07743412C/ref=sr_1_5?qid=1647183858&rnid=16225007011&s=computers-intl-ship&sr=1-5&th=1',
        shareLink: 'https://twitter.com/intent/tweet?original_referer=https%253A%252F%252Fwww.amazon.com%252Fgp%252Fproduct%252FB07743412C%252Fref%253Dcm_sw_r_tw_dp_E5DC3MHKC2KMBHWBPH80&text=Sceptre%2020%22%201600x900%2075Hz%20Ultra%20Thin%20LED%20Monitor%202x%20HDMI%20VGA%20Built-in%20Speaker...&related=amazondeals%2Camazonmp3&url=https%3A%2F%2Fwww.amazon.com%2Fdp%2FB07743412C%2Fref%3Dcm_sw_r_tw_dp_E5DC3MHKC2KMBHWBPH80&via=amazon',
        likes: 555,
        isShown: true
      },
      {
        img: 'assets/images/categories/scanners/CZUR.jpg',
        name: 'CZUR Aura Mate Pro Document Scanner',
        description: 'Dual Cameras: Aura Mate Pro book scanner has a 16MP (4608*3456, 250 DPI) scanning camera and a 2MP video camera for both document/book scanning purpose and video conferencing/remote teaching purpose.',
        rating: '4.1',
        category: 'Scanners',
        link: 'https://www.amazon.com/CZUR-Document-Portable-Conferencing-Mobile-White/dp/B09RDZPYFZ/ref=sr_1_1_sspa?qid=1647280765&rnid=16225007011&s=computers-intl-ship&sr=1-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExR01CTEk0S0ZETlZTJmVuY3J5cHRlZElkPUEwNTA3OTk5VjBFMUNHTlVGODZKJmVuY3J5cHRlZEFkSWQ9QTA2MTU0NjEzMEgxQjJaMDA5WDdRJndpZGdldE5hbWU9c3BfYXRmX2Jyb3dzZSZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=',
        shareLink: 'https://twitter.com/intent/tweet?original_referer=https%253A%252F%252Fwww.amazon.com%252Fgp%252Fproduct%252FB09RDZPYFZ%252Fref%253Dcm_sw_r_tw_dp_Y9NT7MZAFX4DT0DRMRX5%253Fie%253DUTF8%2526psc%253D1&text=CZUR%20Aura%20Mate%20Pro%20Document%20Scanner%2C%2016MP%20Book%20Scanner%2C%20Portable%20Document%20Cam...&related=amazondeals%2Camazonmp3&url=https%3A%2F%2Fwww.amazon.com%2Fdp%2FB09RDZPYFZ%2Fref%3Dcm_sw_r_tw_dp_Y9NT7MZAFX4DT0DRMRX5%3F_encoding%3DUTF8%26psc%3D1&via=amazon',
        likes: 555,
        isShown: true
      },
      {
        img: 'assets/images/categories/scanners/CZURbook.jpg',
        name: 'CZUR Aura Mate Pro Book',
        description: 'Dual Cameras: Aura Mate Pro book scanner has a 16MP (4608*3456, 250 DPI) scanning camera and a 2MP video camera for both document/book scanning purpose and video conferencing/remote teaching purpose.',
        rating: '4.1',
        category: 'Scanners',
        link: 'https://www.amazon.com/CZUR-Document-Portable-Conferencing-Mobile-Black/dp/B09PY2ZH9R/ref=sr_1_2_sspa?qid=1647280765&rnid=16225007011&s=computers-intl-ship&sr=1-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExR01CTEk0S0ZETlZTJmVuY3J5cHRlZElkPUEwNTA3OTk5VjBFMUNHTlVGODZKJmVuY3J5cHRlZEFkSWQ9QTA3MzQ4ODAzN1ZDVEVZVVdEN1RUJndpZGdldE5hbWU9c3BfYXRmX2Jyb3dzZSZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=',
        shareLink: 'https://twitter.com/intent/tweet?original_referer=https%253A%252F%252Fwww.amazon.com%252Fgp%252Fproduct%252FB09PY2ZH9R%252Fref%253Dcm_sw_r_tw_dp_ETDXVMP5BP8GDREPX4RX%253Fie%253DUTF8%2526psc%253D1&text=CZUR%20Aura%20Mate%20Pro%20Book%2FDocument%20Scanner%2C%20Portable%20Document%20Camera%20with%2016MP%20...&related=amazondeals%2Camazonmp3&url=https%3A%2F%2Fwww.amazon.com%2Fdp%2FB09PY2ZH9R%2Fref%3Dcm_sw_r_tw_dp_ETDXVMP5BP8GDREPX4RX%3F_encoding%3DUTF8%26psc%3D1&via=amazon',
        likes: 555,
        isShown: true
      },
      {
        img: 'assets/images/categories/scanners/ET16.jpg',
        name: 'CZUR ET16-P Professional Book',
        description: 'Patented Flattening Curve Technology: ET16-P shoots 3 laser lines, which are harmless, to analyze the contours of an open book or bound document, calculating the page curve of the materials, finally output a flattened page.',
        rating: '4.1',
        category: 'Scanners',
        link: 'https://www.amazon.com/CZUR-Professional-Document-Curve-Flattening-Documents/dp/B07JCNQ8DK/ref=sr_1_3_sspa?qid=1647280765&rnid=16225007011&s=computers-intl-ship&sr=1-3-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExR01CTEk0S0ZETlZTJmVuY3J5cHRlZElkPUEwNTA3OTk5VjBFMUNHTlVGODZKJmVuY3J5cHRlZEFkSWQ9QTAzODIxNDgyM1dPNU9DUlZJTkVYJndpZGdldE5hbWU9c3BfYXRmX2Jyb3dzZSZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=',
        shareLink: 'https://twitter.com/intent/tweet?original_referer=https%253A%252F%252Fwww.amazon.com%252Fgp%252Fproduct%252FB07JCNQ8DK%252Fref%253Dcm_sw_r_tw_dp_YTS39FFP0CHD5TQ6XJQG%253Fie%253DUTF8%2526psc%253D1&text=CZUR%20ET16-P%20Professional%20Book%26Document%20Camera%20Scanner%20with%202nd%20Gen%20Laser%20Curv...&related=amazondeals%2Camazonmp3&url=https%3A%2F%2Fwww.amazon.com%2Fdp%2FB07JCNQ8DK%2Fref%3Dcm_sw_r_tw_dp_YTS39FFP0CHD5TQ6XJQG%3F_encoding%3DUTF8%26psc%3D1&via=amazon',
        likes: 555,
        isShown: true
      },
      {
        img: 'assets/images/categories/scanners/KODAK.jpg',
        name: 'KODAK SCANZA Digital Film & Slide Scanner',
        description: 'FILM TO JPEG IN SECONDS – Powerful 14/22MP KODAK Film Scanner Converts Old 35mm, 126, 110, Super 8 & 8mm Negatives & Slides to JPEG Digital Files - NOTE; THE SCANZA WILL NOT CONVERT FILMS OTHER THEN 35mm, 126, 110, Super 8 & 8mm Negatives',
        rating: '4.1',
        category: 'Scanners',
        link: 'https://www.amazon.com/KODAK-SCANZA-Digital-Slide-Scanner/dp/B00O2BU8PK/ref=sr_1_4?qid=1647280765&rnid=16225007011&s=computers-intl-ship&sr=1-4',
        shareLink: 'https://twitter.com/intent/tweet?original_referer=https%253A%252F%252Fwww.amazon.com%252Fgp%252Fproduct%252FB00O2BU8PK%252Fref%253Dcm_sw_r_tw_dp_PTVJX3W4B49HKDAEPXTS&text=KODAK%20SCANZA%20Digital%20Film%20%26%20Slide%20Scanner%20-%20Converts%2035mm%2C%20126%2C%20110%2C%20Super%208%20...&related=amazondeals%2Camazonmp3&url=https%3A%2F%2Fwww.amazon.com%2Fdp%2FB00O2BU8PK%2Fref%3Dcm_sw_r_tw_dp_PTVJX3W4B49HKDAEPXTS&via=amazon',
        likes: 555,
        isShown: true
      },
      {
        img: 'assets/images/categories/scanners/Fujitsu.jpg',
        name: 'Fujitsu ScanSnap iX1600',
        description: 'Optimized user experience: ScanSnap iX1600 features an intuitive 4.3inch touch screen for complete end to end scanning and data utilization',
        rating: '4.1',
        category: 'Scanners',
        link: 'https://www.amazon.com/Fujitsu-ScanSnap-Versatile-Enabled-Document/dp/B08PH5Q51P/ref=sr_1_5?qid=1647280765&rnid=16225007011&s=computers-intl-ship&sr=1-5&th=1',
        shareLink: 'https://twitter.com/intent/tweet?original_referer=https%253A%252F%252Fwww.amazon.com%252Fgp%252Fproduct%252FB08PH5Q51P%252Fref%253Dcm_sw_r_tw_dp_8XFHFXZZS9SP8HCP2VTD&text=Fujitsu%20ScanSnap%20iX1600%20Versatile%20Cloud%20Enabled%20Document%20Scanner%20for%20Mac%20or%20P...&related=amazondeals%2Camazonmp3&url=https%3A%2F%2Fwww.amazon.com%2Fdp%2FB08PH5Q51P%2Fref%3Dcm_sw_r_tw_dp_8XFHFXZZS9SP8HCP2VTD&via=amazon',
        likes: 555,
        isShown: true
      }
  ]
}