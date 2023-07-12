import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-order-selection',
  templateUrl: './order-selection.page.html',
  styleUrls: ['./order-selection.page.scss'],
})
export class OrderSelectionPage implements OnInit {

  barcodedata: any;
  scannResult;
  constructor(private barcodeScanner: BarcodeScanner) {}

  ngOnInit() {
  }

//once the code is scanned, the data obtained looks like this, 
// cancelled:false
// format:"QR_CODE"
// text:"derp"  <==this is what we want


  scan() {
    this.barcodedata = null;
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.barcodedata = barcodeData;
      this.scannResult = barcodeData.text;
    }).catch(err => {
      console.log('Error', err);
    });
  }

}
