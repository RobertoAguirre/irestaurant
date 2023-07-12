import { Injectable } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';

@Injectable({
  providedIn: 'root'
})
export class QrScannerService {

  constructor(private qrScanner: QRScanner) { }

  scan() {
    this.qrScanner.prepare().then((status: QRScannerStatus) => {
      if (status.authorized) {
        this.qrScanner.show();
        let scanSub = this.qrScanner.scan().subscribe((text: string) => {
          console.log('Scanned something', text);
          scanSub.unsubscribe();
          this.qrScanner.hide();
        });

      } else if (status.denied) {
        console.log('Camera permission was permanently denied');
      } else {
        console.log('Permission denied for this runtime.');
      }
    })
    .catch((e: any) => console.log('Error is', e));
  }
}
