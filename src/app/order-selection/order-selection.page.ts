import { Component, OnInit } from '@angular/core';
import { QrScannerService } from '../services/qr-scanner.service';
@Component({
  selector: 'app-order-selection',
  templateUrl: './order-selection.page.html',
  styleUrls: ['./order-selection.page.scss'],
})
export class OrderSelectionPage {

  constructor(private qrScannerService: QrScannerService) { }

  scanQrCode() {
    this.qrScannerService.scan();
  }

}
