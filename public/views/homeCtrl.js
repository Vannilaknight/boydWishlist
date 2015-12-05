angular.module('app').controller('homeCtrl', function ($scope) {
    $scope.taySortType = 'price'; // set the default sort type
    $scope.taySortReverse = false;  // set the default sort order
    $scope.taySearchItem = '';     // set the default search/filter term

    $scope.ashSortType = 'price'; // set the default sort type
    $scope.ashSortReverse = false;  // set the default sort order
    $scope.ashSearchItem = '';     // set the default search/filter term

    $scope.tay = [
        {
            name: 'Korg RK-100 Keytar',
            link: 'http://www.amazon.com/Korg-RK-100S-BK-RK-100S-Black/dp/B00IHU9MA4',
            img: 'http://ecx.images-amazon.com/images/I/71xIazKCdJL._SL1500_.jpg',
            price: 699.99
        },
        {
            name: 'Novation Launch Control XL Ableton Live Controller',
            link: 'http://www.amazon.com/gp/product/B00LXBC92M',
            img: 'http://ecx.images-amazon.com/images/I/A1p12%2BKeJvL._SL1500_.jpg',
            price: 149.00
        },
        {
            name: 'Xbox One Elite Wireless Controller',
            link: 'http://www.amazon.com/Xbox-One-Elite-Wireless-Controller/dp/B00ZDNNRB8',
            img: 'http://ecx.images-amazon.com/images/I/31O7kGYGMBL.jpg',
            price: 149.99
        },
        {
            name: 'Stagg SA30ACE-BK Electro-Acoustic Auditorium Guitar - Matte Black',
            link: 'http://www.amazon.com/Stagg-SA30ACE-BK-Electro-Acoustic-Auditorium-Guitar/dp/B00KWRDUEO',
            img: 'http://ecx.images-amazon.com/images/I/51kWOq5%2BjmL._SL1024_.jpg',
            price: 168.00
        },
        {
            name: 'New Nintendo 3DS XL Black',
            link: 'http://www.amazon.com/New-Nintendo-3DS-XL-Black/dp/B00S1LRX3W',
            img: 'http://ecx.images-amazon.com/images/I/91LnMdyvcOL._SL1500_.jpg',
            price: 199.99
        },
        {
            name: 'Swagway X1 Hands-free Smart Board',
            link: 'http://www.amazon.com/Swagway-Balancing-Electric-Unicycle-Capacity/dp/B011E745V2',
            img: 'http://ecx.images-amazon.com/images/I/61ym4HTNQXL._SL1493_.jpg',
            price: 399.99
        },
        {
            name: 'TDLTEK Neon Glowing Strobing Electroluminescent Wire',
            link: 'http://www.amazon.com/Pack-Glowing-Strobing-Electroluminescent-Controllers/dp/B00ORGCOG6',
            img: 'http://ecx.images-amazon.com/images/I/71krYUTyD%2BL._SL1500_.jpg',
            price: 19.99
        },
        {
            name: 'CanaKit Raspberry Pi 2 (1GB)',
            link: 'http://www.amazon.com/CanaKit-Raspberry-Premium-Black-Supply/dp/B017HRT4D2',
            img: 'http://ecx.images-amazon.com/images/I/81O-%2BLa3uCL._SL1500_.jpg',
            price: 49.99
        },
        {
            name: 'Alesis DM6 USB Kit Five-Piece Electronic Drum Set',
            link: 'http://www.amazon.com/Alesis-DM6-Five-Piece-Electronic-Drum/dp/B002C4SM5W',
            img: 'http://ecx.images-amazon.com/images/I/61eNhfFjKGL._SL1024_.jpg',
            price: 349.95
        },
        {
            name: 'Elgato Game Capture HD60',
            link: 'http://www.amazon.com/Elgato-Capture-PlayStation-gameplay-1080p/dp/B00840353W',
            img: 'http://ecx.images-amazon.com/images/I/71cieen0h1L._SL1500_.jpg',
            price: 129.99
        },
        {
            name: 'Audio-Technica AT2020USB Cardioid Condenser USB Microphone',
            link: 'http://www.amazon.com/Audio-Technica-AT2020USB-Cardioid-Condenser-Microphone/dp/B001AS6OYC',
            img: 'http://ecx.images-amazon.com/images/I/61Lkq6BZ3bL._SL1500_.jpg',
            price: 129.00
        },
        {
            name: 'Microsoft LifeCam Studio 1080p HD Webcam',
            link: 'http://www.amazon.com/Microsoft-LifeCam-Studio-Webcam-Q2F-00013/dp/B0096KSBB0',
            img: 'http://ecx.images-amazon.com/images/I/61cEsr8iYiL._SL1000_.jpg',
            price: 46.99
        },
        {
            name: 'Halo 5: Gaurdians',
            link: 'http://www.gamestop.com/xbox-one/games/halo-5-guardians/119595',
            img: 'http://www.gamestop.com/common/images/lbox/108668b.jpg',
            price: 59.99
        }];

    $scope.ash = [
        {
            name: 'The Beasties by William Sleator',
            link: 'http://www.barnesandnoble.com/w/beasties-william-sleator/1103023880?ean=9780525455981',
            img: 'http://prodimage.images-bn.com/pimages/9780525455981_p0_v1_s192x300.gif',
            price: 1.99
        }];
});