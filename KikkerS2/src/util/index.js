import { Dimensions } from 'react-native'
import moment from 'moment'

const width_screen = Dimensions.get('window').width

const height_screen = Dimensions.get('window').height

const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,:\s@"]+(\.[^<>()[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

const toptapTitles = [
  {
    id: 1,
    title: 'TODAY'
  },
  {
    id: 2,
    title: 'YESTERDAY'
  },
  {
    id: 3,
    title: 'LAST 7 DAYS'
  }
]

const titleOrder = [
  {
    id: 'createAt',
    title: 'Created At'
  },
  {
    id: 'customer',
    title: 'Customer'
  },
  {
    id: 'total',
    title: 'Total'
  },
  {
    id: 'website',
    title: 'Website'
  },
  {
    id: 'paymentStatus',
    title: 'Payment Status'
  },
  {
    id: 'orderStatus',
    title: 'Order Status'
  }
]

const dataProduct = {
  conversionRate: 30,
  viewProducts: 58600,
  addToCart: 7890,
  checkout: 650,
  purchase: 50
}

const dataProductTemplate = [
  {
    id: 'conversionRate',
    title: 'Conversion Rate',
    iconName: 'account-convert'
  },
  {
    id: 'viewProducts',
    title: 'View Products',
    iconName: 'eye-outline'
  },
  {
    id: 'addToCart',
    title: 'Add To Cart',
    iconName: 'cart-plus'
  },
  {
    id: 'checkout',
    title: 'Checkout',
    iconName: 'cart-outline'
  },
  {
    id: 'purchase',
    title: 'Purchase',
    iconName: 'currency-eur'
  }
]

const getDate = titleActive => {
  switch (titleActive) {
    case 'TODAY':
      return moment().format('MMM D, YYYY')
    case 'YESTERDAY':
      return moment().subtract(1, 'days').format('MMM D, YYYY')
    case 'LAST 7 DAYS':
      return moment().subtract(7, 'days').format('MMM D, YYYY')
  }
}

const dataHeaderDropdown = [
  {
    id: 1,
    title: 'ALL WEBSITE'
  },
  {
    id: 2,
    title: 'HAPPY LAND'
  },
  {
    id: 3,
    title: 'UNICORN FUN'
  },
  {
    id: 4,
    title: 'VIKING HOT'
  },
  {
    id: 5,
    title: 'BOOBEE'
  }
]

const dataConversionRate = [
  {
    id: 0,
    name: 'Viking Hoodie For Husband Gift Personal 2020',
    image:
      'https://cdn-images.farfetch-contents.com/16/00/04/33/16000433_31751705_1000.jpg',
    conversionRate: 60,
    viewProducts: 77600,
    addToCart: 9090,
    checkout: 250,
    purchase: 100
  },
  {
    id: 1,
    name: 'Viking Hoodie For Husband Gift Personal 2021',
    image:
      'https://cdn-images.farfetch-contents.com/16/00/04/33/16000433_31751705_1000.jpg',
    conversionRate: 80,
    viewProducts: 77600,
    addToCart: 9090,
    checkout: 250,
    purchase: 100
  },
  {
    id: 2,
    name: 'Viking Hoodie For Husband Gift Personal 2021',
    image:
      'https://cdn-images.farfetch-contents.com/16/00/04/33/16000433_31751705_1000.jpg',
    conversionRate: 40,
    viewProducts: 77600,
    addToCart: 9090,
    checkout: 250,
    purchase: 100
  }
]

const dataOrder = [
  {
    codeOrder: '200000000064',
    createAt: 'Mar 21, 2020 at 11:19 am',
    customer: 'Chris',
    total: '0.10',
    website: 'BooBee',
    paymentStatus: 'Uncapture',
    orderStatus: 'Proceesing'
  },
  {
    codeOrder: '200000000065',
    createAt: 'Mar 21, 2020 at 11:19 am',
    customer: 'Chris',
    total: '0.10',
    website: 'BooBee',
    paymentStatus: 'Uncapture',
    orderStatus: 'Proceesing'
  },
  {
    codeOrder: '200000000066',
    createAt: 'Mar 21, 2020 at 11:19 am',
    customer: 'Chris',
    total: '0.10',
    website: 'BooBee',
    paymentStatus: 'Uncapture',
    orderStatus: 'Proceesing'
  },
  {
    codeOrder: '200000000067',
    createAt: 'Mar 21, 2020 at 11:19 am',
    customer: 'Chris',
    total: '0.10',
    website: 'BooBee',
    paymentStatus: 'Uncapture',
    orderStatus: 'Proceesing'
  }
]

const dataSortByProduct = [
  {
    id: 1,
    title: 'CONVERSION RATE',
    value: 'Conversion Rate'
  },
  {
    id: 2,
    title: 'VIEW PRODUCTS',
    value: 'View Products'
  },
  {
    id: 3,
    title: 'ADD TO CART',
    value: 'Add To Cart'
  },
  {
    id: 4,
    title: 'PURCHASE',
    value: 'Purchase'
  }
]

const dataItemProduct = [
  {
    id: 1,
    imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIEHSdfrr575me5xjlxS5SWpwrtKO_-fOCcg&usqp=CAU',
    productName: 'Viking Hoodie For Husband Gift',
    personal: 'Personal 2020',
    status: 'Enable',
    website: 'BooBee'
  },
  {
    id: 2,
    imageUri:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI-RDTYyXjAHhbQ8b42_pHINv15ICJFTTnaw&usqp=CAU',
    productName: 'Viking Hoodie For Husband Gift',
    personal: 'Personal 2021',
    status: 'Enable',
    website: 'BooBee'
  },
  {
    id: 3,
    imageUri:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIEHSdfrr575me5xjlxS5SWpwrtKO_-fOCcg&usqp=CAU',
    productName: 'Viking Hoodie For Husband Gift',
    personal: 'Personal 2020',
    status: 'Enable',
    website: 'BooBee'
  }
]

export {
  width_screen,
  height_screen,
  validateEmail,
  toptapTitles,
  titleOrder,
  dataProduct,
  dataProductTemplate,
  getDate,
  dataHeaderDropdown,
  dataConversionRate,
  dataOrder,
  dataSortByProduct,
  dataItemProduct
}
