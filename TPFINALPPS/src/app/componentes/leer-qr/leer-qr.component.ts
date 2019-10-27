import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-leer-qr',
  templateUrl: './leer-qr.component.html',
  styleUrls: ['./leer-qr.component.scss']
})
export class LeerQRComponent implements OnInit {
  qrData = '';
  scannedCode = null;
  elementType: 'url' | 'canvas' | 'img' = 'canvas';

  constructor(private barcodeScanner: BarcodeScanner) {}

  ngOnInit() {}

  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData;
    });
  }
}
